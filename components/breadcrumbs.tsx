"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import type { Metadata } from "next"

interface BreadcrumbItem {
  label: string
  href: string
  isActive?: boolean
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  customItems?: BreadcrumbItem[]
}

export function Breadcrumbs({ items, customItems }: BreadcrumbsProps) {
  const pathname = usePathname()

  // Generate breadcrumbs from pathname if no custom items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems

    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', href: '/' }
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1

      let label = segment
      // Customize labels for common routes
      switch (segment) {
        case 'blog':
          label = 'Blog'
          break
        case 'ahorro':
          label = 'Ahorro'
          break
        case 'inversiones':
          label = 'Inversiones'
          break
        case 'jovenes':
          label = 'Finanzas para Jóvenes'
          break
        case 'recursos':
          label = 'Recursos'
          break
        case 'proyecciones':
          label = 'Proyecciones'
          break
        case 'contacto':
          label = 'Contacto'
          break
        case 'sobre-nosotros':
          label = 'Sobre Nosotros'
          break
        case 'privacidad':
          label = 'Privacidad'
          break
        default:
          // For blog slugs, we might want to fetch the title, but for now use as-is
          label = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      }

      breadcrumbs.push({
        label,
        href: currentPath,
        isActive: isLast
      })
    })

    return breadcrumbs
  }

  const breadcrumbItems = items || generateBreadcrumbs()

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://app-finanzas-mu.vercel.app${item.href}`
    }))
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
        <ol className="flex items-center space-x-1">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
              {item.isActive ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}