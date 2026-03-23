export default function VistasLogo({ className = "", variant = "light" }: { className?: string; variant?: "light" | "dark" }) {
  const textColor = variant === "light" ? "text-white" : "text-emerald-700";
  const borderColor = variant === "light" ? "border-white" : "border-emerald-700";

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className={`${borderColor} border-[2px] px-8 py-3 inline-block`}>
        <div className={`${textColor} font-normal tracking-[0.5em] text-3xl leading-none mb-1`}>
          VISTAS
        </div>
        <div className={`${textColor} text-xs font-light tracking-[0.3em] text-center leading-none`}>
          JOANÓPOLIS-SP
        </div>
      </div>
      <div className={`flex items-center gap-3 mt-2 ${textColor} text-[10px]`}>
        <span className="font-extralight whitespace-nowrap">estilo de morar biosphere</span>
        <span className="font-normal whitespace-nowrap">by C. REYMOND</span>
      </div>
    </div>
  );
}
