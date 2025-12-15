import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // En un entorno real podrías guardar esto en un log o enviar a un servicio de observabilidad.
    console.log('AdSense check report:', JSON.stringify(body))
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Failed to parse AdSense report', e)
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
