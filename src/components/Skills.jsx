import { motion } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { SKILLS } from "../data.js";
import { Section, ease } from "./ui.jsx";

function Chips({ items }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      variants={{ show: { transition: { staggerChildren: 0.05 } } }}
      className="flex flex-wrap gap-2"
    >
      {items.map((s) => (
        <motion.li
          key={s}
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 8 },
            show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease } },
          }}
          className="chip"
        >
          {s}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function Skills() {
  const { t } = useI18n();
  const s = t.skills;
  return (
    <Section id="skills" title={s.title} subtitle={s.subtitle}>
      <dl className="mx-auto mt-14 max-w-4xl divide-y divide-line border-y border-line">
        {SKILLS.map((g) => (
          <div key={g.id} className="grid gap-4 py-7 sm:grid-cols-[200px_1fr] sm:gap-8">
            <dt className="text-xl font-semibold tracking-tight">{s.groups[g.id]}</dt>
            <dd>
              {g.items ? (
                <Chips items={g.items} />
              ) : (
                <div className="space-y-4">
                  {["advanced", "intermediate"].map((level) => (
                    <div key={level} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <span className="w-28 shrink-0 text-sm text-muted">{s[level]}</span>
                      <Chips items={g[level]} />
                    </div>
                  ))}
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
