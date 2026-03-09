export default function SkillCard({ name, logo, level, colorHex = "#7c3aed" }) {
  return (
    <div
      className="relative group w-full flex flex-col items-center justify-center 
                 backdrop-blur-lg border rounded-xl shadow-lg p-6 
                 hover:scale-105 transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        '--hover-bg': `${colorHex}15`,     // 15 = low opacity hex
        '--hover-border': `${colorHex}80`, // 80 = 50% opacity hex
        '--hover-shadow': `0 0 20px ${colorHex}40`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
        e.currentTarget.style.borderColor = 'var(--hover-border)';
        e.currentTarget.style.boxShadow = 'var(--hover-shadow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >

      {/* Logo opcional */}
      {logo && (
        <img src={logo} alt={name} className="w-12 h-12 mb-2 filter invert" />
      )}

      {/* Nombre de la skill */}
      <span className="text-white font-medium">{name}</span>

      {/* Nivel (aparece en hover) */}
      <span className="absolute top-2 right-2 text-xs font-bold text-white/80 
                       opacity-0 group-hover:opacity-100 transition duration-300">
        {level}
      </span>

      {/* Reflexión brillante (liquid glass move effect) */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-700 ease-in-out 
                      bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      rotate-12 pointer-events-none"></div>
    </div>
  );
}
