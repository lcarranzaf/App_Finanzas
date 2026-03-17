"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CreditCard, AlertCircle, TrendingDown, DollarSign } from "lucide-react"

interface MonthRow {
  month: number
  principal: number
  interest: number
  balance: number
}

interface CalcResult {
  months: number
  totalPaid: number
  totalInterest: number
  table: MonthRow[]
}

function calcDebt(debt: number, annualRate: number, monthlyPayment: number): CalcResult | null {
  const r = annualRate / 100 / 12

  if (r === 0) {
    if (monthlyPayment <= 0) return null
    const months = Math.ceil(debt / monthlyPayment)
    return { months, totalPaid: Math.round(monthlyPayment * months), totalInterest: 0, table: [] }
  }

  const minInterest = debt * r
  if (monthlyPayment <= minInterest) return null

  const months = Math.ceil(-Math.log(1 - (debt * r) / monthlyPayment) / Math.log(1 + r))
  if (!isFinite(months) || months > 600) return null

  const totalPaid = Math.round(monthlyPayment * months)
  const totalInterest = Math.round(totalPaid - debt)

  const table: MonthRow[] = []
  let balance = debt
  for (let m = 1; m <= Math.min(months, 24); m++) {
    const interest = balance * r
    const principal = Math.min(monthlyPayment - interest, balance)
    balance = Math.max(balance - principal, 0)
    table.push({
      month: m,
      principal: Math.round(principal * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      balance: Math.round(balance * 100) / 100,
    })
  }

  return { months, totalPaid, totalInterest, table }
}

export default function DebtPayoffCalculator() {
  const [debt, setDebt] = useState(10000)
  const [annualRate, setAnnualRate] = useState([18])
  const [monthlyPayment, setMonthlyPayment] = useState(300)
  const [result, setResult] = useState<CalcResult | null>(null)
  const [minResult, setMinResult] = useState<CalcResult | null>(null)

  useEffect(() => {
    const minPayment = Math.max(Math.round(debt * 0.02), 25)
    setResult(calcDebt(debt, annualRate[0], monthlyPayment))
    setMinResult(calcDebt(debt, annualRate[0], minPayment))
  }, [debt, annualRate, monthlyPayment])

  const years = result ? Math.floor(result.months / 12) : 0
  const remainingMonths = result ? result.months % 12 : 0

  const formatTime = () => {
    if (!result) return ""
    if (years > 0 && remainingMonths > 0)
      return `${years} año${years !== 1 ? "s" : ""} y ${remainingMonths} mes${remainingMonths !== 1 ? "es" : ""}`
    if (years > 0) return `${years} año${years !== 1 ? "s" : ""}`
    return `${result.months} mes${result.months !== 1 ? "es" : ""}`
  }

  const savings =
    result && minResult && minResult.months > result.months
      ? {
          months: minResult.months - result.months,
          interest: minResult.totalInterest - result.totalInterest,
        }
      : null

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Parámetros de Deuda
                </CardTitle>
                <CardDescription>Introduce los datos de tu deuda para ver el plan de pago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="debt">Deuda total ($)</Label>
                  <Input
                    id="debt"
                    type="number"
                    value={debt}
                    onChange={(e) => setDebt(Number(e.target.value))}
                    min="1"
                    step="500"
                  />
                </div>
                <div className="space-y-3">
                  <Label>Tasa de interés anual: {annualRate[0]}%</Label>
                  <Slider
                    value={annualRate}
                    onValueChange={setAnnualRate}
                    max={40}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1%</span>
                    <span>40%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment">Pago mensual ($)</Label>
                  <Input
                    id="payment"
                    type="number"
                    value={monthlyPayment}
                    onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                    min="1"
                    step="50"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            {result ? (
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingDown className="h-5 w-5" />
                    Resultado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tiempo para liquidar la deuda</p>
                    <p className="text-3xl font-bold text-primary">{formatTime()}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Total a pagar</p>
                      <p className="text-xl font-bold">${result.totalPaid.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total intereses</p>
                      <p className="text-xl font-bold text-destructive">${result.totalInterest.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 mt-0.5 text-destructive flex-shrink-0" />
                    El pago mensual debe superar los intereses mensuales para reducir la deuda.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Comparativa vs pago mínimo */}
            {savings && (
              <Card className="bg-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600 text-base">
                    <DollarSign className="h-5 w-5" />
                    Ahorro vs. pago mínimo (2%)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Meses que ahorras</span>
                    <span className="font-semibold text-green-600">{savings.months} meses menos</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Intereses que ahorras</span>
                    <span className="font-semibold text-green-600">${savings.interest.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Amortization Table */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Tabla de amortización</CardTitle>
                <CardDescription>Primeros 24 meses de pagos</CardDescription>
              </CardHeader>
              <CardContent>
                {result && result.table.length > 0 ? (
                  <div className="max-h-[480px] overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="sticky top-0 bg-card border-b border-border">
                        <tr>
                          <th className="text-left py-2 pr-3 font-semibold">Mes</th>
                          <th className="text-right py-2 pr-3 font-semibold">Capital</th>
                          <th className="text-right py-2 pr-3 font-semibold">Interés</th>
                          <th className="text-right py-2 font-semibold">Saldo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.table.map((row) => (
                          <tr key={row.month} className="border-b border-border/40 hover:bg-muted/30">
                            <td className="py-2 pr-3">{row.month}</td>
                            <td className="py-2 pr-3 text-right text-green-600">
                              ${row.principal.toLocaleString()}
                            </td>
                            <td className="py-2 pr-3 text-right text-destructive">
                              ${row.interest.toLocaleString()}
                            </td>
                            <td className="py-2 text-right font-medium">${row.balance.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground py-4">
                    Introduce tus datos para ver la tabla de amortización.
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
