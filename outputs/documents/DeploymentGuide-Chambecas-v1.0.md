---
document_code: DEPLOY-CHAMBECAS-001-v1.0
project: Las Chambecas
date: 2026-07-28
---

# Deployment Guide — Las Chambecas

## 1. Prerequisites
- Git
- Node.js (opcional, solo para pruebas locales)
- Cuenta en Vercel (gratuita)

## 2. Local Development
```bash
# No se requiere build step
# Solo abrir en navegador:
start index.html
```

## 3. Deploy to Vercel
### Option A: Git Integration (automático)
1. Push cambios a `main` en GitHub
2. Vercel detecta el push y despliega automáticamente
3. URL: https://chambecas.vercel.app

### Option B: Manual via Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

## 4. Environment Variables
No se requieren variables de entorno (sitio 100% estático).

## 5. Post-Deployment Verification
```bash
# Verificar que el sitio responde
curl -s -o /dev/null -w "%{http_code}" https://chambecas.vercel.app
# Debería responder 200
```

## 6. Rollback Plan
```bash
# En Vercel Dashboard:
# 1. Ir a Deployments
# 2. Seleccionar deployment anterior
# 3. Hacer clic en "Promote to Production"
```

## 7. Configuration
Archivo `vercel.json`:
```json
{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": false
}
```
