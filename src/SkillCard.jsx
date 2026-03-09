export default function SkillCard({ name, logo, level, colorHex = "#7c3aed" }) {
  return (
    <div
      className="relative group w-full flex flex-col items-center justify-center 
                 backdrop-blur-xl border rounded-[2rem] shadow-xl p-8 
                 hover:scale-105 transition-all duration-500 overflow-hidden"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        '--hover-bg': `${colorHex}10`,
        '--hover-border': `${colorHex}40`,
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

      {/* Logo opcional */}
      {logo && (
        <img src={logo} alt={name} className="w-14 h-14 mb-4 filter invert opacity-80 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Nombre de la skill */}
      <span className="text-white font-medium text-lg">{name}</span>

      {/* Nivel (aparece en hover) */}
      <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold text-white/40 
                       opacity-0 group-hover:opacity-100 transition duration-300">
        {level}
      </span>
    </div>
  );
}
