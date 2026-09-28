# T02: encabezado, portada y botón de WhatsApp
**Textos:** `docs/contenido-web.md` → secciones "Menú" y "1. Portada (hero)" (ES) y "Menu" y "1. Hero" (EN). Cópialos a `src/i18n/es.ts` y `en.ts`.

## Componentes
1. **Header** (fijo arriba, fondo blanco con sombra suave al hacer scroll):
   - Izquierda: símbolo `flb-simbolo-3d-256.webp` (40 px de alto) + "FLB Group" en HTML (FLB 700, Group 500, azul marino). Enlaza a `#inicio`.
   - Centro/derecha: enlaces del menú a las anclas `#servicios`, `#casos`, `#como-trabajamos`, `#contacto`.
   - Selector **ES | EN** que lleva a la misma página en el otro idioma.
   - Móvil: menú hamburguesa accesible (botón con `aria-expanded`).
2. **Hero** (`id="inicio"`), fondo azul marino con un degradado sutil hacia un tono más oscuro:
   - Logo `flb-logo-3d-fondo-oscuro-1200.webp` a la derecha en escritorio y arriba en móvil (carga prioritaria, con `width`/`height`).
   - Eslogan (mayúsculas espaciadas), título (h1), subtítulo, botón principal (verde, abre WhatsApp en pestaña nueva) y botón secundario (contorno blanco, va a `#servicios`).
   - Franja de datos abajo: los 3 datos en fila (en columna en móvil), separados por líneas finas.
3. **WhatsAppButton**: botón flotante circular abajo a la derecha, verde WhatsApp (#25D366), ícono blanco, `aria-label` "Escríbenos por WhatsApp" / "Chat on WhatsApp", enlace `https://wa.me/50689917668`. Visible en todas las pantallas; no tapa el pie de página.

## Criterios de aceptación
- Textos idénticos a `contenido-web.md` en ambos idiomas.
- Se ve bien en 360 px, 768 px y 1440 px. Menú móvil operable con teclado.
- `npm run build` sin errores.
