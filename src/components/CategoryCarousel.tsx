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
    <section id="categorias" className="py-20 bg-brand-surface relative overflow-hidden border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección minimalista */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase block mb-2">
              Familias de Repuestos
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
              Categorías Principales
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Explorá nuestras familias de repuestos. Consultá disponibilidad y cotización directamente por WhatsApp.
            </p>
          </div>

          {/* Controles de navegación del carrusel */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Anterior categoría"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                canScrollLeft 
                  ? 'bg-brand-card text-white hover:bg-brand-accent hover:border-brand-accent active:scale-95 border-white/[0.1]' 
                  : 'bg-brand-card/30 text-slate-600 cursor-not-allowed border-white/[0.04]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Siguiente categoría"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                canScrollRight 
                  ? 'bg-brand-card text-white hover:bg-brand-accent hover:border-brand-accent active:scale-95 border-white/[0.1]' 
                  : 'bg-brand-card/30 text-slate-600 cursor-not-allowed border-white/[0.04]'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contenedor Carrusel Horizontal con soporte touch / drag */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto pb-6 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card flex-none w-[82vw] sm:w-[350px] lg:w-[360px] snap-start rounded-2xl bg-brand-card border border-white/[0.07] overflow-hidden shadow-lg hover:border-brand-accent/40 transition-all duration-300 flex flex-col group"
            >
              {/* Imagen con overlay minimalista */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-brand-dark">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-black/30" />
                
                {/* Badge de categoría */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-black/80 backdrop-blur-md text-brand-accent border border-brand-accent/30">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {cat.shortDescription}
                  </p>

                  {/* Componentes habituales */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06]">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold mb-2">
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

                {/* Botón WhatsApp de la categoría estilo Kiur Code */}
                <div className="mt-6 pt-3.5 border-t border-white/[0.06]">
                  <a
                    href={getCategoryWhatsAppUrl(cat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider btn-wa shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 wa-icon" />
                    <span>Consultar {cat.name}</span>
                    <span className="dotlive" aria-hidden="true" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Indicadores (dots) */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir a categoría ${cat.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-6 bg-brand-accent' 
                  : 'w-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Nota informativa minimalista */}
        <div className="mt-8 p-3 rounded-xl bg-brand-card border border-white/[0.05] text-center text-xs text-slate-400 max-w-2xl mx-auto">
          ¿No encontrás tu repuesto en esta lista? Envianos marca, modelo y año por WhatsApp o la foto de la pieza y te cotizamos.
        </div>

      </div>
    </section>
  );
};
