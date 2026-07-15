export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { category: "Programming", items: [{ name: "Java", level: 90 }] },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "REST APIs", level: 90 },
      { name: "JWT", level: 85 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    category: "Core CS",
    items: [
      { name: "Data Structures & Algorithms", level: 92 },
      { name: "OOP", level: 88 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 82 },
      {name : "Computer Networks", level: 80},
      {name: "SQL", level: 85},
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI-Based Internship Recommendation System",
    description:
      "Full-stack platform that matches candidates to internships using NLP embeddings and semantic similarity.",
    tech: ["MERN Stack", "NLP", "Sentence-BERT", "Cosine Similarity", "JWT", "RBAC"],
    highlights: [
      "AI-powered resume-to-job matching using Sentence-BERT embeddings",
      "Personalized recommendations ranked by cosine similarity",
      "Secure JWT authentication with role-based access control",
    ],
  },
  {
    title: "HealthCare API",
    description:
      "Responsive healthcare dashboard with role-based access and secure user-specific data flows.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Responsive dashboard optimised for clinical workflows",
      "Role-based access control for staff and patients",
      "User-specific secure access to protected resources",
    ],
  },
  {
    title: "Weather Forecast Application",
    description:
      "Real-time weather app with location-based search, clean UI, and robust error handling.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    highlights: [
      "Real-time weather updates from a public Weather API",
      "Location-based search with instant results",
      "Graceful error handling and fully responsive UI",
    ],
  },
];

export const ACHIEVEMENTS = [
  "CGPA: 9.16 / 10.0",
  "Solved 400+ DSA problems on LeetCode",
  "Strong MERN Stack development experience",
  "Built AI-powered and full-stack production projects",
];

export const CERTIFICATIONS = [
  { org: "NPTEL", name: "Data Structures and Algorithms using Python" },
  { org: "NPTEL", name: "Soft Skills" },
  { org: "Cisco Networking Academy", name: "Programming Essentials in C++" },
  { org: "AWS Training", name: "Fundamentals of Machine Learning and AI" },
  { org: "Infosys Springboard", name: "Introduction to Cloud Computing" },
  { org: "Infosys Springboard", name: "Python Foundation" },
  { org: "GeeksforGeeks", name: "JavaScript" },
  { org: "GeeksforGeeks", name: "React.js" },
];

export const EDUCATION = [
  {
    school: "B.V. Raju Institute of Technology",
    degree: "B.Tech, Computer Science Engineering",
    period: "Aug 2023 – Present",
    score: "CGPA: 9.16 / 10.0",
  },
  {
    school: "Telangana State Residential Junior College",
    degree: "Intermediate Education (MPC)",
    period: "2021 – 2023",
    score: "Percentage: 98.3%",
  },
  {
    school: "Scholars High School",
    degree: "Secondary Education (SSC)",
    period: "2021",
    score: "Percentage: 100.00%",
  },
];

export const CONTACT = {
  email: "busanipushkarvarma@gmail.com",
  phone: "+91 73964 73987",
  github: "https://github.com/PushkarVarma",
  linkedin: "https://www.linkedin.com/in/busanipushkarvarma/",
  resume: "/Busani_Pushkar_Varma_Resume.pdf",
};
