# T06: contacto y pie de página
**Textos:** `docs/contenido-web.md` → "10. Contacto" y "11. Pie de página" (ES y EN).

## Contacto (`id="contacto"`, fondo azul marino, texto blanco)
- Izquierda: título, texto y datos de contacto (WhatsApp, correo con `mailto:`, LinkedIn en pestaña nueva, ubicación), cada uno con su ícono.
- Derecha: **formulario** con los campos de la fuente. Envío con **Web3Forms** (`https://api.web3forms.com/submit`):
  - La clave va en la variable de entorno `PUBLIC_WEB3FORMS_KEY` (crea `.env.example` con la variable vacía; **no** escribas ninguna clave real en el código).
  - Incluye el campo trampa `botcheck` (oculto) contra spam.
  - Validación HTML (correo válido, campos obligatorios), estado "enviando…", mensaje de confirmación de la fuente y mensaje de error amable si falla (sugiere escribir por WhatsApp).
  - Si `PUBLIC_WEB3FORMS_KEY` está vacía, el formulario muestra un aviso y el botón de WhatsApp como alternativa, sin romper la página.

## Pie de página
- Fondo azul marino más oscuro. Texto de la fuente, enlaces al menú y al selector de idioma. Año dinámico.

## Criterios de aceptación
- Formulario accesible (etiquetas visibles, errores anunciados).
- Sin claves en el repositorio. `npm run build` sin errores.
