# T01: base del proyecto
**Objetivo:** dejar listo el proyecto Astro + Tailwind, sin contenido todavía, respetando los archivos que ya existen.

## Pasos
1. Crea el proyecto Astro **en esta misma carpeta** (`flb-web`), sin borrar ni mover `docs/`, `public/brand/`, `public/og-image.jpg`, `AGENTS.md`, `CLAUDE.md` ni `.agent/`. Si el asistente de Astro no permite carpeta no vacía, créalo en una subcarpeta temporal y mueve solo sus archivos a la raíz.
2. Instala Tailwind CSS (integración oficial de Astro) y `@fontsource/montserrat`.
3. Configura en Tailwind los colores de `docs/marca.md` como tokens (`navy`, `green`, `orange`, `teal`, `gray`, `ink`, `mist`, y las versiones `-700`) y Montserrat como fuente por defecto.
4. Configura la i18n de Astro: `defaultLocale: 'es'`, `locales: ['es','en']`, español sin prefijo (`/`) e inglés en `/en/`.
5. Crea `src/layouts/Base.astro` con: `<html lang>` según idioma, meta viewport, favicon (`/brand/favicon.ico`, `/brand/favicon-32.png`, `/brand/apple-touch-icon.png`), `theme-color` #0B2A5B, y un `<slot />`.
6. Crea `src/pages/index.astro` y `src/pages/en/index.astro` que usen `Base` y muestren solo un título provisional ("FLB Group").
7. Crea `src/i18n/es.ts` y `src/i18n/en.ts` vacíos (exportan un objeto) y un helper `useT(lang)`; los textos se agregan en las siguientes tareas.
8. Agrega `.gitignore` estándar de Astro (node_modules, dist, .astro, .env*, .vercel).

## Criterios de aceptación
- `npm run dev` muestra `/` y `/en/` con fuente Montserrat y favicon.
- `npm run build` sin errores ni advertencias.
- `docs/`, `public/brand/` y los archivos de reglas siguen intactos.
