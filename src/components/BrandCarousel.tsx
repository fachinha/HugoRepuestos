import React from 'react';

const BRANDS = [
  'Renault',
  'Volkswagen',
  'Ford',
  'Chevrolet',
  'Toyota',
  'Fiat',
  'Peugeot',
  'Citroën',
  'Nissan',
  'Honda',
  'Jeep',
  'Audi',
  'Hyundai',
  'Kia',
  'Mercedes-Benz',
  'BMW'
];

export const BrandCarousel: React.FC = () => {
  // Duplicamos el array para lograr el loop infinito continuo de Kiur Code
  const brandsList = [...BRANDS, ...BRANDS, ...BRANDS];

  const handleBrandClick = (brandName: string) => {
    const quoteSection = document.getElementById('cotizador');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      const brandInput = document.getElementById('brand-input') as HTMLInputElement | null;
      if (brandInput) {
        brandInput.value = brandName;
        brandInput.dispatchEvent(new Event('input', { bubbles: true }));
        brandInput.focus();
      }
    }
  };

  return (
    <div className="w-full mt-10">
      {/* Carrusel de marcas idéntico en estructura y CSS al de Kiur Code */}
      <div className="w-full py-4 bg-zinc-950 border-y border-zinc-900 marquee-container">
        <div className="flex w-max marquee-content animate-marquee">
          {brandsList.map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              onClick={() => handleBrandClick(brand)}
              title={`Cotizar repuesto para ${brand}`}
              className="flex items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap cursor-pointer hover:text-brand-accent transition-colors select-none"
            >
              <span>{brand}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
