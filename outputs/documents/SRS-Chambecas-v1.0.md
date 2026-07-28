---
document_code: SRS-CHAMBECAS-001-v1.0
project: Las Chambecas
date: 2026-07-28
author: Pegasus AI Pipeline
status: DRAFT
---

# Software Requirements Specification — Las Chambecas

## Version History
| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | 2026-07-28 | Pegasus AI | Initial version |

---

## 1. Introduction
### 1.1 Purpose
Este documento especifica los requisitos funcionales y no funcionales para el sitio web corporativo de Las Chambecas, una tienda de artículos de fiesta infantil, sublimación personalizada y cotillón.

### 1.2 Scope
El sistema consiste en un sitio web estático de 7 páginas (Inicio, Galería, Servicios, Pedido, Nosotros, Contacto, Producto) desarrollado con HTML5, CSS3 y JavaScript vanilla, desplegado en Vercel.

## 2. Overall Description
### 2.1 Product Perspective
Sitio web informativo y de contacto para un emprendimiento local chileno. Sin backend, sin base de datos, 100% estático.

### 2.2 User Characteristics
- Clientes potenciales buscando artículos de fiesta
- Usuarios de dispositivos móviles (tráfico principal)
- Usuarios con distintos niveles de alfabetización digital

### 2.3 Operating Environment
- Navegadores modernos (Chrome, Firefox, Safari, Edge últimas 2 versiones)
- Dispositivos móviles, tablets y desktop
- Hosting: Vercel con CDN global

## 3. Functional Requirements
| ID | Description | Priority | Verification |
|----|-------------|----------|--------------|
| FR-01 | El sistema SHALL mostrar una página de inicio con hero, servicios y galería de piñatas | MUST | Playwright E2E |
| FR-02 | El sistema SHALL proporcionar navegación entre todas las páginas mediante menú | MUST | Playwright E2E |
| FR-03 | El sistema SHALL mostrar galería de productos con imágenes y lightbox | MUST | Playwright E2E |
| FR-04 | El sistema SHALL permitir envío de formulario de pedido personalizado | MUST | TestSprite |
| FR-05 | El sistema SHALL mostrar información de contacto (WhatsApp, Instagram, email) | MUST | Playwright E2E |
| FR-06 | El sistema SHALL tener botón flotante de WhatsApp con enlace directo | MUST | Playwright E2E |
| FR-07 | El sistema SHALL ser responsive adaptándose a móvil, tablet y desktop | MUST | Playwright E2E |
| FR-08 | El sistema SHALL tener menú hamburguesa en dispositivos móviles | MUST | Playwright E2E |
| FR-09 | El sistema SHALL mostrar página "Sobre Nosotros" con historia del emprendimiento | SHOULD | Playwright E2E |
| FR-10 | El sistema SHALL tener página de producto con query params para precios | SHOULD | Playwright E2E |

## 4. Non-Functional Requirements
| ID | Requirement | Target |
|----|-------------|--------|
| NFR-01 | Performance: Tiempo de carga inicial < 3s | Lighthouse |
| NFR-02 | Disponibilidad: 99.9% uptime | Vercel SLA |
| NFR-03 | Seguridad: HTTPS obligatorio, sin secretos en código | Security audit |
| NFR-04 | Accesibilidad: Cumplir WCAG AA | axe-core / Playwright |
| NFR-05 | Compatibilidad: Navegadores modernos (últimas 2 versiones) | Playwright |
| NFR-06 | SEO: Meta tags, Open Graph, sitemap | Inspección |
| NFR-07 | Sin errores de consola JavaScript | Playwright console |

## 5. Interface Requirements
### 5.1 User Interfaces
- 7 páginas HTML con diseño consistente
- Paleta de colores: Teal (#00B8B0), Púrpura (#7A2EB5), Dorado (#E0B858)
- Tipografía: Poppins (headings), Inter (body)
- Diseño mobile-first con breakpoints en 480px, 768px, 1024px, 1200px

### 5.2 External Interfaces
- Formspree: Backend serverless para formularios
- WhatsApp API: Enlace directo wa.me
- Instagram: Enlace externo a perfil

## 6. Architecture
- **Patrón**: Static Monolith (Monolítica Estática)
- **Stack**: HTML5 + CSS3 (vanilla) + JavaScript ES6+
- **Hosting**: Vercel con cleanUrls, CDN global, HTTPS
- **Formularios**: Formspree (serverless)

## 7. Design
- Design system completo con variables CSS
- 14 componentes: Header, Footer, Hero, Cards, Botones, Formularios, Lightbox, etc.
- Animaciones: pulse, fade-in, slide, shake, spin

## 8. Verification
| Requirement | Method | Tool |
|-------------|--------|------|
| FR-01 a FR-10 | E2E testing | Playwright + TestSprite |
| NFR-01 | Performance audit | Lighthouse |
| NFR-03 | Security audit | Security Agent |
| NFR-04 | Accessibility | WCAG AA checklist |

## 9. Traceability Matrix
| Feature | FR ID | Test |
|---------|-------|------|
| Homepage | FR-01 | TestSprite: Homepage carga |
| Navegación | FR-02 | TestSprite: Navegación |
| Galería | FR-03 | TestSprite: Galería |
| Formulario | FR-04 | TestSprite: Contacto |
| Contacto | FR-05 | TestSprite: Contacto |
| WhatsApp | FR-06 | Playwright snapshot |

## 10. Approvals
| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | [Pendiente] | | |
| Technical Lead | Pegasus AI | 2026-07-28 | ✅ Generado |
