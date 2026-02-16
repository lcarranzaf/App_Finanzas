import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, BookOpen, PiggyBank, TrendingUp, Search } from "lucide-react"

export default function NotFound() {
  const suggestions = [
    {
      title: "Inicio",
      description: "Vuelve a la página principal",
      href: "/",
      icon: Home,
    },
    {
      title: "Blog",
      description: "Lee nuestros artículos de finanzas",
      href: "/blog",
      icon: BookOpen,
    },
    {
      title: "Ahorro",
      description: "Aprende estrategias de ahorro",
      href: "/ahorro",
      icon: PiggyBank,
    },
    {
      title: "Inversiones",
      description: "Descubre cómo invertir tu dinero",
      href: "/inversiones",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <span className="text-8xl sm:text-9xl font-bold text-primary/20">404</span>
            <Search className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-primary" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Página no encontrada
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          La página que buscas no existe o fue movida. Pero no te preocupes, tu camino hacia la libertad financiera sigue aquí.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {suggestions.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href}>
                <Card className="hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer h-full">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <Button size="lg" asChild>
          <Link href="/">Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  )
}
