---
document_code: SDD-CHAMBECAS-001-v1.0
project: Las Chambecas
date: 2026-07-28
author: Pegasus AI Pipeline
status: DRAFT
---

# Software Design Description — Las Chambecas

## Version History
| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | 2026-07-28 | Pegasus AI | Initial version |

---

## 1. Introduction
### 1.1 Purpose
Este documento describe el diseño arquitectónico y de software del sitio web Las Chambecas, siguiendo el estándar IEEE 1016.

### 1.2 Scope
Sitio web estático de 7 páginas para tienda de artículos de fiesta infantil.

## 2. Architectural Design
### 2.1 Architecture Pattern
**Static Monolith (Monolítica Estática)**

Justificación: La complejidad del proyecto (7 páginas informativas, sin estado, sin backend, sin autenticación) no justifica el overhead de frameworks modernos. HTML semántico, CSS modular con variables y JavaScript vanilla es la solución más eficiente.

### 2.2 Module Decomposition
```
chambecas/
├── pages/
│   ├── index.html       → Hero + servicios + preview galería
│   ├── galeria.html     → Grid de piñatas + lightbox
│   ├── servicios.html   → Sublimación, cotillón, agendas
│   ├── pedido.html      → Formulario personalizado → Formspree
│   ├── nosotros.html    → Historia del emprendimiento
│   ├── contacto.html    → Formulario + WhatsApp + Instagram
│   └── producto.html    → Precios por categoría
├── css/
│   └── style.css        → Variables, layout, componentes, responsive
├── js/
│   ├── main.js          → Menú hamburguesa, WhatsApp float, año dinámico
│   └── productos.js     → Lógica de productos y precios
├── imagenes/            → Imágenes de productos
├── branding/            → Logo, banner, imágenes de marca
└── vercel.json          → Configuración de despliegue
```

### 2.3 Folder Structure
```
/
├── *.html (7 páginas en raíz para SEO)
├── css/style.css
├── js/main.js, productos.js
├── imagenes/ (15+ imágenes)
├── branding/ (logo, banner)
└── vercel.json
```

## 3. Design Decisions
### ADR-001: Vanilla HTML/CSS/JS vs Framework
- **Context**: Selección de stack tecnológico para sitio de 7 páginas
- **Decision**: Usar HTML5 + CSS3 + JavaScript vanilla
- **Consequences**: Bundle < 50KB, sin build step, SEO óptimo, mantenimiento trivial

### ADR-002: Formspree como backend de formularios
- **Context**: Necesidad de recibir pedidos sin backend propio
- **Decision**: Usar Formspree para envío de emails desde formularios HTML
- **Consequences**: Sin servidor, sin base de datos, $0 costo

### ADR-003: Despliegue en Vercel
- **Context**: Opciones de hosting gratuito para sitio estático
- **Decision**: Vercel por cleanUrls, CDN global, HTTPS automático, git integration
- **Consequences**: Despliegue automático desde GitHub, rendimiento CDN

## 4. User Interface Design
### 4.1 Design System
| Element | Value |
|---------|-------|
| Primary color | #00B8B0 (Teal) |
| Secondary | #7A2EB5 (Púrpura) |
| Accent | #E0B858 (Dorado) |
| Heading font | Poppins 600/700 |
| Body font | Inter 400/500 |
| Border radius | 8px (lg), 12px (xl) |
| Container max | 1200px |

### 4.2 Screen Inventory
| Screen | Route | Purpose |
|--------|-------|---------|
| Inicio | / | Landing page con hero, servicios, galería |
| Galería | /galeria | Grid de piñatas con lightbox |
| Servicios | /servicios | Catálogo de servicios |
| Pedido | /pedido | Formulario de pedido personalizado |
| Nosotros | /nosotros | Historia del emprendimiento |
| Contacto | /contacto | Formulario de contacto + redes |
| Producto | /producto | Precios por categoría |

### 4.3 Navigation Flow
```
Inicio → Galería → (lightbox) → Producto (precios)
      → Servicios
      → Pedido
      → Nosotros
      → Contacto
      → WhatsApp (externo)
      → Instagram (externo)
```

## 5. Approvals
| Role | Name | Date | Signature |
|------|------|------|-----------|
| Technical Lead | Pegasus AI | 2026-07-28 | ✅ Generado |
