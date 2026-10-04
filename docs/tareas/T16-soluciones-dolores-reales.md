# T16: "¿Qué necesita tu operación?", dolores reales de TI y operaciones
**Modelo recomendado:** cualquiera (Gemini o Claude Sonnet). Es un cambio de texto; el componente no cambia.
**Contexto:** segunda de cuatro tareas (T15 a T18) de la auditoría de posicionamiento aprobada por Steven el 4-oct-2026. Se reescriben los dolores y soluciones para hablarle al Gerente de TI, a Operaciones y a Calidad, y se elimina por completo el término "tableros". Requiere que T15 ya esté hecha. Ejecuta solo esta.

## Qué hacer
En `src/i18n/es.ts` y `src/i18n/en.ts`, reemplaza el bloque completo `soluciones: { ... }` por el texto de abajo. **Copia los textos tal cual.** Mantén exactamente las mismas claves (`pilar`, `problema`, `solucion`, `servicios`), el mismo número de tarjetas (6) y el mismo orden de pilares.

### `es.ts`
```typescript
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
```

### `en.ts`
```typescript
  soluciones: {
    titulo: 'What does your operation need?',
    intro: 'Tell us the problem. We bring the solution.',
    items: [
      { pilar: 'INTELLIGENT', problema: 'Manual processes that slow your teams down and cause errors', solucion: 'We automate workflows and put an AI agent in every department, with fewer manual errors and traceability of every step.', servicios: ['Process automation (RPA)', 'AI agents for every department', 'AI applied to your processes'] },
      { pilar: 'INTELLIGENT', problema: 'Scattered data and decisions made blind', solucion: 'We bring the information from your systems together in real-time business intelligence (BI), with visibility across your plant and operation.', servicios: ['Business intelligence (BI) and analytics', 'Custom applications and integration'] },
      { pilar: 'CONNECTED', problema: 'Your infrastructure goes down and everything stops', solucion: 'Stable networks, servers and devices across offices, plants and warehouses in several countries, from cabling to virtualization.', servicios: ['Multi-site networks', 'Servers and virtualization', 'Structured cabling'] },
      { pilar: 'CONNECTED', problema: 'Your IT team is overloaded, or you have no IT department', solucion: 'We reinforce your in-house team on complex projects and expansions, or act as your full IT department. Remote and on-site support, hourly or under contract.', servicios: ['Help desk', 'Cloud and Microsoft 365'] },
      { pilar: 'SECURE', problema: "You're not sure your information and operation are protected", solucion: 'Network security, backup and disaster recovery, so your business keeps running.', servicios: ['Network security', 'Backup and recovery'] },
      { pilar: 'SECURE', problema: 'Your plant needs control, traceability and compliance', solucion: 'Digital industrial safety (LOTO and chemicals), video surveillance and access control, with records ready for audits.', servicios: ['Industrial safety', 'Video surveillance', 'Access control'] },
    ],
    tambienTitulo: 'Also:',
    tambien: ['Smart offices', 'Websites and digital presence'],
  },
```

## No tocar
- `src/components/Soluciones.astro` (el diseño bento de 6 tarjetas no cambia).
- Las claves `agentes`, `paraQuien` y las demás de `es.ts` / `en.ts`.
- `docs/` y las tareas anteriores. No hagas commit ni push.

## Comprobación
1. Busca en `src/` (sin `node_modules` ni `dist`), sin distinguir mayúsculas: `tablero`, `dashboard`, `No tienes quién`, `No one is taking care`, `Análisis de datos`, `Data analytics`. Deben dar **cero resultados**.
2. `soluciones.items` tiene 6 elementos y `tambien` tiene 2, en ambos idiomas.
3. Ejecuta `npm run build`: debe terminar sin errores.
4. En `npm run dev`, la sección "¿Qué necesita tu operación?" (ES y EN), a 375, 768 y 1280 px de ancho: las 6 tarjetas se ven completas, sin texto cortado. Las tarjetas anchas (1.ª, 4.ª y 5.ª en escritorio) soportan el texto más largo.

## Al terminar
Resume en 3 líneas qué archivos cambiaste y el resultado de las comprobaciones. Detente.
