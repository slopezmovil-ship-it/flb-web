# T09: imagen de fondo en la portada
**Modelo recomendado:** Gemini (genera la imagen con Nano Banana dentro de Antigravity).
**No cambies textos.** Solo la imagen y el fondo del hero.

## 1. Generar la imagen
Genera **una** imagen con este prompt (en inglés, que da mejores resultados):

> Abstract technology background for a corporate IT services website hero. Deep navy blue tones (#0B2A5B, #071E45) with subtle glowing network lines, circuit traces and connection nodes, a faint server-rack / data-center depth on the right side, soft bokeh light points in teal (#1A9A92), green (#3AA57A) and a touch of orange (#C0652B). Calm, premium, modern, not busy. Darker and emptier on the left third (text goes there). No people, no text, no logos, no letters, no watermark. Wide 16:9, high resolution.

- Si no convence, genera hasta 3 variantes y elige la más limpia (poco ruido en el lado izquierdo).
- Guárdala como `public/img/hero-bg.webp` (1920 px de ancho, calidad ~80, idealmente < 250 KB) y una versión móvil `public/img/hero-bg-mobile.webp` (900 px de ancho, recortada al centro, < 120 KB).

## 2. Aplicarla en `src/components/Hero.astro`
- La imagen va **detrás** del azul: capa 1 = imagen (`object-cover`, centrada), capa 2 = **overlay azul marino semitransparente** encima, capa 3 = contenido.
- Overlay: degradado de `rgba(11,42,91,0.92)` a la izquierda a `rgba(11,42,91,0.70)` a la derecha, para que el texto se lea perfecto y la imagen se aprecie del lado del logo.
- Usa `<picture>` con `srcset` (móvil / escritorio), `width`/`height`, `alt=""` y `aria-hidden="true"` (es decorativa), `fetchpriority="high"` y `loading="eager"`.
- La franja de datos inferior mantiene su estilo actual.

## Criterios de aceptación
- Se nota la imagen, pero el título, el subtítulo y los botones cumplen contraste AA (≥ 4.5:1).
- El logo 3D sigue destacando.
- Se ve bien en 375 px, 768 px y 1440 px.
- `npm run build` sin errores. No hagas commit.
