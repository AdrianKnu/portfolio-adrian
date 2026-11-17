import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dict } from "./content.js";

export const LANGS = ["es", "en", "pt"];
export const LANG_NAMES = { es: "Español", en: "English", pt: "Português" };

const Ctx = createContext(null);

function detectLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch {}
  const nav = (navigator.languages?.[0] || navigator.language || "es").slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : "es";
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLang);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  }, []);

  const t = dict[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
