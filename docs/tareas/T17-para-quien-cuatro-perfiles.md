# T17: "Para quién", cuatro perfiles (separar TI corporativo de PyMEs)
**Modelo recomendado:** Claude Sonnet u Opus, o Gemini. Incluye un ajuste de diseño y revisión visual.
**Contexto:** tercera de cuatro tareas (T15 a T18) de la auditoría de posicionamiento aprobada por Steven el 4-oct-2026. Se separa al departamento de TI de empresas medianas y corporativas de las PyMEs, para que un Gerente de TI no se sienta descartado. La sección pasa de 3 a **4 perfiles**. Ejecuta solo esta.

## Parte 1: textos
En `src/i18n/es.ts` y `src/i18n/en.ts`, reemplaza el bloque completo `paraQuien: { ... }` por el texto de abajo. **Copia los textos tal cual.** Misma estructura (`titulo`, `perfiles` con `titulo` y `texto`, `industrias`), ahora con 4 perfiles y en este orden.

### `es.ts`
```typescript
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
```

### `en.ts`
```typescript
  paraQuien: {
    titulo: 'Who we work with',
    perfiles: [
      { titulo: 'IT departments of mid-size and large companies', texto: 'A specialized consulting and execution arm for complex projects, expansions, or when your team is stretched thin.' },
      { titulo: 'SMBs and offices', texto: "If you don't have an IT department, we are your complete IT team: support, Microsoft 365, backups and security." },
      { titulo: 'Industry, manufacturing and logistics', texto: 'Plant networks, maintenance systems and industrial safety in one or several countries, with fewer manual errors and full traceability.' },
      { titulo: 'Companies that build technology into their projects', texto: 'We add technology to your construction, remodeling or expansion projects so your business runs connected and secure from day one.' },
    ],
    industrias: 'Experience in manufacturing, transportation and logistics, agribusiness, healthcare, engineering and metalworking, mining, construction and service stations.',
  },
```

## Parte 2: componente `src/components/ParaQuien.astro`
El componente asigna el ícono por posición (`iconos[i]`) y tiene solo 3 íconos. Con 4 perfiles, el cuarto quedaría sin ícono, y como el nuevo perfil va primero, los íconos actuales quedarían corridos. Haz esto:

1. **Íconos.** Reemplaza el arreglo `iconos` por este (el nuevo ícono de servidores va primero; los tres existentes se conservan en su mismo trazado, desplazados una posición para que cada perfil mantenga su ícono):
```js
const iconos = [
  'M5 4h14a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM5 14h14a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1zM8 7.01V7M8 17.01V17',
  'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01',
  'M2 20h20M4 20V10l5 3V10l5 3V10l5 3v7M17 6V3h3v10',
  'M3 21h18M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16M10 7h4M10 11h4M10 15h4',
];
```
2. **Layout.** En el contenedor de las tarjetas, cambia `grid gap-6 md:grid-cols-3` por `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4`. Es decir: 1 columna en móvil, 2×2 en tableta y 4 columnas en escritorio.
3. **Ajuste de tarjeta para 4 columnas.** En escritorio cada tarjeta queda más angosta. Cambia `p-7` por `p-6 lg:p-6` si hace falta y el título por `text-lg lg:text-lg` (manteniendo `font-bold text-navy`). Solo toca estas clases si la revisión visual lo pide.
4. No cambies colores, tipografía, sombras ni la línea de industrias.

## Revisión visual (obligatoria)
Con `npm run dev`, revisa el componente `ParaQuien` en **español y en inglés** a 375, 768, 1024 y 1280 px de ancho:
- Móvil: 1 columna. Tableta: 2×2 simétrico. Escritorio: 4 columnas.
- Las 4 tarjetas tienen la misma altura; ningún título ni texto se corta ni se desborda.
- Cada tarjeta muestra su ícono (ninguna sin ícono).
- El título más largo ("Departamentos de TI de empresas medianas y corporativas" / "IT departments of mid-size and large companies") no ocupa más de 4 líneas en escritorio.

Si a 1024 px las 4 columnas se ven apretadas (títulos de más de 4 líneas o texto pegado a los bordes), usa `xl:grid-cols-4` en lugar de `lg:grid-cols-4` (2×2 hasta 1279 px) y dilo en tu resumen.

## No tocar
- Otros componentes, `Soluciones.astro`, otras claves de `es.ts` / `en.ts`.
- `docs/` y las tareas anteriores. No hagas commit ni push.

## Comprobación
1. `paraQuien.perfiles` tiene **4** elementos en ES y en EN, con los títulos en el orden indicado.
2. `iconos` en `ParaQuien.astro` tiene 4 elementos.
3. Ejecuta `npm run build`: debe terminar sin errores.
4. La revisión visual de arriba, en ambos idiomas.

## Al terminar
Resume en 3 líneas qué archivos cambiaste, qué breakpoint quedó para las 4 columnas (`lg` o `xl`) y el resultado de las comprobaciones. Detente.
