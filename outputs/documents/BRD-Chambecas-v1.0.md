---
document_code: BRD-CHAMBECAS-001-v1.0
project: Las Chambecas
date: 2026-07-28
author: Pegasus AI Pipeline
status: DRAFT
---

# Business Requirements Document — Las Chambecas

## Version History
| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | 2026-07-28 | Pegasus AI | Initial version |

---

## 1. Executive Summary
Las Chambecas es un emprendimiento chileno dedicado a la venta de artículos de fiesta infantil, sublimación personalizada y cotillón. El proyecto consiste en un sitio web corporativo estático de 7 páginas que permite a clientes potenciales conocer productos y servicios (piñatas, tazas personalizadas, poleras sublimadas, agendas, cotillón), realizar pedidos personalizados y contactar directamente por WhatsApp o Instagram. El sitio está desarrollado con HTML5, CSS3 y JavaScript vanilla, desplegado en Vercel con costo cero de hosting.

## 2. Business Objectives
| ID | Objective | KPI |
|----|-----------|-----|
| BO-01 | Establecer presencia digital profesional | Sitio web funcional y en línea 24/7 |
| BO-02 | Incrementar consultas de clientes | Incremento de mensajes WhatsApp en un 50% |
| BO-03 | Facilitar el proceso de pedidos personalizados | Reducción del tiempo de consulta a pedido |
| BO-04 | Exhibir catálogo completo de productos | Visitas a galería y páginas de producto |

## 3. Project Scope
### 3.1 In Scope
- Sitio web de 7 páginas: Inicio, Galería, Servicios, Pedido, Nosotros, Contacto, Producto
- Diseño responsive mobile-first
- Formulario de pedido personalizado (vía Formspree)
- Botón flotante de WhatsApp
- Galería interactiva con lightbox
- Despliegue en Vercel con HTTPS y CDN global

### 3.2 Out of Scope
- Backend o base de datos
- Autenticación de usuarios
- Carrito de compras / e-commerce transaccional
- Panel de administración
- Aplicación móvil nativa

## 4. Stakeholders
| Role | Responsibility |
|------|---------------|
| Product Owner | Dueño del emprendimiento, define visión y prioridades |
| Technical Lead | Decisiones arquitectónicas y desarrollo |
| End Users | Clientes que buscan artículos de fiesta y sublimación |

## 5. Business Requirements
| ID | Requirement | Priority | Source |
|----|------------|----------|--------|
| BR-001 | El sitio SHALL estar disponible 24/7 con HTTPS | MUST | Arquitectura |
| BR-002 | El sitio SHALL cargar en menos de 3 segundos en conexiones 4G | MUST | Performance |
| BR-003 | El sitio SHALL ser responsive (mobile, tablet, desktop) | MUST | UX |
| BR-004 | El sitio SHALL mostrar galería de productos con imágenes | MUST | Catálogo |
| BR-005 | El sitio SHALL permitir contacto vía WhatsApp | MUST | Conversión |
| BR-006 | El sitio SHALL tener formulario de pedido personalizado | MUST | Ventas |
| BR-007 | El sitio SHALL cumplir WCAG AA | SHOULD | Accesibilidad |
| BR-008 | El sitio SHALL tener SEO básico (meta tags, sitemap) | SHOULD | Descubrimiento |

## 6. Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Page load time | < 3s | Lighthouse / Playwright |
| Mobile responsiveness | 100% pages | Playwright E2E |
| Form submission success | > 95% | Formspree analytics |
| Uptime | > 99.9% | Vercel status |
| Console errors | 0 | Playwright console check |

## 7. Assumptions and Constraints
| ID | Description |
|----|-------------|
| A-01 | Hosting gratuito en Vercel sin costos operativos |
| A-02 | Formspree como backend de formularios serverless |
| A-03 | Sitio 100% estático sin necesidad de servidor |
| A-04 | Presupuesto $0 para infraestructura |
| C-01 | Sin backend, autenticación ni base de datos |
| C-02 | Sin framework JS para mantener bundle mínimo |

## 8. Approvals
| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | [Pendiente] | | |
| Technical Lead | Pegasus AI | 2026-07-28 | ✅ Generado |
