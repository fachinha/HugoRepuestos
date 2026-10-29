import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
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

        {/* Botón de Contacto copiado exactamente de Kiur Code (.btn-wa + .dotlive) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp con Hugo Repuestos"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wider uppercase btn-wa shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 wa-icon" />
            <span>Contactar</span>
            <span className="dotlive" aria-hidden="true" />
          </a>
        </div>

        {/* Botón Móvil Hamburguesa */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="sm:hidden p-2.5 rounded-full btn-wa text-white font-bold active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 wa-icon" />
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
  );
};
