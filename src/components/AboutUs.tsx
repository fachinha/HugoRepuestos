import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
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

          {/* Columna visual / Fotografía real del equipo en el local */}
          <div className="relative group">
            {/* Resplandor ambiental cálido de fondo */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-accent/20 via-orange-500/10 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-brand-card shadow-2xl">
              <img
                src="/images/hugorepuestos-personal.jpg"
                alt="Equipo de Hugo Repuestos en el mostrador del local en Bariloche"
                loading="lazy"
                className="w-full h-auto max-h-[580px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
