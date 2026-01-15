"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageToggle from "@/components/language-toggle"
import { useTranslations } from 'next-intl'

const navigation = [
  { key: "home", href: "/" },
  { name: "Ahorro", href: "/ahorro" },
  { name: "Inversiones", href: "/inversiones" },
  { name: "Finanzas para Jóvenes", href: "/jovenes" },
  { key: "blog", href: "/blog" },
  { name: "Recursos", href: "/recursos" },
  { name: "Proyecciones", href: "/proyecciones" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations()

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary">FinanzasPro</span>
          </Link>
        </div>

        {/* Botón menú móvil */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop Navigation and Theme Toggle */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.key || item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.key ? t(item.key) : item.name}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageToggle />
        </div>


      </nav>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Panel lateral */}
          <div className="absolute right-0 top-0 h-full w-72 max-w-full bg-background px-6 py-6 shadow-xl ring-1 ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-primary">FinanzasPro</span>
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            {/* Links */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                 <div className="space-y-2 py-6">
                   {navigation.map((item) => (
                     <Link
                       key={item.key || item.name}
                       href={item.href}
                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                       onClick={() => setMobileMenuOpen(false)}
                     >
                       {item.key ? t(item.key) : item.name}
                     </Link>
                   ))}
                   <div className="py-6 border-t border-border space-y-4">
                     <div className="flex items-center justify-between">
                       <span className="text-sm font-medium text-foreground">Tema</span>
                       <ThemeToggle />
                     </div>
                     <div className="flex items-center justify-between">
                       <span className="text-sm font-medium text-foreground">Idioma</span>
                       <LanguageToggle />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
