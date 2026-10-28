import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar tooltip después de unos segundos
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip interactivo flotante */}
      {showTooltip && (
        <div className="mb-3 max-w-[240px] bg-slate-900 border border-brand-border text-white p-3 rounded-2xl shadow-2xl relative animate-fade-in flex items-start gap-2.5">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar sugerencia"
            className="text-slate-400 hover:text-white p-0.5 absolute -top-2 -right-2 bg-slate-800 rounded-full border border-white/10"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="text-xs">
            <p className="font-bold text-emerald-400">¿Buscás repuestos?</p>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Consultanos marca y modelo por WhatsApp y te cotizamos.
            </p>
          </div>
        </div>
      )}

      {/* Botón flotante WhatsApp */}
      <a
        href={getGeneralContactWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Hugo Repuestos por WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-slate-950 flex items-center justify-center shadow-2xl shadow-whatsapp/50 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-whatsapp/40 group relative"
      >
        {/* Anillo de pulso sutil */}
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30 group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
};
