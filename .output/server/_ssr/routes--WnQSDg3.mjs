import { a as __toESM } from "../_runtime.mjs";
import { n as useScroll, r as motion, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Cloud, a as Rocket, b as Award, c as Menu, d as Linkedin, f as GraduationCap, g as CodeXml, h as Download, i as Server, l as MapPin, m as ExternalLink, n as Sun, o as Phone, p as Github, r as Sparkles, s as Moon, t as X, u as Mail, v as Braces, x as ArrowRight, y as BookOpen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes--WnQSDg3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "achievements",
		label: "Achievements"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var SKILLS = [
	{
		category: "Programming",
		items: [{
			name: "Java",
			level: 90
		}]
	},
	{
		category: "Frontend",
		items: [
			{
				name: "HTML5",
				level: 95
			},
			{
				name: "CSS3",
				level: 92
			},
			{
				name: "JavaScript",
				level: 90
			},
			{
				name: "React.js",
				level: 88
			},
			{
				name: "Bootstrap",
				level: 85
			}
		]
	},
	{
		category: "Backend",
		items: [
			{
				name: "Node.js",
				level: 88
			},
			{
				name: "Express.js",
				level: 86
			},
			{
				name: "REST APIs",
				level: 90
			},
			{
				name: "JWT",
				level: 85
			}
		]
	},
	{
		category: "Database",
		items: [{
			name: "MongoDB",
			level: 85
		}, {
			name: "MySQL",
			level: 82
		}]
	},
	{
		category: "Tools",
		items: [
			{
				name: "Git",
				level: 88
			},
			{
				name: "GitHub",
				level: 90
			},
			{
				name: "VS Code",
				level: 95
			}
		]
	},
	{
		category: "Core CS",
		items: [
			{
				name: "Data Structures & Algorithms",
				level: 92
			},
			{
				name: "OOP",
				level: 88
			},
			{
				name: "DBMS",
				level: 85
			},
			{
				name: "Operating Systems",
				level: 82
			},
			{
				name: "Computer Networks",
				level: 80
			},
			{
				name: "SQL",
				level: 85
			}
		]
	}
];
var PROJECTS = [
	{
		title: "AI-Based Internship Recommendation System",
		description: "Full-stack platform that matches candidates to internships using NLP embeddings and semantic similarity.",
		tech: [
			"MERN Stack",
			"NLP",
			"Sentence-BERT",
			"Cosine Similarity",
			"JWT",
			"RBAC"
		],
		highlights: [
			"AI-powered resume-to-job matching using Sentence-BERT embeddings",
			"Personalized recommendations ranked by cosine similarity",
			"Secure JWT authentication with role-based access control"
		]
	},
	{
		title: "HealthCare API",
		description: "Responsive healthcare dashboard with role-based access and secure user-specific data flows.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript"
		],
		highlights: [
			"Responsive dashboard optimised for clinical workflows",
			"Role-based access control for staff and patients",
			"User-specific secure access to protected resources"
		]
	},
	{
		title: "Weather Forecast Application",
		description: "Real-time weather app with location-based search, clean UI, and robust error handling.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript",
			"Weather API"
		],
		highlights: [
			"Real-time weather updates from a public Weather API",
			"Location-based search with instant results",
			"Graceful error handling and fully responsive UI"
		]
	}
];
var ACHIEVEMENTS = [
	"CGPA: 9.16 / 10.0",
	"Solved 400+ DSA problems on LeetCode",
	"Strong MERN Stack development experience",
	"Built AI-powered and full-stack production projects"
];
var CERTIFICATIONS = [
	{
		org: "NPTEL",
		name: "Data Structures and Algorithms using Python"
	},
	{
		org: "NPTEL",
		name: "Soft Skills"
	},
	{
		org: "Cisco Networking Academy",
		name: "Programming Essentials in C++"
	},
	{
		org: "AWS Training",
		name: "Fundamentals of Machine Learning and AI"
	},
	{
		org: "Infosys Springboard",
		name: "Introduction to Cloud Computing"
	},
	{
		org: "Infosys Springboard",
		name: "Python Foundation"
	},
	{
		org: "GeeksforGeeks",
		name: "JavaScript"
	},
	{
		org: "GeeksforGeeks",
		name: "React.js"
	}
];
var EDUCATION = [
	{
		school: "B.V. Raju Institute of Technology",
		degree: "B.Tech, Computer Science Engineering",
		period: "Aug 2023 – Present",
		score: "CGPA: 9.16 / 10.0"
	},
	{
		school: "Telangana State Residential Junior College",
		degree: "Intermediate Education (MPC)",
		period: "2021 – 2023",
		score: "Percentage: 98.3%"
	},
	{
		school: "Scholars High School",
		degree: "Secondary Education (SSC)",
		period: "2021",
		score: "Percentage: 100.00%"
	}
];
var CONTACT = {
	email: "busanipushkarvarma@gmail.com",
	phone: "+91 73964 73987",
	github: "https://github.com/PushkarVarma",
	linkedin: "https://www.linkedin.com/in/busanipushkarvarma/",
	resume: "/Busani_Pushkar_Varma_Resume.pdf"
};
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const t = localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(t);
		document.documentElement.classList.toggle("dark", t === "dark");
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		document.documentElement.classList.toggle("dark", next === "dark");
		localStorage.setItem("theme", next);
	};
	return {
		theme,
		toggle
	};
}
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, {
			rootMargin: "-40% 0px -55% 0px",
			threshold: 0
		});
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);
	return active;
}
function Navbar() {
	const { theme, toggle } = useTheme();
	const active = useActiveSection();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24
	});
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex items-center gap-2 font-display text-lg font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pushkar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${n.id}`,
							className: `relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
							children: [n.label, active === n.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-active",
								className: "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand",
								transition: {
									type: "spring",
									stiffness: 380,
									damping: 30
								}
							})]
						}, n.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Toggle theme",
								onClick: toggle,
								className: "grid h-9 w-9 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground transition hover:text-foreground",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hidden rounded-md bg-brand px-3.5 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition hover:opacity-90 md:inline-flex",
								children: "Let's talk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Menu",
								onClick: () => setOpen((v) => !v),
								className: "grid h-9 w-9 place-items-center rounded-md border border-border md:hidden",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							})
						]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-background md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl flex-col p-3",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						onClick: () => setOpen(false),
						className: `rounded-md px-3 py-2 text-sm font-medium ${active === n.id ? "bg-accent text-foreground" : "text-muted-foreground"}`,
						children: n.label
					}, n.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { scaleX: progress },
				className: "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 opacity-30 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-brand" }), "Open to Software Engineering roles · 2026 grad"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl",
							children: ["Busani Pushkar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Varma"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base font-medium text-muted-foreground sm:text-lg",
							children: "Computer Science Undergraduate · MERN Stack Developer · Problem Solver"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: [
								"I build ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "scalable full-stack web applications"
								}),
								" ",
								"with the MERN stack, design clean REST APIs, and sharpen my craft daily through",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: " Data Structures & Algorithms"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									className: "group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90",
									children: ["View Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACT.resume,
									download: true,
									className: "inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Resume"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-foreground/80 transition hover:text-foreground",
									children: "Contact Me"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center justify-center gap-2",
							children: [
								{
									href: CONTACT.github,
									Icon: Github,
									label: "GitHub"
								},
								{
									href: CONTACT.linkedin,
									Icon: Linkedin,
									label: "LinkedIn"
								},
								{
									href: `mailto:${CONTACT.email}`,
									Icon: Mail,
									label: "Email"
								}
							].map(({ href, Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: href.startsWith("http") ? "_blank" : void 0,
								rel: "noreferrer",
								"aria-label": label,
								className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .3
					},
					className: "mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						{
							k: "9.16",
							v: "CGPA / 10"
						},
						{
							k: "400+",
							v: "DSA problems solved"
						},
						{
							k: "10+",
							v: "Certifications"
						},
						{
							k: "3+",
							v: "Shipped projects"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card/60 p-4 text-center backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-bold text-foreground sm:text-3xl",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs font-medium text-muted-foreground",
							children: s.v
						})]
					}, s.v))
				})]
			})
		]
	});
}
function Section({ id, eyebrow, title, intro, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-20 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .5,
					ease: "easeOut"
				},
				className: "mb-12 max-w-2xl",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-brand-soft/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-brand" }), eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
						children: title
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: intro
					})
				]
			}), children]
		})
	});
}
function Reveal({ children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .5,
			ease: "easeOut",
			delay
		},
		children
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		title: "Engineer focused on building things people actually use.",
		intro: "Computer Science Engineering student with a strong academic record (CGPA 9.16) and expertise in MERN stack development, backend systems, REST APIs, and Data Structures & Algorithms. Passionate about building scalable applications and solving real-world problems — with hands-on experience shipping AI-powered and full-stack products.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [
				{
					Icon: CodeXml,
					title: "MERN Stack Developer",
					body: "React, Node, Express, MongoDB — end-to-end feature delivery."
				},
				{
					Icon: Server,
					title: "Backend Engineering",
					body: "Clean REST APIs, auth, RBAC, and scalable data flows."
				},
				{
					Icon: Braces,
					title: "DSA & Problem Solving",
					body: "400+ problems on LeetCode; strong algorithmic thinking."
				},
				{
					Icon: Rocket,
					title: "Product Mindset",
					body: "Focus on performance, clean architecture, and real impact."
				}
			].map(({ Icon, title, body }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-foreground",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
							children: body
						})
					]
				})
			}, title))
		})
	});
}
var CATEGORY_LABEL = { Tools: "Tools & DevOps" };
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: "A modern full-stack toolkit.",
		intro: "Comfortable across the stack — from React interfaces to Node/Express services, databases, and the CS fundamentals that keep systems solid.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: SKILLS.map((cat, ci) => {
				const label = CATEGORY_LABEL[cat.category] ?? cat.category;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: ci * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold text-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: cat.items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 6
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									margin: "-40px"
								},
								transition: {
									duration: .3,
									ease: "easeOut"
								},
								className: "rounded-md bg-muted px-3 py-1.5 font-mono text-xs font-medium text-foreground/80 transition group-hover:bg-brand-soft group-hover:text-brand",
								children: s.name
							}, s.name))
						})]
					})
				}, cat.category);
			})
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		eyebrow: "Projects",
		title: "Selected work.",
		intro: "A few full-stack projects highlighting AI integrations, secure auth flows, and clean UI engineering.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 transition group-hover:opacity-100" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CONTACT.github,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "View on GitHub",
								className: "text-muted-foreground transition group-hover:text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-foreground",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: p.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1.5",
							children: p.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })]
							}, h))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border",
							children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
								children: t
							}, t))
						})
					]
				})
			}, p.title))
		})
	});
}
var CERT_ICON = {
	NPTEL: BookOpen,
	"Cisco Networking Academy": Server,
	"AWS Training": Cloud,
	"Infosys Springboard": Cloud,
	GeeksforGeeks: CodeXml
};
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "achievements",
		eyebrow: "Achievements & Certifications",
		title: "Consistent execution, backed by proof.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand text-brand-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-foreground",
						children: a
					})]
				})
			}, a))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-4 font-display text-lg font-semibold text-foreground",
				children: "Certifications"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: CERTIFICATIONS.map((c, i) => {
					const Icon = CERT_ICON[c.org] ?? Award;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .03,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-brand/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: c.org
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm font-medium text-foreground",
									children: c.name
								})]
							})]
						})
					}, c.name);
				})
			})]
		})]
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		eyebrow: "Education",
		title: "Academic journey.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: EDUCATION.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pl-12 sm:pl-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 top-2 grid h-9 w-9 place-items-center rounded-full border-4 border-background bg-brand text-brand-foreground sm:h-12 sm:w-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 sm:h-5 sm:w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold text-foreground",
										children: e.school
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: e.degree
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
									children: e.period
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 inline-flex items-center gap-2 rounded-md bg-brand-soft px-3 py-1 text-sm font-semibold text-brand",
								children: e.score
							})]
						})]
					})
				}, e.school))
			})]
		})
	});
}
function Contact() {
	const [state, setState] = (0, import_react.useState)("idle");
	const onSubmit = (e) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: "Let's build something great.",
		intro: "I'm actively looking for software engineering opportunities. Reach out for roles, collaborations, or a quick chat.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2 space-y-3",
				children: [
					{
						Icon: Mail,
						label: "Email",
						value: CONTACT.email,
						href: `mailto:${CONTACT.email}`
					},
					{
						Icon: Phone,
						label: "Phone",
						value: CONTACT.phone,
						href: `tel:${CONTACT.phone.replace(/\s/g, "")}`
					},
					{
						Icon: Github,
						label: "GitHub",
						value: "github.com/PushkarVarma",
						href: CONTACT.github
					},
					{
						Icon: Linkedin,
						label: "LinkedIn",
						value: "linkedin.com/in/busanipushkarvarma",
						href: CONTACT.linkedin
					},
					{
						Icon: MapPin,
						label: "Location",
						value: "Hyderabad, Telangana, India"
					}
				].map(({ Icon, label, value, href }) => {
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-brand/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								children: value
							})]
						})]
					});
					return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: href.startsWith("http") ? "_blank" : void 0,
						rel: "noreferrer",
						children: inner
					}, label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: inner }, label);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "lg:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							placeholder: "Jane Recruiter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							placeholder: "jane@company.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Subject",
						name: "subject",
						placeholder: "Frontend Engineer opportunity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-1.5 block text-xs font-semibold text-foreground",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						name: "message",
						rows: 5,
						placeholder: "Tell me about the role, team, or project…",
						className: "w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: state === "sending",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition hover:opacity-90 disabled:opacity-70 sm:w-auto",
						children: [state === "sending" ? "Opening mail…" : state === "sent" ? "Message ready ✓" : "Send message", state === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })]
					})
				]
			})]
		})
	});
}
function Field({ label, name, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs font-semibold text-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		required: true,
		name,
		type,
		placeholder,
		className: "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Busani Pushkar Varma."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: [
					{
						href: CONTACT.github,
						Icon: Github,
						label: "GitHub"
					},
					{
						href: CONTACT.linkedin,
						Icon: Linkedin,
						label: "LinkedIn"
					},
					{
						href: `mailto:${CONTACT.email}`,
						Icon: Mail,
						label: "Email"
					}
				].map(({ href, Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: href.startsWith("http") ? "_blank" : void 0,
					rel: "noreferrer",
					"aria-label": label,
					className: "grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-brand/40 hover:text-brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
				}, label))
			})]
		})
	});
}
function Loader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] grid place-items-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-10 w-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border-2 border-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm font-semibold tracking-wide text-muted-foreground",
				children: "Loading portfolio…"
			})]
		})
	});
}
function Index() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoading(false), 500);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
