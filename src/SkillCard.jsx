export default function SkillCard({ name, logo, level }) {
  return (
    <div className="relative group w-full flex flex-col items-center justify-center 
                    backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl 
                    shadow-lg p-6 hover:scale-105 hover:bg-white/20 transition overflow-hidden">
      
      {/* Logo opcional */}
      {logo && (
        <img src={logo} alt={name} className="w-12 h-12 mb-2 filter invert" />
      )}

      {/* Nombre de la skill */}
      <span>{name}</span>

      {/* Nivel (aparece en hover) */}
      <span className="absolute top-2 right-2 text-xs font-bold text-white/80 
                       opacity-1 group-hover:opacity-100 transition">
        {level}
      </span>

      {/* Reflexión brillante */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-700 ease-in-out 
                      bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      rotate-12"></div>
    </div>
  );
}
