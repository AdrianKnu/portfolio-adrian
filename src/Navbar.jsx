import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "educacion", label: "Educación" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex justify-between items-center shadow-2xl">
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center w-full justify-around space-x-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setActive(s.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${active === s.id
                    ? "bg-white/10 text-white shadow-inner"
                    : "text-white/60 hover:text-white"
                  }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Header Version */}
        <div className="md:hidden flex justify-between items-center w-full px-4 py-1">
          <span className="font-display font-bold text-white tracking-tight">AK</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl overflow-hidden p-2">
          <ul className="flex flex-col space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => {
                    setActive(s.id);
                    setMenuOpen(false);
                  }}
                  className={`block px-6 py-4 rounded-2xl transition-all duration-300 text-base font-medium ${active === s.id
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/5"
                    }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
