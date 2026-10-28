import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, ExternalLink } from 'lucide-react';
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
    <section id="galeria" className="py-20 bg-brand-dark relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              Galería Visual
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
              Productos y Componentes Automotrices
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Explorá algunos de los repuestos mecánicos habituales de nuestro catálogo. Podés seguir nuestras novedades también en Instagram.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-brand-border text-xs sm:text-sm font-semibold transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-pink-500" />
              <span>Ver en Instagram ({SITE_CONFIG.business.instagramHandle})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Carrusel Principal de Galería */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-brand-border shadow-2xl">
          
          <div className="relative h-[320px] sm:h-[450px] md:h-[520px] w-full overflow-hidden">
            <img
              src={gallery[currentIndex].imageUrl}
              alt={gallery[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Información de la foto actual */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/90 text-white backdrop-blur-md">
                  {gallery[currentIndex].category}
                </span>
                <h3 className="mt-2 font-heading font-bold text-xl sm:text-2xl text-white">
                  {gallery[currentIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {gallery[currentIndex].alt}
                </p>
              </div>

              {/* Controles de navegación */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Foto anterior"
                  className="p-3 rounded-xl bg-black/60 hover:bg-brand-accent text-white border border-white/20 backdrop-blur-md transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Siguiente foto"
                  className="p-3 rounded-xl bg-black/60 hover:bg-brand-accent text-white border border-white/20 backdrop-blur-md transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Miniaturas de selección rápida */}
          <div className="p-4 bg-slate-950/90 border-t border-brand-border/60 flex items-center justify-center gap-3 overflow-x-auto">
            {gallery.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx 
                    ? 'border-brand-accent scale-105' 
                    : 'border-transparent opacity-60 hover:opacity-100'
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
