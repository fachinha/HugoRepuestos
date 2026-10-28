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
      newErrors.brand = 'Ingresá o seleccioná la marca del vehículo';
    }
    if (!model.trim()) {
      newErrors.model = 'Ingresá el modelo (ej: Clio, Gol, Hilux)';
    }
    if (!year.trim()) {
      newErrors.year = 'Ingresá el año aproximado del vehículo';
    }
    if (!part.trim()) {
      newErrors.part = 'Especificá qué repuesto estás buscando';
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
      
      {/* Elementos visuales decorativos automotrices */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Cotización Rápida
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            ¿Buscás un repuesto para tu vehículo?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Completá los datos de tu auto o camioneta y te armamos la consulta lista para enviar a nuestro WhatsApp oficial en Bariloche.
          </p>
        </div>

        {/* Card del Formulario */}
        <div className="rounded-3xl bg-slate-900/90 border border-brand-border p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Atajos de marcas más consultadas */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Seleccioná una marca o escribila abajo:
              </label>
              <div className="flex flex-wrap gap-2">
                {popularBrands.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => handleSelectBrand(b)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                      brand === b
                        ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/30'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-white/5'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Fila 1: Marca, Modelo y Año */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Marca */}
              <div>
                <label htmlFor="brand-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Marca del vehículo <span className="text-red-400">*</span>
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
                    placeholder="Ej: Renault, Toyota, Ford"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.brand 
                        ? 'border-red-500 focus:ring-red-500/40' 
                        : 'border-brand-border focus:border-brand-accent focus:ring-brand-accent/30'
                    }`}
                  />
                  <Car className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
                {errors.brand && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.brand}</span>
                  </p>
                )}
              </div>

              {/* Modelo */}
              <div>
                <label htmlFor="model-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Modelo del vehículo <span className="text-red-400">*</span>
                </label>
                <input
                  id="model-input"
                  type="text"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                    if (errors.model) setErrors((prev) => ({ ...prev, model: '' }));
                  }}
                  placeholder="Ej: Kangoo, Hilux, Focus"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.model 
                      ? 'border-red-500 focus:ring-red-500/40' 
                      : 'border-brand-border focus:border-brand-accent focus:ring-brand-accent/30'
                  }`}
                />
                {errors.model && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.model}</span>
                  </p>
                )}
              </div>

              {/* Año */}
              <div>
                <label htmlFor="year-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Año de fabricación <span className="text-red-400">*</span>
                </label>
                <input
                  id="year-input"
                  type="text"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    if (errors.year) setErrors((prev) => ({ ...prev, year: '' }));
                  }}
                  placeholder="Ej: 2016 o 2008-2012"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.year 
                      ? 'border-red-500 focus:ring-red-500/40' 
                      : 'border-brand-border focus:border-brand-accent focus:ring-brand-accent/30'
                  }`}
                />
                {errors.year && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.year}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Repuesto que necesita */}
            <div>
              <label htmlFor="part-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Repuesto que estás buscando <span className="text-red-400">*</span>
              </label>
              <input
                id="part-input"
                type="text"
                value={part}
                onChange={(e) => {
                  setPart(e.target.value);
                  if (errors.part) setErrors((prev) => ({ ...prev, part: '' }));
                }}
                placeholder="Ej: Kit de distribución con bomba, pastillas de freno delanteras, rulemán de maza"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.part 
                    ? 'border-red-500 focus:ring-red-500/40' 
                    : 'border-brand-border focus:border-brand-accent focus:ring-brand-accent/30'
                }`}
              />
              {errors.part && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.part}</span>
                </p>
              )}
            </div>

            {/* Mensaje o detalle adicional */}
            <div>
              <label htmlFor="notes-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Datos adicionales (Opcional)
              </label>
              <textarea
                id="notes-input"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: Motor 1.6 16v nafta, con aire acondicionado, tengo el número de chasis o foto de la muestra..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-brand-border text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30 resize-none transition-all"
              />
            </div>

            {/* Vista previa del mensaje ordenado */}
            {(brand || model || part) && (
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 font-bold text-slate-400 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Vista previa del mensaje a enviar por WhatsApp:</span>
                </div>
                <p className="font-mono text-[11px] text-slate-300 whitespace-pre-line bg-black/40 p-3 rounded-lg border border-white/5">
                  {`Hola, Hugo Repuestos! 👋 Quiero consultar por el repuesto: ${part || '[Repuesto]'} para ${brand || '[Marca]'} ${model || '[Modelo]'} (${year || '[Año]'})${notes ? ` - Nota: ${notes}` : ''}`}
                </p>
              </div>
            )}

            {/* Botón de envío a WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-heading font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-whatsapp/20 hover:shadow-whatsapp/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-whatsapp/40 group cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                <span>Consultar por WhatsApp</span>
                <Send className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-3 text-center text-xs text-slate-400">
                Al hacer clic se abrirá una conversación en WhatsApp con los datos completados. Te respondemos directamente desde nuestro local en Bariloche.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
