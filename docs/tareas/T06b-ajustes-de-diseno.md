# T06b: ajustes de diseño (revisión de Steven y Claude)
No cambies ningún texto de `docs/contenido-web.md`, salvo lo indicado en el punto 5. Solo ajustes visuales y de formulario.

1. **Tamaño de letra (legibilidad):** hoy varios textos importantes miden 14 px. Súbelos a **16 px mínimo** en: servicios de cada pilar, subtítulo y frase de cada pilar, resultados de los casos de éxito, lista de "Otros proyectos", descripciones de "Cómo trabajamos", "Modalidades" y "Por qué FLB Group". Las etiquetas pequeñas (chips) pueden quedar en 14 px.
2. **Resultados de los casos:** que se lean como el dato principal de la tarjeta: 17–18 px, peso 600, color azul marino.
3. **Ancho en escritorio:** en pantallas de 1280 px o más, amplía el contenedor de las secciones con tarjetas (servicios, casos, modalidades, por qué FLB) a `max-w-6xl` (1152 px) para aprovechar mejor el ancho. Mantén los textos de párrafo en un ancho cómodo (máx. ~70 caracteres por línea).
4. **Botón flotante de WhatsApp:** en celular tapa el botón "Enviar" del formulario. Ocúltalo con una transición suave mientras la sección `#contacto` esté visible en pantalla (IntersectionObserver). Esa sección ya tiene su propio enlace a WhatsApp.
5. **Eslogan repetido en la portada:** el logo del hero ya incluye "INTELLIGENT. CONNECTED. SECURE.". Elimina el eslogan en texto que está encima del título del hero para no repetirlo (en ambos idiomas). El resto de textos del hero no cambia.
6. **Correos del formulario:** agrega campos ocultos de Web3Forms:
   - `subject`: "Nuevo contacto desde flbcr.com (ES)" en español y "Nuevo contacto desde flbcr.com (EN)" en inglés.
   - `from_name`: "Web FLB Group".

## Criterios de aceptación
- Se ve bien en 375 px, 768 px, 1280 px y 1440 px, sin scroll horizontal.
- El botón flotante no tapa nada del formulario en celular.
- `npm run build` sin errores. No hagas commit.
