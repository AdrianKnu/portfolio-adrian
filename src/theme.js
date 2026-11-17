import { useCallback, useEffect, useState } from "react";

const query = () => window.matchMedia("(prefers-color-scheme: dark)");

function storedChoice() {
  try {
    const s = localStorage.getItem("theme");
    return s === "light" || s === "dark" ? s : null;
  } catch {
    return null;
  }
}

// Sigue la preferencia del sistema hasta que la persona elige un tema con el botón.
export function useTheme() {
  const [choice, setChoice] = useState(storedChoice);
  const [system, setSystem] = useState(() => (query().matches ? "dark" : "light"));

  useEffect(() => {
    const m = query();
    const onChange = (e) => setSystem(e.matches ? "dark" : "light");
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);

  const theme = choice ?? system;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#000000" : "#f5f5f7");
  }, [theme]);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setTimeout(() => root.classList.remove("theme-transition"), 450);
    const next = theme === "dark" ? "light" : "dark";
    setChoice(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }, [theme]);

  return { theme, toggle };
}
