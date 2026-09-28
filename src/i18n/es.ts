const es = {
  // Menú
  menu: {
    servicios: 'Servicios',
    casos: 'Casos de éxito',
    comoTrabajamos: 'Cómo trabajamos',
    contacto: 'Contacto',
  },

  // Portada (hero)
  hero: {
    eslogan: 'Intelligent. Connected. Secure.',
    titulo: 'Conectamos tu operación, la protegemos y la hacemos más eficiente.',
    subtitulo: 'Tecnología, automatización e inteligencia artificial para empresas en Centroamérica.',
    botonPrincipal: 'Hablemos por WhatsApp',
    botonSecundario: 'Ver servicios',
    datos: [
      '5 países con proyectos ejecutados',
      '18 años en TI',
      'Remoto y en sitio',
    ],
  },

  // Servicios
  servicios: {
    titulo: 'Qué hacemos',
    intro: 'De la red a la automatización, un servicio integral.',
    pilares: [
      {
        nombre: 'INTELLIGENT',
        subtitulo: 'Automatización y mejoramiento de procesos repetitivos con herramientas de vanguardia',
        frase: 'Menos trabajo manual, mejores decisiones.',
        items: [
          'IA aplicada a tus procesos',
          'Asistentes y agentes de atención',
          'Automatización de procesos (RPA)',
          'Aplicaciones a la medida e integración',
          'Tableros de decisión (BI)',
        ],
      },
      {
        nombre: 'CONNECTED',
        subtitulo: 'Infraestructura, nube y soporte',
        frase: 'Tu tecnología funcionando y lista para crecer.',
        items: [
          'Redes empresariales y multisede',
          'Servidores y virtualización',
          'Nube y Microsoft 365',
          'Soporte y mesa de ayuda',
        ],
      },
      {
        nombre: 'SECURE',
        subtitulo: 'Seguridad digital, física e industrial',
        frase: 'Tu información, tus instalaciones y tu gente protegidas.',
        items: [
          'Seguridad de red',
          'Respaldo y recuperación ante desastres',
          'Seguridad industrial digital',
          'Seguridad física: videovigilancia y control de acceso',
        ],
      },
    ],
    complementarios: {
      titulo: 'Complementarios',
      items: [
        'Cableado estructurado',
        'Oficinas inteligentes',
        'Análisis de datos',
        'Sitio web y presencia digital',
      ],
      nota: 'Los ejecutamos con aliados especializados, bajo nuestra coordinación y responsabilidad.',
    },
  },

  // Casos de éxito
  casos: {
    titulo: 'Casos de éxito',
    intro: 'Proyectos reales en la región. Por confidencialidad, no mencionamos a nuestros clientes.',
    destacados: [
      {
        titulo: 'Facturación automática con IA',
        resultado: '~150 facturas que le tomaban 3 días de trabajo a una persona ahora se procesan solas en ~3 horas, sin intervención manual.',
      },
      {
        titulo: 'Sistema de mantenimiento industrial en tablets · 5 países',
        resultado: 'Bitácora digital que antes no existía, repuestos comprados a tiempo y mantenimiento preventivo en el momento correcto.',
      },
      {
        titulo: 'Red que reconoce cada dispositivo',
        resultado: 'Solo los equipos autorizados entran a la red, de forma automática.',
      },
    ],
    otrosProyectosTitulo: 'Otros proyectos',
    otrosProyectos: [
      'Renovación de servidores en Guatemala, Honduras, Nicaragua, Costa Rica y Panamá.',
      'Oficinas interconectadas en Costa Rica, Panamá y Guatemala, con infraestructura en la nube.',
      'Seguridad ocupacional digital en tablets (Costa Rica).',
      'Almacén externo conectado a la oficina central (Nicaragua).',
      'Ampliación de cableado estructurado con mayor ancho de banda (Panamá).',
    ],
  },

  // Industrias
  industrias: {
    titulo: 'Industrias',
    items: [
      'Manufactura',
      'Transporte y logística nacional e internacional',
      'Agroindustria',
      'Sector médico',
      'Ingeniería y metalurgia',
      'Minería',
      'Construcción y estaciones de servicio',
      'Oficinas y PyMEs',
    ],
  },

  // Alcance regional
  alcance: {
    titulo: 'Alcance regional',
    texto: 'Proyectos ejecutados en Costa Rica, Guatemala, Honduras, Nicaragua y Panamá. Base de operaciones en Heredia, Costa Rica.',
    paises: ['Costa Rica', 'Guatemala', 'Honduras', 'Nicaragua', 'Panamá'],
  },

  // Cómo trabajamos
  comoTrabajamos: {
    titulo: 'Cómo trabajamos',
    pasos: [
      { numero: '1', titulo: 'Diagnóstico', descripcion: 'entendemos tu operación.' },
      { numero: '2', titulo: 'Propuesta', descripcion: 'alcance, tiempos y costo claros.' },
      { numero: '3', titulo: 'Implementación', descripcion: 'ejecución, documentación y capacitación.' },
      { numero: '4', titulo: 'Acompañamiento', descripcion: 'soporte y mejora continua.' },
    ],
  },

  // Modalidades
  modalidades: {
    titulo: 'Modalidades',
    items: [
      { nombre: 'Por hora', ideal: 'necesidades puntuales.' },
      { nombre: 'Por proyecto', ideal: 'implementaciones con alcance y precio cerrados.' },
      { nombre: 'Contrato 8x5', ideal: 'soporte continuo en horario laboral.' },
      { nombre: 'Contrato 24/7', ideal: 'operaciones críticas.' },
    ],
  },

  // Tecnologías
  tecnologias: {
    titulo: 'Tecnologías',
    items: [
      'Microsoft 365', 'Azure', 'AWS', 'Entra ID / Active Directory', 'Intune',
      'Defender', 'Purview', 'Windows Server', 'Linux', 'Power Platform',
      'Power BI', 'VMware / Hyper-V', 'Servidores HPE y Dell',
      'Almacenamiento Dell EMC', 'Cisco DNA', 'n8n', 'Claude', 'Gemini', 'Copilot',
    ],
  },

  // Por qué FLB Group
  porQueFLB: {
    titulo: 'Por qué FLB Group',
    items: [
      {
        titulo: 'Servicio integral',
        descripcion: 'de la red a la automatización, coordinamos a los especialistas y respondemos por cada proyecto de principio a fin.',
      },
      {
        titulo: 'Capacidad regional probada',
        descripcion: 'proyectos ejecutados en 5 países, remoto y en sitio.',
      },
      {
        titulo: 'Experiencia industrial real',
        descripcion: 'planta, mantenimiento y seguridad ocupacional, no solo oficinas.',
      },
      {
        titulo: '18 años en TI',
        descripcion: 'con clientes de manufactura, transporte, agroindustria, sector médico e ingeniería.',
      },
    ],
  },

  // WhatsApp
  whatsapp: {
    ariaLabel: 'Escríbenos por WhatsApp',
  },

  // SEO
  seo: {
    title: 'FLB Group | Tecnología, automatización e IA para empresas en Centroamérica',
    description: 'Redes, servidores, nube, ciberseguridad e inteligencia artificial para empresas en Costa Rica y Centroamérica. Proyectos en 5 países y 18 años de experiencia.',
  },
} as const;

export default es;
