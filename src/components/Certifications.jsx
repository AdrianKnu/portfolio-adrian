import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { CERTS } from "../data.js";
import { ArrowUpRightIcon, ChevronIcon, Reveal, Section } from "./ui.jsx";

export default function Certifications() {
  const { t, lang } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const c = t.certifications;

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir) => {
    const el = ref.current;
    const card = el.querySelector("article");
    const step = (card?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const fmt = new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" });

  // Alinea la primera tarjeta con el contenido y deja que el resto llegue al borde de la pantalla.
  const inset = "max(1.25rem, calc((100% - 1080px) / 2 + 1.25rem))";

  const shelf = (
    <div
      ref={ref}
      onScroll={update}
      role="region"
      aria-label={c.shelf}
      tabIndex={0}
      style={{ paddingInline: inset, scrollPaddingInline: inset }}
      className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
    >
      {CERTS.map((cert, k) => {
        const txt = c.items[cert.id];
        return (
          <Reveal key={cert.id} delay={k * 0.07} className="shrink-0 snap-start">
            <article className="flex h-full min-h-[320px] w-[min(82vw,320px)] flex-col justify-between rounded-[28px] bg-surface p-7">
              <div>
                <p className="text-sm text-muted">{txt.issuer}</p>
                <h3 className="mt-2 text-[1.35rem] font-semibold leading-snug tracking-tight">{txt.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{txt.text}</p>
              </div>
              <div className="mt-6 flex items-end justify-between gap-3">
                <time
                  className="text-sm text-muted first-letter:uppercase"
                  dateTime={`${cert.y}-${String(cert.m + 1).padStart(2, "0")}`}
                >
                  {fmt.format(new Date(cert.y, cert.m, 1))}
                </time>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                >
                  {c.view}
                  <ArrowUpRightIcon size={17} />
                </a>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );

  return (
    <Section id="certifications" title={c.title} subtitle={c.subtitle} after={shelf}>
      <div className="mt-12 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={!canPrev}
          aria-label={c.prev}
          className="grid size-10 place-items-center rounded-full bg-surface transition-opacity disabled:opacity-30"
        >
          <ChevronIcon dir="left" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={!canNext}
          aria-label={c.next}
          className="grid size-10 place-items-center rounded-full bg-surface transition-opacity disabled:opacity-30"
        >
          <ChevronIcon dir="right" />
        </button>
      </div>
    </Section>
  );
}
