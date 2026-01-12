# AGENTS.md - Guía para Agentes de Codificación

Guía completa para agentes de codificación en App_Finanzas. Incluye comandos, convenciones de código y mejores prácticas.

## 1. Comandos de Build, Lint y Test

### Build Commands
```bash
# Construir la aplicación para producción
npm run build

# Ejecutar el servidor de desarrollo (puerto automático)
npm run dev

# Iniciar el servidor en producción
npm run start

# Construir con análisis de bundle
ANALYZE=true npm run build
```

### Lint y Code Quality
```bash
# Ejecutar ESLint para verificar código
npm run lint

# Verificar tipos TypeScript (estrict mode enabled)
npx tsc --noEmit

# Formateo automático (si se configura Prettier)
npx prettier --write .
```

### Test Commands
**Estado Actual:** No hay suite de pruebas configurada. El proyecto es una aplicación de blog Next.js sin tests automatizados.

### Comandos Útiles para Desarrollo
```bash
# Limpiar cache de Next.js
rm -rf .next

# Instalar dependencias
npm install

# Verificar tamaños de bundle
npm run build && npx @next/bundle-analyzer
```

## 2. Guías de Estilo de Código

### General
- **Lenguaje:** TypeScript/JavaScript con React
- **Framework:** Next.js 14 con App Router
- **Estilos:** Tailwind CSS v4 con sistema de temas (oklch colors)
- **Formateo:** Seguir convenciones de Prettier (implícito en Next.js)
- **Linter:** ESLint con configuración `next/core-web-vitals`
- **UI Library:** shadcn/ui con Radix UI primitives
- **Utilidades:** clsx + tailwind-merge via `cn()` helper

### Imports
- Usar imports absolutos con alias `@/` para directorios internos
- Agrupar imports: React/Next.js primero, luego bibliotecas externas, luego internos
- Ordenar imports alfabéticamente dentro de cada grupo
- Usar imports nombrados para componentes UI

```typescript
// ✅ Correcto
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { getBlogPosts } from '@/lib/blog-data'
import { cn } from '@/lib/utils'

// ❌ Incorrecto
import { getBlogPosts } from '@/lib/blog-data'
import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
```

### Nombres y Convenciones
- **Componentes:** PascalCase (ej. `BlogCard`, `UserProfile`)
- **Variables/Funciones:** camelCase (ej. `userName`, `getPosts`)
- **Constantes:** UPPER_SNAKE_CASE (ej. `API_URL`, `MAX_RETRIES`)
- **Archivos:** kebab-case para páginas, camelCase para componentes
- **Props:** Interfaces con sufijo `Props` (ej. `BlogCardProps`)
- **Estados:** Prefijo `is` para booleanos (ej. `isLoading`, `isVisible`)

### TypeScript
- Usar tipos estrictos (`strict: true` en tsconfig.json)
- Preferir interfaces para objetos complejos, tipos para unions
- Usar `unknown` en lugar de `any` cuando sea posible
- Definir tipos para props de componentes
- Usar `React.FC` solo cuando sea necesario (preferir funciones flecha)

```typescript
// ✅ Correcto
interface BlogPost {
  title: string
  content: string
  publishedAt: Date
  tags: string[]
}

type UserRole = 'admin' | 'editor' | 'viewer'

type UserRole = 'admin' | 'editor' | 'viewer'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured'
}

// ❌ Incorrecto
interface BlogPost {
  title: any
  content: string
  publishedAt: string
  tags: Array<any>
  author: any
}
```

### React/JSX
- Usar arrow functions para componentes
- Preferir hooks sobre class components
- Usar fragmentos `<>` en lugar de divs innecesarios

### Estilos y CSS
- Usar Tailwind CSS para estilos
- Usar componentes de shadcn/ui cuando sea posible
- Evitar estilos inline

### Manejo de Errores
- Usar try-catch en funciones asíncronas
- Mostrar mensajes de error amigables al usuario

### Seguridad
- Nunca commitear secrets o keys en el código
- Usar variables de entorno para configuración sensible
- Validar inputs del usuario
- Usar HTTPS para todas las conexiones externas

### Rendimiento
- Usar Next.js Image component para imágenes optimizadas
- Implementar lazy loading cuando sea apropiado

### Tema Oscuro/Claro
- Sistema de temas con `next-themes`
- Toggle de tema en navbar

### Commit Messages
- Usar inglés para mensajes de commit
- Seguir formato: `type: description`
- Tipos comunes: `feat`, `fix`, `docs`, `style`, `refactor`, `test`

### Reglas Adicionales
- Mantener funciones pequeñas y enfocadas en una responsabilidad
- Usar nombres descriptivos para variables y funciones
- Seguir DRY principle

### Mejores Prácticas para Agentes
1. Ejecutar `npm run lint` antes de commits
2. Verificar tipos con `npx tsc --noEmit`
3. Probar cambios en `npm run dev`
4. Mantener consistencia con el código existente

### Notas Especiales
- Blog de finanzas personales
- No hay tests actualmente
- Usar shadcn/ui para componentes
- Imágenes optimizadas con Next.js