import React from 'react';
import { ArrowDown, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BrandCarousel } from './BrandCarousel';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[86vh] flex flex-col justify-between overflow-hidden pt-8 pb-0 bg-brand-dark">
      
      {/* Fondo cinematográfico automotriz con overlay minimalista */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=2000&q=80"
          alt="Taller y repuestos automotrices"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center flex-1 justify-center py-6">

        {/* Título Principal */}
        <h1 className="max-w-4xl font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] mb-6">
          Repuestos para tu vehículo en Bariloche, con <span className="text-brand-accent underline decoration-brand-accent/40 decoration-2 underline-offset-8">asesoramiento real</span>.
        </h1>

        {/* Bajada comercial */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
          Especialistas en rodamientos, rulemanes, kits de distribución, frenos, suspensión y embragues para automotor e industria. Consultanos con marca, modelo y año.
        </p>

        {/* Botones de acción principales */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12">
          
          {/* Botón Principal animado con flecha hacia abajo (.btn-wa + .dotlive) */}
          <a
            href="#cotizador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase btn-wa shadow-md hover:shadow-xl transition-all group"
          >
            <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
            <span>Consultar por un repuesto</span>
            <span className="dotlive" aria-hidden="true" />
          </a>

          {/* Botón secundario a Categorías */}
          <a
            href="#categorias"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 hover:text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200"
          >
            <span>Ver categorías</span>
            <ArrowDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Las 3 Tarjetas interactivas con Cotización Online en fondo rojo de alta visibilidad */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full text-left mb-6">
          
          {/* Tarjeta 1: Cotización Online (Fondo Rojo de Alta Visibilidad) */}
          <a
            href="#cotizador"
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-brand-accent hover:bg-[#e02800] text-white shadow-xl shadow-brand-accent/25 border border-brand-accent/80 transition-all duration-200 group cursor-pointer hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white leading-snug flex items-center gap-1.5">
                <span>Cotización Online</span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </p>
              <p className="text-xs text-white/90 font-medium">Respuesta rápida para tu vehículo</p>
            </div>
          </a>

          {/* Tarjeta 2: Respuesta Rápida / Atención directa por WhatsApp (Clickeable a WhatsApp) */}
          <a
            href={getGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-900 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-200 group cursor-pointer hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">Respuesta Rápida</p>
              <p className="text-xs text-slate-400">Atención directa por WhatsApp</p>
            </div>
          </a>

          {/* Tarjeta 3: Local en Bariloche (Clickeable hacia la sección de ubicación) */}
          <a
            href="#ubicacion"
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-900 backdrop-blur-sm hover:border-brand-accent/50 hover:bg-white/[0.04] transition-all duration-200 group cursor-pointer hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-snug group-hover:text-brand-accent transition-colors">Local en Bariloche</p>
              <p className="text-xs text-slate-400">Retiro en Fagnano 1065 (Local 1)</p>
            </div>
          </a>

        </div>

      </div>

      {/* Carrusel Marquee de marcas */}
      <BrandCarousel />

    </section>
  );
};
