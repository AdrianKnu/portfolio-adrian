export default function SkillCard({ name, logo, level, colorHex = "#7c3aed" }) {
  return (
    <div
      className="relative group w-full flex items-center justify-between 
                 backdrop-blur-xl border rounded-2xl shadow-lg px-4 py-3 
                 hover:scale-[1.03] transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        '--hover-bg': `${colorHex}15`,
        '--hover-border': `${colorHex}50`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
        e.currentTarget.style.borderColor = 'var(--hover-border)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
      }}
    >
      <div className="flex items-center gap-3">
        {logo ? (
          <img src={logo} alt={name} className="w-7 h-7 filter invert opacity-80 group-hover:opacity-100 transition-opacity object-contain" />
        ) : (
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorHex }} />
        )}
        <span className="text-white font-medium text-sm md:text-base tracking-wide">{name}</span>
      </div>

      {level && (
        <span className="text-[10px] uppercase tracking-wider font-semibold text-white/50 bg-white/5 px-2 py-0.5 rounded-full group-hover:text-white/90 group-hover:bg-white/10 transition-colors">
          {level}
        </span>
      )}
    </div>
  );
}
