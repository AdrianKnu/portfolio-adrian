import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { ease } from "./ui.jsx";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.95, ease } },
};

export default function Hero({ ready }) {
  const { t } = useI18n();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.92]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-5 pb-24 pt-24 text-center"
    >
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        variants={container}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="mx-auto max-w-5xl"
      >
        <motion.p variants={item} className="text-[clamp(1.25rem,2.6vw,1.75rem)] font-medium text-muted">
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-3 text-balance text-[clamp(2.9rem,9.5vw,7.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
        >
          <span className="gradient-text">Adrián Knuppelholz</span>
        </motion.h1>
        <motion.h2 variants={item} className="mt-5 text-[clamp(1.5rem,3.4vw,2.5rem)] font-semibold tracking-tight">
          {t.hero.role}
        </motion.h2>
        <motion.p variants={item} className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted sm:text-xl">
          {t.hero.text}
        </motion.p>
        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn-primary">
            {t.hero.cta1}
          </a>
          <a href="#contact" className="btn-ghost">
            {t.hero.cta2}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-cue" />
      </motion.div>
    </section>
  );
}
