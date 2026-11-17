import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useI18n } from "../i18n.jsx";
import { ease } from "./ui.jsx";

// Un saludo en cada idioma; al final vuelve al idioma de la persona.
const WORDS = [
  ["Hola", "es"],
  ["Hello", "en"],
  ["Olá", "pt"],
  ["Bonjour", "fr"],
  ["Hallo", "de"],
  ["Ciao", "it"],
  ["こんにちは", "ja"],
  ["你好", "zh"],
  ["안녕하세요", "ko"],
  ["Привет", "ru"],
];

const SEEN_KEY = "intro-seen";

function shouldShow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return !sessionStorage.getItem(SEEN_KEY);
  } catch {
    return true;
  }
}

export default function Intro({ onDone }) {
  const { t, lang } = useI18n();
  const [show, setShow] = useState(shouldShow);
  const [i, setI] = useState(0);
  const last = WORDS.length; // índice del saludo final, en el idioma elegido

  const finish = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    onDone();
  }, [onDone]);

  // Si no hay intro (ya vista o movimiento reducido), el sitio queda listo de inmediato.
  useEffect(() => {
    if (!show) onDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!show) return;
    const wait = i === 0 ? 700 : i < last ? 290 : 1150;
    const id = setTimeout(() => (i < last ? setI(i + 1) : finish()), wait);
    return () => clearTimeout(id);
  }, [show, i, last, finish]);

  useEffect(() => {
    if (!show) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [show, finish]);

  const [word, wordLang] = i < last ? WORDS[i] : [t.intro.final, lang];
  const isFinal = i === last;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] grid place-items-center bg-bg px-6"
          exit={{ opacity: 0, scale: 1.06, filter: "blur(16px)" }}
          transition={{ duration: 0.75, ease }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={i}
              lang={wordLang}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: isFinal ? 0.5 : 0.11, ease }}
              className="text-center text-[clamp(3.25rem,14vw,10rem)] font-semibold leading-[1.15] tracking-[-0.04em]"
            >
              <span className="gradient-text">{word}</span>
            </motion.p>
          </AnimatePresence>
          <button
            type="button"
            onClick={finish}
            style={{ top: "calc(1.25rem + env(safe-area-inset-top, 0px))" }}
            className="absolute right-5 rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            {t.intro.skip}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
