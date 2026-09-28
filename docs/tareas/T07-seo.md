# T07: SEO y datos para buscadores
**Textos:** `docs/contenido-web.md` → "SEO" de cada idioma.

1. En `Base.astro`: `<title>`, meta description, `canonical`, y `hreflang` (`es`, `en`, `x-default` → `/`) usando el dominio `https://flbcr.com`.
2. Open Graph y Twitter Card con `/og-image.jpg` (1200×630), título y descripción de cada idioma, `og:locale` es_CR / en_US.
3. Datos estructurados JSON-LD tipo `ProfessionalService`: nombre "FLB Group", legalName "FLB Services Group", url, logo (`/brand/icon-512.png`), teléfono +506 8991-7668, email, dirección (Heredia, Costa Rica), `areaServed`: Costa Rica, Guatemala, Honduras, Nicaragua, Panamá; `sameAs`: el LinkedIn.
4. Instala `@astrojs/sitemap` (con `site: 'https://flbcr.com'` e i18n) y crea `public/robots.txt` que apunte al sitemap.
5. Un solo `h1` por página; jerarquía de encabezados correcta.

## Criterios de aceptación
- El JSON-LD valida sin errores (estructura correcta). `npm run build` genera `sitemap-index.xml`.
