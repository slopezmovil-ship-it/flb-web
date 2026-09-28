# T08: revisión final (QA)
No agregues funcionalidades nuevas. Solo revisa y corrige.

1. Compara **cada texto** del sitio (ES y EN) contra `docs/contenido-web.md`. Corrige cualquier diferencia. Lista lo corregido.
2. Busca y elimina: "ALPLA", "un solo responsable", "un solo punto de contacto", precios, fotos de personas, logos de terceros.
3. Revisa en 360 px, 768 px y 1440 px: nada se desborda ni se corta; sin scroll horizontal.
4. Accesibilidad: contraste AA, `alt` en imágenes, foco visible, navegación completa con teclado, `lang` correcto.
5. Corre Lighthouse (móvil) en `/` y `/en/` sobre `npm run build && npm run preview`. Meta ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO. Corrige lo que baje de 90.
6. Entrega un resumen: puntajes de Lighthouse, lista de correcciones y cualquier pendiente.
