// Ilustraciones simples de cada proyecto. Solo usan los colores del tema.

const line = "var(--line-strong)";

export function ThesisMotif() {
  return (
    <svg viewBox="0 0 380 170" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* documento digitalizado */}
      <rect x="6" y="16" width="78" height="126" rx="10" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      {[36, 52, 68, 84, 100, 116].map((y, k) => (
        <rect
          key={y}
          x="20"
          y={y}
          width={k === 5 ? 30 : 50}
          height="6"
          rx="3"
          fill={k === 2 ? "var(--accent)" : line}
          opacity={k === 2 ? 1 : 0.5}
        />
      ))}
      {/* fragmentos */}
      <path d="M84 79 C108 79 108 34 132 34" stroke={line} strokeWidth="1.5" fill="none" />
      <path d="M84 79 H132" stroke="var(--accent)" strokeWidth="2" fill="none" />
      <path d="M84 79 C108 79 108 124 132 124" stroke={line} strokeWidth="1.5" fill="none" />
      {[20, 65, 110].map((y, k) => (
        <g key={y}>
          <rect x="132" y={y} width="66" height="28" rx="8" fill="var(--soft)" stroke={k === 1 ? "var(--accent)" : line} strokeWidth={k === 1 ? 2 : 1.5} />
          <rect x="142" y={y + 9} width="34" height="4" rx="2" fill={k === 1 ? "var(--accent)" : line} opacity="0.6" />
          <rect x="142" y={y + 17} width="46" height="4" rx="2" fill={line} opacity="0.4" />
        </g>
      ))}
      {/* modelo pequeño */}
      <path d="M198 79 H244" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <circle cx="270" cy="79" r="26" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      {[
        [259, 70],
        [281, 70],
        [270, 88],
        [259, 92],
        [281, 92],
      ].map(([cx, cy], k) => (
        <circle key={k} cx={cx} cy={cy} r="3.5" fill={k === 2 ? "var(--accent)" : line} />
      ))}
      {/* respuesta con cita */}
      <path d="M296 79 H312" stroke="var(--accent)" strokeWidth="2" fill="none" />
      <rect x="312" y="46" width="64" height="66" rx="12" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      <rect x="322" y="58" width="44" height="5" rx="2.5" fill={line} opacity="0.6" />
      <rect x="322" y="69" width="36" height="5" rx="2.5" fill={line} opacity="0.6" />
      <text x="322" y="98" fontSize="13" fontWeight="600" fill="var(--accent)">
        [1]
      </text>
    </svg>
  );
}

export function MvcMotif() {
  return (
    <svg viewBox="0 0 260 150" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {[
        ["View", 10],
        ["Controller", 54],
        ["Model", 98],
      ].map(([label, y], k) => (
        <g key={label}>
          <rect x="8" y={y} width="150" height="36" rx="10" fill="var(--soft)" stroke={k === 1 ? "var(--accent)" : line} strokeWidth={k === 1 ? 2 : 1.5} />
          <text x="24" y={y + 23} fontSize="13" fontWeight="500" fill="var(--fg)">
            {label}
          </text>
        </g>
      ))}
      <path d="M83 46 V54 M83 90 V98" stroke={line} strokeWidth="1.5" />
      {/* base de datos */}
      <path d="M158 116 H198" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
      <ellipse cx="226" cy="98" rx="24" ry="8" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      <path d="M202 98 V132 C202 143 250 143 250 132 V98" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      <path d="M202 114 C202 125 250 125 250 114" fill="none" stroke={line} strokeWidth="1.5" />
    </svg>
  );
}

export function BrowserMotif() {
  return (
    <svg viewBox="0 0 260 150" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="mini-g" x1="0" x2="1">
          <stop offset="0" style={{ stopColor: "var(--g1)" }} />
          <stop offset="0.5" style={{ stopColor: "var(--g2)" }} />
          <stop offset="1" style={{ stopColor: "var(--g3)" }} />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="244" height="134" rx="14" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      <path d="M8 34 H252" stroke={line} strokeWidth="1.5" />
      {[24, 36, 48].map((cx) => (
        <circle key={cx} cx={cx} cy="21" r="3.5" fill={line} />
      ))}
      <rect x="54" y="56" width="152" height="14" rx="7" fill="url(#mini-g)" />
      <rect x="74" y="80" width="112" height="6" rx="3" fill={line} opacity="0.55" />
      <rect x="86" y="92" width="88" height="6" rx="3" fill={line} opacity="0.4" />
      {[88, 112, 136].map((x, k) => (
        <rect key={x} x={x} y="112" width="28" height="12" rx="6" fill={k === 0 ? "var(--accent)" : "none"} stroke={k === 0 ? "none" : line} strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export function CodeMotif() {
  return (
    <svg viewBox="0 0 160 70" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <g fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M46 14 L18 35 L46 56" />
        <path d="M114 14 L142 35 L114 56" />
        <path d="M91 8 L69 62" stroke="var(--line-strong)" />
      </g>
    </svg>
  );
}

export function DbMotif() {
  return (
    <svg viewBox="0 0 260 150" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* base de datos */}
      <ellipse cx="52" cy="38" rx="34" ry="11" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      <path d="M18 38 V104 C18 122 86 122 86 104 V38" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      <path d="M18 62 C18 80 86 80 86 62" fill="none" stroke={line} strokeWidth="1.5" />
      <path d="M18 84 C18 102 86 102 86 84" fill="none" stroke={line} strokeWidth="1.5" />
      {/* trigger */}
      <path d="M92 72 H130" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <path d="M120 63 L132 72 L120 81" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* registro de auditoría */}
      <rect x="142" y="22" width="108" height="106" rx="12" fill="var(--soft)" stroke={line} strokeWidth="1.5" />
      {[40, 60, 80, 100].map((y, k) => (
        <g key={y}>
          <rect x="154" y={y} width="22" height="6" rx="3" fill={k === 1 ? "var(--accent)" : line} opacity={k === 1 ? 1 : 0.55} />
          <rect x="184" y={y} width="54" height="6" rx="3" fill={line} opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

export function NotesMotif() {
  return (
    <svg viewBox="0 0 260 150" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* categorías */}
      <rect x="10" y="10" width="46" height="20" rx="10" fill="var(--accent)" />
      <rect x="62" y="10" width="46" height="20" rx="10" fill="none" stroke={line} strokeWidth="1.5" />
      <rect x="114" y="10" width="46" height="20" rx="10" fill="none" stroke={line} strokeWidth="1.5" />
      {/* notas */}
      {[10, 92, 174].map((x, k) => (
        <g key={x}>
          <rect x={x} y="46" width="76" height="92" rx="12" fill="var(--soft)" stroke={k === 0 ? "var(--accent)" : line} strokeWidth={k === 0 ? 2 : 1.5} />
          <rect x={x + 10} y="60" width="40" height="6" rx="3" fill={k === 0 ? "var(--accent)" : line} opacity={k === 0 ? 1 : 0.6} />
          <rect x={x + 10} y="76" width="56" height="5" rx="2.5" fill={line} opacity="0.45" />
          <rect x={x + 10} y="88" width="48" height="5" rx="2.5" fill={line} opacity="0.45" />
          <rect x={x + 10} y="118" width="26" height="10" rx="5" fill={k === 0 ? "var(--accent)" : "none"} stroke={k === 0 ? "none" : line} strokeWidth="1.5" opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

export const MOTIFS = {
  thesis: ThesisMotif,
  mvc: MvcMotif,
  browser: BrowserMotif,
  code: CodeMotif,
  db: DbMotif,
  notes: NotesMotif,
};