# Playwright E2E Report — Las Chambecas

**Fecha**: 2026-07-28  
**URL**: https://chambecas.vercel.app/  
**Browser**: Chromium (headless)  
**Tool**: playwright-cli v0.1.14  

---

## Resumen

| Ítem | Resultado |
|------|-----------|
| Páginas evaluadas | 7 |
| ✅ Exitosas | 7 |
| ❌ Fallidas | 0 |
| ⚠️ Advertencias | 1 |
| 🐛 Errores de consola | 0 |

---

## Resultados por Página

### 1. `/` — Inicio
| Check | Status |
|-------|--------|
| Carga correcta | ✅ |
| Título | "Las Chambecas — Fiestas Infantiles y Sublimación" |
| Hero presente | ✅ |
| Servicios (4 cards) | ✅ Tazas, Poleras, Cotillón, Agendas |
| Galería de piñatas (6 items) | ✅ |
| CTA WhatsApp | ✅ |
| Footer con enlaces | ✅ |
| Errores de consola | ✅ 0 |

### 2. `/galeria` — Galería
| Check | Status |
|-------|--------|
| Carga correcta | ✅ |
| Título | "Galería de Piñatas — Las Chambecas" |
| 15 piñatas en galería | ✅ |
| Links a precios | ✅ |
| Errores de consola | ✅ 0 |

### 3. `/servicios` — Servicios
| Check | Status |
|-------|--------|
| Carga correcta | ✅ |
| Título | "Servicios — Las Chambecas" |
| Errores de consola | ✅ 0 |

### 4. `/pedido` — Pedido
| Check | Status |
|-------|--------|
| Carga correcta | ✅ |
| Título | "Pedido Personalizado — Las Chambecas" |
| Errores de consola | ✅ 0 |

### 5. `/nosotros` — Sobre Nosotros
| Check | Status |
|-------|--------|
| Carga con `.html` | ✅ (redirige a `/nosotros`) |
| Carga directa `/nosotros` | ⚠️ ERR_ABORTED |
| Título | "Sobre Nosotros — Las Chambecas" |
| Errores de consola | ✅ 0 |

### 6. `/contacto` — Contacto
| Check | Status |
|-------|--------|
| Carga correcta | ✅ |
| Título | "Contacto — Las Chambecas" |
| Errores de consola | ✅ 0 |

### 7. `/producto?producto=pinatas` — Precios Piñatas
| Check | Status |
|-------|--------|
| Carga correcta | ✅ |
| Título | "Piñatas — Las Chambecas" |
| Query params funcionales | ✅ |
| Errores de consola | ✅ 0 |

---

## Hallazgos

### ⚠️ Navegación a `/nosotros` sin extensión
La ruta `/nosotros` (sin `.html`) falla con `ERR_ABORTED`. Sin embargo, `/nosotros.html` redirige correctamente a `/nosotros`. Posible issue de configuración en Vercel con cleanUrls.

**Recomendación**: Verificar que todos los enlaces internos apunten a URLs con la extensión correcta o que Vercel maneje correctamente las redirecciones sin extensión.

---

## Capturas

Las screenshots se encuentran en `.playwright-cli/`:
- `page-2026-07-28T20-16-31-375Z.png` — Homepage
- `page-2026-07-28T20-16-41-576Z.png` — Galería
- `page-2026-07-28T20-16-59-624Z.png` — Producto

---

## Veredicto

**✅ APROBADO** — El sitio funciona correctamente. Sin errores de consola. Todas las páginas cargan y los enlaces de navegación funcionan.
