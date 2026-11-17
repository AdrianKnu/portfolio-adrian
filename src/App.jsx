import { useCallback, useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import { I18nProvider, useI18n } from "./i18n.jsx";
import { useTheme } from "./theme.js";
import Intro from "./components/Intro.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Barra fina que muestra cuánto de la página ya recorriste.
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-[var(--nav-h)] z-50 h-[2px] origin-left bg-[#0071e3]"
    />
  );
}

function Site() {
  const { t } = useI18n();
  const { theme, toggle } = useTheme();
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="skip-link">
        {t.a11y.skip}
      </a>
      <Intro onDone={onDone} />
      <Nav theme={theme} toggleTheme={toggle} />
      <ScrollProgress />
      <main>
        <Hero ready={ready} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Site />
    </I18nProvider>
  );
}
