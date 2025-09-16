import { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import SkillCard from "./SkillCard";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen text-white relative">
      {/* === Fondo global con gradiente animado + blobs === */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradiente base */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
          animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "400% 400%" }}
        />

        {/* Blob púrpura arriba izquierda */}
        <motion.div
          className="absolute top-[-20%] left-[-15%] w-[400px] h-[400px] bg-purple-600/40 rounded-full blur-[120px]"
          animate={{ y: [0, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blob rosa abajo derecha */}
        <motion.div
          className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-pink-500/40 rounded-full blur-[150px]"
          animate={{ y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blob azul centro-derecha */}
        <motion.div
          className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[100px]"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* === Navbar === */}
      <Navbar />

      {/* === A PARTIR DE AQUI, TODAS LAS SECCIONES DE LA PAGINA Y SUS COMPONENTES === */}

      {/* === HERO === */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      >
        <div className="relative z-10 px-6 max-w-3xl">
          {/* Nombre */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Adrian Knüppelholz
          </h1>

          {/* Subtítulo con typing */}
          <p className="mt-4 text-lg md:text-2xl font-light opacity-90">
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
              cursorChar="|"
              smartBackspace={true}
            />
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="CV Adrian Knuppelholz.pdf"
              target="_blank"
              className="px-6 py-3 bg-white/20 border border-white/40 rounded-xl text-lg font-medium hover:bg-white/40 transition"
            >
              📄 Descargar CV
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 bg-purple-600/70 border border-purple-400 rounded-xl text-lg font-medium hover:bg-purple-700/90 transition"
            >
              📧 Contacto
            </a>
          </div>
        </div>
      </section>

      
      {/* EDUCACIÓN */}
      <section
        id="educacion"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-4xl font-bold mb-12">Educación & Certificaciones</h2>

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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Titulo de grado - Ingeniería de Software</p>
                <p className="text-sm opacity-80">2019 - 2024</p>
                <p className="mt-2">
                  Completé todo el cursado y exámenes finales. Actualmente desarrollando la tesis.
                </p>
                {/* <p className="mt-2 font-medium italic">
                  “Educational Chatbot for the Algorithms Course”
                </p> */}
              </div>
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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Backend Java Developer Bootcamp</p>
                <p className="text-sm opacity-80">Ago 2024 – Abr 2025</p>
                <p className="mt-2">
                  +430 horas de formación intensiva en desarrollo backend con Java,
                  Spring Boot, testing y clean code.
                </p>
                <a
                  href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/66c4eb8cdc7bbffc897ab266-1745273206205.pdf"
                  target="_blank"
                  className="mt-4 inline-block px-4 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/40 transition"
                >
                  📄 Ver certificado
                </a>
              </div>
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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Scrum Fundamentals Certified (SFC™)</p>
                <p className="text-sm opacity-80">Mar 2024</p>
                <a
                  href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1020480"
                  target="_blank"
                  className="mt-4 inline-block px-4 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/40 transition"
                >
                  📄 Ver certificado
                </a>
              </div>
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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Inteligencia Artificial para la Productividad (Nivel Avanzado)</p>
                <p className="text-sm opacity-80">Ago 2025</p>
                <p className="mt-2">
                  Habilidades clave en la creación de contenido multimedia y uso de plataformas de IA para optimizar la productividad.
                </p>
                <a
                  href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/688c0e99ee2afc52c1acd508-1755891375001.pdf"
                  target="_blank"
                  className="mt-4 inline-block px-4 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/40 transition"
                >
                  📄 Ver certificado
                </a>
              </div>
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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Skills for Work</p>
                <p className="text-sm opacity-80">Sep 2025 - Sep 2026</p>
                <p className="mt-2">
                  Beca completa para cursos de desarrollo profesional y habilidades laborales en Coursera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section
        id="experiencia"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      >
        <h2 className="text-4xl font-bold mb-12">Experiencia </h2>

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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Auxiliar de Enseñanza – Programación Estructurada</p>
                <p className="text-sm opacity-80">Ago 2024 – Dic 2024</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Apoyo en la enseñanza de fundamentos de programación en C.</li>
                  <li>Guía a estudiantes en pensamiento algorítmico y lógica.</li>
                  <li>Revisión de trabajos prácticos y asistencia en evaluaciones.</li>
                </ul>
              </div>
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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Auxiliar de Enseñanza – Algoritmos y Estructuras de Datos I & II</p>
                <p className="text-sm opacity-80">Mar 2025 – Jul 2025</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Colaboración en la instrucción de estructuras de datos básicas y avanzadas.</li>
                  <li>Asistencia en implementación de algoritmos en trabajos prácticos.</li>
                  <li>Participación en planificación de clases y evaluaciones.</li>
                </ul>
              </div>
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
              <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl p-6 shadow-xl">
                <p className="font-bold">Software Developer</p>
                <p className="text-sm opacity-80">2019 – 2024</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Desarrollo de proyectos de software en equipo con metodología ágil (Scrum).</li>
                  <li>Aplicación de arquitectura MVC con CodeIgniter.</li>
                  <li>Gestión de control de versiones en GitHub.</li>
                  <li>Diseño y consultas en bases de datos PostgreSQL y MySQL.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* PROYECTOS */}
<section
  id="proyectos"
  className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
>
  <h2 className="text-4xl font-bold mb-12">Proyectos</h2>

  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
    
    {/* Proyecto 1 */}
    <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold">Proyecto Final de Tecnología de Base de Datos</h3>
        <p className="mt-2 text-sm opacity-90">
          
          Scripts avanzados para gestión empresarial con PostgreSQL.
        </p>
        <p className="mt-3 text-xs opacity-80">Tecnologías: PostgreSQL</p>
      </div>
      <div className="mt-6 flex gap-3 justify-center">
        <a
          href="https://github.com/AdrianKnu/TPI_TEC_DE_BDD"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/40 transition"
        >
          <img src="logos/github.svg" alt="GitHub" className="w-5 h-5 filter invert" />
          <span>GitHub</span>
        </a>
      </div>
    </div>

    {/* Proyecto 2 */}
    <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold">Portfolio Personal</h3>
        <p className="mt-2 text-sm opacity-90">
          Página web moderna para mostrar experiencia, educación y proyectos.
        </p>
        <p className="mt-3 text-xs opacity-80">Tecnologías: React, Vite, TailwindCSS</p>
      </div>
      <div className="mt-6 flex gap-3 justify-center">
        <a
          href="https://github.com/AdrianKnu/portfolio-adrian"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/40 transition"
        >
          <img src="logos/github.svg" alt="GitHub" className="w-5 h-5 filter invert" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
    {/* Proyecto 3 */}
    <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold">Proyecto X</h3>
        <p className="mt-2 text-sm opacity-90">
          Actualmente en desarrollo, con el fin de ampliar el porfolio.
        </p>
        <p className="mt-3 text-xs opacity-80">Tecnologías: Java, Selenium, API Rest</p>
      </div>
      <div className="mt-6 flex gap-3 justify-center">
        <a
          href="https://github.com/usuario/selenium-tests"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/40 transition"
        >
          <img src="logos/github.svg" alt="GitHub" className="w-5 h-5 filter invert" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</section>

{/* SKILLS */}
<section
  id="skills"
  className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
>
  <h2 className="text-4xl font-bold mb-12">Skills</h2>

  <div className="max-w-6xl w-full space-y-16">

    {/* === Lenguajes de Programación === */}
    <div>
      <h3 className="text-2xl font-semibold mb-6">Lenguajes de Programación</h3>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {[
          { name: "Java", logo: "logos/java.png", level: "Avanzado" },
          { name: "Python", logo: "logos/python.svg", level: "Intermedio" },
          { name: "PHP", logo: "logos/php.svg", level: "Intermedio" },
          { name: "JavaScript", logo: "logos/javascript.svg", level: "Avanzado" },
          { name: "C", logo: "logos/c.svg", level: "Avanzado" },
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
          { name: "HTML5", logo: "logos/html5.svg", level: "Avanzado" },
          { name: "CSS3", logo: "logos/css3.png", level: "Avanzado" },
          { name: "React", logo: "logos/react.svg", level: "Intermedio" },
          { name: "Angular", logo: "logos/angular.svg", level: "Principiante" },
          { name: "Vite", logo: "logos/vite.svg", level: "Intermedio" },
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
            { name: "Spring Boot", logo: "logos/springboot.svg", level: "Intermedio" },
            { name: "Hibernate", logo: "logos/hibernate.svg", level: "Intermedio" },
            { name: "CodeIgniter", logo: "logos/codeigniter.svg", level: "Avanzado" },
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
            { name: "PostgreSQL", logo: "logos/postgresql.svg", level: "Avanzado" },
            { name: "MySQL", logo: "logos/mysql.svg", level: "Avanzado" },
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
          { name: "Git", logo: "logos/git.svg", level: "Avanzado" },
          { name: "GitHub", logo: "logos/github.svg", level: "Avanzado" },
          { name: "Docker", logo: "logos/docker.svg", level: "Intermedio" },
          { name: "Selenium", logo: "logos/selenium.svg", level: "Intermedio" },
          { name: "UML", logo: "logos/uml.svg", level: "Avanzado" },
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
          { name: "Eclipse IDE", logo: "logos/eclipseide.svg", level: "Avanzado" },
          { name: "NetBeans IDE", logo: "logos/apachenetbeanside.svg", level: "Intermedio" },
          { name: "Visual Studio", logo: "logos/vscode.png", level: "Avanzado" },
          { name: "Postman", logo: "logos/postman.svg", level: "Intermedio" },
          { name: "Insomnia", logo: "logos/insomnia.svg", level: "Principiante" },
          { name: "Virtual Box", logo: "logos/virtualbox.svg", level: "Intermedio" },
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
          { name: "ChatGPT", logo: "logos/openai.png", level: "Avanzado" },
          { name: "Claude", logo: "logos/claude.png", level: "Intermedio" },
          { name: "Gemini", logo: "logos/googlegemini.png", level: "Avanzado" },
          { name: "Hugging Face", logo: "logos/huggingface.svg", level: "Intermedio" },
          { name: "Mistral IA", logo: "logos/mistralai.svg", level: "Intermedio" },
          { name: "DeepSeek", logo: "logos/deepl.png", level: "Principiante" },
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
          { name: "Trabajo en equipo", level: "Avanzado" },
          { name: "Resolver problemas", level: "Avanzado" },
          { name: "Metodologías Ágiles", level: "Intermedio" },
          { name: "Comunicación", level: "Avanzado" },
          { name: "Pensamiento crítico", level: "Intermedio" },
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
          { name: "Español", logo: "logos/es.svg", nivel: "Nativo" },
          { name: "Inglés", logo: "logos/gb.svg", nivel: "Intermedio - Avanzado" },
          { name: "Portugués", logo: "logos/br.svg", nivel: "Avanzado" },
        ].map((lang) => (
          <div key={lang.name} className="w-full flex flex-col items-center justify-center backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 hover:scale-105 hover:bg-white/20 transition">
            <img src={lang.logo} alt={lang.name} className="w-12 h-12 mb-2" />
            <span className="font-semibold">{lang.name}</span>
            <p className="text-xs opacity-80 mt-1">{lang.nivel}</p>
          </div>
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
        <h2 className="text-4xl font-bold mb-12">Contacto</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full justify-center place-items-center">
          {/* Correo */}
          <a
            href="mailto:knuppelholzadrian@gmail.com"
            className="flex flex-col items-center justify-center text-center backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 hover:scale-105 hover:bg-white/20 transition"
          >
            <img src="logos/gmail.svg" alt="Email" className="w-12 h-12 mb-4 filter invert" />
            <span className="font-semibold">Correo Electrónico</span>
            <p className="text-sm opacity-80 mt-2">knuppelholzadrian@gmail.com</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5493764716434"
            target="_blank"
            className="flex flex-col items-center justify-center text-center backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 hover:scale-105 hover:bg-white/20 transition"
          >
            <img src="logos/whatsapp.svg" alt="WhatsApp" className="w-12 h-12 mb-4 filter invert" />
            <span className="font-semibold">WhatsApp</span>
            <p className="text-sm opacity-80 mt-2">+54 9 3764 716434</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adrian-knuppelholz"
            target="_blank"
            className="flex flex-col items-center justify-center text-center backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg p-6 hover:scale-105 hover:bg-white/20 transition"
          >
            <img src="logos/linkedIn.svg" alt="LinkedIn" className="w-12 h-12 mb-4 filter invert" />
            <span className="font-semibold">LinkedIn</span>
            <p className="text-sm opacity-80 mt-2">linkedin.com/in/adrian-knuppelholz</p>
          </a>
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
