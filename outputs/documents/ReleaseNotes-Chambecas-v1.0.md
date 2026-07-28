---
document_code: RELEASENOTES-CHAMBECAS-001-v1.0
project: Las Chambecas
date: 2026-07-28
---

# Release Notes v1.0

## Added
- **Homepage**: Hero con banner, sección de servicios (4 cards), galería de piñatas (6 items), CTA WhatsApp
- **Galería**: Grid de 15 piñatas con lightbox interactivo, enlaces a precios
- **Servicios**: Catálogo completo de servicios (tazas, poleras, cotillón, agendas, libros, anillados)
- **Pedido**: Formulario personalizado con envío vía Formspree
- **Nosotros**: Historia del emprendimiento
- **Contacto**: Formulario de contacto + WhatsApp + Instagram + email
- **Producto**: Página dinámica con precios por categoría (query params)
- **Responsive Design**: Adaptación a móvil, tablet y desktop
- **WhatsApp Float**: Botón flotante con efecto pulse en todas las páginas
- **Menú Hamburguesa**: Navegación mobile con overlay animado
- **Accesibilidad**: WCAG AA (skip link, ARIA labels, focus visible, contraste)

## Technical
- Stack: HTML5 + CSS3 + JS vanilla
- Hosting: Vercel con cleanUrls y HTTPS
- Formularios: Formspree (serverless)
- Performance: ~50KB total, sin frameworks

## Quality
- ✅ Playwright E2E: 7/7 páginas verificadas, 0 errores de consola
- ✅ TestSprite: Suite de tests durables creada
- ✅ Security audit: 0 críticos, 0 altos
- ✅ QA: Todos los paquetes aprobados

## Known Issues
- La ruta `/nosotros` sin extensión `.html` puede fallar con `ERR_ABORTED` en algunos casos. Usar `/nosotros.html` como fallback.
