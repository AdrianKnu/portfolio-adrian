import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { PROJECTS } from "../data.js";
import { MOTIFS } from "./Motifs.jsx";
import { ArrowUpRightIcon, CloseIcon, PlusIcon, Reveal, Section } from "./ui.jsx";

function Card({ p, txt, onOpen, delay }) {
  const Motif = MOTIFS[p.motif];
  return (
    <Reveal className={p.span} delay={delay}>
      <motion.button
        type="button"
        layoutId={`card-${p.id}`}
        onClick={(e) => onOpen(p.id, e.currentTarget)}
        whileHover={{ scale: 1.012 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        aria-haspopup="dialog"
        style={{ borderRadius: 28 }}
        className={`group relative flex h-full w-full flex-col justify-between overflow-hidden bg-surface p-7 text-left sm:p-9 ${p.minH} ${
          p.wide ? `md:flex-row md:justify-between md:gap-10 ${p.centered ? "md:items-center" : ""}` : ""
        }`}
      >
        <div className="max-w-md pr-10">
          {txt.status && (
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {txt.status}
            </span>
          )}
          <h3 className="text-[1.6rem] font-semibold leading-tight tracking-tight sm:text-3xl">{txt.title}</h3>
          <p className="mt-2 text-muted sm:text-lg">{txt.summary}</p>
        </div>
        <div className={p.box}>
          <Motif />
        </div>
        <span
          aria-hidden="true"
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-[#0071e3] text-white transition-transform duration-300 group-hover:rotate-90"
        >
          <PlusIcon size={18} />
        </span>
      </motion.button>
    </Reveal>
  );
}

function Modal({ p, txt, onClose, t }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const nodes = dialogRef.current?.querySelectorAll("a[href], button:not([disabled])");
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const tags = txt.tags ?? p.tech;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-8">
      <motion.div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        ref={dialogRef}
        layoutId={`card-${p.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ borderRadius: 32 }}
        className="relative z-10 max-h-[88svh] w-full max-w-2xl overflow-y-auto bg-surface p-7 sm:p-10"
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.18 } }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.projects.close}
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-soft text-muted transition-colors hover:text-fg"
          >
            <CloseIcon size={18} />
          </button>
          {txt.status && (
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{txt.status}</span>
          )}
          <h3 id="modal-title" className="pr-10 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {txt.title}
          </h3>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-[1.05rem] leading-relaxed marker:text-muted">
            {txt.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          {tags.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="rounded-full bg-soft px-3.5 py-1.5 text-sm">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              {txt.linkLabel}
              <ArrowUpRightIcon size={18} />
            </a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const [openId, setOpenId] = useState(null);
  const trigger = useRef(null);

  const open = useCallback((id, el) => {
    trigger.current = el;
    setOpenId(id);
  }, []);
  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = openId ? "hidden" : "";
    if (!openId) trigger.current?.focus?.({ preventScroll: true });
  }, [openId]);

  const current = PROJECTS.find((p) => p.id === openId);

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="mt-14 grid gap-4 md:grid-cols-3 md:auto-rows-[minmax(280px,auto)]">
        {PROJECTS.map((p, k) => (
          <Card key={p.id} p={p} txt={t.projects.items[p.id]} onOpen={open} delay={k * 0.08} />
        ))}
      </div>
      <AnimatePresence>
        {current && <Modal key={current.id} p={current} txt={t.projects.items[current.id]} onClose={close} t={t} />}
      </AnimatePresence>
    </Section>
  );
}
