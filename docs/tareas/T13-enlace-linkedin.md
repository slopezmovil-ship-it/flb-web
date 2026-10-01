# T13: actualizar el enlace de LinkedIn
**Modelo recomendado:** cualquiera (Gemini o Claude Sonnet). Es un cambio de texto, sin diseño.
**Contexto:** el perfil de LinkedIn de Steven cambió de dirección. Hay que reemplazar el enlace viejo por el nuevo en todo el sitio.

- **Enlace nuevo (completo):** `https://www.linkedin.com/in/steven-lopez-flb`
- **Texto visible nuevo:** `linkedin.com/in/steven-lopez-flb`
- **Enlace viejo (dos formas de escribirlo):** `steven-l%C3%B3pez-755245247` y `steven-lópez-755245247`

## Qué hacer
Cambia solo estas líneas, nada más:

| Archivo | Qué cambiar |
|---|---|
| `src/components/Contacto.astro` (línea 12) | `linkedinUrl` → `'https://www.linkedin.com/in/steven-lopez-flb'` |
| `src/layouts/Base.astro` (línea 45, `sameAs`) | `['https://www.linkedin.com/in/steven-lopez-flb']` |
| `src/i18n/es.ts` (línea 186) | `linkedin: 'linkedin.com/in/steven-lopez-flb',` |
| `src/i18n/en.ts` (línea 186) | `linkedin: 'linkedin.com/in/steven-lopez-flb',` |
| `docs/marca.md` (línea 57) | `- LinkedIn: https://www.linkedin.com/in/steven-lopez-flb` |
| `docs/contenido-web.md` (líneas 119 y 226) | `- LinkedIn: linkedin.com/in/steven-lopez-flb` |

## No tocar
- Diseño, íconos, otros textos ni otros enlaces (WhatsApp, correo).
- Los archivos de `docs/tareas/` anteriores.
- No hagas commit ni push.

## Comprobación
1. Busca en todo el proyecto (sin `node_modules` ni `dist`) el texto `755245247`: debe dar **cero resultados**.
2. Busca `steven-lopez-flb`: debe aparecer en los 6 archivos de la tabla (7 líneas en total).
3. Ejecuta `npm run build`: debe terminar sin errores.
4. En `npm run dev`, en la sección Contacto (español e inglés), el enlace de LinkedIn muestra el texto nuevo y abre `https://www.linkedin.com/in/steven-lopez-flb` en una pestaña nueva.

## Al terminar
Resume en 3 líneas qué archivos cambiaste y el resultado de las comprobaciones.
