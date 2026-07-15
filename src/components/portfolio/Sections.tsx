import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Braces,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { useState } from "react";
import { Reveal, Section } from "./Section";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  CONTACT,
  EDUCATION,
  PROJECTS,
  SKILLS,
} from "./data";

/* ---------- About ---------- */
export function About() {
  const points = [
    { Icon: Code2, title: "MERN Stack Developer", body: "React, Node, Express, MongoDB — end-to-end feature delivery." },
    { Icon: Server, title: "Backend Engineering", body: "Clean REST APIs, auth, RBAC, and scalable data flows." },
    { Icon: Braces, title: "DSA & Problem Solving", body: "400+ problems on LeetCode; strong algorithmic thinking." },
    { Icon: Rocket, title: "Product Mindset", body: "Focus on performance, clean architecture, and real impact." },
  ];
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer focused on building things people actually use."
      intro="Computer Science Engineering student with a strong academic record (CGPA 9.16) and expertise in MERN stack development, backend systems, REST APIs, and Data Structures & Algorithms. Passionate about building scalable applications and solving real-world problems — with hands-on experience shipping AI-powered and full-stack products."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {points.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
              <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */

const CATEGORY_LABEL: Record<string, string> = {
  Tools: "Tools & DevOps",
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A modern full-stack toolkit."
      intro="Comfortable across the stack — from React interfaces to Node/Express services, databases, and the CS fundamentals that keep systems solid."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((cat, ci) => {
          const label = CATEGORY_LABEL[cat.category] ?? cat.category;
          return (
            <Reveal key={cat.category} delay={ci * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {label}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <motion.span
                      key={s.name}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="rounded-md bg-muted px-3 py-1.5 font-mono text-xs font-medium text-foreground/80 transition group-hover:bg-brand-soft group-hover:text-brand"
                    >
                      {s.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}


/* ---------- Projects ---------- */
export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      intro="A few full-stack projects highlighting AI integrations, secure auth flows, and clean UI engineering."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                  0{i + 1}
                </span>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View on GitHub"
                  className="text-muted-foreground transition group-hover:text-brand"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Achievements ---------- */
const CERT_ICON: Record<string, LucideIcon> = {
  NPTEL: BookOpen,
  "Cisco Networking Academy": Server,
  "AWS Training": Cloud,
  "Infosys Springboard": Cloud,
  GeeksforGeeks: Code2,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements & Certifications"
      title="Consistent execution, backed by proof."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a} delay={i * 0.05}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand text-brand-foreground">
                <Award className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Certifications</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = CERT_ICON[c.org] ?? Award;
            return (
              <Reveal key={c.name} delay={i * 0.03}>
                <div className="group flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-brand/40">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.org}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{c.name}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Education ---------- */
export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic journey."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />
        <div className="space-y-6">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <div className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 top-2 grid h-9 w-9 place-items-center rounded-full border-4 border-background bg-brand text-brand-foreground sm:h-12 sm:w-12">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {e.school}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">
                    {e.score}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setState("sent");
      form.reset();
    }, 600);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great."
      intro="I'm actively looking for software engineering opportunities. Reach out for roles, collaborations, or a quick chat."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-3">
          {[
            { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { Icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
            { Icon: Github, label: "GitHub", value: "github.com/PushkarVarma", href: CONTACT.github },
            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/busanipushkarvarma", href: CONTACT.linkedin },
            { Icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
          ].map(({ Icon, label, value, href }) => {
            const inner = (
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-brand/40">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Recruiter" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Frontend Engineer opportunity" />
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about the role, team, or project…"
              className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
          <button
            type="submit"
            disabled={state === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90 disabled:opacity-70 sm:w-auto"
          >
            {state === "sending" ? "Opening mail…" : state === "sent" ? "Message ready ✓" : "Send message"}
            {state === "idle" && <Mail className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Busani Pushkar Varma. 
        </p>
        <div className="flex items-center gap-2">
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
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-brand/40 hover:text-brand"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
