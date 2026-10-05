# T20: tarjetas anchas sin huecos, "departamento" en Agentes FLB y chip sobrante
**Modelo recomendado:** Claude Sonnet (o Gemini). Los cambios vienen exactos y ya fueron probados; no hay que diseñar nada.
**Contexto:** revisión externa de flbcr.com posterior a T15–T19 (aprobada por Steven el 4-oct-2026). Quedaron tres detalles:
1. En escritorio, las tarjetas anchas de "¿Qué necesita tu operación?" siguen con mucho espacio vacío (la T19 solo centró el contenido). La altura de la fila la define la tarjeta angosta vecina, que tiene más líneas de texto.
2. Los servicios dicen "Agentes de IA por departamento" y la sección Agentes FLB dice "para cada área". Debe quedar una sola forma: **departamento** (en inglés, **department**).
3. El chip "IA aplicada a tus procesos" es vago y repite lo que ya dicen los otros dos. Se elimina.

Ejecuta solo esta tarea. No cambies ningún otro texto, color, sección ni componente.

## 1. Textos (`src/i18n/es.ts` y `src/i18n/en.ts`)
Copia los textos tal cual.

### `es.ts`
| Clave | Antes | Ahora |
|---|---|---|
| `agentes.titulo` | `'Un agente de inteligencia artificial para cada área de tu empresa'` | `'Un agente de inteligencia artificial para cada departamento de tu empresa'` |
| `agentes.lista[2].tareas[1].texto` (Agente de Atención) | `'Clasifica cada solicitud y la envía al área correcta'` | `'Clasifica cada solicitud y la envía al departamento correcto'` |
| `soluciones.items[0].servicios` | `['Automatización de procesos (RPA)', 'Agentes de IA por departamento', 'IA aplicada a tus procesos']` | `['Automatización de procesos (RPA)', 'Agentes de IA por departamento']` |
| `servicios.pilares[0].items` (INTELLIGENT) | 5 elementos; el último es `'IA aplicada a tus procesos'` | Elimina ese último elemento. Quedan 4. |

### `en.ts`
| Clave | Antes | Ahora |
|---|---|---|
| `agentes.titulo` | `'An artificial intelligence agent for every area of your business'` | `'An artificial intelligence agent for every department in your business'` |
| `agentes.lista[2].tareas[1].texto` (Customer Service Agent) | `'Classifies each request and routes it to the right team'` | `'Classifies each request and routes it to the right department'` |
| `soluciones.items[0].servicios` | `['Process automation (RPA)', 'AI agents for every department', 'AI applied to your processes']` | `['Process automation (RPA)', 'AI agents for every department']` |
| `servicios.pilares[0].items` (INTELLIGENT) | 5 elementos; el último es `'AI applied to your processes'` | Elimina ese último elemento. Quedan 4. |

**No tocar:**
- La clave `area:` de cada agente ni sus valores ("Facturación y contabilidad", "Ventas", "Billing and accounting", etc.).
- La frase "somos tu área de TI completa" (en `soluciones` y en `paraQuien`): ahí "área de TI" es correcto.
- `menu.agentes`, `agentes.etiqueta`, `agentes.intro` y el resto de la sección.

## 2. Tarjetas anchas (`src/components/Soluciones.astro`)
**Idea:** la tarjeta ancha deja de mostrar problema y solución lado a lado. Ahora lleva arriba la etiqueta del pilar y el problema (con letra más grande), y abajo un panel con un tono suave del color del pilar que contiene la solución y los chips. El panel se estira hasta el fondo de la tarjeta, así que no queda hueco. Además, la proporción ancha/angosta pasa de 2:1 a 3:2, para que la tarjeta angosta use menos líneas y la fila sea menos alta. El patrón bento (`bentoPattern`) no cambia.

### 2.1 Color del panel por pilar
En el tipo de `colores` agrega `tint: string;` y en cada pilar su valor:
- `INTELLIGENT`: `tint: 'var(--color-orange)',`
- `CONNECTED`: `tint: 'var(--color-green)',`
- `SECURE`: `tint: 'var(--color-teal)',`

En el `<article>`, justo antes de `tabindex="0"`, agrega:
```astro
            style={`--sol-tint: ${c.tint};`}
```

### 2.2 Dos envoltorios dentro de `.sol-card__body`
Sin cambiar ninguna clase ni el orden de los elementos existentes, envuelve:
- la etiqueta del pilar (`<div class="mb-5">…`) y el `<h3 class="sol-card__problem …">` en `<div class="sol-card__head">…</div>`;
- el separador con flecha, el `<p class="sol-card__solution …">` y el `<ul>` de chips en `<div class="sol-card__sol">…</div>`.

Resultado (resumido):
```astro
            <div class="sol-card__body flex flex-1 flex-col p-6 lg:p-7">
              <div class="sol-card__head">
                {/* Pill label */}        … sin cambios …
                {/* Problem title */}     … sin cambios …
              </div>

              <div class="sol-card__sol">
                {/* Arrow separator */}   … sin cambios …
                {/* Solution */}          … sin cambios …
                {/* Service chips */}     … sin cambios …
              </div>
            </div>
```

### 2.3 Estilos
En el `<style>`, deja como están `.soluciones-grid { grid-template-columns: 1fr; }` y el bloque `@media (min-width: 768px)`. **Reemplaza completo** el bloque `@media (min-width: 1024px) { … }` (el que contiene las reglas de `.sol-card--wide`) por esto:

```css
  /* Envoltorios: en móvil, tablet y tarjetas angostas no afectan el diseño */
  .sol-card__head,
  .sol-card__sol {
    display: contents;
  }

  @media (min-width: 1024px) {
    /* Bento 3:2 (antes 2:1) */
    .soluciones-grid {
      grid-template-columns: repeat(5, 1fr);
    }
    .sol-card {
      grid-column: span 2;
    }
    .sol-card--wide {
      grid-column: span 3;
    }

    /* Tarjeta ancha: problema arriba, panel de solución abajo */
    .sol-card--wide .sol-card__head {
      display: block;
    }
    .sol-card--wide .sol-card__head > div:first-child {
      margin-bottom: 1rem;
    }
    .sol-card--wide .sol-card__problem {
      margin-bottom: 1.5rem;
      font-size: 1.75rem;
      line-height: 1.25;
    }
    /* El panel se estira hasta el fondo de la tarjeta */
    .sol-card--wide .sol-card__sol {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: center;
      border-radius: 0.875rem;
      padding: 1.5rem;
      background: var(--color-mist);
      background: color-mix(in srgb, var(--sol-tint) 7%, white);
    }
    /* Separador con flecha: oculto en las anchas */
    .sol-card--wide .sol-card__sol > div:first-child {
      display: none;
    }
    .sol-card--wide .sol-card__solution {
      max-width: 34rem;
      margin-bottom: 1.25rem;
      font-size: 1.125rem;
      line-height: 1.65;
    }
    .sol-card--wide .sol-card__sol > ul {
      margin-top: 0;
    }
  }

  @media (min-width: 1280px) {
    .sol-card--wide .sol-card__problem {
      font-size: 1.875rem;
    }
  }
```

Con esto desaparecen las reglas anteriores de las tarjetas anchas (cuadrícula interna de dos columnas, línea vertical azul, `opacity: 0.85`, `align-self: center`). Los bloques de hover/foco y de `prefers-reduced-motion` no se tocan.

**No hacer:** no cambies `bentoPattern`, las clases de Tailwind de los elementos, las tarjetas angostas, el tamaño de los chips ni los colores de la marca.

## 3. Documentación
- `docs/propuesta-web-v2.md`, sección 3, primera fila de la tabla: en la columna de etiquetas quita ` · IA aplicada a tus procesos`. Queda `Automatización de procesos (RPA) · Agentes de IA por departamento`.
- `docs/contenido-web.md`: elimina la línea `- IA aplicada a tus procesos` (lista INTELLIGENT en español) y la línea `- AI applied to your processes` (lista en inglés).
- `docs/tareas/README.md`: marca T20 como hecha.
- No modifiques las tareas anteriores (`T01`–`T19`) ni `public/descargas/FLB-Agentes-IA.pdf` (el PDF se regenera aparte).

## Comprobación
1. `npm run build` termina sin errores.
2. Busca en `src/` estos textos: deben dar **cero resultados**.
   `IA aplicada a tus procesos` · `AI applied to your processes` · `para cada área` · `every area` · `al área correcta` · `right team`
3. En `npm run dev`, revisa `/` y `/en/` a **1024, 1280 y 1440 px**:
   - Fila 1: ancha + angosta; fila 2: angosta + ancha; fila 3: ancha + angosta (igual que antes, con la angosta un poco más ancha).
   - En cada tarjeta ancha: etiqueta del pilar y problema arriba; debajo, el panel de color suave con la solución y los chips, que llega hasta el borde inferior interno de la tarjeta. No hay espacio vacío entre el problema y el panel, ni debajo del panel.
   - Dentro del panel, el espacio libre arriba y abajo del texto es pequeño (referencia de la prueba: entre 0 y 50 px).
   - Ningún chip ocupa dos líneas ni se sale de su tarjeta. No hay scroll horizontal.
   - La primera tarjeta muestra solo dos chips.
4. A **800 px y 390 px** la sección se ve igual que antes de esta tarea (salvo el chip eliminado en la primera tarjeta): las seis tarjetas con el mismo diseño, con separador de flecha y sin panel de color.
5. La sección Agentes FLB muestra el título nuevo ("…para cada departamento de tu empresa" / "…for every department in your business") y no rompe el diseño.

## Al terminar
No hagas commit ni push. Resume en 3 líneas qué archivos cambiaste y el resultado de las comprobaciones.
