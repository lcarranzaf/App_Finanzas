import { Redis } from '@upstash/redis'

export interface CursoData {
  slug: string
  udemyUrl: string
  title: string
  description: string
  createdAt: string
}

// Inicialización lazy: el cliente se crea la primera vez que se usa,
// no al cargar el módulo. Esto permite capturar errores de env vars correctamente.
let _redis: Redis | null = null

function getRedis(): Redis {
  if (!_redis) {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      throw new Error(
        'Faltan variables de entorno: UPSTASH_REDIS_REST_URL y/o UPSTASH_REDIS_REST_TOKEN'
      )
    }
    _redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  }
  return _redis
}

export async function saveCurso(data: CursoData): Promise<void> {
  await getRedis().set(`curso:${data.slug}`, data)
}

export async function getCurso(slug: string): Promise<CursoData | null> {
  return await getRedis().get<CursoData>(`curso:${slug}`)
}
