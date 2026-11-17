import { motion } from "motion/react";

export const ease = [0.22, 1, 0.36, 1];

// Aparece cuando entra en pantalla. Una sola vez.
export function Reveal({ as = "div", children, className, delay = 0, y = 24, blur = false }) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, ...(blur ? { filter: "blur(10px)" } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </Comp>
  );
}

export function Section({ id, title, subtitle, children, after, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrap">
        <Reveal as="header" blur className="mx-auto max-w-3xl text-center">
          <h2 className="h2">{title}</h2>
          {subtitle && <p className="lead mt-4">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
      {after}
    </section>
  );
}

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SunIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const MoonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7z" />
  </svg>
);
export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const PlusIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const ChevronIcon = ({ dir = "right", ...p }) => (
  <svg {...base} {...p}>
    <path d={dir === "right" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
  </svg>
);
export const DownloadIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);
export const ArrowUpRightIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);