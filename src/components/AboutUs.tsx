import React from 'react';
import { Shield, MapPin, Award, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-brand-card/40 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de texto */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              Nuestra Identidad
            </div>
            
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Especialistas en repuestos automotrices e industriales en Bariloche
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                En <strong className="text-white font-semibold">{SITE_CONFIG.business.name}</strong> comprendemos que cuando necesitás un repuesto para tu vehículo o maquinaria, la prioridad es conseguir la pieza exacta sin dar vueltas ni perder tiempo.
              </p>
              <p>
                Desde nuestro local ubicado en <strong className="text-white font-semibold">{SITE_CONFIG.business.address}</strong> en San Carlos de Bariloche, brindamos atención personalizada a conductores particulares, mecánicos y talleres locales, combinando conocimiento técnico de piezas con un canal directo y dinámico de atención por WhatsApp.
              </p>
              <p>
                Trabajamos líneas de rodamientos, rulemanes, kits de distribución, componentes de freno, tren delantero, suspensión, embragues y filtros, orientados a brindar soluciones confiables para las exigencias de los caminos de la cordillera.
              </p>
            </div>

            {/* Puntos destacados */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Asesoramiento Real</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Te ayudamos a verificar compatibilidad con motor y chasis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <Award className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Enfoque Multimarca</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Opciones para marcas nacionales e importadas.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Columna visual / Card de local */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-border bg-slate-900 p-8 shadow-2xl">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-white">Hugo Repuestos</h3>
                  <p className="text-xs text-slate-400">{SITE_CONFIG.business.commercialName}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5">
                  <span className="block text-[11px] uppercase font-bold text-slate-500 mb-1">Ubicación</span>
                  <span className="text-white font-medium">{SITE_CONFIG.business.fullAddress}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5">
                  <span className="block text-[11px] uppercase font-bold text-slate-500 mb-1">Canal Principal de Consultas</span>
                  <span className="text-emerald-400 font-bold">{SITE_CONFIG.business.whatsappFormatted}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5">
                  <span className="block text-[11px] uppercase font-bold text-slate-500 mb-1">Teléfono Fijo Registrado</span>
                  <span className="text-slate-300 font-medium">{SITE_CONFIG.business.landlineDisplay}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <a
                  href="#cotizador"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Consultar disponibilidad de repuestos
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
