import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[88vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-20">
      
      {/* Imagen de fondo con gradientes oscuros para contraste cinematográfico */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=2000&q=80"
          alt="Taller y repuestos mecánicos automotrices"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle filter brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]" />
        
        {/* Grilla geométrica sutil automotriz */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge de localización y especialidad */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-inner">
          <MapPin className="w-4 h-4 text-brand-accent animate-bounce" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 uppercase">
            San Carlos de Bariloche · {SITE_CONFIG.business.address}
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="max-w-4xl font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6">
          Repuestos para tu vehículo en Bariloche, con <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-brand-accent to-red-400">asesoramiento real</span>.
        </h1>

        {/* Bajada comercial sobria y fidedigna */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          Especialistas en rodamientos, rulemanes, kits de distribución, frenos, suspensión y embragues para automotor e industria. Consultanos con la marca, modelo y año de tu vehículo.
        </p>

        {/* Botones de acción principales */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          
          {/* Botón principal animado a WhatsApp */}
          <a
            href="#cotizador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-base shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group border border-red-500/30"
          >
            <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Consultar por un repuesto</span>
          </a>

          {/* Botón secundario a Categorías */}
          <a
            href="#categorias"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-semibold text-base backdrop-blur-sm transition-all duration-200 hover:border-white/30"
          >
            <span>Ver categorías de repuestos</span>
            <ArrowDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Chips de confianza rápida */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl w-full pt-4 border-t border-white/10 text-left">
          
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-brand-accent/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Pieza Exacta</p>
              <p className="text-xs text-slate-400">Asesoramiento técnico</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Respuesta Rápida</p>
              <p className="text-xs text-slate-400">Atención directa por WhatsApp</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-500/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Local en Bariloche</p>
              <p className="text-xs text-slate-400">Retiro en Fagnano 1065</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
