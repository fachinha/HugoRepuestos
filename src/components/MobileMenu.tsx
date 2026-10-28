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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer de Navegación */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-brand-card border-l border-brand-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header del menú */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center">
                <span className="font-heading font-black text-white text-base">H</span>
              </div>
              <span className="font-heading font-bold text-white text-lg">HUGO REPUESTOS</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Enlaces de navegación */}
          <nav className="mt-6 flex flex-col gap-2">
            {[
              { href: '#inicio', label: 'Inicio' },
              { href: '#categorias', label: 'Categorías de Repuestos' },
              { href: '#cotizador', label: 'Cotizar por WhatsApp' },
              { href: '#ventajas', label: 'Por qué elegirnos' },
              { href: '#galeria', label: 'Galería de Productos' },
              { href: '#nosotros', label: 'Sobre Nosotros' },
              { href: '#ubicacion', label: 'Ubicación y Horarios' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>
        </div>

        {/* Sección inferior de contacto directo */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <a
            href={getGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-whatsapp/25 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>

          <div className="space-y-2 text-xs text-slate-400 pt-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.business.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-accent shrink-0" />
              <a href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`} className="hover:text-white">
                {SITE_CONFIG.business.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon className="w-4 h-4 text-pink-500 shrink-0" />
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
