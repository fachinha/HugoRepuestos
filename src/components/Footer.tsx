import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';
import { InstagramIcon } from './icons/InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-400 text-xs border-t border-brand-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1: Identidad del negocio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accent to-red-900 flex items-center justify-center text-white font-heading font-black text-lg shadow-md">
                H
              </div>
              <div>
                <span className="font-heading font-black text-lg tracking-wider text-white">
                  HUGO <span className="text-brand-accent">REPUESTOS</span>
                </span>
                <p className="text-[10px] text-slate-500 uppercase font-semibold">
                  San Carlos de Bariloche
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Venta de repuestos para el automotor e industria en Bariloche. Especialistas en rodamientos, rulemanes, distribución, frenos y embragues.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Hugo Repuestos"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
              </a>

              <a
                href={getGeneralContactWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Hugo Repuestos"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-white/5 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación rápida */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Categorías de Repuestos</a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-white transition-colors">Cotizar por WhatsApp</a>
              </li>
              <li>
                <a href="#ventajas" className="hover:text-white transition-colors">Ventajas de comprar aquí</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galería de Productos</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">Ubicación y Horarios</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Categorías habituales */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Líneas Principales
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Rodamientos y Rulemanes</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Kits de Distribución y Correas</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Pastillas y Discos de Freno</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Amortiguadores y Tren Delantero</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Placas y Discos de Embrague</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Filtros y Mantenimiento</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Bariloche */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Atención en Bariloche
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.business.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={getGeneralContactWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-400 font-semibold"
                >
                  WhatsApp: {SITE_CONFIG.business.phoneDisplay}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                {SITE_CONFIG.business.hours.weekdays}
              </div>
            </div>
          </div>

        </div>

        {/* Separador inferior */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left text-slate-500">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.business.name}. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">·</span>
            <span>San Carlos de Bariloche, Patagonia Argentina.</span>
          </div>

          {/* Crédito discreto de desarrollo web por Kiur Code */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sitio web de Kiur Code"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/5 hover:border-brand-accent/30 text-[11px] text-slate-400 hover:text-white transition-all duration-200"
            >
              <span>Desarrollo web por</span>
              <strong className="text-white group-hover:text-brand-accent transition-colors font-bold">
                {SITE_CONFIG.developerCredit.agency}
              </strong>
            </a>

            {/* Botón volver arriba */}
            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
