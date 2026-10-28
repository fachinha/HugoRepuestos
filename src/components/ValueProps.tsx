import React from 'react';
import { Wrench, MessageCircle, Layers, MapPin, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const iconMap: { [key: string]: React.ElementType } = {
  Wrench,
  MessageCircle,
  Layers,
  MapPin,
};

export const ValueProps: React.FC = () => {
  return (
    <section id="ventajas" className="py-20 bg-brand-card/40 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            Compromiso y Servicio
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            ¿Por qué consultar en Hugo Repuestos?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Brindamos una experiencia de compra cercana, honesta y especializada para particulares, conductores y talleres mecánicos de Bariloche.
          </p>
        </div>

        {/* Grilla de ventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.advantages.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Wrench;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-slate-900/90 border border-brand-border p-6 shadow-xl hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/15 to-brand-accent/5 border border-brand-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 text-brand-accent">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Atención en Bariloche</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
