import { SITE_CONFIG } from '../config/siteConfig';

export interface PartQuoteParams {
  brand: string;
  model: string;
  year: string;
  part: string;
  notes?: string;
}

/**
 * Normaliza y construye la URL de WhatsApp oficial para Hugo Repuestos.
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = SITE_CONFIG.business.whatsappRaw.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Mensaje predeterminado de contacto general
 */
export function getGeneralContactWhatsAppUrl(): string {
  const message = `Hola, Hugo Repuestos! 👋 Los contacto desde la página web. Quería consultar por repuestos para mi vehículo. ¿Me podrían asesorar? Muchas gracias.`;
  return buildWhatsAppUrl(message);
}

/**
 * Mensaje predeterminado por categoría seleccionada
 */
export function getCategoryWhatsAppUrl(categoryName: string): string {
  const message = `Hola, Hugo Repuestos! 👋 Les consulto desde la web por repuestos de la categoría *${categoryName}*. ¿Tienen stock o me podrían cotizar opciones para mi vehículo?`;
  return buildWhatsAppUrl(message);
}

/**
 * Mensaje ordenado a partir de los datos ingresados en el cotizador interactivo
 */
export function getPartQuoteWhatsAppUrl(params: PartQuoteParams): string {
  const lines = [
    `Hola, Hugo Repuestos! 👋 Les consulto desde su página web por la cotización de un repuesto:`,
    ``,
    `🚗 *Vehículo:* ${params.brand.trim()} ${params.model.trim()} (Año ${params.year.trim()})`,
    `🔧 *Repuesto que necesito:* ${params.part.trim()}`,
  ];

  if (params.notes && params.notes.trim().length > 0) {
    lines.push(`📝 *Detalles / Número de pieza / Motor:* ${params.notes.trim()}`);
  }

  lines.push(``);
  lines.push(`¿Me podrían confirmar si tienen disponibilidad o cotizármelo? Muchas gracias.`);

  return buildWhatsAppUrl(lines.join('\n'));
}
