import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';
import { InstagramIcon } from './icons/InstagramIcon';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-surface relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Resplandor radial minimalista de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-card border border-white/[0.08] text-slate-300 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
          Atención en Bariloche
        </div>

        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
          ¿Necesitás un repuesto para tu vehículo?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Escribinos por WhatsApp con la marca, modelo y año. Te confirmamos disponibilidad y cotización rápidamente.
        </p>

        {/* Botones de Conversión Minimalistas */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp para cotizar repuestos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-whatsapp/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none"
          >
            <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-card hover:bg-white/[0.06] border border-white/[0.08] text-white font-medium text-sm sm:text-base transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-accent" />
            <span>Llamar al {SITE_CONFIG.business.phoneDisplay}</span>
          </a>
        </div>

        {/* Enlace al Instagram Oficial */}
        <div className="mt-7">
          <a
            href={SITE_CONFIG.business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
            <span>Seguinos en Instagram: <strong className="text-slate-200 font-semibold">{SITE_CONFIG.business.instagramHandle}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
};
