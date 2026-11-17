import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LANGS, LANG_NAMES, useI18n } from "../i18n.jsx";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon, ease } from "./ui.jsx";

export const SECTION_IDS = ["about", "projects", "experience", "skills", "certifications", "contact"];

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);
  return active;
}

function LangSwitch() {
  const { lang, setLang, t } = useI18n();
  return (
    <div role="group" aria-label={t.nav.language} className="flex rounded-full bg-soft p-0.5 text-[0.72rem] font-medium">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-label={LANG_NAMES[l]}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`relative isolate rounded-full px-2.5 py-1 transition-colors ${lang === l ? "text-fg" : "text-muted hover:text-fg"}`}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-surface shadow-sm"
              transition={{ type: "spring", stiffness: 520, damping: 38 }}
            />
          )}
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Nav({ theme, toggleTheme }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const dark = theme === "dark";

  return (
    <>
      <header
        className={`glass fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] border-b pt-[env(safe-area-inset-top,0px)] transition-colors ${scrolled || open ? "border-line" : "border-transparent"}`}
      >
        <nav aria-label={t.nav.main} className="mx-auto flex h-full max-w-[1080px] items-center justify-between px-5">
          <a href="#top" onClick={() => setOpen(false)} className="text-[1.05rem] font-semibold tracking-tight">
            Adri
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`text-[0.8rem] transition-colors ${active === id ? "text-fg" : "text-muted hover:text-fg"}`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LangSwitch />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.theme}
              className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-fg"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -70, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 70, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  className="grid place-items-center"
                >
                  {dark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-fg md:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[var(--nav-h)] z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="px-6 pt-6">
              {SECTION_IDS.map((id, k) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + k * 0.05, duration: 0.5, ease }}
                  className="border-b border-line"
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-4 text-3xl font-semibold tracking-tight ${active === id ? "text-accent" : ""}`}
                  >
                    {t.nav[id]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
