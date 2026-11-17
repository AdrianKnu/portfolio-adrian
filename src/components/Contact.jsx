import { motion } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { CONTACT } from "../data.js";
import { ArrowUpRightIcon, DownloadIcon, Reveal, Section, ease } from "./ui.jsx";

// El PDF vive en la carpeta public/ del proyecto, con este nombre exacto.
const CV_URL = "./cv-adrian-knuppelholz.pdf";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const rows = [
    { key: "email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { key: "whatsapp", value: CONTACT.phone, href: CONTACT.whatsapp },
    { key: "linkedin", value: CONTACT.linkedinLabel, href: CONTACT.linkedin },
    { key: "github", value: CONTACT.githubLabel, href: CONTACT.github },
  ];

  return (
    <Section id="contact" title={c.title} subtitle={c.text}>
      <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a href={`mailto:${CONTACT.email}`} className="btn-primary">
          {c.cta}
        </a>
        <a href={CV_URL} download="CV-Adrian-Knuppelholz.pdf" className="btn-ghost">
          {c.cv}
          <DownloadIcon className="ml-2" />
        </a>
      </Reveal>

      <ul className="mx-auto mt-16 max-w-3xl divide-y divide-line border-y border-line">
        {rows.map((r, k) => {
          const external = !r.href.startsWith("mailto:");
          return (
            <motion.li
              key={r.key}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.7, delay: k * 0.07, ease }}
            >
              <a
                href={r.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 py-6"
              >
                <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                  <span className="text-muted sm:w-28 sm:shrink-0">{c[r.key]}</span>
                  <span className="min-w-0 break-words text-base font-semibold tracking-tight transition-[color,transform] duration-300 group-hover:translate-x-1.5 group-hover:text-accent sm:text-2xl">
                    {r.value}
                  </span>
                </span>
                <ArrowUpRightIcon className="shrink-0 text-muted transition-colors group-hover:text-accent" />
              </a>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}