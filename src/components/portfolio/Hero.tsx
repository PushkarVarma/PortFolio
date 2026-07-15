import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { CONTACT } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 opacity-30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Open to Software Engineering roles · 2026 grad
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Busani Pushkar <span className="text-gradient">Varma</span>
          </h1>

          <p className="mt-5 text-base font-medium text-muted-foreground sm:text-lg">
            Computer Science Undergraduate · MERN Stack Developer · Problem Solver
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build <span className="font-semibold text-foreground">scalable full-stack web applications</span>{" "}
            with the MERN stack, design clean REST APIs, and sharpen my craft daily through
            <span className="font-semibold text-foreground"> Data Structures &amp; Algorithms</span>.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={CONTACT.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-foreground/80 transition hover:text-foreground"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {[
              { href: CONTACT.github, Icon: Github, label: "GitHub" },
              { href: CONTACT.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${CONTACT.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: "9.16", v: "CGPA / 10" },
            { k: "400+", v: "DSA problems solved" },
            { k: "10+", v: "Certifications" },
            { k: "3+", v: "Shipped projects" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-xl border border-border bg-card/60 p-4 text-center backdrop-blur"
            >
              <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
