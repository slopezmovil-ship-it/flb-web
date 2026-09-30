# T11: sistema de fondos y animación en la portada
**Modelo recomendado:** Claude Opus (o Claude Sonnet si no hay cuota).
**No cambies ningún texto** (vienen de `src/i18n/`). No agregues librerías: solo CSS y SVG, con JavaScript mínimo y opcional.

## Problema
Hoy solo dos secciones tienen fondo decorativo y con tratamientos distintos: la portada (imagen + capa azul) y "¿Qué necesita tu operación?" (patrón de circuitos). Se ve inconsistente.

## Objetivo: un sistema de fondos coherente
- **Secciones oscuras con imagen:** la portada (arriba) y el bloque final "Llamado a la acción + Contacto" (abajo) usan **la misma imagen** `public/img/hero-bg.webp` / `hero-bg-mobile.webp` con la **misma capa azul semitransparente**. La página queda "enmarcada".
- **Secciones claras del medio:** limpias, sin patrones de fondo.
- **Solo la portada lleva animación.**

## 1. Componente reutilizable `src/components/TechBackground.astro`
- Props: `animated` (boolean, por defecto `false`) y `priority` (boolean: `true` en la portada, `false` abajo).
- Capas, de atrás hacia adelante: (1) `<picture>` con la imagen (`object-cover`, `alt=""`, `aria-hidden="true"`); (2) capa azul marino semitransparente con el mismo degradado actual de la portada; (3) si `animated`, la capa de animación (punto 2); (4) `<slot />` para el contenido.
- `priority=true` → `loading="eager"` y `fetchpriority="high"`. `priority=false` → `loading="lazy"` (la imagen ya queda en caché, así que no pesa de nuevo).
- Usarlo en `Hero.astro` con `animated priority`.

## 2. Animación de la portada (CSS + SVG en línea)
Sutil, elegante, que acompañe y no distraiga:
- **Movimiento lento de la imagen:** zoom de `scale(1)` a `scale(1.06)` con un leve desplazamiento, 30–40 s, ida y vuelta (`alternate`), `ease-in-out`.
- **Pulsos de luz en circuitos:** un SVG absoluto sobre la imagen (debajo del texto) con 4–6 trazos de circuito con ángulos rectos, ubicados sobre todo en la mitad derecha y en los bordes, **lejos del texto**. Por cada trazo, un "pulso" de luz que lo recorre con `stroke-dasharray` + `stroke-dashoffset` animado (duración 4–9 s, retrasos distintos, `linear`, infinito). Colores de marca: teal #1A9A92, verde #3AA57A y un toque de naranja #C0652B; opacidad máxima ~0.6, con un leve brillo (`filter: drop-shadow`).
- **Nodos que respiran:** 6–10 círculos pequeños en los extremos de los trazos, que pulsan opacidad 0.3 ↔ 0.8 y escala 1 ↔ 1.3 (3–5 s, desfasados).
- Anima **solo `transform`, `opacity` y `stroke-dashoffset`** (nada que obligue a recalcular el diseño de la página).
- **Accesibilidad:** con `@media (prefers-reduced-motion: reduce)` todo queda estático.
- **Opcional (JS mínimo):** pausa la animación (`animation-play-state: paused`) cuando la portada sale de pantalla, con IntersectionObserver.
- En móvil: menos trazos (máx. 3) y sin el zoom, para ahorrar batería.

## 3. Bloque final oscuro: Llamado a la acción + Contacto
- Envolver `CTA` y `Contacto` en **un solo** `TechBackground` (estático, `priority=false`) en `src/pages/index.astro` y `src/pages/en/index.astro`. La imagen cubre ambos como un único bloque.
- `CTA.astro` y `Contacto.astro`: fondo transparente (quitar el degradado naranja del CTA y el `bg-navy` del contacto) para que se vea la imagen.
- Entre el CTA y el contacto, una línea divisoria fina (`border-white/10`) dentro del mismo bloque.
- El botón del CTA se mantiene blanco con texto azul marino. El formulario conserva su tarjeta semitransparente actual.
- El pie de página sigue con su fondo sólido actual.

## 4. Quitar el patrón de "¿Qué necesita tu operación?"
- En `Soluciones.astro`, elimina el patrón de circuitos del **fondo de la sección** (queda `mist` liso).
- **Conserva** el trazo decorativo dentro de cada tarjeta (esquina inferior derecha) y sus efectos al pasar el mouse.

## Criterios de aceptación
- La portada se ve viva pero sobria; el texto sigue con contraste AA.
- El bloque final se ve como continuación de la portada (misma imagen y color).
- Sin scroll horizontal en 375, 768, 1024 y 1440 px.
- **Lighthouse móvil ≥ 90 en rendimiento** (antes: 93–94). Si baja de 90, simplifica la animación.
- Con "reducir movimiento" activado, no hay ninguna animación.
- `npm run build` sin errores. No hagas commit.
