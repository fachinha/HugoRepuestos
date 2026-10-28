import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';

export const LocationHours: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-brand-dark border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Mostrador y Atención
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            Ubicación y Horarios de Atención
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Encontranos en San Carlos de Bariloche o comunicate previamente por WhatsApp para chequear disponibilidad de tu repuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjeta de Información y Horarios */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Tarjeta de Dirección */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-border shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center shrink-0 text-brand-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Dirección Comercial</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {SITE_CONFIG.business.address}
                  </p>
                  <p className="text-xs text-slate-400">
                    {SITE_CONFIG.business.city}, {SITE_CONFIG.business.province}
                  </p>

                  <div className="mt-4">
                    <a
                      href={SITE_CONFIG.business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-xs transition-colors shadow-md shadow-brand-accent/20"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Cómo llegar en Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de Horarios */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-border shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg text-white">Horarios Habituales</h3>
                  
                  <div className="mt-3 space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Lunes a Viernes:</span>
                      <span className="text-white font-medium">08:30 a 12:30 y 14:30 a 19:00 hs</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Sábados:</span>
                      <span className="text-white font-medium">09:00 a 13:00 hs</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Domingos:</span>
                      <span className="text-slate-500 font-medium">Cerrado</span>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-400 leading-normal">
                    * {SITE_CONFIG.business.hours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Teléfonos */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-border shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Teléfonos de Contacto</h3>
                  
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-slate-400">
                      Celular / WhatsApp: <strong className="text-emerald-400 font-bold">{SITE_CONFIG.business.phoneDisplay}</strong>
                    </p>
                    <p className="text-xs text-slate-400">
                      Teléfono fijo local: <span className="text-slate-200">{SITE_CONFIG.business.landlineDisplay}</span>
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={getGeneralContactWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Escribir por WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors border border-white/5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Llamar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mapa de Google Maps Interactivo */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-border bg-slate-900 shadow-2xl relative min-h-[380px] lg:min-h-full flex flex-col">
            <iframe
              title="Ubicación de Hugo Repuestos en Bariloche"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4842948197775!2d-71.30907572355527!3d-41.13478957133334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b6c59b6c4b7%3A0xc00742d1e2205510!2sFagnano%201065%2C%20R8400%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="flex-1 w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.1] grayscale-[0.2]"
            />
            <div className="p-4 bg-slate-950 border-t border-brand-border/60 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Fagnano 1065 (Local 1) · Bariloche</span>
              </span>
              <a
                href={SITE_CONFIG.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline font-semibold flex items-center gap-1"
              >
                <span>Ver en app</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
