/* ===========================================
   Cervecería Artesanal - Datos Mockeados
   =========================================== */

const data = {
  // Información general
  info: {
    nombre: 'Cervecería Artesanal',
    eslogan: 'Tradición, pasión y el sabor auténtico de la cerveza hecha a mano',
    telefono: '+56 2 2555 1234',
    celular: '+56 9 5555 1234',
    whatsapp: '+56955551234',
    email: 'contacto@cerveceriaartesanal.cl',
    emailVentas: 'ventas@cerveceriaartesanal.cl',
    emailPrivacidad: 'privacidad@cerveceriaartesanal.cl',
    emailLegal: 'legal@cerveceriaartesanal.cl',
    direccion: 'Av. de los Lúpulos 1234, Santiago, Chile',
    region: 'Región Metropolitana',
    comuna: 'Providencia',
    anioFundacion: 1892
  },

  // Redes sociales
  redes: [
    { nombre: 'Facebook', url: '#', icono: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { nombre: 'Instagram', url: '#', icono: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
    { nombre: 'Twitter', url: '#', icono: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 1.662 1.85 1.678a4.835 4.835 0 01-2.07-.554 4.93 4.93 0 003.904 4.858 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { nombre: 'YouTube', url: '#', icono: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
  ],

  // Cervezas / Productos
  cervezas: [
    {
      id: 1,
      nombre: 'Rubia Dorada',
      tipo: 'rubia',
      tipoLabel: 'Pale Ale',
      descripcion: 'Cerveza rubia suave con notas a malta y un final ligeramente amargo. Refrescante y fácil de beber.',
      precio: 3990,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: true
    },
    {
      id: 2,
      nombre: 'Tostada Imperial',
      tipo: 'tostada',
      tipoLabel: 'Stout',
      descripcion: 'Cerveza oscura con cuerpo robusto, aromas a café, chocolate y un amargor equilibrado.',
      precio: 4490,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1613254025696-6f80f3172937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: true
    },
    {
      id: 3,
      nombre: 'IPA del Maestro',
      tipo: 'ipa',
      tipoLabel: 'IPA',
      descripcion: 'India Pale Ale con intenso aroma a lúpulo cítrico. Amargor característico y sabor persistente.',
      precio: 4990,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: true
    },
    {
      id: 4,
      nombre: 'Belgian Trapense',
      tipo: 'specialty',
      tipoLabel: 'Belgian Ale',
      descripcion: 'Cerveza belga de abadía con notas frutales, alta fermentación y un bouquet complejo.',
      precio: 5990,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1704431990600-3679fea86516?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: true
    },
    {
      id: 5,
      nombre: 'Lager Clásica',
      tipo: 'rubia',
      tipoLabel: 'Lager',
      descripcion: 'Nuestra versión de la cerveza más tradicional. Limpia, fresca y perfecta para cualquier ocasión.',
      precio: 3490,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: false
    },
    {
      id: 6,
      nombre: 'Porter Nocturna',
      tipo: 'tostada',
      tipoLabel: 'Porter',
      descripcion: 'Cerveza negra de bajo amargor, perfecta para los amantes de las notas tostadas y maltosas.',
      precio: 4790,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: false
    },
    {
      id: 7,
      nombre: 'APA Tropical',
      tipo: 'ipa',
      tipoLabel: 'APA',
      descripcion: 'American Pale Ale con lúpulos americanos. Explosión de frutas tropicales en boca.',
      precio: 5290,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1703564803585-48b51539e119?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: false
    },
    {
      id: 8,
      nombre: 'Honey Ale',
      tipo: 'specialty',
      tipoLabel: 'Honey Ale',
      descripcion: 'Cerveza con agregado de miel artesanal de la región. Suave, dulce y aromática.',
      precio: 5490,
      volumen: '500ml',
      imagen: 'https://images.unsplash.com/photo-1674770637219-141ac074ce39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      destacado: false
    }
  ],

  // Servicios (precios en CLP)
  servicios: [
    {
      id: 1,
      titulo: 'Catering para Eventos',
      descripcion: 'Llevamos nuestra cerveza artesanal a tu evento. Servicio completo de barra móvil con bartenders profesionales.',
      icono: '🍺',
      precio: 'Desde $185.000'
    },
    {
      id: 2,
      titulo: 'Tours por la Fábrica',
      descripcion: 'Recorrido guiado por nuestras instalaciones. Conocé el proceso de elaboración y degustá nuestras cervezas.',
      icono: '🏭',
      precio: '$38.500 por persona'
    },
    {
      id: 3,
      titulo: 'Degustaciones',
      descripcion: 'Maridaje perfecto: 5 variedades de cerveza con tabla de quesos y embutidos artesanales.',
      icono: '🧀',
      precio: 'Desde $52.000'
    },
    {
      id: 4,
      titulo: 'Eventos Privados',
      descripcion: 'Reservá nuestro salón para cumpleaños, despedidas, reuniones corporativas o cualquier celebración.',
      icono: '🎉',
      precio: 'Desde $105.000'
    },
    {
      id: 5,
      titulo: 'Venta Mayorista',
      descripcion: 'Distribuimos a bares, restaurantes y comercios. Precios especiales por volumen y entregas programadas.',
      icono: '📦',
      precio: 'Consultar'
    },
    {
      id: 6,
      titulo: 'Barra Móvil',
      descripcion: 'Chopera portátil para fiestas y eventos al aire libre. Incluye chopps frescos y personal.',
      icono: '🚚',
      precio: 'Desde $145.000'
    }
  ],

  // Galería
  galeria: [
    {
      id: 1,
      categoria: 'instalaciones',
      url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Sala de fermentación'
    },
    {
      id: 2,
      categoria: 'productos',
      url: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Botellas de cerveza artesanal'
    },
    {
      id: 3,
      categoria: 'eventos',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Evento de degustación'
    },
    {
      id: 4,
      categoria: 'productos',
      url: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Pinta de cerveza IPA'
    },
    {
      id: 5,
      categoria: 'instalaciones',
      url: 'https://images.unsplash.com/photo-1704431990600-3679fea86516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Tambores de maduración'
    },
    {
      id: 6,
      categoria: 'equipo',
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Equipo de trabajo'
    },
    {
      id: 7,
      categoria: 'eventos',
      url: 'https://images.unsplash.com/photo-1532634733-cae1395e440f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Festival cervecero'
    },
    {
      id: 8,
      categoria: 'productos',
      url: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cerveza stout'
    },
    {
      id: 9,
      categoria: 'instalaciones',
      url: 'https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cocina de la cervecería'
    },
    {
      id: 10,
      categoria: 'eventos',
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Brindis en el bar'
    },
    {
      id: 11,
      categoria: 'equipo',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Maestro cervecero'
    },
    {
      id: 12,
      categoria: 'productos',
      url: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Lúpulo fresco'
    }
  ],

  // Equipo
  equipo: [
    {
      id: 1,
      nombre: 'Carlos Méndez',
      rol: 'Maestro Cervecero',
      bio: 'Más de 25 años de experiencia elaborando cervezas artesanales en distintas partes del mundo.',
      imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      nombre: 'María González',
      rol: 'Sommelier de Cervezas',
      bio: 'Certificada internacionalmente, especialista en maridaje y experiencias sensoriales.',
      imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      nombre: 'Juan Pérez',
      rol: 'Director de Operaciones',
      bio: 'Ingeniero químico especializado en procesos de fermentación industrial y artesanal.',
      imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      nombre: 'Laura Rodríguez',
      rol: 'Atención al Cliente',
      bio: 'Encargada de que cada experiencia en nuestra cervecería sea inolvidable.',
      imagen: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],

  // Horarios (Chile)
  horarios: [
    { dia: 'Lunes', apertura: 'Cerrado', cierre: '' },
    { dia: 'Martes a Jueves', apertura: '17:00', cierre: '00:00 hrs' },
    { dia: 'Viernes y Sábados', apertura: '17:00', cierre: '02:00 hrs' },
    { dia: 'Domingos', apertura: '12:00', cierre: '22:00 hrs' }
  ],

  // Testimonios
  testimonios: [
    {
      id: 1,
      nombre: 'Roberto Suárez',
      comentario: 'La mejor IPA que probé en mi vida. El ambiente del lugar es espectacular y el personal muy atento.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      nombre: 'Ana Martínez',
      comentario: 'Fuimos por una degustación y fue una experiencia increíble. Aprendimos muchísimo y la pasamos genial.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      nombre: 'Pedro López',
      comentario: 'Contraté el catering para mi casamiento. Todos mis invitados quedaron encantados con las cervezas.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80'
    }
  ],

  // Packs / Promociones (CLP)
  packs: [
    {
      id: 1,
      nombre: 'Pack Inicial',
      descripcion: '4 cervezas surtidas + vaso de regalo',
      precio: 14990,
      original: 17960,
      items: ['4 cervezas 500ml', 'Vaso de cristal']
    },
    {
      id: 2,
      nombre: 'Pack Degustación',
      descripcion: '8 cervezas surtidas + tabla de quesos',
      precio: 29990,
      original: 37520,
      items: ['8 cervezas 500ml', 'Tabla de quesos artesanales', 'Vaso de cristal'],
      featured: true
    },
    {
      id: 3,
      nombre: 'Pack Premium',
      descripcion: '12 cervezas + tour por la fábrica para 2',
      precio: 54990,
      original: 69980,
      items: ['12 cervezas 500ml', 'Tour por la fábrica para 2', '2 vasos grabados']
    }
  ]
};

// Hacer disponible globalmente
if (typeof window !== 'undefined') {
  window.cerveceriaData = data;
}