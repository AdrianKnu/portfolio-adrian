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
  const [indicatorStyle, setIndicatorStyle] = useState({});
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

  useEffect(() => {
    const activeLink = document.querySelector(`#nav-${active} a`);
    const navList = document.querySelector("#nav-list");

    if (activeLink && navList) {
      const linkRect = activeLink.getBoundingClientRect();
      const listRect = navList.getBoundingClientRect();

      setIndicatorStyle({
        transform: `translateX(${linkRect.left - listRect.left}px) translateY(${linkRect.top - listRect.top}px)`,
        width: `${linkRect.width}px`,
        height: `${linkRect.height}px`,
      });
    }
  }, [active]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
        {/* Nombre a la izquierda */}
        <h1 className="text-lg md:text-xl font-bold tracking-wide text-white">
          Adrian Knuppelholz
        </h1>

        {/* === Desktop Nav === */}
        <ul
          id="nav-list"
          className="hidden md:flex relative space-x-6 text-white font-medium"
        >
          {/* Indicador cristal */}
          <div
            className="absolute rounded-lg liquid-glass backdrop-blur-lg shadow-md transition-all duration-500 ease-in-out"
            style={indicatorStyle}
          ></div>

          {sections.map((s) => (
            <li key={s.id} id={`nav-${s.id}`} className="relative z-10">
              <a
                href={`#${s.id}`}
                onClick={() => setActive(s.id)}
                className="px-3 py-2 block"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* === Mobile Hamburger === */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => {
                    setActive(s.id);
                    setMenuOpen(false); // 🔑 Cierra menú al clickear
                  }}
                  className="px-4 py-2 rounded-lg hover:bg-white/20 transition"
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
