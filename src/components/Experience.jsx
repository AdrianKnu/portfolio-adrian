import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { EXPERIENCE_IDS } from "../data.js";
import { Reveal, Section } from "./ui.jsx";

export default function Experience() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.65", "end 0.7"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <Section id="experience" title={t.experience.title} subtitle={t.experience.subtitle}>
      <ol ref={ref} className="relative mx-auto mt-16 max-w-3xl">
        <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : scaleY }}
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-accent"
        />
        {EXPERIENCE_IDS.map((id) => {
          const e = t.experience.items[id];
          return (
            <li key={id} className="relative pb-16 pl-11 last:pb-0">
              <motion.span
                aria-hidden="true"
                initial={{ scale: 0.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -35% 0px" }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-accent bg-bg"
              />
              <Reveal y={18}>
                <p className="text-sm text-muted">{e.period}</p>
                <h3 className="mt-1 text-2xl font-semibold leading-snug tracking-tight sm:text-[1.7rem]">{e.title}</h3>
                <p className="mt-1 text-muted">{e.org}</p>
                <ul className="mt-5 list-disc space-y-2.5 pl-5 text-[1.05rem] leading-relaxed marker:text-muted">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
