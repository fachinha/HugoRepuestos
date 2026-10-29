/**
 * Configuración centralizada de Hugo Repuestos
 * San Carlos de Bariloche, Río Negro, Argentina
 * 
 * Todos los datos de contacto, enlaces, categorías y textos comerciales
 * se administran desde este archivo para facilitar futuras actualizaciones.
 */

export interface CategoryItem {
  id: string;
  name: string;
  shortDescription: string;
  badge: string;
  image: string;
  commonParts: string[];
}

export interface AdvantageItem {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
  isRealPhoto: boolean; // Identificador para reemplazar por tomas reales del mostrador
}

export const SITE_CONFIG = {
  business: {
    name: 'Hugo Repuestos',
    commercialName: 'Hugo Repuestos Industria & Automotriz',
    tagline: 'Repuestos para el automotor e industria en Bariloche',
    subTagline: 'Encontrá la pieza exacta para tu auto o camioneta con asesoramiento personalizado y respuesta rápida por WhatsApp.',
    city: 'San Carlos de Bariloche',
    province: 'Río Negro',
    country: 'Argentina',
    
    // Ubicación física confirmada
    address: 'Fagnano 1065 (Local 1)',
    postalCode: 'R8400',
    fullAddress: 'Fagnano 1065, Local 1, R8400 San Carlos de Bariloche, Río Negro, Argentina',
    googleMapsUrl: 'https://maps.google.com/?q=Fagnano+1065,+San+Carlos+de+Bariloche,+R%C3%ADo+Negro',
    
    // Contacto (Número verificado en registros comerciales locales de Bariloche)
    phone: '0294 462-9707',
    phoneDisplay: '(0294) 462-9707',
    landlineDisplay: '(0294) 443-0194',
    // Formato internacional para WhatsApp en Argentina (54 + 9 + 294 + 4629707)
    whatsappRaw: '5492944629707',
    whatsappFormatted: '+54 9 294 462-9707',
    
    // Redes oficiales
    instagramUrl: 'https://www.instagram.com/hugo_repuestos/',
    instagramHandle: '@hugo_repuestos',
    
    // Horarios de atención (Estado: estimativo habitual comercial de Bariloche, editable)
    hours: {
      weekdays: 'Lunes a Viernes: 08:30 a 12:30 y 14:30 a 19:00 hs',
      saturdays: 'Sábados: 09:00 a 13:00 hs',
      sundays: 'Domingos y Feriados: Cerrado',
      note: 'Horarios habituales. Consultá por WhatsApp antes de pasar para confirmar disponibilidad inmediata.'
    }
  },

  // Categorías de repuestos basadas en los rubros comerciales contrastados
  categories: [
    {
      id: 'rodamientos',
      name: 'Rodamientos y Rulemanes',
      shortDescription: 'Rulemanes de rueda, maza, crapodinas de embrague, rodamientos industriales y tensores.',
      badge: 'Especialidad',
      image: '/images/categories/rodamientos.jpg',
      commonParts: ['Rulemanes de rueda delantera/trasera', 'Crapodinas', 'Rodamientos cónicos', 'Rulemanes de alternador']
    },
    {
      id: 'distribucion',
      name: 'Distribución y Correas',
      shortDescription: 'Kits completos de distribución, bombas de agua, correas poli-V y tensores.',
      badge: 'Mantenimiento Crítico',
      image: '/images/categories/distribucion.jpg',
      commonParts: ['Correas dentadas', 'Tensores fijos y móviles', 'Bombas de agua', 'Correas de accesorios']
    },
    {
      id: 'frenos',
      name: 'Frenos y Seguridad',
      shortDescription: 'Pastillas de freno, discos, campanas, cintas, flexibles y cilindros de rueda.',
      badge: 'Seguridad',
      image: '/images/categories/frenos.jpg',
      commonParts: ['Pastillas de freno cerámicas y semimetálicas', 'Discos ventilados y macizos', 'Líquidos de freno DOT4', 'Cintas y campanas']
    },
    {
      id: 'suspension',
      name: 'Suspensión y Dirección',
      shortDescription: 'Amortiguadores, extremos de dirección, rótulas, bujes, parrillas y bieletas.',
      badge: 'Confort y Control',
      image: '/images/categories/suspension.jpg',
      commonParts: ['Amortiguadores delanteros/traseros', 'Extremos de dirección', 'Rótulas de suspensión', 'Bieletas y bujes']
    },
    {
      id: 'embragues',
      name: 'Embragues y Transmisión',
      shortDescription: 'Kits de placa y disco, bombines hidráulicos, semiejes, juntas homocinéticas y fuelles.',
      badge: 'Transmisión',
      image: '/images/categories/embragues.jpg',
      commonParts: ['Placas y discos de embrague', 'Juntas homocinéticas', 'Fuelles de semieje y dirección', 'Bombines de pedal']
    },
    {
      id: 'filtros-lubricantes',
      name: 'Filtros y Mantenimiento',
      shortDescription: 'Filtros de aceite, combustible, aire de motor y habitáculo. Líquidos refrigerantes.',
      badge: 'Preventivo',
      image: '/images/categories/filtros.jpg',
      commonParts: ['Filtros de aceite', 'Filtros de aire', 'Filtros de nafta/diesel', 'Refrigerantes y anticongelantes']
    },
    {
      id: 'retenes-juntas',
      name: 'Retenes, Juntas y Sellos',
      shortDescription: 'Retenes de bancada, distribución, caja de cambio y juegos de juntas para motor.',
      badge: 'Motor',
      image: '/images/categories/juntas.jpg',
      commonParts: ['Retenes de árbol de levas', 'Retenes de cigüeñal', 'Juntas de tapa de válvulas', 'Selladores automotrices']
    },
    {
      id: 'electricidad',
      name: 'Encendido y Electricidad',
      shortDescription: 'Bujías de encendido e incandescentes, cables de bujía, bobinas, lámparas y fusibles.',
      badge: 'Electricidad',
      image: '/images/categories/electricidad.jpg',
      commonParts: ['Bujías de iridio y cobre', 'Cables de bujía', 'Bobinas de encendido', 'Lámparas H4, H7, LED']
    }
  ] as CategoryItem[],

  // Ventajas comerciales respaldadas por la atención local
  advantages: [
    {
      title: 'Asesoramiento Técnico Preciso',
      description: 'Te ayudamos a identificar la pieza correcta para tu modelo exacto, evitando compras equivocadas y pérdidas de tiempo.',
      icon: 'Wrench'
    },
    {
      title: 'Consulta Rápida por WhatsApp',
      description: 'Envianos la marca, modelo y año de tu vehículo o la foto de tu repuesto viejo y te confirmamos disponibilidad sin demoras.',
      icon: 'MessageCircle'
    },
    {
      title: 'Variedad Multimarca e Industrial',
      description: 'Amplio catálogo de repuestos para automóviles, pick-ups, utilitarios y aplicaciones de mecánica general.',
      icon: 'Layers'
    },
    {
      title: 'Atención Local en Bariloche',
      description: 'Comercio físico ubicado en Fagnano 1065. Podés consultar previamente y retirar directo por nuestro mostrador.',
      icon: 'MapPin'
    }
  ] as AdvantageItem[],

  // Galería fotográfica (con aviso de reemplazo rápido para las tomas reales del comercio)
  gallery: [
    {
      id: 'gal-1',
      title: 'Componentes de Motor y Distribución',
      category: 'Mecánica',
      imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80',
      alt: 'Kits y correas automotrices',
      isRealPhoto: false
    },
    {
      id: 'gal-2',
      title: 'Sistemas de Frenos y Ruedas',
      category: 'Seguridad',
      imageUrl: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=1000&q=80',
      alt: 'Discos y componentes de frenos',
      isRealPhoto: false
    },
    {
      id: 'gal-3',
      title: 'Rodamientos y Rulemanes de Precisión',
      category: 'Especialidad',
      imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80',
      alt: 'Rulemanes y rodamientos automotrices e industriales',
      isRealPhoto: false
    },
    {
      id: 'gal-4',
      title: 'Transmisión y Tren Delantero',
      category: 'Suspensión',
      imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80',
      alt: 'Repuestos de transmisión y suspensión',
      isRealPhoto: false
    }
  ] as GalleryItem[],

  // Marcas automotrices más habituales en plaza Bariloche
  vehicleBrands: [
    'Renault',
    'Volkswagen',
    'Ford',
    'Chevrolet',
    'Fiat',
    'Toyota',
    'Peugeot',
    'Citroën',
    'Honda',
    'Nissan',
    'Jeep'
  ],

  // Crédito de desarrollo web solicitado
  developerCredit: {
    agency: 'Kiur Code',
    url: 'https://kiurcode.pages.dev/',
    label: 'Desarrollo web por Kiur Code',
    sublabel: 'Soluciones digitales profesionales para comercios'
  }
};
