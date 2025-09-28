"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer() {
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    const sessionKey = "hasVisitedThisSession"
    const hasVisitedThisSession = sessionStorage.getItem(sessionKey)

    if (!hasVisitedThisSession) {
      // Only increment if this is a new session
      const currentCount = Number.parseInt(localStorage.getItem("visitCount") || "1")
      const newCount = currentCount + 1
      localStorage.setItem("visitCount", newCount.toString())
      sessionStorage.setItem(sessionKey, "true")
      setVisitCount(newCount)
    } else {
      // Just display the current count
      const currentCount = Number.parseInt(localStorage.getItem("visitCount") || "1")
      setVisitCount(currentCount)
    }
  }, [])

  const quickLinks = [
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Términos y Condiciones", href: "/terminos" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    // { name: "Contacto", href: "/contacto" },
  ]

  const categories = [
    { name: "Ahorro", href: "/ahorro" },
    { name: "Inversiones", href: "/inversiones" },
    { name: "Finanzas para Jóvenes", href: "/jovenes" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-primary">
                FinanzasPro
              </Link>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Tu guía confiable para el éxito financiero. Aprende a ahorrar, invertir y construir un futuro próspero.
              </p>
            </div>
            <div className="flex space-x-6">
              <p className="text-sm text-muted-foreground">
                Visitas totales: <span className="font-semibold text-foreground">{visitCount.toLocaleString()}</span>
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Categorías</h3>
              <ul role="list" className="mt-6 space-y-4">
                {categories.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Enlaces Rápidos</h3>
              <ul role="list" className="mt-6 space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2025 FinanzasPro. Todos los derechos reservados. La información proporcionada es solo para fines
            educativos.
          </p>
        </div>
      </div>
    </footer>
  )
}
