import { Redis } from '@upstash/redis'

export interface CursoData {
  slug: string
  udemyUrl: string
  title: string
  description: string
  createdAt: string
  // Campos opcionales para enriquecer la página
  couponCode?: string     // auto-extraído de la URL
  instructor?: string
  level?: string          // "Principiante" | "Intermedio" | "Avanzado" | "Todos los niveles"
  originalPrice?: string  // ej: "$89.99"
  category?: string       // ej: "Desarrollo Web", "Marketing"
  highlights?: string[]   // hasta 6 puntos de "qué aprenderás"
  imageUrl?: string       // og:image de la página de Udemy (obtenida automáticamente)
}

let _redis: Redis | null = null

function getRedis(): Redis {
  if (!_redis) {
    const url = process.env.KV_REST_API_URL
    const token = process.env.KV_REST_API_TOKEN
    if (!url || !token) {
      throw new Error('Faltan variables de entorno: KV_REST_API_URL y/o KV_REST_API_TOKEN')
    }
    _redis = new Redis({ url, token })
  }
  return _redis
}

export async function saveCurso(data: CursoData): Promise<void> {
  await getRedis().set(`curso:${data.slug}`, data)
}

export async function getCurso(slug: string): Promise<CursoData | null> {
  return await getRedis().get<CursoData>(`curso:${slug}`)
}
