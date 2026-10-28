import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';
import { InstagramIcon } from './icons/InstagramIcon';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-card/60 via-slate-900 to-black relative overflow-hidden border-t border-brand-border/60">
      
      {/* Resplandor radial de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" />
          Atención Directa en Bariloche
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
          ¿Necesitás un repuesto para tu vehículo?
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Escribinos por WhatsApp con la marca, modelo y año. Te confirmamos disponibilidad y cotización rápidamente para que soluciones tu mecánica sin complicaciones.
        </p>

        {/* Botón Principal de Conversión */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp para cotizar repuestos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-heading font-extrabold text-base sm:text-lg shadow-2xl shadow-whatsapp/30 hover:shadow-whatsapp/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group focus:outline-none focus:ring-4 focus:ring-whatsapp/40"
          >
            <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-white font-semibold text-base transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-brand-accent" />
            <span>Llamar al {SITE_CONFIG.business.phoneDisplay}</span>
          </a>
        </div>

        {/* Enlace al Instagram Oficial */}
        <div className="mt-8">
          <a
            href={SITE_CONFIG.business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors py-1"
          >
            <InstagramIcon className="w-4 h-4 text-pink-500" />
            <span>Seguinos en Instagram: <strong className="text-slate-200 font-semibold">{SITE_CONFIG.business.instagramHandle}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
};
