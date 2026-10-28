import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getCategoryWhatsAppUrl } from '../utils/whatsapp';

export const CategoryCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = SITE_CONFIG.categories;

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);

    const cardWidth = el.clientWidth * 0.85;
    const currentIdx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(categories.length - 1, Math.max(0, currentIdx)));
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>('.category-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section id="categorias" className="py-20 bg-brand-card/60 relative overflow-hidden border-y border-brand-border/60">
      
      {/* Luz ambiental automotriz */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              Líneas de Repuestos
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Categorías Principales
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Deslizá para explorar nuestras familias de repuestos. Consultá disponibilidad y cotización directamente por WhatsApp.
            </p>
          </div>

          {/* Controles de navegación del carrusel */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Anterior categoría"
              className={`p-3 rounded-xl border border-brand-border transition-all duration-200 ${
                canScrollLeft 
                  ? 'bg-slate-900 text-white hover:bg-brand-accent hover:border-brand-accent active:scale-95 shadow-lg' 
                  : 'bg-slate-900/40 text-slate-600 cursor-not-allowed border-white/5'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Siguiente categoría"
              className={`p-3 rounded-xl border border-brand-border transition-all duration-200 ${
                canScrollRight 
                  ? 'bg-slate-900 text-white hover:bg-brand-accent hover:border-brand-accent active:scale-95 shadow-lg' 
                  : 'bg-slate-900/40 text-slate-600 cursor-not-allowed border-white/5'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contenedor Carrusel Horizontal con soporte touch / drag */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card flex-none w-[82vw] sm:w-[360px] lg:w-[380px] snap-start rounded-2xl bg-slate-900/90 border border-brand-border/80 overflow-hidden shadow-xl hover:shadow-2xl hover:border-brand-accent/40 transition-all duration-300 flex flex-col group"
            >
              {/* Imagen con overlay */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                
                {/* Badge de categoría */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-red-400 border border-red-500/30">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-red-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cat.shortDescription}
                  </p>

                  {/* Componentes habituales / bullet points */}
                  <div className="mt-4 pt-3.5 border-t border-white/5">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Artículos frecuentes:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {cat.commonParts.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botón de acción WhatsApp para la categoría */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={getCategoryWhatsAppUrl(cat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all duration-200 transform group-hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-whatsapp/50"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consultar {cat.name}</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Indicadores (dots) para navegación en móviles y escritorio */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir a categoría ${cat.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-8 bg-brand-accent' 
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Nota informativa de transparencia */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          ¿No encontrás el repuesto que buscás en esta lista? Envianos marca, modelo y año por WhatsApp o la foto de la pieza que necesitás cambiar y te respondemos a la brevedad.
        </div>

      </div>
    </section>
  );
};
