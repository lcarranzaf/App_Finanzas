"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { PiggyBank, Target, Calendar } from "lucide-react"

interface YearRow {
  year: number
  balance: number
  contributed: number
  interest: number
}

interface Result {
  months: number
  totalContributed: number
  interestEarned: number
  yearlyTable: YearRow[]
}

export default function SavingsGoalCalculator() {
  const [goal, setGoal] = useState(50000)
  const [initialSavings, setInitialSavings] = useState(1000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [annualRate, setAnnualRate] = useState([5])
  const [result, setResult] = useState<Result | null>(null)

  useEffect(() => {
    const r = annualRate[0] / 100 / 12
    const G = goal
    const P = initialSavings
    const C = monthlyContribution

    if (P >= G) {
      setResult({ months: 0, totalContributed: P, interestEarned: 0, yearlyTable: [] })
      return
    }

    if (C <= 0) {
      setResult(null)
      return
    }

    let months: number
    if (r === 0) {
      months = Math.ceil((G - P) / C)
    } else {
      const A = C / r
      if (P + A <= 0) {
        setResult(null)
        return
      }
      months = Math.ceil(Math.log((G + A) / (P + A)) / Math.log(1 + r))
    }

    if (!isFinite(months) || months < 0 || months > 1200) {
      setResult(null)
      return
    }

    const totalContributed = P + C * months
    const finalBalance =
      r === 0
        ? P + C * months
        : P * Math.pow(1 + r, months) + (C * (Math.pow(1 + r, months) - 1)) / r
    const interestEarned = Math.max(0, finalBalance - totalContributed)

    const maxYears = Math.ceil(months / 12)
    const yearlyTable: YearRow[] = []
    for (let y = 1; y <= Math.min(maxYears, 40); y++) {
      const n = y * 12
      const balance =
        r === 0
          ? Math.min(P + C * n, G)
          : Math.min(P * Math.pow(1 + r, n) + (C * (Math.pow(1 + r, n) - 1)) / r, G)
      const contributed = Math.min(P + C * n, totalContributed)
      const interest = Math.max(0, balance - contributed)
      yearlyTable.push({
        year: y,
        balance: Math.round(balance),
        contributed: Math.round(contributed),
        interest: Math.round(interest),
      })
    }

    setResult({
      months,
      totalContributed: Math.round(totalContributed),
      interestEarned: Math.round(interestEarned),
      yearlyTable,
    })
  }, [goal, initialSavings, monthlyContribution, annualRate])

  const years = result ? Math.floor(result.months / 12) : 0
  const remainingMonths = result ? result.months % 12 : 0

  const formatTime = () => {
    if (!result || result.months === 0) return null
    if (years > 0 && remainingMonths > 0)
      return `${years} año${years !== 1 ? "s" : ""} y ${remainingMonths} mes${remainingMonths !== 1 ? "es" : ""}`
    if (years > 0) return `${years} año${years !== 1 ? "s" : ""}`
    return `${result.months} mes${result.months !== 1 ? "es" : ""}`
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Parámetros de Ahorro
                </CardTitle>
                <CardDescription>Introduce tus datos para calcular cuánto tiempo necesitas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="goal">Meta de ahorro ($)</Label>
                  <Input
                    id="goal"
                    type="number"
                    value={goal}
                    onChange={(e) => setGoal(Number(e.target.value))}
                    min="1"
                    step="1000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="initial">Ahorro inicial ($)</Label>
                  <Input
                    id="initial"
                    type="number"
                    value={initialSavings}
                    onChange={(e) => setInitialSavings(Number(e.target.value))}
                    min="0"
                    step="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthly">Aportación mensual ($)</Label>
                  <Input
                    id="monthly"
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    min="1"
                    step="50"
                  />
                </div>
                <div className="space-y-3">
                  <Label>Tasa de interés anual: {annualRate[0]}%</Label>
                  <Slider
                    value={annualRate}
                    onValueChange={setAnnualRate}
                    max={15}
                    min={0}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            {result ? (
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <PiggyBank className="h-5 w-5" />
                    Resultado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tiempo para alcanzar la meta</p>
                    <p className="text-3xl font-bold text-primary">
                      {result.months === 0 ? "¡Ya lo tienes!" : formatTime()}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Total aportado</p>
                      <p className="text-xl font-bold">${result.totalContributed.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Intereses ganados</p>
                      <p className="text-xl font-bold text-green-600">+${result.interestEarned.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Con los valores actuales no es posible alcanzar la meta. Aumenta la aportación mensual o la tasa de interés.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Yearly Table */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Evolución año a año
                </CardTitle>
                <CardDescription>Seguimiento del crecimiento de tu ahorro</CardDescription>
              </CardHeader>
              <CardContent>
                {result && result.yearlyTable.length > 0 ? (
                  <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                    {result.yearlyTable.map((row) => (
                      <div key={row.year} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div>
                          <p className="font-semibold">Año {row.year}</p>
                          <p className="text-sm text-muted-foreground">
                            Intereses: +${row.interest.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">${row.balance.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">
                            Aportado: ${row.contributed.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground py-4">
                    Introduce tus datos para ver la evolución año a año.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
