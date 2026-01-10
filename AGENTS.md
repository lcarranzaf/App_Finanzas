# AGENTS.md - Guía para Agentes de Codificación

Este archivo proporciona instrucciones detalladas para agentes de codificación que operan en el repositorio App_Finanzas. Incluye comandos de build, lint y test, así como guías de estilo de código.

## 1. Comandos de Build, Lint y Test

### Build Commands
```bash
# Construir la aplicación para producción
npm run build

# Ejecutar el servidor de desarrollo
npm run dev

# Iniciar el servidor en producción
npm run start
```

### Lint Commands
```bash
# Ejecutar ESLint para verificar código
npm run lint
```

### Test Commands
**Nota:** Actualmente no hay suite de pruebas configurada en este proyecto. Es una aplicación de blog Next.js sin tests automatizados.

- **Para ejecutar un test individual:** No aplica, ya que no existen tests.
- **Para ejecutar todos los tests:** No aplica.
- **Para ejecutar tests en modo watch:** No aplica.

Si se agregan tests en el futuro (ej. con Jest o Cypress), actualizar esta sección.

### Type Checking
```bash
# Verificar tipos TypeScript
npx tsc --noEmit
```

### Comandos Útiles para Desarrollo
```bash
# Limpiar cache de Next.js
rm -rf .next

# Instalar dependencias
npm install

# Actualizar dependencias
npm update
```

## 2. Guías de Estilo de Código

### General
- **Lenguaje:** TypeScript/JavaScript con React
- **Framework:** Next.js 14 con App Router
- **Estilos:** Tailwind CSS v4
- **Formateo:** Seguir convenciones de Prettier (implícito en Next.js)
- **Linter:** ESLint con configuración `next/core-web-vitals`

### Imports
- Usar imports absolutos con alias `@/` para directorios internos
- Agrupar imports: React primero, luego bibliotecas externas, luego internos
- Ordenar imports alfabéticamente dentro de cada grupo

```typescript
// ✅ Correcto
import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { getBlogPosts } from '@/lib/blog-data'

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
- **Directorios:** kebab-case (ej. `blog-data.ts`, `user-profile.tsx`)

### TypeScript
- Usar tipos estrictos (`strict: true` en tsconfig.json)
- Preferir interfaces para objetos complejos
- Usar tipos union cuando sea apropiado
- Evitar `any`; usar `unknown` si es necesario

```typescript
// ✅ Correcto
interface BlogPost {
  title: string
  content: string
  publishedAt: Date
  tags: string[]
}

type UserRole = 'admin' | 'editor' | 'viewer'

// ❌ Incorrecto
interface BlogPost {
  title: any
  content: string
  publishedAt: string
  tags: Array<any>
}
```

### React/JSX
- Usar arrow functions para componentes
- Preferir hooks sobre class components
- Usar fragmentos `<>` en lugar de divs innecesarios
- Mantener JSX limpio y legible

```tsx
// ✅ Correcto
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.description}</p>
      </CardContent>
    </Card>
  )
}

// ❌ Incorrecto
export default function BlogCard(props) {
  return (
    <div className="card">
      <h2>{props.post.title}</h2>
      <p>{props.post.description}</p>
    </div>
  )
}
```

### Estilos y CSS
- Usar Tailwind CSS para estilos
- Seguir la convención de clases de Tailwind
- Usar componentes de shadcn/ui cuando sea posible
- Evitar estilos inline; usar clases de Tailwind

```tsx
// ✅ Correcto
<Button variant="outline" size="lg" className="mt-4">
  Leer más
</Button>

// ❌ Incorrecto
<button style={{ marginTop: '16px', padding: '12px 24px' }}>
  Leer más
</button>
```

### Manejo de Errores
- Usar try-catch en funciones asíncronas
- Manejar errores de API apropiadamente
- Mostrar mensajes de error amigables al usuario
- Loggear errores para debugging (sin exponer información sensible)

```typescript
// ✅ Correcto
async function fetchPosts() {
  try {
    const response = await fetch('/api/posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw new Error('Unable to load blog posts')
  }
}
```

### Seguridad
- Nunca commitear secrets o keys en el código
- Usar variables de entorno para configuración sensible
- Validar inputs del usuario
- Usar HTTPS para todas las conexiones externas

### Rendimiento
- Usar Next.js Image component para imágenes optimizadas
- Implementar lazy loading cuando sea apropiado
- Optimizar re-renders con React.memo o useMemo
- Usar dynamic imports para componentes grandes

### Estructura de Archivos
```
app/                    # Páginas Next.js
  blog/
    page.tsx           # Lista de blogs
    [slug]/
      page.tsx         # Página individual del blog
components/            # Componentes reutilizables
  ui/                  # Componentes de shadcn/ui
lib/                   # Utilidades y datos
  blog-data.ts         # Datos de blogs
public/                # Assets estáticos
```

### Commit Messages
- Usar inglés para mensajes de commit
- Seguir formato: `type: description`
- Tipos comunes: `feat`, `fix`, `docs`, `style`, `refactor`, `test`

### Reglas Adicionales
- Mantener funciones pequeñas y enfocadas en una responsabilidad
- Usar nombres descriptivos para variables y funciones
- Comentar código complejo, pero preferir código auto-explicativo
- Seguir DRY (Don't Repeat Yourself) principle
- Usar Git flow para branches (main, develop, feature/*)

### Configuraciones de Herramientas
- **TypeScript:** `strict: true`, paths con `@/*`
- **ESLint:** Extiende `next/core-web-vitals` y `next/typescript`
- **Next.js:** App Router, imágenes optimizadas
- **Tailwind:** v4 con configuración estándar

### Mejores Prácticas para Agentes
1. Siempre ejecutar `npm run lint` antes de commits
2. Verificar tipos con `npx tsc --noEmit`
3. Probar cambios en `npm run dev`
4. Mantener consistencia con el código existente
5. Documentar cambios significativos

### Notas Especiales
- Este proyecto es un blog de finanzas personales
- No hay tests actualmente; considerar agregar Jest para componentes
- Usar shadcn/ui para componentes consistentes
- Todas las imágenes externas deben estar en dominios permitidos (next.config.mjs)

Si se agregan nuevas herramientas o cambian las configuraciones, actualizar este archivo.