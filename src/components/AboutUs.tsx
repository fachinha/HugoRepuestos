import React from 'react';
import { MapPin, Award, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-brand-surface border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de texto */}
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase block mb-2">
              Nuestra Identidad
            </span>
            
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Especialistas en repuestos automotrices e industriales en Bariloche
            </h2>

            <div className="mt-5 space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                En <strong className="text-white font-semibold">{SITE_CONFIG.business.name}</strong> comprendemos que cuando necesitás un repuesto para tu vehículo o maquinaria, la prioridad es conseguir la pieza exacta sin perder tiempo.
              </p>
              <p>
                Desde nuestro local ubicado en <strong className="text-white font-semibold">{SITE_CONFIG.business.address}</strong> en San Carlos de Bariloche, brindamos atención personalizada a conductores particulares, mecánicos y talleres locales, combinando conocimiento técnico de piezas con un canal directo y ágil por WhatsApp.
              </p>
              <p>
                Trabajamos líneas de rodamientos, rulemanes, kits de distribución, componentes de freno, tren delantero, suspensión, embragues y filtros, orientados a brindar soluciones confiables para las exigencias de la zona cordillerana.
              </p>
            </div>

            {/* Puntos destacados */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-card border border-white/[0.06]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Asesoramiento Real</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Te ayudamos a verificar compatibilidad con motor y chasis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-card border border-white/[0.06]">
                <Award className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Enfoque Multimarca</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Opciones para vehículos nacionales e importados.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Columna visual / Card de local minimalista con logotipo oficial */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-brand-card p-7 sm:p-8 shadow-xl">
              
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/[0.06]">
                <div>
                  <img
                    src="/logo.png"
                    alt="Hugo Repuestos"
                    className="h-9 w-auto object-contain"
                  />
                  <p className="text-[11px] font-mono text-slate-400 mt-1.5">{SITE_CONFIG.business.commercialName}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/[0.08] flex items-center justify-center text-brand-accent">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-brand-dark border border-white/[0.05]">
                  <span className="block text-[10px] font-mono uppercase font-bold text-slate-400 mb-0.5">Ubicación Física</span>
                  <span className="text-white font-medium">{SITE_CONFIG.business.fullAddress}</span>
                </div>

                <div className="p-3 rounded-xl bg-brand-dark border border-white/[0.05]">
                  <span className="block text-[10px] font-mono uppercase font-bold text-slate-400 mb-0.5">Atención Directa</span>
                  <span className="text-emerald-400 font-bold">{SITE_CONFIG.business.whatsappFormatted}</span>
                </div>

                <div className="p-3 rounded-xl bg-brand-dark border border-white/[0.05]">
                  <span className="block text-[10px] font-mono uppercase font-bold text-slate-400 mb-0.5">Teléfono Fijo Registrado</span>
                  <span className="text-slate-200 font-medium">{SITE_CONFIG.business.landlineDisplay}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <a
                  href="#cotizador"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-brand-surface hover:bg-white/[0.06] border border-white/[0.08] text-white text-xs font-semibold transition-colors"
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
