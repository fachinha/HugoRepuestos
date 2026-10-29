import React, { useState } from 'react';
import { Send, MessageCircle, AlertCircle, CheckCircle2, Car, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getPartQuoteWhatsAppUrl } from '../utils/whatsapp';

export const PartQuoteForm: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [part, setPart] = useState('');
  const [notes, setNotes] = useState('');
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const popularBrands = SITE_CONFIG.vehicleBrands;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!brand.trim()) {
      newErrors.brand = 'Ingresá o seleccioná la marca';
    }
    if (!model.trim()) {
      newErrors.model = 'Ingresá el modelo (ej: Clio, Gol, Hilux)';
    }
    if (!year.trim()) {
      newErrors.year = 'Ingresá el año aproximado';
    }
    if (!part.trim()) {
      newErrors.part = 'Especificá qué repuesto buscás';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const whatsappUrl = getPartQuoteWhatsAppUrl({
      brand,
      model,
      year,
      part,
      notes: notes.trim() ? notes : undefined
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSelectBrand = (selectedBrand: string) => {
    setBrand(selectedBrand);
    if (errors.brand) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.brand;
        return copy;
      });
    }
  };

  return (
    <section id="cotizador" className="py-20 relative overflow-hidden bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado minimalista */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-surface border border-white/[0.08] text-slate-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Cotización Online
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            ¿Buscás un repuesto para tu vehículo?
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Completá los datos y te enviamos la disponibilidad y cotización directamente por WhatsApp.
          </p>
        </div>

        {/* Card del Formulario Minimalista */}
        <div className="rounded-2xl bg-brand-surface border border-white/[0.08] p-6 sm:p-9 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Atajos de marcas */}
            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Seleccioná una marca o escribila abajo:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {popularBrands.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => handleSelectBrand(b)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-150 ${
                      brand === b
                        ? 'bg-brand-accent text-white shadow-sm'
                        : 'bg-brand-card text-slate-300 hover:bg-white/[0.06] hover:text-white border border-white/[0.05]'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Fila: Marca, Modelo y Año */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Marca */}
              <div>
                <label htmlFor="brand-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Marca <span className="text-brand-accent">*</span>
                </label>
                <div className="relative">
                  <input
                    id="brand-input"
                    type="text"
                    value={brand}
                    onChange={(e) => {
                      setBrand(e.target.value);
                      if (errors.brand) setErrors((prev) => ({ ...prev, brand: '' }));
                    }}
                    placeholder="Ej: Renault, Toyota"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border text-white text-sm placeholder-slate-500 focus:outline-none transition-all ${
                      errors.brand 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-white/[0.08] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30'
                    }`}
                  />
                  <Car className="w-4 h-4 text-slate-600 absolute right-3 top-3 pointer-events-none" />
                </div>
                {errors.brand && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.brand}</span>
                  </p>
                )}
              </div>

              {/* Modelo */}
              <div>
                <label htmlFor="model-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Modelo <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="model-input"
                  type="text"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                    if (errors.model) setErrors((prev) => ({ ...prev, model: '' }));
                  }}
                  placeholder="Ej: Kangoo, Hilux, Gol"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border text-white text-sm placeholder-slate-500 focus:outline-none transition-all ${
                    errors.model 
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                      : 'border-white/[0.08] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30'
                  }`}
                />
                {errors.model && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.model}</span>
                  </p>
                )}
              </div>

              {/* Año */}
              <div>
                <label htmlFor="year-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Año <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="year-input"
                  type="text"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    if (errors.year) setErrors((prev) => ({ ...prev, year: '' }));
                  }}
                  placeholder="Ej: 2016"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border text-white text-sm placeholder-slate-500 focus:outline-none transition-all ${
                    errors.year 
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                      : 'border-white/[0.08] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30'
                  }`}
                />
                {errors.year && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.year}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Repuesto que necesita */}
            <div>
              <label htmlFor="part-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Repuesto que estás buscando <span className="text-brand-accent">*</span>
              </label>
              <input
                id="part-input"
                type="text"
                value={part}
                onChange={(e) => {
                  setPart(e.target.value);
                  if (errors.part) setErrors((prev) => ({ ...prev, part: '' }));
                }}
                placeholder="Ej: Kit de distribución con bomba, pastillas de freno, rulemán de maza"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border text-white text-sm placeholder-slate-500 focus:outline-none transition-all ${
                  errors.part 
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                    : 'border-white/[0.08] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30'
                }`}
              />
              {errors.part && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.part}</span>
                </p>
              )}
            </div>

            {/* Mensaje opcional */}
            <div>
              <label htmlFor="notes-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Detalles adicionales (Opcional)
              </label>
              <textarea
                id="notes-input"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: Motor 1.6 16v, con aire, número de chasis o foto de la muestra..."
                className="w-full px-3.5 py-2 rounded-xl bg-brand-dark border border-white/[0.08] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/30 resize-none transition-all"
              />
            </div>

            {/* Vista previa limpia */}
            {(brand || model || part) && (
              <div className="p-3.5 rounded-xl bg-brand-dark border border-white/[0.06] text-xs text-slate-300">
                <div className="flex items-center gap-1.5 font-bold text-slate-400 mb-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Vista previa del mensaje a WhatsApp:</span>
                </div>
                <p className="font-mono text-[11px] text-slate-300 whitespace-pre-line bg-black/50 p-2.5 rounded-lg border border-white/[0.04]">
                  {`Hola, Hugo Repuestos! 👋 Quiero consultar por el repuesto: ${part || '[Repuesto]'} para ${brand || '[Marca]'} ${model || '[Modelo]'} (${year || '[Año]'})${notes ? ` - Nota: ${notes}` : ''}`}
                </p>
              </div>
            )}

            {/* Botón WhatsApp */}
            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Consultar por WhatsApp</span>
                <Send className="w-3.5 h-3.5 ml-0.5 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-2.5 text-center text-xs text-slate-400">
                Al hacer clic se abrirá una conversación en WhatsApp con los datos completados.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
