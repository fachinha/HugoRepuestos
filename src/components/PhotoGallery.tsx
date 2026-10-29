import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { InstagramIcon } from './icons/InstagramIcon';

export const PhotoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gallery = SITE_CONFIG.gallery;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="py-20 bg-brand-dark relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Minimalista */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase block mb-2">
              Galería Visual
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
              Productos y Componentes Automotrices
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Imágenes referenciales de repuestos habituales. Seguinos en nuestro canal de Instagram para novedades.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-surface hover:bg-white/[0.06] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-semibold transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-pink-500" />
              <span>{SITE_CONFIG.business.instagramHandle}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Carrusel Principal de Galería */}
        <div className="relative rounded-2xl overflow-hidden bg-brand-surface border border-white/[0.08] shadow-xl">
          
          <div className="relative h-[300px] sm:h-[420px] md:h-[480px] w-full overflow-hidden">
            <img
              src={gallery[currentIndex].imageUrl}
              alt={gallery[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

            {/* Información de la foto actual */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-brand-accent text-white shadow-sm">
                  {gallery[currentIndex].category}
                </span>
                <h3 className="mt-2 font-heading font-bold text-lg sm:text-2xl text-white">
                  {gallery[currentIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {gallery[currentIndex].alt}
                </p>
              </div>

              {/* Controles de navegación */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Foto anterior"
                  className="p-2.5 rounded-xl bg-black/70 hover:bg-brand-accent text-white border border-white/20 backdrop-blur-md transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Siguiente foto"
                  className="p-2.5 rounded-xl bg-black/70 hover:bg-brand-accent text-white border border-white/20 backdrop-blur-md transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Miniaturas de selección */}
          <div className="p-3 bg-brand-surface border-t border-white/[0.06] flex items-center justify-center gap-2.5 overflow-x-auto">
            {gallery.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border transition-all shrink-0 ${
                  currentIndex === idx 
                    ? 'border-brand-accent ring-1 ring-brand-accent scale-105' 
                    : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
