# T10: rediseño de las tarjetas "¿Qué necesita tu operación?"
**Modelo recomendado:** Claude Opus (o Claude Sonnet si no hay cuota).
**Archivo:** `src/components/Soluciones.astro`. **No cambies ningún texto** (vienen de `src/i18n/`).

## Problema
Las tarjetas actuales son genéricas: fondo blanco, borde redondeado, barra de color arriba. Se ven como una plantilla. Queremos que se sientan **propias de FLB Group** y más "tecnológicas", manteniendo la sobriedad corporativa.

## Dirección de diseño
1. **Distribución tipo "bento"** en escritorio (≥ 1024 px): cuadrícula de 3 columnas donde **las dos primeras tarjetas de cada fila no tienen el mismo tamaño**. Sugerencia: fila 1 = tarjeta ancha (2 columnas) + tarjeta normal; fila 2 = normal + ancha; fila 3 = ancha + normal. En tablet 2 columnas; en móvil 1 columna.
2. **Fondo de la sección:** `mist` (#F3F6FA) con un patrón muy sutil de líneas de circuito y nodos (SVG en línea, opacidad 4–6 %), que recuerde los trazos del logo.
3. **Cada tarjeta:**
   - Fondo blanco, borde de 1 px `navy/8`, esquinas 16 px, sin la barra superior actual.
   - Arriba: etiqueta del pilar como *pill* (INTELLIGENT naranja, CONNECTED verde, SECURE teal) con su ícono.
   - **Problema** como titular grande (20–24 px, 700, azul marino).
   - Un separador con flecha (→) en el color del pilar, y debajo la **solución** (16–17 px).
   - Servicios como chips al pie.
   - **Detalle decorativo:** en la esquina inferior derecha, un fragmento de trazo de circuito con nodo (SVG, color del pilar al 12 % de opacidad), grande y recortado por el borde de la tarjeta.
   - Las tarjetas anchas pueden llevar el problema más grande y la solución a la derecha en escritorio.
4. **Interacción:** al pasar el mouse, la tarjeta sube 2–4 px, el borde toma el color del pilar y el trazo decorativo sube a ~20 % de opacidad. Transición 200–300 ms. Respetar `prefers-reduced-motion`.
5. La línea "También: …" queda debajo, centrada, como está.

## Evita
- Degradados chillones, sombras pesadas, glassmorphism exagerado, emojis.
- Cambiar textos, colores de marca o el orden de las tarjetas.

## Criterios de aceptación
- Se ve claramente distinto y más elaborado que antes, pero limpio y legible.
- Contraste AA en todos los textos. Navegable con teclado (foco visible).
- Correcto en 375 px, 768 px, 1024 px y 1440 px, sin scroll horizontal.
- `npm run build` sin errores. No hagas commit.
