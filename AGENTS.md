# AGENTS.md: reglas para cualquier agente que trabaje en este repositorio

Este repositorio es el sitio web de **FLB Group** (flbcr.com). Lo lees tú, un agente de IA (Antigravity, Claude Code u otro). Sigue estas reglas siempre.

## Cómo trabajamos
- Steven López (dueño) te pide ejecutar **una tarea a la vez**: `docs/tareas/T0X-*.md`. Ejecuta solo esa tarea, nada más.
- Al terminar una tarea: corre `npm run build` sin errores, resume en el chat qué hiciste y qué archivos cambiaste, y **detente**. No sigas con la siguiente tarea por tu cuenta.
- **No hagas `git commit` ni `git push`.** Steven revisa y sube los cambios.
- Si algo en la tarea es ambiguo o falta información, pregunta en lugar de inventar.

## Fuentes de verdad (no las modifiques)
- `docs/contenido-web.md`: **todos los textos** del sitio, en español e inglés. Copia los textos tal cual. No inventes, agregues, resumas ni "mejores" ningún texto. Si un texto no está ahí, no va en el sitio.
- `docs/marca.md`: colores, tipografía, logos, tono y reglas visuales.

## Stack
- **Astro** (sitio estático) + **Tailwind CSS**. Sin frameworks de UI pesados (nada de React salvo que una tarea lo pida).
- Tipografía **Montserrat** instalada con `@fontsource/montserrat` (no desde Google Fonts CDN).
- Idiomas: español en `/` (principal) e inglés en `/en/`, con la i18n nativa de Astro.
- Despliegue: Vercel, conectado a GitHub. No agregues configuración de otros hosts.

## Reglas estrictas
- **Sin fotos de personas.** Ni del fundador ni de bancos de imágenes.
- **Sin precios.**
- **Nunca nombres clientes.** Nunca escribas "ALPLA".
- No uses las frases "un solo responsable" ni "un solo punto de contacto".
- Los logos están en `public/brand/`. Úsalos tal cual: no los redibujes, recortes, recolorees ni generes nuevos.
- Nada de rastreadores, cookies de terceros, chat widgets ni scripts externos que no pida una tarea.
- Accesible: contraste AA, textos alternativos, navegación con teclado, `lang` correcto en cada página.
- Rendimiento: imágenes en WebP con `width`/`height`, carga diferida fuera del primer pantallazo. Meta: Lighthouse ≥ 90 en todo.

## Estructura esperada
```
src/
  layouts/Base.astro
  components/        (Header, Hero, Servicios, Casos, …, Footer, WhatsAppButton)
  i18n/es.ts, en.ts  (textos copiados de docs/contenido-web.md)
  pages/index.astro, pages/en/index.astro
public/brand/        (logos: no tocar)
docs/                (fuentes de verdad y tareas: no tocar)
```
