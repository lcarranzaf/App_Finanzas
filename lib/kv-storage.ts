import { Redis } from '@upstash/redis'

// El cliente Redis se inicializa una sola vez (singleton)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export interface CursoData {
  slug: string
  udemyUrl: string
  title: string
  description: string
  createdAt: string
}

// Guarda un curso en Redis con clave "curso:<slug>"
export async function saveCurso(data: CursoData): Promise<void> {
  await redis.set(`curso:${data.slug}`, data)
}

// Recupera un curso por su slug. Devuelve null si no existe.
export async function getCurso(slug: string): Promise<CursoData | null> {
  return await redis.get<CursoData>(`curso:${slug}`)
}
