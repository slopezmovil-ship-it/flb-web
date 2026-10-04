# T15: Servicios, posicionamiento de socio tecnológico integral
**Modelo recomendado:** cualquiera (Gemini o Claude Sonnet). Es un cambio de texto, sin diseño.
**Contexto:** una auditoría de posicionamiento (aprobada por Steven el 4-oct-2026) detectó que el sitio minimiza las capacidades de FLB ("tableros de decisión", servicios fragmentados). Esta tarea actualiza el bloque `servicios` para comunicar un socio tecnológico integral, de la infraestructura física a la inteligencia artificial. Es la primera de cuatro tareas (T15 a T18). Ejecuta solo esta.

## Qué hacer
En `src/i18n/es.ts` y en `src/i18n/en.ts`, reemplaza el bloque completo `servicios: { ... }` (del `servicios: {` hasta su `},` de cierre, justo antes del comentario `// Casos de éxito` / `// Success stories`) por el texto de abajo. **Copia los textos tal cual.** No cambies claves, orden ni estructura; solo los valores indicados.

### `es.ts`
```typescript
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
```

### `en.ts`
```typescript
  servicios: {
    titulo: 'What we do',
    intro: 'Integrated technology partner: from physical infrastructure to artificial intelligence.',
    pilares: [
      {
        nombre: 'INTELLIGENT',
        subtitulo: 'Automation and improvement of repetitive processes with cutting-edge tools',
        frase: 'Less manual work, better decisions.',
        items: [
          'AI agents for every department',
          'Process automation (RPA)',
          'Business intelligence (BI) and analytics',
          'Custom applications and integration',
          'AI applied to your processes',
        ],
      },
      {
        nombre: 'CONNECTED',
        subtitulo: 'Infrastructure, cloud and support',
        frase: 'Your technology running and ready to grow.',
        items: [
          'Enterprise and multi-site networks',
          'Servers and virtualization',
          'Cloud and Microsoft 365',
          'Support and help desk',
        ],
      },
      {
        nombre: 'SECURE',
        subtitulo: 'Digital, physical and industrial security',
        frase: 'Your information, your facilities and your people, protected.',
        items: [
          'Network security',
          'Backup and disaster recovery',
          'Digital industrial safety (LOTO and chemicals)',
          'Physical security: video surveillance and access control',
        ],
      },
    ],
    complementarios: {
      titulo: 'Complementary services',
      items: [
        'Structured cabling',
        'Smart offices',
        'Websites and digital presence',
      ],
      nota: 'Delivered with specialized partners, under our coordination and responsibility.',
    },
  },
```

## No tocar
- Ninguna otra clave de `es.ts` / `en.ts` (`soluciones`, `paraQuien` y `agentes` se tocan en tareas posteriores o no se tocan).
- Los componentes `.astro`, el diseño, `docs/` ni las tareas anteriores.
- No hagas commit ni push.

## Comprobación
1. Busca en `src/` los textos `Tableros de decisión (BI)`, `Decision dashboards (BI)`, `Asistentes y agentes de atención` y `Assistants and service agents`: deben dar **cero resultados** dentro del bloque `servicios`.
2. `complementarios.items` tiene **3** elementos en ambos idiomas y ya no contiene "Análisis de datos" ni "Data analytics".
3. INTELLIGENT tiene 5 elementos; CONNECTED, 4; SECURE, 4 (igual en ES y EN).
4. Ejecuta `npm run build`: debe terminar sin errores.
5. En `npm run dev`, la sección "Qué hacemos" (ES y EN) muestra las tres tarjetas y la franja de complementarios con 3 etiquetas, sin desbordes.

## Al terminar
Resume en 3 líneas qué archivos cambiaste y el resultado de las comprobaciones. Detente.
