# T12: nueva sección "Agentes FLB" (IA por área)
**Modelo recomendado:** Claude Opus (o Claude Sonnet si no hay cuota).
**Contexto:** FLB presenta su oferta de inteligencia artificial como **un agente por área de la empresa**. Esta tarea agrega una sección nueva al sitio, en español e inglés. Los textos de abajo son la **fuente de verdad**: cópialos tal cual en `src/i18n/es.ts` y `src/i18n/en.ts`, sin cambiar, resumir ni "mejorar" nada.

## Qué hacer
1. **Textos:** agrega la clave `agentes` (y `menu.agentes`) en `es.ts` y `en.ts` con el contenido de las secciones "Textos ES" y "Textos EN".
2. **Componente nuevo:** `src/components/Agentes.astro`, con `id="agentes"`.
3. **Ubicación:** en `src/pages/index.astro` y `src/pages/en/index.astro`, justo **después de `<Soluciones />`** y antes de `<ParaQuien />`.
4. **Menú:** en `Header.astro`, agrega el enlace `t.menu.agentes` → `#agentes` entre "Servicios" y "Casos de éxito" (escritorio y móvil).
5. **Descarga:** el PDF ya está en `public/descargas/FLB-Agentes-IA.pdf`. El botón principal lo descarga (`download`, abre en pestaña nueva). El mismo archivo sirve para ambos idiomas.

## Diseño
- **Fondo de sección:** blanco (la sección anterior, Soluciones, usa `mist`; así se alternan).
- **Encabezado:** etiqueta `AGENTES FLB` como *pill* (Montserrat 500, mayúsculas, tracking 0.15em, color orange-700 #A34F1C sobre fondo naranja al 10 %), título H2 y la intro debajo, centrados, con ancho máximo de ~720 px.
- **"Cómo funciona un agente":** fila de 3 pasos numerados (1, 2, 3) en tarjetas bajas sobre `mist`. En móvil, apilados.
- **Tarjetas de agentes:** cuadrícula de 3 columnas en escritorio (≥ 1024 px), 2 en tablet y 1 en móvil. Son 9 tarjetas. Cada tarjeta lleva:
  - un ícono cuadrado de 40 px con esquinas de 10 px, fondo del color asignado e ícono de línea blanco (SVG en línea, estilo simple de trazo 2 px, relacionado con el área: dinero, gráfica ascendente, globo de chat, personas, camión, engrane, escudo, monitor, barras);
  - el nombre del agente (18–20 px, 700, azul marino) y el área debajo (13 px, 600, mayúsculas, gris);
  - 3 tareas en lista con viñeta redonda del color de la tarjeta;
  - Estilo de tarjeta coherente con Soluciones (T10): fondo blanco, borde 1 px `navy/8`, esquinas 16 px, hover que sube 2–4 px y pinta el borde del color de la tarjeta; respeta `prefers-reduced-motion`.
- **Colores de ícono, en este orden:** Finanzas naranja · Comercial navy · Atención teal · Talento verde · Logística naranja · Operaciones navy · Seguridad teal · TI verde · Ejecutivo naranja.
- **Debajo de la cuadrícula:** la nota en texto pequeño gris y los dos botones centrados: principal (navy, descarga el PDF) y secundario (contorno navy, lleva a `#contacto`).

## Textos ES
```ts
menu: { agentes: 'Agentes IA' }

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
}
```

## Textos EN
```ts
menu: { agentes: 'AI Agents' }

agentes: {
  etiqueta: 'FLB AGENTS',
  titulo: 'An artificial intelligence agent for every area of your business',
  intro: 'Fewer repetitive tasks, more time for what grows your business. Our agents work with the systems you already use.',
  pasosTitulo: 'How an agent works',
  pasos: [
    { titulo: 'Reads and understands', texto: 'Documents, emails, messages and data from your systems.' },
    { titulo: 'Decides with your rules', texto: 'Applies your company’s criteria, every time.' },
    { titulo: 'Acts and notifies', texto: 'Completes the task and escalates to a person when needed.' },
  ],
  lista: [
    { nombre: 'Finance Agent', area: 'Billing and accounting', tareas: [
      { texto: 'Issues and sends invoices with no manual entry' },
      { texto: 'Manages collections and customer reminders' },
      { texto: 'Validates supplier invoices and schedules payments' } ] },
    { nombre: 'Sales Agent', area: 'Sales', tareas: [
      { texto: 'Finds target companies and their contacts' },
      { texto: 'Follows up so no lead goes cold' },
      { texto: 'Prepares quotes and proposals in minutes' } ] },
    { nombre: 'Customer Service Agent', area: 'Customer service', tareas: [
      { texto: 'Answers 24/7 on your website and messaging' },
      { texto: 'Classifies each request and routes it to the right team' },
      { texto: 'Reports order status without phone calls' } ] },
    { nombre: 'Talent Agent', area: 'Human resources', tareas: [
      { texto: 'Screens résumés and schedules interviews' },
      { texto: 'Supports new-hire onboarding' },
      { texto: 'Answers questions about time off and policies' } ] },
    { nombre: 'Logistics Agent', area: 'Logistics and purchasing', tareas: [
      { texto: 'Forecasts demand and flags restocking' },
      { texto: 'Compares supplier quotes and creates purchase orders' },
      { texto: 'Tracks shipments and alerts on delays' } ] },
    { nombre: 'Operations Agent', area: 'Operations and maintenance', tareas: [
      { texto: 'Assigns work orders with photos and a digital log' },
      { texto: 'Anticipates failures before machines stop' },
      { texto: 'Generates daily production reports' } ] },
    { nombre: 'Safety Agent', area: 'Occupational health', tareas: [
      { texto: 'Controls chemicals and safety data sheets' },
      { texto: 'Guides lockout/tagout on tablets' },
      { texto: 'Receives incident reports by photo or voice' } ] },
    { nombre: 'IT Agent', area: 'Technology', tareas: [
      { texto: 'Resolves common support requests' },
      { texto: 'Creates and removes accounts and permissions' },
      { texto: 'Prioritizes the alerts that matter' } ] },
    { nombre: 'Executive Agent', area: 'Management', tareas: [
      { texto: 'Answers questions about your data' },
      { texto: 'Sends a weekly executive summary' },
      { texto: 'Finds information in contracts and documents' } ] },
  ],
  nota: 'Each agent is deployed separately; start with the one that hurts most.',
  botonPrincipal: 'Download catalog (PDF)',
  botonSecundario: 'Which agent fits you? Talk to us',
}
```

## Evita
- Cambiar textos o agregar agentes o tareas.
- Etiquetas tipo "Implementado", "Nuevo" o cifras de resultados: la sección muestra lo que FLB puede hacer, sin distinguir entre agentes.
- Emojis, fotos de personas, degradados chillones, animaciones pesadas.
- Tocar otras secciones fuera de lo indicado (salvo el menú y las páginas).

## Criterios de aceptación
- La sección aparece después de Soluciones en `/` y `/en/`, y el enlace del menú lleva a ella en escritorio y móvil.
- El botón principal descarga `/descargas/FLB-Agentes-IA.pdf`.
- Todos los agentes se muestran igual, sin etiquetas ni cifras de resultados.
- Contraste AA, foco visible con teclado, sin scroll horizontal en 375, 768, 1024 y 1440 px.
- Lighthouse sin bajar de 90 en ninguna categoría.
- `npm run build` sin errores. **No hagas commit ni push.**
