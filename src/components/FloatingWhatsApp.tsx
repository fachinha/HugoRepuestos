import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip interactivo flotante minimalista */}
      {showTooltip && (
        <div className="mb-3 max-w-[220px] bg-brand-surface border border-white/[0.08] text-white p-3 rounded-xl shadow-2xl relative flex items-start gap-2">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar sugerencia"
            className="text-slate-400 hover:text-white p-0.5 absolute -top-1.5 -right-1.5 bg-brand-card rounded-full border border-white/[0.08]"
          >
            <X className="w-3 h-3" />
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
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-slate-950 flex items-center justify-center shadow-xl shadow-whatsapp/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none group relative"
      >
        <MessageCircle className="w-7 h-7 fill-current relative z-10 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
};
