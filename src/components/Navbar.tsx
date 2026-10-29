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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner minimalista informativo */}
      <div className="bg-brand-surface/90 border-b border-white/[0.05] py-1 px-4 text-[11px] text-slate-400 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-brand-accent" />
              <span>{SITE_CONFIG.business.address} · {SITE_CONFIG.business.city}</span>
            </span>
            <a 
              href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-slate-400" />
              <span>{SITE_CONFIG.business.phoneDisplay}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Consultas y cotizaciones online
            </span>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal minimalista */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/[0.07] py-3' 
            : 'bg-brand-dark/80 backdrop-blur-sm border-b border-white/[0.04] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logotipo Oficial Hugo Repuestos */}
          <a href="#inicio" className="group flex items-center gap-3 focus:outline-none rounded-lg">
            <img
              src="/logo.png"
              alt="Hugo Repuestos — Industrial y Automotriz"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="hidden xl:inline-block text-[10px] font-mono tracking-widest uppercase text-slate-400 border-l border-white/10 pl-2.5">
              Bariloche
            </span>
          </a>

          {/* Menú de Navegación de Escritorio Minimalista */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
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
              Nosotros
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-xs tracking-wide shadow-md shadow-whatsapp/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-whatsapp/50 group"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Botón Móvil Hamburguesa */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGeneralContactWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="sm:hidden p-2 rounded-lg bg-whatsapp text-slate-950 font-bold active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={onOpenMobileMenu}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              className="p-2 rounded-lg bg-brand-surface border border-white/[0.08] text-slate-300 hover:text-white transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
