import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu, isMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner informativo con teléfono y dirección de Bariloche */}
      <div className="bg-slate-900/90 border-b border-white/5 py-1.5 px-4 text-xs text-slate-400 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>{SITE_CONFIG.business.address} · {SITE_CONFIG.business.city}</span>
            </span>
            <a 
              href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>{SITE_CONFIG.business.phoneDisplay}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Atención y cotizaciones por WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border/80 shadow-2xl shadow-black/50 py-3.5' 
            : 'bg-brand-dark/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logotipo */}
          <a href="#inicio" className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-red-900 flex items-center justify-center shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform duration-200">
              {/* Gear / Automotive Icon */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-wider text-white flex items-center gap-1.5">
                HUGO <span className="text-brand-accent">REPUESTOS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold">
                San Carlos de Bariloche
              </span>
            </div>
          </a>

          {/* Menú de Navegación de Escritorio */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a 
              href="#inicio" 
              className="hover:text-white transition-colors duration-150 py-1"
            >
              Inicio
            </a>
            <a 
              href="#categorias" 
              className="hover:text-white transition-colors duration-150 py-1"
            >
              Categorías
            </a>
            <a 
              href="#cotizador" 
              className="hover:text-white transition-colors duration-150 py-1"
            >
              Cotizar Repuesto
            </a>
            <a 
              href="#ventajas" 
              className="hover:text-white transition-colors duration-150 py-1"
            >
              Ventajas
            </a>
            <a 
              href="#nosotros" 
              className="hover:text-white transition-colors duration-150 py-1"
            >
              Sobre Nosotros
            </a>
            <a 
              href="#ubicacion" 
              className="hover:text-white transition-colors duration-150 py-1"
            >
              Ubicación
            </a>
          </nav>

          {/* Botón WhatsApp de Acción Rápida (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getGeneralContactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por WhatsApp con Hugo Repuestos"
              className="relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-semibold text-sm shadow-lg shadow-whatsapp/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-whatsapp/50 group"
            >
              <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Botón Móvil Hamburguesa */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGeneralContactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="sm:hidden p-2.5 rounded-xl bg-whatsapp text-slate-950 font-semibold shadow-md active:scale-95 transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={onOpenMobileMenu}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              className="p-2.5 rounded-xl bg-slate-900 border border-brand-border text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
