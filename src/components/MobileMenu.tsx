import React, { useEffect } from 'react';
import { MessageCircle, MapPin, Phone, ArrowRight, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';
import { InstagramIcon } from './icons/InstagramIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop oscuro */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer de Navegación Minimalista */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-brand-surface border-l border-white/[0.08] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header del menú con logotipo oficial */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
            <img
              src="/logo.png"
              alt="Hugo Repuestos"
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Enlaces de navegación minimalistas */}
          <nav className="mt-6 flex flex-col gap-1.5">
            {[
              { href: '#inicio', label: 'Inicio' },
              { href: '#categorias', label: 'Categorías de Repuestos' },
              { href: '#cotizador', label: 'Cotizar por WhatsApp' },
              { href: '#nosotros', label: 'Sobre Nosotros' },
              { href: '#ubicacion', label: 'Ubicación y Horarios' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] active:bg-white/[0.08] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </nav>
        </div>

        {/* Sección inferior con botón de contacto btn-wa estilo Kiur Code */}
        <div className="pt-6 border-t border-white/[0.08] space-y-4">
          <a
            href={getGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider btn-wa shadow-lg"
          >
            <MessageCircle className="w-4 h-4 wa-icon" />
            <span>Hablar por WhatsApp</span>
            <span className="dotlive" aria-hidden="true" />
          </a>

          <div className="space-y-2 text-xs text-slate-400 pt-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.business.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <a href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`} className="hover:text-white">
                {SITE_CONFIG.business.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              <a 
                href={SITE_CONFIG.business.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                {SITE_CONFIG.business.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
