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
    <section id="ventajas" className="py-20 bg-brand-surface border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Minimalista */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase block mb-2">
            Compromiso y Servicio
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            ¿Por qué consultar en Hugo Repuestos?
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Atención cercana, honesta y especializada para conductores y talleres mecánicos de Bariloche.
          </p>
        </div>

        {/* Grilla de ventajas minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_CONFIG.advantages.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Wrench;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-brand-card border border-white/[0.07] p-6 shadow-sm hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/[0.08] flex items-center justify-center mb-5 group-hover:border-brand-accent/30 transition-all text-brand-accent">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>San Carlos de Bariloche</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
