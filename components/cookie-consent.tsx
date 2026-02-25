'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [mounted])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShow(false)
  }

  if (!mounted) {
    return null
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg px-4 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto max-w-7xl flex flex-row items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-muted-foreground leading-5">
          Usamos cookies para mejorar tu experiencia y mostrar anuncios.{' '}
          <Link href="/privacidad" className="text-primary underline whitespace-nowrap">
            Ver política
          </Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" onClick={reject} className="h-8 px-3 text-xs">
            Rechazar
          </Button>
          <Button size="sm" onClick={accept} className="h-8 px-3 text-xs">
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  )
}
