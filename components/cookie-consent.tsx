'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg p-4 sm:p-6">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Utilizamos cookies propias y de terceros (Google AdSense, Google Analytics) para mejorar tu experiencia y mostrar anuncios personalizados.
          Puedes leer más en nuestra{' '}
          <Link href="/privacidad" className="text-primary underline">
            Política de Privacidad
          </Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Button variant="outline" size="sm" onClick={reject}>
            Rechazar
          </Button>
          <Button size="sm" onClick={accept}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  )
}
