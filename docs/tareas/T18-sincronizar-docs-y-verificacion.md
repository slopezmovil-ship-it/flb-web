# T18: sincronizar documentos y verificación final de la auditoría
**Modelo recomendado:** cualquiera (Gemini o Claude Sonnet).
**Contexto:** cuarta y última tarea (T15 a T18) de la auditoría de posicionamiento aprobada por Steven el 4-oct-2026. Los textos vigentes ya están en `src/i18n/`; falta que `docs/` no los contradiga y comprobar que todo quedó consistente. Requiere T15, T16 y T17 hechas.

## Parte 1: actualizar `docs/propuesta-web-v2.md`
Esta es la fuente de verdad de la estructura v2. Ajusta solo estas secciones para que reflejen exactamente lo que hoy dice `src/i18n/es.ts` (cópialo desde ahí, no lo reescribas):
- La tabla de "¿Qué necesita tu operación?" (6 filas: dolor, solución y servicios) y la línea `**También:**` (ahora solo: Oficinas inteligentes · Sitio web y presencia digital).
- La sección "Para quién" (ahora 4 perfiles, en el orden de `paraQuien.perfiles`).
- La lista de servicios por pilar y los complementarios, si aparecen en ese archivo (ahora 3 complementarios, sin "Análisis de datos").

Añade al inicio una nota breve: `> 4-oct-2026: textos de servicios, soluciones y "Para quién" actualizados por la auditoría de posicionamiento (T15 a T18). La fuente de verdad textual es src/i18n/.`

## Parte 2: nota en `docs/contenido-web.md`
Es la referencia de la v1. No cambies su contenido; solo añade, junto a la nota de aviso que ya está al inicio, esta línea: `> 4-oct-2026: servicios, soluciones y "Para quién" fueron actualizados (T15 a T18). Ver src/i18n/ y docs/propuesta-web-v2.md.`

## Parte 3: verificación global
1. Busca en `src/` y `docs/propuesta-web-v2.md` (sin `node_modules` ni `dist`), sin distinguir mayúsculas: `tablero`, `dashboard`, `No tienes quién`, `No one is taking care`, `Tu departamento de TI externo`, `Your outsourced IT department`, `Análisis de datos`, `Data analytics`, `Asistentes y agentes de atención`, `Assistants and service agents`, `[cite`. Deben dar **cero resultados**.
2. Simetría ES/EN. Cuenta y confirma que coinciden en ambos archivos: `servicios.pilares` = 3 (con 5, 4 y 4 elementos), `complementarios.items` = 3, `soluciones.items` = 6, `soluciones.tambien` = 2, `paraQuien.perfiles` = 4.
3. Reglas de marca: el eslogan "Intelligent. Connected. Secure." sigue en inglés en ambas versiones; no aparece el nombre de ningún cliente (en especial "ALPLA"); no hay menciones de trading ni finanzas personales; no hay precios.
4. Ejecuta `npm run build`: debe terminar sin errores.
5. En `npm run dev`, recorre la página completa en `/` y `/en/` y confirma que Servicios, "¿Qué necesita tu operación?" y "Para quién" se ven bien.

## No tocar
- Ningún texto de `src/i18n/` salvo que la comprobación 1 o 2 encuentre un error: en ese caso corrígelo copiando el texto aprobado de la tarea correspondiente (T15, T16 o T17) y dilo en el resumen.
- Componentes, diseño ni tareas anteriores. No hagas commit ni push.

## Al terminar
Resume en 4 líneas: archivos cambiados, resultado de cada comprobación y cualquier hallazgo. Detente.
