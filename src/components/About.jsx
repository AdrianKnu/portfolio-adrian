import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { Reveal, Section } from "./ui.jsx";

// Cada palabra se enciende a medida que avanza el scroll.
function Word({ word, index, total, progress, reduce }) {
  const start = (index / total) * 0.88;
  const opacity = useTransform(progress, [start, Math.min(start + 0.12, 1)], [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity: reduce ? 1 : opacity }}>{word}</motion.span>{" "}
    </>
  );
}

export default function About() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.55"] });
  const words = t.about.statement.split(" ");
  const a = t.about;

  return (
    <Section id="about" title={a.title}>
      <p
        ref={ref}
        className="mx-auto mt-14 max-w-4xl text-[clamp(1.5rem,3.6vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.025em]"
      >
        {words.map((w, k) => (
          <Word key={`${k}-${w}`} word={w} index={k} total={words.length} progress={scrollYProgress} reduce={reduce} />
        ))}
      </p>

      <Reveal>
        <dl className="mx-auto mt-16 grid max-w-4xl gap-10 border-t border-line pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-muted">{a.location.label}</dt>
            <dd className="mt-2 text-lg leading-snug">{a.location.value}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">{a.education.label}</dt>
            <dd className="mt-2 text-lg leading-snug">{a.education.value}</dd>
            <dd className="mt-1 text-sm text-muted">{a.education.detail}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">{a.languages.label}</dt>
            {a.languages.values.map((v) => (
              <dd key={v} className="mt-2 text-lg leading-snug first:mt-2">
                {v}
              </dd>
            ))}
          </div>
        </dl>
      </Reveal>
    </Section>
  );
}
