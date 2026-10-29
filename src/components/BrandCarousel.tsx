import React from 'react';

export interface VehicleBrand {
  name: string;
  country: string;
}

const BRANDS: VehicleBrand[] = [
  { name: 'Renault', country: 'Línea Nacional / Importada' },
  { name: 'Volkswagen', country: 'Línea Completa' },
  { name: 'Ford', country: 'Pick-ups y Autos' },
  { name: 'Chevrolet', country: 'Motores y Tren Delantero' },
  { name: 'Toyota', country: 'Hilux, Corolla, Etios' },
  { name: 'Fiat', country: 'Línea Nafta y Diésel' },
  { name: 'Peugeot', country: 'Distribución y Suspensión' },
  { name: 'Citroën', country: 'Repuestos de Freno y Rodamiento' },
  { name: 'Nissan', country: 'Frontier, Versa, Kicks' },
  { name: 'Honda', country: 'Civic, Fit, HR-V' },
  { name: 'Jeep', country: 'Renegade, Compass' },
  { name: 'Audi', country: 'Gama VAG' },
  { name: 'Hyundai', country: 'Línea Utilitarios y Autos' },
  { name: 'Kia', country: 'Línea Utilitarios y Autos' }
];

export const BrandCarousel: React.FC = () => {
  // Duplicamos para loop continuo perfecto
  const brandsList = [...BRANDS, ...BRANDS];

  const handleBrandClick = (brandName: string) => {
    // Al hacer clic en una marca, scrollear suavemente al cotizador y enfocar el campo
    const quoteSection = document.getElementById('cotizador');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      // disparar evento o foco si existe el input
      const brandInput = document.getElementById('brand-input') as HTMLInputElement | null;
      if (brandInput) {
        brandInput.value = brandName;
        brandInput.dispatchEvent(new Event('input', { bubbles: true }));
        brandInput.focus();
      }
    }
  };

  return (
    <div className="w-full mt-10 pt-8 border-t border-white/[0.06] relative">
      
      {/* Etiqueta superior minimalista */}
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
          Repuestos para principales marcas de plaza
        </span>
        <span className="text-[11px] font-mono text-brand-accent hidden sm:inline-block">
          • Asesoramiento multimarca
        </span>
      </div>

      {/* Contenedor del Carrusel Marquee con degradados en los extremos para desvanecimiento suave */}
      <div className="relative overflow-hidden w-full py-2 marquee-pause">
        {/* Degradado izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        {/* Degradado derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        {/* Pista animada continua */}
        <div className="flex items-center gap-3 w-max animate-marquee">
          {brandsList.map((brand, idx) => (
            <button
              key={`${brand.name}-${idx}`}
              type="button"
              onClick={() => handleBrandClick(brand.name)}
              title={`Consultar repuestos para ${brand.name}`}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-surface/90 hover:bg-brand-card border border-white/[0.06] hover:border-brand-accent/50 text-slate-200 hover:text-white transition-all duration-200 shadow-sm shrink-0 active:scale-95 text-left cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full bg-brand-accent/70 group-hover:bg-brand-accent group-hover:scale-125 transition-all shrink-0" />
              <div>
                <span className="font-heading font-bold text-sm tracking-wide text-white group-hover:text-brand-accent transition-colors block">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 block group-hover:text-slate-300">
                  {brand.country}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-[11px] text-slate-400 mt-2">
        Hacé clic en cualquier marca para cotizar tu repuesto específico.
      </p>

    </div>
  );
};
