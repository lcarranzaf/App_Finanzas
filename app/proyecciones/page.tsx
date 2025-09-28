"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, PiggyBank, Target } from "lucide-react"

export default function ProyeccionesPage() {
  const [initialAmount, setInitialAmount] = useState(1000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [annualReturn, setAnnualReturn] = useState([7])
  const [years, setYears] = useState([10])
  const [projections, setProjections] = useState<Array<{ year: number; amount: number }>>([])

  useEffect(() => {
    calculateProjections()
  }, [initialAmount, monthlyContribution, annualReturn, years])

  const calculateProjections = () => {
    const rate = annualReturn[0] / 100
    const monthlyRate = rate / 12
    const totalMonths = years[0] * 12

    const projectionData = []

    for (let year = 1; year <= years[0]; year++) {
      const months = year * 12
      let futureValue = initialAmount * Math.pow(1 + monthlyRate, months)

      if (monthlyContribution > 0) {
        const annuityValue = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
        futureValue += annuityValue
      }

      projectionData.push({
        year,
        amount: Math.round(futureValue),
      })
    }

    setProjections(projectionData)
  }

  const finalAmount = projections[projections.length - 1]?.amount || 0
  const totalContributed = initialAmount + monthlyContribution * 12 * years[0]
  const totalGains = finalAmount - totalContributed

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Calculadora de Proyecciones de Ingresos
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Visualiza cómo pueden crecer tus inversiones a lo largo del tiempo con nuestro calculador interactivo.
              Ajusta los parámetros y descubre el poder del interés compuesto.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Controls */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Parámetros de Inversión
                  </CardTitle>
                  <CardDescription>Ajusta estos valores para personalizar tu proyección</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="initial">Inversión Inicial (€)</Label>
                    <Input
                      id="initial"
                      type="number"
                      value={initialAmount}
                      onChange={(e) => setInitialAmount(Number(e.target.value))}
                      min="0"
                      step="100"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly">Aportación Mensual (€)</Label>
                    <Input
                      id="monthly"
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      min="0"
                      step="50"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Rentabilidad Anual Esperada: {annualReturn[0]}%</Label>
                    <Slider
                      value={annualReturn}
                      onValueChange={setAnnualReturn}
                      max={15}
                      min={1}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1%</span>
                      <span>15%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Período de Inversión: {years[0]} años</Label>
                    <Slider value={years} onValueChange={setYears} max={40} min={1} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 año</span>
                      <span>40 años</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Summary Card */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-5 w-5" />
                    Resumen de Proyección
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Aportado</p>
                      <p className="text-2xl font-bold text-foreground">€{totalContributed.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ganancias</p>
                      <p className="text-2xl font-bold text-green-600">€{totalGains.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">Valor Final</p>
                    <p className="text-3xl font-bold text-primary">€{finalAmount.toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Visualization */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Evolución de tu Inversión</CardTitle>
                  <CardDescription>Crecimiento año por año de tu cartera de inversión</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {projections.map((projection, index) => {
                      const contributed = initialAmount + monthlyContribution * 12 * projection.year
                      const gains = projection.amount - contributed
                      const gainsPercentage = ((gains / contributed) * 100).toFixed(1)

                      return (
                        <div
                          key={projection.year}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                        >
                          <div>
                            <p className="font-semibold">Año {projection.year}</p>
                            <p className="text-sm text-muted-foreground">Ganancia: +{gainsPercentage}%</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">€{projection.amount.toLocaleString()}</p>
                            <p className="text-sm text-green-600">+€{gains.toLocaleString()}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Entiende el Poder del Interés Compuesto
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Conceptos clave para maximizar tus proyecciones de inversión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <PiggyBank className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Consistencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Las aportaciones regulares, aunque sean pequeñas, pueden generar grandes resultados a largo plazo
                  gracias al efecto del interés compuesto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Tiempo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cuanto antes comiences a invertir, más tiempo tendrá tu dinero para crecer. Cada año cuenta
                  significativamente en el resultado final.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Rentabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Una rentabilidad del 7% anual es histórica para fondos indexados diversificados. Ajusta según tu
                  perfil de riesgo y estrategia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-8 text-center">
              <p className="text-sm text-muted-foreground">Espacio reservado para Google AdSense</p>
              <p className="text-xs text-muted-foreground mt-1">Banner inferior - 728x90</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
