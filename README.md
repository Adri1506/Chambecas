# Las Chambecas 🎉

[![Vercel](https://img.shields.io/badge/deploy-vercel-000?logo=vercel)](https://chambecas.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Sitio web corporativo de **Las Chambecas** — tu tienda de confianza para artículos de fiesta infantil, sublimación personalizada y cotillón en Chile.

**URL**: [https://chambecas.vercel.app](https://chambecas.vercel.app)

## Características

- 🎯 Página de inicio con hero y secciones destacadas
- 🖼️ Galería interactiva de piñatas con lightbox
- 🛍️ Catálogo de servicios: tazas, poleras, cotillón, agendas
- 📝 Formulario de pedido personalizado
- 💬 Botón flotante de WhatsApp
- 📱 Diseño responsive mobile-first
- ♿ Accesibilidad WCAG AA

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| **Markup** | HTML5 semántico |
| **Estilos** | CSS3 (variables, Grid, Flexbox, BEM) |
| **Comportamiento** | JavaScript ES6+ vanilla |
| **Formularios** | Formspree (serverless) |
| **Hosting** | Vercel (CDN global, HTTPS) |

## Getting Started

```bash
# Clonar
git clone https://github.com/Adri1506/Chambecas.git

# Abrir en navegador (no requiere build)
open index.html
```

## Estructura

```
├── index.html          # Página de inicio
├── galeria.html        # Galería de piñatas
├── servicios.html      # Servicios
├── pedido.html         # Formulario de pedido
├── nosotros.html       # Sobre nosotros
├── contacto.html       # Contacto
├── producto.html       # Precios
├── css/
│   └── style.css       # Estilos completos
├── js/
│   ├── main.js         # Funcionalidad principal
│   └── productos.js    # Lógica de productos
├── imagenes/           # Imágenes de productos
└── branding/           # Logo y banner
```

## Documentación

- [BRD](outputs/documents/BRD-Chambecas-v1.0.md) — Business Requirements
- [SRS](outputs/documents/SRS-Chambecas-v1.0.md) — Software Requirements
- [SDD](outputs/documents/SDD-Chambecas-v1.0.md) — Software Design
- [Playwright Report](outputs/production/playwright_e2e_report.md) — E2E Test Results

## Licencia

MIT — ver [LICENSE](LICENSE)

---

<div align="center">
  <sub>Hecho con ❤️ para Las Chambecas</sub>
</div>
