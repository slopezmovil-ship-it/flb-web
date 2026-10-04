const es = {
  // Menú
  menu: {
    servicios: 'Servicios',
    agentes: 'Agentes IA',
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
    botonSecundario: 'Solicitar diagnóstico',
    datos: [
      '5 países con proyectos ejecutados',
      '18 años en TI',
      '7 industrias atendidas',
      'Remoto y en sitio',
    ],
  },

  // Servicios
  servicios: {
    titulo: 'Qué hacemos',
    intro: 'Socio tecnológico integral: de la infraestructura física a la inteligencia artificial.',
    pilares: [
      {
        nombre: 'INTELLIGENT',
        subtitulo: 'Automatización y mejoramiento de procesos repetitivos con herramientas de vanguardia',
        frase: 'Menos trabajo manual, mejores decisiones.',
        items: [
          'Agentes de IA por departamento',
          'Automatización de procesos (RPA)',
          'Inteligencia de negocios (BI) y analítica',
          'Aplicaciones a la medida e integración',
          'IA aplicada a tus procesos',
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
          'Seguridad industrial digital (LOTO y químicos)',
          'Seguridad física: videovigilancia y control de acceso',
        ],
      },
    ],
    complementarios: {
      titulo: 'Complementarios',
      items: [
        'Cableado estructurado',
        'Oficinas inteligentes',
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
        titulo: 'Sistema de mantenimiento industrial en tablets · 5 países',
        resultado: 'Bitácora digital que antes no existía, repuestos comprados a tiempo y mantenimiento preventivo en el momento correcto.',
      },
      {
        titulo: 'Expansión regional conectada · 3 países',
        resultado: 'Oficinas en Costa Rica, Panamá y Guatemala operando como una sola red, con toda la infraestructura en la nube.',
      },
    ],
    otrosProyectosTitulo: 'Otros proyectos',
    otrosProyectos: [
      'Instalación de servidores en Guatemala, Honduras, Nicaragua, Costa Rica y Panamá.',
      'Red que reconoce cada dispositivo y deja fuera a los no autorizados.',
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
      { numero: '1', titulo: 'Diagnóstico', descripcion: 'Entendemos tu operación.' },
      { numero: '2', titulo: 'Propuesta', descripcion: 'Alcance, tiempos y costo claros.' },
      { numero: '3', titulo: 'Implementación', descripcion: 'Ejecución, documentación y capacitación.' },
      { numero: '4', titulo: 'Acompañamiento', descripcion: 'Soporte y mejora continua.' },
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
      'Almacenamiento Dell EMC', 'Veeam', 'Cisco', 'Fortinet', 'MikroTik', 'n8n', 'Claude', 'Gemini', 'Copilot',
    ],
  },

  // Por qué FLB Group
  porQueFLB: {
    titulo: 'Por qué FLB Group',
    items: [
      {
        titulo: 'Servicio integral',
        descripcion: 'De la red a la automatización, coordinamos a los especialistas y respondemos por cada proyecto de principio a fin.',
      },
      {
        titulo: 'Capacidad regional probada',
        descripcion: 'Proyectos ejecutados en 5 países, remoto y en sitio.',
      },
      {
        titulo: 'Experiencia industrial real',
        descripcion: 'Planta, mantenimiento y seguridad ocupacional, no solo oficinas.',
      },
      {
        titulo: '18 años en TI',
        descripcion: 'Con clientes de manufactura, transporte, agroindustria, sector médico e ingeniería.',
      },
    ],
  },

  // Contacto
  contacto: {
    titulo: 'Conversemos sobre tu operación',
    texto: 'Cuéntanos qué necesitas y te respondemos con un diagnóstico inicial.',
    whatsapp: '+506 8991-7668',
    correo: 'steven.lopez@flbcr.com',
    linkedin: 'linkedin.com/in/steven-lopez-flb',
    ubicacion: 'Heredia, Costa Rica · Servicio en Centroamérica',
    etiquetas: {
      whatsapp: 'WhatsApp',
      correo: 'Correo',
      linkedin: 'LinkedIn',
      ubicacion: 'Ubicación',
    },
    formulario: {
      nombre: 'Nombre',
      empresa: 'Empresa',
      correo: 'Correo',
      telefono: 'Teléfono (opcional)',
      mensaje: '¿En qué te podemos ayudar?',
      enviar: 'Enviar',
      enviando: 'Enviando…',
    },
    confirmacion: 'Gracias. Te contactaremos pronto.',
    error: 'Hubo un problema al enviar tu mensaje. Por favor, escríbenos por WhatsApp.',
    sinClave: 'El formulario no está disponible en este momento. Escríbenos por WhatsApp.',
  },

  // Pie de página
  footer: {
    marca: 'FLB Group',
    razonSocial: 'FLB Services Group',
    eslogan: 'Intelligent. Connected. Secure.',
    copyright: `© ${new Date().getFullYear()}`,
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
  // ===== v2: enfoque en el cliente =====
  soluciones: {
    titulo: '¿Qué necesita tu operación?',
    intro: 'Cuéntanos el problema. Nosotros ponemos la solución.',
    items: [
      { pilar: 'INTELLIGENT', problema: 'Procesos manuales que frenan a tus equipos y generan errores', solucion: 'Automatizamos flujos y ponemos un agente de IA en cada departamento, con menos errores manuales y trazabilidad de cada paso.', servicios: ['Automatización de procesos (RPA)', 'Agentes de IA por departamento', 'IA aplicada a tus procesos'] },
      { pilar: 'INTELLIGENT', problema: 'Datos dispersos y decisiones a ciegas', solucion: 'Unimos la información de tus sistemas en inteligencia de negocios (BI) en tiempo real, con visibilidad de planta y de operación.', servicios: ['Inteligencia de negocios (BI) y analítica', 'Aplicaciones a la medida e integración'] },
      { pilar: 'CONNECTED', problema: 'Tu infraestructura se cae y todo se detiene', solucion: 'Redes, servidores y equipos estables en oficinas, plantas y bodegas de varios países, desde el cableado hasta la virtualización.', servicios: ['Redes multisede', 'Servidores y virtualización', 'Cableado estructurado'] },
      { pilar: 'CONNECTED', problema: 'Tu equipo de TI está saturado, o no tienes departamento de sistemas', solucion: 'Reforzamos a tu equipo interno en proyectos complejos y expansiones, o somos tu área de TI completa. Soporte remoto y en sitio, por horas o por contrato.', servicios: ['Mesa de ayuda', 'Nube y Microsoft 365'] },
      { pilar: 'SECURE', problema: 'No sabes si tu información y tu operación están protegidas', solucion: 'Seguridad de red, respaldo y recuperación ante desastres, para que tu negocio siga funcionando.', servicios: ['Seguridad de red', 'Respaldo y recuperación'] },
      { pilar: 'SECURE', problema: 'Tu planta necesita control, trazabilidad y cumplimiento', solucion: 'Seguridad industrial digital (LOTO y químicos), videovigilancia y control de acceso, con registros listos para auditorías.', servicios: ['Seguridad industrial', 'Videovigilancia', 'Control de acceso'] },
    ],
    tambienTitulo: 'También:',
    tambien: ['Oficinas inteligentes', 'Sitio web y presencia digital'],
  },
  agentes: {
    etiqueta: 'AGENTES FLB',
    titulo: 'Un agente de inteligencia artificial para cada área de tu empresa',
    intro: 'Menos tareas repetitivas y más tiempo para lo que hace crecer tu negocio. Nuestros agentes trabajan con los sistemas que ya usas.',
    pasosTitulo: 'Cómo funciona un agente',
    pasos: [
      { titulo: 'Lee y entiende', texto: 'Documentos, correos, mensajes y datos de tus sistemas.' },
      { titulo: 'Decide con tus reglas', texto: 'Aplica los criterios de tu empresa, siempre igual.' },
      { titulo: 'Ejecuta y avisa', texto: 'Completa la tarea y escala a una persona cuando hace falta.' },
    ],
    lista: [
      { nombre: 'Agente de Finanzas', area: 'Facturación y contabilidad', tareas: [
        { texto: 'Emite y envía facturas sin digitar' },
        { texto: 'Gestiona cobros y recordatorios a clientes' },
        { texto: 'Valida facturas de proveedores y programa pagos' } ] },
      { nombre: 'Agente Comercial', area: 'Ventas', tareas: [
        { texto: 'Encuentra empresas objetivo y sus contactos' },
        { texto: 'Da seguimiento para que ningún prospecto se enfríe' },
        { texto: 'Prepara cotizaciones y propuestas en minutos' } ] },
      { nombre: 'Agente de Atención', area: 'Servicio al cliente', tareas: [
        { texto: 'Responde 24/7 en la web y la mensajería' },
        { texto: 'Clasifica cada solicitud y la envía al área correcta' },
        { texto: 'Informa el estado de pedidos sin llamadas' } ] },
      { nombre: 'Agente de Talento', area: 'Recursos Humanos', tareas: [
        { texto: 'Filtra hojas de vida y agenda entrevistas' },
        { texto: 'Acompaña la inducción de nuevos colaboradores' },
        { texto: 'Responde dudas sobre vacaciones y políticas' } ] },
      { nombre: 'Agente de Logística', area: 'Logística y compras', tareas: [
        { texto: 'Pronostica la demanda y alerta el reabastecimiento' },
        { texto: 'Compara cotizaciones y genera órdenes de compra' },
        { texto: 'Da seguimiento a envíos y alerta retrasos' } ] },
      { nombre: 'Agente de Operaciones', area: 'Operaciones y mantenimiento', tareas: [
        { texto: 'Asigna órdenes de trabajo con fotos y bitácora' },
        { texto: 'Anticipa fallas antes de que la máquina se detenga' },
        { texto: 'Genera los reportes de producción del día' } ] },
      { nombre: 'Agente de Seguridad', area: 'Salud ocupacional', tareas: [
        { texto: 'Controla químicos y hojas de seguridad' },
        { texto: 'Guía el bloqueo y etiquetado en tablet' },
        { texto: 'Recibe reportes de incidentes con foto o voz' } ] },
      { nombre: 'Agente de TI', area: 'Tecnología', tareas: [
        { texto: 'Resuelve solicitudes comunes de soporte' },
        { texto: 'Crea y retira cuentas y permisos' },
        { texto: 'Prioriza las alertas que importan' } ] },
      { nombre: 'Agente Ejecutivo', area: 'Gerencia', tareas: [
        { texto: 'Responde preguntas sobre tus datos' },
        { texto: 'Envía un resumen ejecutivo semanal' },
        { texto: 'Encuentra información en contratos y documentos' } ] },
    ],
    nota: 'Cada agente se implementa por separado; empieza por el que más te duele.',
    botonPrincipal: 'Descargar catálogo (PDF)',
    botonSecundario: '¿Cuál agente te conviene? Escríbenos',
  },
  paraQuien: {
    titulo: 'Para quién trabajamos',
    perfiles: [
      { titulo: 'Departamentos de TI de empresas medianas y corporativas', texto: 'Brazo ejecutor y consultor especializado para proyectos complejos, expansiones o cuando tu equipo está saturado.' },
      { titulo: 'PyMEs y oficinas', texto: 'Si no tienes departamento de sistemas, somos tu área de TI completa: soporte, Microsoft 365, respaldos y seguridad.' },
      { titulo: 'Industria, manufactura y logística', texto: 'Redes de planta, sistemas de mantenimiento y seguridad industrial en uno o varios países, con menos errores manuales y trazabilidad.' },
      { titulo: 'Empresas que integran tecnología en sus proyectos', texto: 'Sumamos tecnología a tus proyectos de construcción, remodelación o ampliación, para que tu negocio opere conectado y seguro desde el primer día.' },
    ],
    industrias: 'Experiencia en manufactura, transporte y logística, agroindustria, sector médico, ingeniería y metalurgia, minería, construcción y estaciones de servicio.',
  },
  modalidadesLinea: { titulo: 'Modalidades:', items: ['Por hora', 'Por proyecto', 'Contrato 8x5', 'Contrato 24/7'] },
  cta: {
    titulo: '¿Cuál es el reto de tu operación hoy?',
    texto: 'Agenda un diagnóstico inicial sin costo y te decimos por dónde empezar.',
    boton: 'Hablemos por WhatsApp',
  },
  trabajamosCon: {
    titulo: 'Trabajamos con',
    items: ['Microsoft 365', 'Azure', 'AWS', 'Cisco', 'Fortinet', 'MikroTik', 'Dell', 'HPE', 'VMware', 'Veeam', 'Power Platform', 'Linux'],
  },
} as const;

export default es;
