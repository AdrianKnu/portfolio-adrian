import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import SkillCard from "./SkillCard";
import BackgroundLights from "./BackgroundLights";

function GlassCard({ children, className = "", colorHex = "#ffffff", as: Component = "div", ...props }) {
  return (
    <Component
      className={`relative backdrop-blur-xl border rounded-[2.5rem] shadow-2xl transition-all duration-500 overflow-hidden ${className}`}
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
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen text-white relative">
      <BackgroundLights />

      {/* === Navbar === */}
      <Navbar />

      {/* === A PARTIR DE AQUI, TODAS LAS SECCIONES DE LA PAGINA Y SUS COMPONENTES === */}

      {/* === HERO === */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        <div className="relative z-10 px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-6">
              Hola. Soy <span className="text-blue-400">Adrian Knuppelholz</span>.
            </h1>

            <p className="text-xl md:text-3xl font-light opacity-70 mb-12">
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

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.a
                href="#contacto"
                className="group relative px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full text-lg font-bold transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {/* Border Beam Animation */}
                <div className="border-beam" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Charlemos <span className="group-hover:translate-x-1 transition-transform">👋</span>
                </span>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <a
                href="CV Adrian Knuppelholz.pdf"
                target="_blank"
                className="px-8 py-4 border-2 border-white/20 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
              >
                Ver CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* EDUCACIÓN */}
      <section
        id="educacion"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-20 text-center">Educación</h2>

        <div className="relative max-w-4xl w-full">
          {/* Línea central */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/40"></div>

          {/* ================== Universidad ================== */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">Universidad Gastón Dachary</h3>
              <p className="italic">Posadas, Misiones, Argentina</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-teal-500 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#0ea5e9">
                <p className="font-bold">Titulo de grado - Ingeniería de Software</p>
                <p className="text-sm opacity-80">2019 - 2024</p>
                <p className="mt-2">
                  Completé todo el cursado y exámenes finales. Actualmente desarrollando la tesis.
                </p>
              </GlassCard>
            </div>
          </div>

          {/* ==================Globant Bootcamp Backend Java Developer================== */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">Globant | CodeYourFuture</h3>
              <p className="italic">En Remoto</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-teal-500 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#0ea5e9">
                <p className="font-bold">Backend Java Developer Bootcamp</p>
                <p className="text-sm opacity-80">Ago 2024 – Abr 2025</p>
                <p className="mt-2">
                  +430 horas de formación intensiva en desarrollo backend con Java,
                  Spring Boot, testing y clean code.
                </p>
                <motion.a
                  href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/66c4eb8cdc7bbffc897ab266-1745273206205.pdf"
                  target="_blank"
                  className="relative z-10 mt-4 inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Ver certificado
                </motion.a>
              </GlassCard>
            </div>
          </div>

          {/* ================== Scrum Fundamentals ================== */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">SCRUMstudy</h3>
              <p className="italic">En Remoto</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-teal-500 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#0ea5e9">
                <p className="font-bold">Scrum Fundamentals Certified (SFC™)</p>
                <p className="text-sm opacity-80">Mar 2024</p>
                <motion.a
                  href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1020480"
                  target="_blank"
                  className="relative z-10 mt-4 inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Ver certificado
                </motion.a>
              </GlassCard>
            </div>
          </div>

          {/* ================== AI for Productivity ================== */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">INEFOP | Egg Platform</h3>
              <p className="italic">En Remoto</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-teal-500 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#0ea5e9">
                <p className="font-bold">Inteligencia Artificial para la Productividad (Nivel Avanzado)</p>
                <p className="text-sm opacity-80">Ago 2025</p>
                <p className="mt-2">
                  Habilidades clave en la creación de contenido multimedia y uso de plataformas de IA para optimizar la productividad.
                </p>
                <motion.a
                  href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/688c0e99ee2afc52c1acd508-1755891375001.pdf"
                  target="_blank"
                  className="relative z-10 mt-4 inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  📄 Ver certificado
                </motion.a>
              </GlassCard>
            </div>
          </div>
          {/* ================== Santander Open Academy ================== */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">COURSERA | Santander Open Academy</h3>
              <p className="italic">En Remoto</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-teal-500 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#0ea5e9">
                <p className="font-bold">Skills for Work</p>
                <p className="text-sm opacity-80">Sep 2025 - Sep 2026</p>
                <p className="mt-2">
                  Beca completa para cursos de desarrollo profesional y habilidades laborales en Coursera.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section
        id="experiencia"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-20 text-center">Experiencia</h2>

        <div className="relative max-w-4xl w-full">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/40"></div>

          {/* Teaching Assistant - Structured Programming */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">Universidad Gastón Dachary</h3>
              <p className="italic">Posadas, Misiones, Argentina</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-purple-400 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#7c3aed">
                <p className="font-bold">Auxiliar de Enseñanza – Programación Estructurada</p>
                <p className="text-sm opacity-80">Ago 2024 – Dic 2024</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Apoyo en la enseñanza de fundamentos de programación en C.</li>
                  <li>Guía a estudiantes en pensamiento algorítmico y lógica.</li>
                  <li>Revisión de trabajos prácticos y asistencia en evaluaciones.</li>
                </ul>
              </GlassCard>
            </div>
          </div>

          {/* Teaching Assistant - Algorithms */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">Universidad Gastón Dachary</h3>
              <p className="italic">Posadas, Misiones, Argentina</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-purple-400 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#7c3aed">
                <p className="font-bold">Auxiliar de Enseñanza – Algoritmos y Estructuras de Datos I & II</p>
                <p className="text-sm opacity-80">Mar 2025 – Jul 2025</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Colaboración en la instrucción de estructuras de datos básicas y avanzadas.</li>
                  <li>Asistencia en implementación de algoritmos en trabajos prácticos.</li>
                  <li>Participación en planificación de clases y evaluaciones.</li>
                </ul>
              </GlassCard>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-10 text-right">
              <h3 className="text-2xl font-semibold">Proyectos Académicos</h3>
              <p className="italic">Remoto / Campus</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full border-4 border-purple-400 z-10"></div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <GlassCard className="p-6" colorHex="#7c3aed">
                <p className="font-bold">Software Developer</p>
                <p className="text-sm opacity-80">2019 – 2024</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Desarrollo de proyectos de software en equipo con metodología ágil (Scrum).</li>
                  <li>Aplicación de arquitectura MVC con CodeIgniter.</li>
                  <li>Gestión de control de versiones en GitHub.</li>
                  <li>Diseño y consultas en bases de datos PostgreSQL y MySQL.</li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-20 text-center">Proyectos</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">

          {/* Proyecto 1 */}
          <GlassCard className="p-6 flex flex-col justify-between" colorHex="#f59e0b">
            <div>
              <h3 className="text-2xl font-semibold">Proyecto Final de Tecnología de Base de Datos</h3>
              <p className="mt-2 text-sm opacity-90">
                Scripts avanzados para gestión empresarial con PostgreSQL.
              </p>
              <p className="mt-3 text-xs opacity-80">Tecnologías: PostgreSQL</p>
            </div>
            <div className="mt-6 flex gap-3 justify-center">
              <motion.a
                href="https://github.com/AdrianKnu/TPI_TEC_DE_BDD"
                target="_blank"
                className="relative z-10 flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="logos/github.svg" alt="GitHub" className="w-5 h-5 filter invert" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </GlassCard>

          {/* Proyecto 2 */}
          <GlassCard className="p-6 flex flex-col justify-between" colorHex="#0ea5e9">
            <div>
              <h3 className="text-2xl font-semibold">Portfolio Personal</h3>
              <p className="mt-2 text-sm opacity-90">
                Página web moderna para mostrar experiencia, educación y proyectos.
              </p>
              <p className="mt-3 text-xs opacity-80">Tecnologías: React, Vite, TailwindCSS</p>
            </div>
            <div className="mt-6 flex gap-3 justify-center">
              <motion.a
                href="https://github.com/AdrianKnu/portfolio-adrian"
                target="_blank"
                className="relative z-10 flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="logos/github.svg" alt="GitHub" className="w-5 h-5 filter invert" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </GlassCard>

          {/* Proyecto 3 */}
          <GlassCard className="p-6 flex flex-col justify-between" colorHex="#7c3aed">
            <div>
              <h3 className="text-2xl font-semibold">Proyecto X</h3>
              <p className="mt-2 text-sm opacity-90">
                Actualmente en desarrollo, con el fin de ampliar el portfolio.
              </p>
              <p className="mt-3 text-xs opacity-80">Tecnologías: Java, Selenium, API Rest</p>
            </div>
            <div className="mt-6 flex gap-3 justify-center">
              <motion.a
                href="https://github.com/usuario/selenium-tests"
                target="_blank"
                className="relative z-10 flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="logos/github.svg" alt="GitHub" className="w-5 h-5 filter invert" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-20 text-center">Skills</h2>

        <div className="max-w-6xl w-full space-y-16">

          {/* === Lenguajes de Programación === */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Lenguajes de Programación</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { name: "Java", logo: "logos/java.png", level: "Avanzado", colorHex: "#7c3aed" },
                { name: "Python", logo: "logos/python.svg", level: "Intermedio", colorHex: "#7c3aed" },
                { name: "PHP", logo: "logos/php.svg", level: "Intermedio", colorHex: "#7c3aed" },
                { name: "JavaScript", logo: "logos/javascript.svg", level: "Avanzado", colorHex: "#7c3aed" },
                { name: "C", logo: "logos/c.svg", level: "Avanzado", colorHex: "#7c3aed" },
              ].map((lang) => (
                <SkillCard key={lang.name} {...lang} />
              ))}
            </div>
          </div>

          {/* === Frontend & Web Technologies === */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Frontend & Web Technologies</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { name: "HTML5", logo: "logos/html5.svg", level: "Avanzado", colorHex: "#0ea5e9" },
                { name: "CSS3", logo: "logos/css3.png", level: "Avanzado", colorHex: "#0ea5e9" },
                { name: "React", logo: "logos/react.svg", level: "Intermedio", colorHex: "#0ea5e9" },
                { name: "Angular", logo: "logos/angular.svg", level: "Principiante", colorHex: "#0ea5e9" },
                { name: "Vite", logo: "logos/vite.svg", level: "Intermedio", colorHex: "#0ea5e9" },
              ].map((fw) => (
                <SkillCard key={fw.name} {...fw} />
              ))}
            </div>
          </div>

          {/* === Frameworks Backend & Bases de Datos === */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* === Frameworks Backend === */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Frameworks Backend</h3>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
                {[
                  { name: "Spring Boot", logo: "logos/springboot.svg", level: "Intermedio", colorHex: "#10b981" },
                  { name: "Hibernate", logo: "logos/hibernate.svg", level: "Intermedio", colorHex: "#10b981" },
                  { name: "CodeIgniter", logo: "logos/codeigniter.svg", level: "Avanzado", colorHex: "#10b981" },
                ].map((fw) => (
                  <SkillCard key={fw.name} {...fw} />
                ))}
              </div>
            </div>

            {/* === Bases de Datos === */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Bases de Datos</h3>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-2">
                {[
                  { name: "PostgreSQL", logo: "logos/postgresql.svg", level: "Avanzado", colorHex: "#f59e0b" },
                  { name: "MySQL", logo: "logos/mysql.svg", level: "Avanzado", colorHex: "#f59e0b" },
                ].map((db) => (
                  <SkillCard key={db.name} {...db} />
                ))}
              </div>
            </div>
          </div>

          {/* === Herramientas de Desarrollo === */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Herramientas de Desarrollo</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { name: "Git", logo: "logos/git.svg", level: "Avanzado", colorHex: "#f43f5e" },
                { name: "GitHub", logo: "logos/github.svg", level: "Avanzado", colorHex: "#f43f5e" },
                { name: "Docker", logo: "logos/docker.svg", level: "Intermedio", colorHex: "#f43f5e" },
                { name: "Selenium", logo: "logos/selenium.svg", level: "Intermedio", colorHex: "#f43f5e" },
                { name: "UML", logo: "logos/uml.svg", level: "Avanzado", colorHex: "#f43f5e" },
              ].map((tool) => (
                <SkillCard key={tool.name} {...tool} />
              ))}
            </div>
          </div>

          {/* === Entornos & Utilidades === */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Entornos & Utilidades</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: "Eclipse IDE", logo: "logos/eclipseide.svg", level: "Avanzado", colorHex: "#8b5cf6" },
                { name: "NetBeans IDE", logo: "logos/apachenetbeanside.svg", level: "Intermedio", colorHex: "#8b5cf6" },
                { name: "Visual Studio", logo: "logos/vscode.png", level: "Avanzado", colorHex: "#8b5cf6" },
                { name: "Postman", logo: "logos/postman.svg", level: "Intermedio", colorHex: "#8b5cf6" },
                { name: "Insomnia", logo: "logos/insomnia.svg", level: "Principiante", colorHex: "#8b5cf6" },
                { name: "Virtual Box", logo: "logos/virtualbox.svg", level: "Intermedio", colorHex: "#8b5cf6" },
              ].map((env) => (
                <SkillCard key={env.name} {...env} />
              ))}
            </div>
          </div>

          {/* === IA & Productividad === */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">IA & Productividad</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: "ChatGPT", logo: "logos/openai.png", level: "Avanzado", colorHex: "#06b6d4" },
                { name: "Claude", logo: "logos/claude.png", level: "Intermedio", colorHex: "#06b6d4" },
                { name: "Gemini", logo: "logos/googlegemini.png", level: "Avanzado", colorHex: "#06b6d4" },
                { name: "Hugging Face", logo: "logos/huggingface.svg", level: "Intermedio", colorHex: "#06b6d4" },
                { name: "Mistral IA", logo: "logos/mistralai.svg", level: "Intermedio", colorHex: "#06b6d4" },
                { name: "DeepSeek", logo: "logos/deepl.png", level: "Principiante", colorHex: "#06b6d4" },
              ].map((ai) => (
                <SkillCard key={ai.name} {...ai} />
              ))}
            </div>
          </div>

          {/* === Soft Skills === */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { name: "Trabajo en equipo", level: "Avanzado", colorHex: "#e879f9" },
                { name: "Resolver problemas", level: "Avanzado", colorHex: "#e879f9" },
                { name: "Metodologías Ágiles", level: "Intermedio", colorHex: "#e879f9" },
                { name: "Comunicación", level: "Avanzado", colorHex: "#e879f9" },
                { name: "Pensamiento crítico", level: "Intermedio", colorHex: "#e879f9" },
              ].map((soft) => (
                <SkillCard key={soft.name} {...soft} />
              ))}
            </div>
          </div>

          {/* === Idiomas === */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Idiomas</h3>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {[
                { name: "Español", logo: "logos/es.svg", nivel: "Nativo", colorHex: "#f59e0b" },
                { name: "Inglés", logo: "logos/gb.svg", nivel: "Intermedio - Avanzado", colorHex: "#3b82f6" },
                { name: "Portugués", logo: "logos/br.svg", nivel: "Avanzado", colorHex: "#10b981" },
              ].map((lang) => (
                <GlassCard key={lang.name} className="p-6 flex flex-col items-center justify-center text-center" colorHex={lang.colorHex}>
                  <img src={lang.logo} alt={lang.name} className="w-12 h-12 mb-4 drop-shadow-lg" />
                  <span className="text-xl font-bold font-display">{lang.name}</span>
                  <p className="text-sm font-medium opacity-70 mt-1">{lang.nivel}</p>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-20 text-center">Contacto</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full justify-center place-items-center">
          {/* Correo */}
          <GlassCard
            as="a"
            href="mailto:knuppelholzadrian@gmail.com"
            colorHex="#ef4444"
            className="flex flex-col items-center justify-center text-center p-6"
          >
            <img src="logos/gmail.svg" alt="Email" className="relative z-10 w-12 h-12 mb-4 filter invert" />
            <span className="relative z-10 font-semibold text-white">Correo Electrónico</span>
            <p className="relative z-10 text-sm font-medium text-white/80 mt-2">knuppelholzadrian@gmail.com</p>
          </GlassCard>

          {/* WhatsApp */}
          <GlassCard
            as="a"
            href="https://wa.me/5493764716434"
            target="_blank"
            colorHex="#22c55e"
            className="flex flex-col items-center justify-center text-center p-6"
          >
            <img src="logos/whatsapp.svg" alt="WhatsApp" className="relative z-10 w-12 h-12 mb-4 filter invert" />
            <span className="relative z-10 font-semibold text-white">WhatsApp</span>
            <p className="relative z-10 text-sm font-medium text-white/80 mt-2">+54 9 3764 716434</p>
          </GlassCard>

          {/* LinkedIn */}
          <GlassCard
            as="a"
            href="https://www.linkedin.com/in/adrian-knuppelholz"
            target="_blank"
            colorHex="#0ea5e9"
            className="flex flex-col items-center justify-center text-center p-6"
          >
            <img src="logos/linkedIn.svg" alt="LinkedIn" className="relative z-10 w-12 h-12 mb-4 filter invert" />
            <span className="relative z-10 font-semibold text-white">LinkedIn</span>
            <p className="relative z-10 text-sm font-medium text-white/80 mt-2">linkedin.com/in/adrian-knuppelholz</p>
          </GlassCard>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/40 backdrop-blur-sm text-gray-300 py-6 mt-12 border-t border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Adrian Knuppelholz. Todos los derechos reservados.
          </p>

          <nav className="flex space-x-4 text-sm">
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
