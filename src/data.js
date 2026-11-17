// Datos que no cambian según el idioma.

export const CONTACT = {
  email: "knuppelholzadrian@gmail.com",
  phone: "+54 9 376 471-6434",
  whatsapp: "https://wa.me/5493764716434",
  linkedin: "https://www.linkedin.com/in/adrian-knuppelholz",
  linkedinLabel: "linkedin.com/in/adrian-knuppelholz",
  github: "https://github.com/adrianknu",
  githubLabel: "github.com/adrianknu",
  previousPortfolio: "https://adrianknu.github.io/portfolio-adrian/",
};

export const SKILLS = [
  { id: "languages", advanced: ["Java", "JavaScript", "C"], intermediate: ["Python", "PHP"] },
  { id: "frontend", items: ["HTML5", "CSS3", "React", "Vite", "Tailwind CSS", "Angular"] },
  { id: "backend", items: ["Spring Boot", "Hibernate", "CodeIgniter", "MVC"] },
  { id: "databases", items: ["PostgreSQL", "MySQL", "SQL"] },
  { id: "tools", items: ["Git", "GitHub", "Docker", "Postman", "Selenium", "UML"] },
  { id: "methods", items: ["Scrum", "Agile"] },
];

// Ordenadas de la más reciente a la más antigua. m: mes en base 0.
export const CERTS = [
  { id: "claude", y: 2026, m: 6, url: "https://app.lab10.ai/certificate/LAB10-2026-9TYT27" },
  { id: "privacy", y: 2026, m: 6, url: "https://www.coursera.org/account/accomplishments/verify/IE5TQT3JTS7O" },
  { id: "ai", y: 2025, m: 7, url: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/688c0e99ee2afc52c1acd508-1755891375001.pdf" },
  { id: "java", y: 2025, m: 3, url: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/66c4eb8cdc7bbffc897ab266-1745273206205.pdf" },
  { id: "scrum", y: 2024, m: 2, url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1020480" },
];

const REPO_NOTES = "https://github.com/AdrianKnu/full-stack-note-taking-application";
const REPO_WORKS = "https://github.com/AdrianKnu/TPI_TEC_DE_BDD";

// Orden de la grilla (3 columnas en escritorio):
// fila 1: tesis (2) + notas (1) | fila 2: obras + académicos + portfolio | fila 3: GitHub (3)
export const PROJECTS = [
  {
    id: "thesis",
    span: "md:col-span-2",
    wide: true,
    minH: "min-h-[340px]",
    box: "mt-6 h-44 sm:h-52 md:mt-0 md:h-56 md:w-[46%] md:shrink-0 md:self-center",
    motif: "thesis",
    tech: [],
  },
  {
    id: "notes",
    span: "",
    minH: "min-h-[340px]",
    box: "mt-6 h-32",
    motif: "notes",
    tech: ["NestJS", "TypeORM", "SQLite", "React", "Vite", "Axios"],
    link: REPO_NOTES,
  },
  {
    id: "works",
    span: "",
    minH: "min-h-[340px]",
    box: "mt-6 h-32",
    motif: "db",
    tech: ["PostgreSQL", "PL/pgSQL", "Triggers", "SQL"],
    link: REPO_WORKS,
  },
  {
    id: "academic",
    span: "",
    minH: "min-h-[340px]",
    box: "mt-6 h-32",
    motif: "mvc",
    tech: ["CodeIgniter", "MVC", "PostgreSQL", "MySQL", "Git", "Scrum"],
  },
  {
    id: "portfolio",
    span: "",
    minH: "min-h-[340px]",
    box: "mt-6 h-32",
    motif: "browser",
    tech: ["React", "Vite", "Tailwind CSS", "Motion"],
    link: CONTACT.previousPortfolio,
  },
  {
    id: "github",
    span: "md:col-span-3",
    wide: true,
    centered: true,
    minH: "min-h-[190px]",
    box: "mt-6 h-16 w-40 shrink-0 md:mt-0 md:mr-10",
    motif: "code",
    tech: [],
    link: CONTACT.github,
  },
];

export const EXPERIENCE_IDS = ["aed", "pe", "edu"];