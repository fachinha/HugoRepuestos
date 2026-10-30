import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getGeneralContactWhatsAppUrl } from '../utils/whatsapp';
import { InstagramIcon } from './icons/InstagramIcon';

export const LocationHours: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-brand-dark border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Minimalista */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase block mb-2">
            Mostrador y Atención
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            Ubicación y Horarios de Atención
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Encontranos en Bariloche o comunicate previamente por WhatsApp para consultar tu pieza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Tarjetas de Información */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Dirección */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-white/[0.07] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-white/[0.08] flex items-center justify-center shrink-0 text-brand-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Dirección Comercial</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {SITE_CONFIG.business.address}
                  </p>
                  <p className="text-xs text-slate-400">
                    {SITE_CONFIG.business.city}, {SITE_CONFIG.business.province}
                  </p>

                  <div className="mt-3">
                    <a
                      href={SITE_CONFIG.business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-xs transition-colors shadow-sm"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir en Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-white/[0.07] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Horarios Habituales</h3>
                  
                  <div className="mt-2.5 space-y-1.5 text-xs">
                    <div className="flex justify-between py-1 border-b border-white/[0.05]">
                      <span className="text-slate-400">Lunes a Viernes:</span>
                      <span className="text-white font-medium">08:30 a 12:30 y 14:30 a 19:00 hs</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.05]">
                      <span className="text-slate-400">Sábados:</span>
                      <span className="text-white font-medium">09:00 a 13:00 hs</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Domingos:</span>
                      <span className="text-slate-500 font-medium">Cerrado</span>
                    </div>
                  </div>

                  <p className="mt-2 text-[10px] text-slate-400 leading-normal">
                    * {SITE_CONFIG.business.hours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Teléfonos */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-white/[0.07] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-white/[0.08] flex items-center justify-center shrink-0 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Contacto</h3>
                  
                  <div className="mt-1.5 space-y-0.5">
                    <p className="text-xs text-slate-400">
                      WhatsApp: <strong className="text-emerald-400 font-bold">{SITE_CONFIG.business.phoneDisplay}</strong>
                    </p>
                    <p className="text-xs text-slate-400">
                      Fijo: <span className="text-slate-200">{SITE_CONFIG.business.landlineDisplay}</span>
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={getGeneralContactWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider btn-wa shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 wa-icon" />
                      <span>WhatsApp</span>
                      <span className="dotlive" aria-hidden="true" />
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.business.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-card hover:bg-white/[0.06] text-white font-medium text-xs transition-colors border border-white/[0.06]"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Llamar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Seguinos en Instagram */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-white/[0.07] shadow-sm hover:border-pink-500/30 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-500">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Instagram Oficial</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Seguinos para novedades, consultas y fotos de repuestos:
                  </p>
                  <div className="mt-3">
                    <a
                      href={SITE_CONFIG.business.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 border border-pink-500/30 text-white font-semibold text-xs transition-all shadow-sm group"
                    >
                      <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                      <span>{SITE_CONFIG.business.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3 text-pink-300 opacity-70 group-hover:opacity-100" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mapa Integrado Minimalista */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/[0.08] bg-brand-surface shadow-xl relative min-h-[360px] lg:min-h-full flex flex-col">
            <iframe
              title="Ubicación de Hugo Repuestos en Bariloche"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4842948197775!2d-71.30907572355527!3d-41.13478957133334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b6c59b6c4b7%3A0xc00742d1e2205510!2sFagnano%201065%2C%20R8400%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="flex-1 w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.1] grayscale-[0.25]"
            />
            <div className="p-3.5 bg-brand-surface border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>Fagnano 1065 (Local 1) · Bariloche</span>
              </span>
              <a
                href={SITE_CONFIG.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline font-semibold flex items-center gap-1"
              >
                <span>Ver mapa</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
