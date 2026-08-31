import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import SkillCard from "./SkillCard";
import BackgroundLights from "./BackgroundLights";

function GlassCard({ children, className = "", colorHex = "#ffffff", as: Component = "div", ...props }) {
  return (
    <Component
      className={`relative backdrop-blur-xl border rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden ${className}`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        '--hover-bg': `${colorHex}10`,
        '--hover-border': `${colorHex}40`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
        e.currentTarget.style.borderColor = 'var(--hover-border)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default function App() {
  const [skillCategory, setSkillCategory] = useState("todas");

  const skillCategories = [
    { id: "todas", label: "Todas" },
    { id: "backend", label: "Backend & Lenguajes" },
    { id: "frontend", label: "Frontend & DB" },
    { id: "herramientas", label: "Herramientas & IA" },
    { id: "soft_idiomas", label: "Soft Skills e Idiomas" },
  ];

  return (
    <div className="min-h-screen text-white relative">
      <BackgroundLights />

      {/* Navbar */}
      <Navbar />

      {/* === HERO === */}
      <section
        id="inicio"
        className="relative min-h-screen lg:h-screen flex items-center justify-center text-center text-white overflow-hidden px-6 py-12"
      >
        <div className="relative z-10 px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-none mb-4 md:mb-6">
              Hola. Soy <span className="text-blue-400">Adrian Knuppelholz</span>.
            </h1>

            <p className="text-lg sm:text-2xl md:text-3xl font-light opacity-75 mb-8 md:mb-12">
              <ReactTyped
                strings={[
                  "Backend Developer",
                  "AI Enthusiast",
                  "Teacher Assistant",
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={2000}
                loop
                showCursor={true}
              />
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <motion.a
                href="#contacto"
                className="group relative px-7 py-3.5 md:px-8 md:py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full text-base md:text-lg font-bold transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              >
                <div className="border-beam" />
                <span className="relative z-10 flex items-center gap-2">
                  Charlemos <span className="group-hover:translate-x-1 transition-transform">👋</span>
                </span>
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <a
                href="CV Adrian Knuppelholz.pdf"
                target="_blank"
                className="px-7 py-3.5 md:px-8 md:py-4 border-2 border-white/20 rounded-full text-base md:text-lg font-bold hover:bg-white/10 transition-all duration-300"
              >
                Ver CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === EDUCACIÓN === */}
      <section
        id="educacion"
        className="min-h-screen lg:h-screen flex flex-col items-center justify-center py-10 md:py-14 px-4 md:px-8"
      >
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 text-center">Educación</h2>

          <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {/* Universidad */}
            <GlassCard className="p-5 flex flex-col justify-between" colorHex="#0ea5e9">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">Universidad</span>
                  <span className="text-xs text-white/60">2019 - 2024</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Universidad Gastón Dachary</h3>
                <p className="text-xs text-white/60 italic mb-3">Posadas, Misiones, Argentina</p>
                <p className="text-sm font-semibold text-blue-400">Título de grado - Ingeniería de Software</p>
                <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
                  Completé todo el cursado y exámenes finales. Actualmente desarrollando la tesis.
                </p>
              </div>
            </GlassCard>

            {/* Globant Bootcamp */}
            <GlassCard className="p-5 flex flex-col justify-between" colorHex="#0ea5e9">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">Bootcamp</span>
                  <span className="text-xs text-white/60">Ago 2024 – Abr 2025</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Globant | CodeYourFuture</h3>
                <p className="text-xs text-white/60 italic mb-3">En Remoto</p>
                <p className="text-sm font-semibold text-teal-300">Backend Java Developer Bootcamp</p>
                <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
                  +430 horas de formación intensiva en desarrollo backend con Java, Spring Boot, testing y clean code.
                </p>
              </div>
              <div className="mt-4">
                <motion.a
                  href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/66c4eb8cdc7bbffc897ab266-1745273206205.pdf"
                  target="_blank"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-medium text-white transition-all duration-300"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  📄 Ver certificado
                </motion.a>
              </div>
            </GlassCard>

            {/* Scrum Fundamentals */}
            <GlassCard className="p-5 flex flex-col justify-between" colorHex="#0ea5e9">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">Certificación</span>
                  <span className="text-xs text-white/60">Mar 2024</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">SCRUMstudy</h3>
                <p className="text-xs text-white/60 italic mb-3">En Remoto</p>
                <p className="text-sm font-semibold text-purple-300">Scrum Fundamentals Certified (SFC™)</p>
                <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
                  Acreditación en principios, roles, eventos y artefactos del marco ágil Scrum.
                </p>
              </div>
              <div className="mt-4">
                <motion.a
                  href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1020480"
                  target="_blank"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-medium text-white transition-all duration-300"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  📄 Ver certificado
                </motion.a>
              </div>
            </GlassCard>

            {/* AI for Productivity */}
            <GlassCard className="p-5 flex flex-col justify-between" colorHex="#0ea5e9">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Programa IA</span>
                  <span className="text-xs text-white/60">Ago 2025</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">INEFOP | Egg Platform</h3>
                <p className="text-xs text-white/60 italic mb-3">En Remoto</p>
                <p className="text-sm font-semibold text-cyan-300">IA para la Productividad (Nivel Avanzado)</p>
                <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
                  Creación de contenido multimedia y uso de plataformas de IA para optimizar la productividad.
                </p>
              </div>
              <div className="mt-4">
                <motion.a
                  href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/688c0e99ee2afc52c1acd508-1755891375001.pdf"
                  target="_blank"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-medium text-white transition-all duration-300"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  📄 Ver certificado
                </motion.a>
              </div>
            </GlassCard>

            {/* Data Privacy Fundamentals */}
            <GlassCard className="p-5 flex flex-col justify-between" colorHex="#e90e0eff">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">Privacidad de Datos</span>
                  <span className="text-xs text-white/60">Jul 2026</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Northeastern University | Coursera</h3>
                <p className="text-xs text-white/60 italic mb-3">En Remoto</p>
                <p className="text-sm font-semibold text-red-300">Data Privacy Fundamentals</p>
                <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
                  Marco normativo, estándares, impacto tecnológico, teoría y conceptos fundamentales de privacidad.
                </p>
              </div>
              <div className="mt-4">
                <motion.a
                  href="https://www.coursera.org/account/accomplishments/verify/IE5TQT3JTS7O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-medium text-white transition-all duration-300"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  📄 Ver certificado
                </motion.a>
              </div>
            </GlassCard>

            {/* 5 Days with Claude */}
            <GlassCard className="p-5 flex flex-col justify-between" colorHex="#0ea5e9">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Inteligencia Artificial</span>
                  <span className="text-xs text-white/60">Jul 2026</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">LAB10</h3>
                <p className="text-xs text-white/60 italic mb-3">En Remoto</p>
                <p className="text-sm font-semibold text-cyan-300">5 Days with Claude</p>
                <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
                  Desafío de actividades exploratorias y prácticas de todas las herramientas disponibles en Claude.
                </p>
              </div>
              <div className="mt-4">
                <motion.a
                  href="https://app.lab10.ai/certificate/LAB10-2026-9TYT27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-medium text-white transition-all duration-300"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  📄 Ver certificado
                </motion.a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* === EXPERIENCIA === */}
      <section
        id="experiencia"
        className="min-h-screen lg:h-screen flex flex-col items-center justify-center py-10 md:py-14 px-4 md:px-8"
      >
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 text-center">Experiencia</h2>

          <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-3 w-full">
            {/* Auxiliar Programación Estructurada */}
            <GlassCard className="p-5 flex flex-col justify-between h-full" colorHex="#7c3aed">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">Docencia</span>
                  <span className="text-xs text-white/60">Ago – Dic 2024</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Universidad Gastón Dachary</h3>
                <p className="text-xs text-white/60 italic mb-3">Posadas, Misiones, Argentina</p>
                <p className="text-sm font-semibold text-purple-300 mb-3">Auxiliar – Programación Estructurada</p>
                <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-white/80 leading-relaxed">
                  <li>Apoyo en la enseñanza de fundamentos de programación en C.</li>
                  <li>Guía a estudiantes en pensamiento algorítmico y lógica.</li>
                  <li>Revisión de TP y asistencia en evaluaciones.</li>
                </ul>
              </div>
            </GlassCard>

            {/* Auxiliar Algoritmos */}
            <GlassCard className="p-5 flex flex-col justify-between h-full" colorHex="#7c3aed">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Docencia</span>
                  <span className="text-xs text-white/60">Mar – Jul 2025</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Universidad Gastón Dachary</h3>
                <p className="text-xs text-white/60 italic mb-3">Posadas, Misiones, Argentina</p>
                <p className="text-sm font-semibold text-indigo-300 mb-3">Auxiliar – Algoritmos & Estructuras I & II</p>
                <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-white/80 leading-relaxed">
                  <li>Instrucción en estructuras de datos básicas y avanzadas.</li>
                  <li>Asistencia en implementación práctica de algoritmos.</li>
                  <li>Planificación de clases y evaluaciones académicas.</li>
                </ul>
              </div>
            </GlassCard>

            {/* Academic Projects */}
            <GlassCard className="p-5 flex flex-col justify-between h-full" colorHex="#7c3aed">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">Desarrollo</span>
                  <span className="text-xs text-white/60">2019 – 2024</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Proyectos Académicos</h3>
                <p className="text-xs text-white/60 italic mb-3">Remoto / Campus</p>
                <p className="text-sm font-semibold text-pink-300 mb-3">Software Developer</p>
                <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-white/80 leading-relaxed">
                  <li>Desarrollo de software en equipo con Scrum.</li>
                  <li>Aplicación de arquitectura MVC con CodeIgniter.</li>
                  <li>Gestión de versiones con GitHub.</li>
                  <li>Diseño y consultas en PostgreSQL y MySQL.</li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* === PROYECTOS === */}
      <section
        id="proyectos"
        className="min-h-screen lg:h-screen flex flex-col items-center justify-center py-10 md:py-14 px-4 md:px-8"
      >
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 text-center">Proyectos</h2>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 w-full">
            {/* Proyecto 1 */}
            <GlassCard className="p-5 flex flex-col justify-between h-full" colorHex="#f59e0b">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Gestión de Obras Públicas</h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  Sistema avanzado para gestión de obras públicas con funciones y triggers en PL/pgSQL para certificados de pago, redeterminaciones de precios y auditoría integral.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["PostgreSQL", "PL/pgSQL", "Triggers", "Views"].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex justify-center">
                <motion.a
                  href="https://github.com/AdrianKnu/TPI_TEC_DE_BDD"
                  target="_blank"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl font-medium text-xs text-white transition-all duration-300"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img src="logos/github.svg" alt="GitHub" className="w-4 h-4 filter invert" />
                  <span>Ver en GitHub</span>
                </motion.a>
              </div>
            </GlassCard>

            {/* Proyecto 2 */}
            <GlassCard className="p-5 flex flex-col justify-between h-full" colorHex="#0ea5e9">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Portfolio Personal</h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  Página web interactiva y responsiva con estética glassmorphism moderna para exhibir experiencia, certificaciones, proyectos y habilidades técnicas.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["React", "Vite", "TailwindCSS", "Framer Motion"].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex justify-center">
                <motion.a
                  href="https://github.com/AdrianKnu/portfolio-adrian"
                  target="_blank"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl font-medium text-xs text-white transition-all duration-300"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img src="logos/github.svg" alt="GitHub" className="w-4 h-4 filter invert" />
                  <span>Ver en GitHub</span>
                </motion.a>
              </div>
            </GlassCard>

            {/* Proyecto 3 */}
            <GlassCard className="p-5 flex flex-col justify-between h-full" colorHex="#7c3aed">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Note-Taking Application</h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  Aplicación Full-Stack para gestión de notas con operaciones CRUD, archivado, filtrado por categorías y diseño persistente.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["NestJS", "React", "SQLite", "TypeORM"].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex justify-center">
                <motion.a
                  href="https://github.com/AdrianKnu/full-stack-note-taking-application"
                  target="_blank"
                  className="w-full relative z-10 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl font-medium text-xs text-white transition-all duration-300"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img src="logos/github.svg" alt="GitHub" className="w-4 h-4 filter invert" />
                  <span>Ver en GitHub</span>
                </motion.a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* === SKILLS === */}
      <section
        id="skills"
        className="min-h-screen lg:h-screen flex flex-col items-center justify-center py-10 md:py-14 px-4 md:px-8"
      >
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 text-center">Skills</h2>

          {/* Filtros por Categoría */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 md:mb-8">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSkillCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${skillCategory === cat.id
                  ? "bg-blue-500/20 border border-blue-400 text-white shadow-lg backdrop-blur-md"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vista de Skills según categoría elegida */}
          <div className="w-full space-y-6 overflow-y-auto max-h-[60vh] md:max-h-[65vh] pr-1 custom-scrollbar">

            {/* VISTA TODAS O ESPECÍFICA: BACKEND */}
            {(skillCategory === "todas" || skillCategory === "backend") && (
              <div>
                <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-3">Backend & Lenguajes</h3>
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                  {[
                    { name: "Java", logo: "logos/java.png", level: "Avanzado", colorHex: "#7c3aed" },
                    { name: "Python", logo: "logos/python.svg", level: "Intermedio", colorHex: "#7c3aed" },
                    { name: "PHP", logo: "logos/php.svg", level: "Intermedio", colorHex: "#7c3aed" },
                    { name: "JavaScript", logo: "logos/javascript.svg", level: "Avanzado", colorHex: "#7c3aed" },
                    { name: "C", logo: "logos/c.svg", level: "Avanzado", colorHex: "#7c3aed" },
                    { name: "Spring Boot", logo: "logos/springboot.svg", level: "Intermedio", colorHex: "#10b981" },
                    { name: "Hibernate", logo: "logos/hibernate.svg", level: "Intermedio", colorHex: "#10b981" },
                    { name: "CodeIgniter", logo: "logos/codeigniter.svg", level: "Avanzado", colorHex: "#10b981" },
                  ].map((s) => (
                    <SkillCard key={s.name} {...s} />
                  ))}
                </div>
              </div>
            )}

            {/* VISTA TODAS O ESPECÍFICA: FRONTEND & DB */}
            {(skillCategory === "todas" || skillCategory === "frontend") && (
              <div>
                <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wider mb-3">Frontend & Bases de Datos</h3>
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                  {[
                    { name: "HTML5", logo: "logos/html5.svg", level: "Avanzado", colorHex: "#0ea5e9" },
                    { name: "CSS3", logo: "logos/css3.png", level: "Avanzado", colorHex: "#0ea5e9" },
                    { name: "React", logo: "logos/react.svg", level: "Intermedio", colorHex: "#0ea5e9" },
                    { name: "Angular", logo: "logos/angular.svg", level: "Principiante", colorHex: "#0ea5e9" },
                    { name: "Vite", logo: "logos/vite.svg", level: "Intermedio", colorHex: "#0ea5e9" },
                    { name: "PostgreSQL", logo: "logos/postgresql.svg", level: "Avanzado", colorHex: "#f59e0b" },
                    { name: "MySQL", logo: "logos/mysql.svg", level: "Avanzado", colorHex: "#f59e0b" },
                  ].map((s) => (
                    <SkillCard key={s.name} {...s} />
                  ))}
                </div>
              </div>
            )}

            {/* VISTA TODAS O ESPECÍFICA: HERRAMIENTAS & IA */}
            {(skillCategory === "todas" || skillCategory === "herramientas") && (
              <div>
                <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-3">Herramientas & Inteligencia Artificial</h3>
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                  {[
                    { name: "Git", logo: "logos/git.svg", level: "Avanzado", colorHex: "#f43f5e" },
                    { name: "GitHub", logo: "logos/github.svg", level: "Avanzado", colorHex: "#f43f5e" },
                    { name: "Docker", logo: "logos/docker.svg", level: "Intermedio", colorHex: "#f43f5e" },
                    { name: "Selenium", logo: "logos/selenium.svg", level: "Intermedio", colorHex: "#f43f5e" },
                    { name: "UML", logo: "logos/uml.svg", level: "Avanzado", colorHex: "#f43f5e" },
                    { name: "VS Code", logo: "logos/vscode.png", level: "Avanzado", colorHex: "#8b5cf6" },
                    { name: "Postman", logo: "logos/postman.svg", level: "Intermedio", colorHex: "#8b5cf6" },
                    { name: "Insomnia", logo: "logos/insomnia.svg", level: "Principiante", colorHex: "#8b5cf6" },
                    { name: "ChatGPT", logo: "logos/openai.png", level: "Avanzado", colorHex: "#06b6d4" },
                    { name: "Claude", logo: "logos/claude.png", level: "Intermedio", colorHex: "#06b6d4" },
                    { name: "Gemini", logo: "logos/googlegemini.png", level: "Avanzado", colorHex: "#06b6d4" },
                    { name: "Hugging Face", logo: "logos/huggingface.svg", level: "Intermedio", colorHex: "#06b6d4" },
                  ].map((s) => (
                    <SkillCard key={s.name} {...s} />
                  ))}
                </div>
              </div>
            )}

            {/* VISTA TODAS O ESPECÍFICA: SOFT SKILLS E IDIOMAS */}
            {(skillCategory === "todas" || skillCategory === "soft_idiomas") && (
              <div>
                <h3 className="text-sm font-bold text-pink-300 uppercase tracking-wider mb-3">Soft Skills e Idiomas</h3>
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                  {[
                    { name: "Trabajo en equipo", level: "Avanzado", colorHex: "#e879f9" },
                    { name: "Resolver problemas", level: "Avanzado", colorHex: "#e879f9" },
                    { name: "Metodologías Ágiles", level: "Intermedio", colorHex: "#e879f9" },
                    { name: "Comunicación", level: "Avanzado", colorHex: "#e879f9" },
                    { name: "Pensamiento crítico", level: "Intermedio", colorHex: "#e879f9" },
                    { name: "Español", logo: "logos/es.svg", level: "Nativo", colorHex: "#f59e0b" },
                    { name: "Inglés", logo: "logos/gb.svg", level: "Intermedio-Avanzado", colorHex: "#3b82f6" },
                    { name: "Portugués", logo: "logos/br.svg", level: "Avanzado", colorHex: "#10b981" },
                  ].map((s) => (
                    <SkillCard key={s.name} {...s} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* === CONTACTO === */}
      <section
        id="contacto"
        className="min-h-screen lg:h-screen flex flex-col items-center justify-center py-10 md:py-14 px-4 md:px-8"
      >
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 text-center">Contacto</h2>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 w-full">
            {/* Correo */}
            <GlassCard
              as="a"
              href="mailto:knuppelholzadrian@gmail.com"
              colorHex="#ef4444"
              className="flex flex-col items-center justify-center text-center p-6 hover:scale-105 transition-all duration-300"
            >
              <img src="logos/gmail.svg" alt="Email" className="relative z-10 w-10 h-10 mb-3 filter invert" />
              <span className="relative z-10 font-semibold text-white text-base">Correo Electrónico</span>
              <p className="relative z-10 text-xs text-white/80 mt-1 break-all">knuppelholzadrian@gmail.com</p>
            </GlassCard>

            {/* WhatsApp */}
            <GlassCard
              as="a"
              href="https://wa.me/5493764716434"
              target="_blank"
              colorHex="#22c55e"
              className="flex flex-col items-center justify-center text-center p-6 hover:scale-105 transition-all duration-300"
            >
              <img src="logos/whatsapp.svg" alt="WhatsApp" className="relative z-10 w-10 h-10 mb-3 filter invert" />
              <span className="relative z-10 font-semibold text-white text-base">WhatsApp</span>
              <p className="relative z-10 text-xs text-white/80 mt-1">+54 9 3764 716434</p>
            </GlassCard>

            {/* LinkedIn */}
            <GlassCard
              as="a"
              href="https://www.linkedin.com/in/adrian-knuppelholz"
              target="_blank"
              colorHex="#0ea5e9"
              className="flex flex-col items-center justify-center text-center p-6 hover:scale-105 transition-all duration-300"
            >
              <img src="logos/linkedIn.svg" alt="LinkedIn" className="relative z-10 w-10 h-10 mb-3 filter invert" />
              <span className="relative z-10 font-semibold text-white text-base">LinkedIn</span>
              <p className="relative z-10 text-xs text-white/80 mt-1 break-all">adrian-knuppelholz</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-black/40 backdrop-blur-sm text-gray-300 py-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p className="text-xs md:text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Adrian Knuppelholz. Todos los derechos reservados.
          </p>

          <nav className="flex space-x-4 text-xs md:text-sm">
            <a href="#inicio" className="hover:text-white transition">Inicio</a>
            <a href="#educacion" className="hover:text-white transition">Educación</a>
            <a href="#experiencia" className="hover:text-white transition">Experiencia</a>
            <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </nav>
        </div>
      </footer>

    </div>
  );
}
