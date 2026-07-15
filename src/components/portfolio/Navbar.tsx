import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { NAV } from "./data";

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const t = (localStorage.getItem("theme") as "light" | "dark" | null) ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };
  return { theme, toggle };
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
}

export function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
            <Code2 className="h-4 w-4" />
          </span>
          <span>Pushkar<span className="text-brand">.</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === n.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground transition hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-md bg-brand px-3.5 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90 md:inline-flex"
          >
            Let's talk
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col p-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  active === n.id ? "bg-accent text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand"
      />
    </header>
  );
}
