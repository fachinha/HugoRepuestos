import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { BrandCarousel } from './BrandCarousel';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-brand-dark">
      
      {/* Fondo cinematográfico automotriz con overlay minimalista */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=2000&q=80"
          alt="Taller y repuestos automotrices"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.1] scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge superior minimalista */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
            San Carlos de Bariloche · {SITE_CONFIG.business.address}
          </span>
        </div>

        {/* Título Principal Minimalista e Impactante */}
        <h1 className="max-w-4xl font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] mb-6">
          Repuestos para tu vehículo en Bariloche, con <span className="text-brand-accent underline decoration-brand-accent/40 decoration-2 underline-offset-8">asesoramiento real</span>.
        </h1>

        {/* Bajada comercial */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
          Especialistas en rodamientos, rulemanes, kits de distribución, frenos, suspensión y embragues para automotor e industria. Consultanos con marca, modelo y año.
        </p>

        {/* Botones de acción principales */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-14">
          
          {/* Botón principal animado a Cotizador */}
          <a
            href="#cotizador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group border border-brand-accent/30"
          >
            <Wrench className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Consultar por un repuesto</span>
          </a>

          {/* Botón secundario a Categorías */}
          <a
            href="#categorias"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white font-semibold text-sm sm:text-base transition-all duration-200"
          >
            <span>Ver categorías</span>
            <ArrowDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Los 3 Bloques de Confianza solicitados */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full text-left">
          
          {/* Bloque 1: Pieza Exacta / Asesoramiento técnico */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-brand-surface/80 border border-white/[0.06] backdrop-blur-sm hover:border-brand-accent/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/25 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-snug">Pieza Exacta</p>
              <p className="text-xs text-slate-400">Asesoramiento técnico</p>
            </div>
          </div>

          {/* Bloque 2: Respuesta Rápida / Atención directa por WhatsApp */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-brand-surface/80 border border-white/[0.06] backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-snug">Respuesta Rápida</p>
              <p className="text-xs text-slate-400">Atención directa por WhatsApp</p>
            </div>
          </div>

          {/* Bloque 3: Local en Bariloche / Retiro en Fagnano 1065 (Ejemplo) */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-brand-surface/80 border border-white/[0.06] backdrop-blur-sm hover:border-brand-accent/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/25 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-snug">Local en Bariloche</p>
              <p className="text-xs text-slate-400">Retiro en Fagnano 1065 (Ejemplo)</p>
            </div>
          </div>

        </div>

        {/* Carrusel Marquee de marcas de autos abarcadas (debajo de los 3 bloques) */}
        <div className="w-full max-w-4xl">
          <BrandCarousel />
        </div>

      </div>

    </section>
  );
};
