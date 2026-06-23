// js/productos.js — Catálogo de productos de Las Chambecas
const PRODUCTOS = [
  {
    id: 'tazas',
    nombre: 'Sublimación de Tazas',
    descripcion: 'Tazas personalizadas con diseños únicos, perfectas para regalos y eventos especiales. Sublimamos tus ideas en tazas de alta calidad.',
    imagenes: ['imagenes/taza1.png', 'imagenes/taza2.png'],
    icono: null,
    precios: [
      { item: 'Taza simple', precio: 6000 },
      { item: 'Taza doble cara', precio: 10000 }
    ],
    incluyeWhatsApp: true,
    whatsappMensaje: 'Hola%2C%20quiero%20cotizar%20tazas%20personalizadas'
  },
  {
    id: 'poleras',
    nombre: 'Sublimación de Poleras',
    descripcion: 'Poleras sublimadas con colores vibrantes y diseño duradero. Ideales para uniformes, eventos familiares y promociones empresariales.',
    imagenes: ['imagenes/poleras1.png', 'imagenes/poleras2.png', 'imagenes/poleras3.png'],
    icono: null,
    precios: [
      { item: 'Polera adulto', precio: 7000 },
      { item: 'Polera niño', precio: 5000 }
    ],
    incluyeWhatsApp: false
  },
  {
    id: 'pinatas',
    nombre: 'Piñatas',
    descripcion: 'Piñatas artesanales decorativas para toda ocasión. Cumpleaños, eventos y celebraciones temáticas.',
    imagenes: ['imagenes/foto1.png', 'imagenes/foto2.png', 'imagenes/foto3.png'],
    icono: null,
    precios: [
      { item: 'Piñatas (desde)', precio: 20000 }
    ],
    incluyeWhatsApp: false
  },
  {
    id: 'agendas',
    nombre: 'Agendas Personalizadas',
    descripcion: 'Agendas diseñadas a tu gusto, ideales para el año escolar o empresarial. Cubiertas personalizadas, formatos y acabados a tu medida.',
    imagenes: ['imagenes/agenda1.png', 'imagenes/agenda2.png', 'imagenes/agenda3.png'],
    icono: null,
    precios: [
      { item: 'Cada agenda', precio: 5000 }
    ],
    incluyeWhatsApp: false
  },
  {
    id: 'libros',
    nombre: 'Impresión de Libros',
    descripcion: 'Impresión de libros en diversos formatos y acabados profesionales. Desde novelas hasta textos académicos, con la mejor calidad de impresión.',
    imagenes: null,
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" aria-hidden="true"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/></svg>',
    precios: [
      { item: 'Impresión', precio: 8000 }
    ],
    incluyeWhatsApp: false
  },
  {
    id: 'anillados',
    nombre: 'Anillados y Plastificados',
    descripcion: 'Servicios de anillado, plastificado y encuadernación para documentos. Protege y presenta tus trabajos con acabados profesionales y duraderos.',
    imagenes: null,
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 15h8v2H8v-2zm0 4h8v2H8v-2zm0-8h5v2H8v-2z"/></svg>',
    precios: [
      { item: 'Hasta 20 hojas', precio: 5000 },
      { item: '+100 hojas adicionales', precio: 1000 }
    ],
    incluyeWhatsApp: false
  },
  {
    id: 'cotillon',
    nombre: 'Cotillón',
    descripcion: 'Todo lo necesario para tus fiestas: decoración, platos, vasos, gorros y más. Encuentra todo el cotillón que necesitas para celebraciones inolvidables.',
    imagenes: null,
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" aria-hidden="true"><path d="M9 3L7.5 7.5 3 9l4.5 1.5L9 15l1.5-4.5L15 9l-4.5-1.5L9 3zm8 7l-1 2.5-2.5 1 2.5 1 1 2.5 1-2.5L21 13l-2.5-1L17 10zm-5 5l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2z"/></svg>',
    precios: [
      { item: 'Cotillón', precio: null }
    ],
    incluyeWhatsApp: true,
    whatsappMensaje: 'Hola%2C%20quiero%20cotizar%20cotill%C3%B3n'
  }
];
