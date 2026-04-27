'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function HeroCTAs() {
  return (
    <div className="mt-8 flex items-center justify-center gap-x-6">
      <Button asChild size="lg">
        <Link href="/blog" onClick={() => trackEvent("cta_click", { cta: "home_hero_comenzar", location: "home_hero" })}>Comenzar Ahora</Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link href="/sobre-nosotros" onClick={() => trackEvent("cta_click", { cta: "home_hero_conoce_mas", location: "home_hero" })}>Conoce Más</Link>
      </Button>
    </div>
  )
}

export function BottomCTAs() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Button size="lg" asChild>
        <Link href="/blog" onClick={() => trackEvent("cta_click", { cta: "home_bottom_explorar", location: "home_bottom" })}>Explorar Artículos</Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link href="/recursos" onClick={() => trackEvent("cta_click", { cta: "home_bottom_recursos", location: "home_bottom" })}>Ver Recursos</Link>
      </Button>
    </div>
  )
}
