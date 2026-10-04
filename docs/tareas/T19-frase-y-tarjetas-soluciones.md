# T19: frase "Socio tecnológico integral" y ajuste de tarjetas en "¿Qué necesita tu operación?"
**Modelo recomendado:** Claude Sonnet (o Gemini). Los cambios vienen exactos; no hay que diseñar nada.
**Contexto:** revisión posterior a T15–T18 (aprobada por Steven el 4-oct-2026). Se encontraron tres problemas:
1. La frase "Socio tecnológico integral…" quedó en `servicios.intro`, una sección que ya no se muestra en la página. No se ve en ningún lado.
2. En la tarjeta "Datos dispersos y decisiones a ciegas", las etiquetas largas se parten en dos líneas y el óvalo se deforma (escritorio).
3. En escritorio, las tarjetas anchas quedan con un hueco grande entre el texto y las etiquetas.

Ejecuta solo esta tarea. No cambies ningún otro texto, color ni componente.

## 1. Textos (`src/i18n/es.ts` y `src/i18n/en.ts`)
Copia los textos tal cual.

### `es.ts`
- `soluciones.intro`:
  - Antes: `'Cuéntanos el problema. Nosotros ponemos la solución.'`
  - Ahora: `'Socio tecnológico integral: de la infraestructura física a la inteligencia artificial.'`
- `soluciones.items[1].servicios` (tarjeta "Datos dispersos y decisiones a ciegas"):
  - Antes: `['Inteligencia de negocios (BI) y analítica', 'Aplicaciones a la medida e integración']`
  - Ahora: `['Inteligencia de negocios (BI)', 'Aplicaciones a la medida']`

### `en.ts`
- `soluciones.intro`:
  - Antes: `'Tell us the problem. We bring the solution.'`
  - Ahora: `'Full-service technology partner: from physical infrastructure to artificial intelligence.'`
- `soluciones.items[1].servicios`:
  - Antes: `['Business intelligence (BI) and analytics', 'Custom applications and integration']`
  - Ahora: `['Business Intelligence (BI)', 'Custom applications']`
- `servicios.intro` (sección que no se muestra; solo para que la frase sea la misma en todo el archivo):
  - Antes: `'Integrated technology partner: from physical infrastructure to artificial intelligence.'`
  - Ahora: `'Full-service technology partner: from physical infrastructure to artificial intelligence.'`

**No tocar:** `servicios.pilares` (la lista completa de servicios sigue diciendo "Inteligencia de negocios (BI) y analítica" y "Aplicaciones a la medida e integración"; eso es correcto). Solo se acortan las etiquetas de la tarjeta.

## 2. Componente (`src/components/Soluciones.astro`)
Son cuatro cambios pequeños.

### 2.1 Subtítulo en una sola línea (escritorio)
En el `<p>` del subtítulo (el que muestra `{t.soluciones.intro}`), cambia `max-w-2xl` por `max-w-3xl`.

### 2.2 Etiquetas que no se parten
En el `<li>` de las etiquetas de servicios:
- Antes: `'rounded-full border bg-white px-3 py-1 text-sm font-medium'`
- Ahora: `'whitespace-nowrap rounded-full border bg-white px-3 py-1 text-xs font-medium sm:text-sm'`

(En móvil el texto baja a `text-xs` para que la etiqueta más larga quepa en pantallas de 320 px; desde 640 px se mantiene `text-sm`.)

### 2.3 Tarjetas anchas sin hueco (bloque `@media (min-width: 1024px)` del `<style>`)
**Causa:** las etiquetas ya están ancladas al fondo (`mt-auto`). El hueco lo produce una fila vacía (`1fr`) en la cuadrícula interna de la tarjeta ancha. La solución es que la fila del problema y la solución ocupe ese espacio y su contenido quede centrado en vertical.

a) En `.sol-card--wide .sol-card__body`:
- Antes: `grid-template-rows: auto auto 1fr auto;`
- Ahora: `grid-template-rows: auto 1fr auto;`

b) En `.sol-card--wide .sol-card__body > div:nth-child(3)` (el separador con flecha, oculto en las anchas) deja solo:
```css
    .sol-card--wide .sol-card__body > div:nth-child(3) {
      display: none;
    }
```

c) En `.sol-card--wide .sol-card__body > ul` agrega la fila:
```css
    .sol-card--wide .sol-card__body > ul {
      grid-column: 1 / -1;
      grid-row: 3;
    }
```

`.sol-card__problem` y `.sol-card__solution` ya tienen `grid-row: 2` y `align-self: center`: no se tocan.

**No hacer:** no agregues `justify-between` ni `h-full` a la tarjeta, no cambies el patrón bento (`bentoPattern`), ni la altura igual por fila, ni las tarjetas angostas.

## 3. Documentación
En `docs/propuesta-web-v2.md`, sección "3. Lo que resolvemos":
- **Intro:** cambia a `Socio tecnológico integral: de la infraestructura física a la inteligencia artificial.`
- Fila "Datos dispersos y decisiones a ciegas", columna de etiquetas: `Inteligencia de negocios (BI) · Aplicaciones a la medida`

En `docs/tareas/README.md`, marca T19 como hecha.

## Comprobación
1. `npm run build` termina sin errores.
2. En `npm run dev`, revisa `/` y `/en/` a 1366, 1024, 800, 390 y 320 px de ancho:
   - El subtítulo nuevo aparece bajo "¿Qué necesita tu operación?" (en 1366 px, en una sola línea).
   - Ninguna etiqueta ocupa dos líneas ni se sale de su tarjeta. No hay scroll horizontal.
   - En escritorio (≥ 1024 px), en las tarjetas anchas el título y el texto quedan centrados en vertical entre la etiqueta del pilar y las etiquetas de servicios; estas siguen alineadas al fondo, a la misma altura que las de la tarjeta vecina.
   - En tablet y móvil las tarjetas se ven igual que antes (salvo las etiquetas más cortas).
3. Busca `Cuéntanos el problema` y `Tell us the problem` en `src/`: cero resultados.

## Al terminar
No hagas commit ni push. Resume en 3 líneas qué archivos cambiaste y el resultado de las comprobaciones.
