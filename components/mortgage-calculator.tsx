"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Home, TrendingDown, Euro, AlertCircle } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

function formatEur(n: number) {
  return n.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })
}

interface AmortRow {
  month: number
  principal: number
  interest: number
  balance: number
}

interface ChartPoint {
  año: number
  "Capital pendiente": number
  "Intereses pagados": number
}

interface MortgageResult {
  monthlyPayment: number
  totalPaid: number
  totalInterest: number
  loanAmount: number
  table: AmortRow[]
  chartData: ChartPoint[]
}

function calcMortgage(
  propertyPrice: number,
  downPct: number,
  annualRate: number,
  years: number
): MortgageResult | null {
  const loanAmount = propertyPrice * (1 - downPct / 100)
  if (loanAmount <= 0 || years <= 0 || annualRate < 0) return null

  const r = annualRate / 100 / 12
  const n = years * 12

  const monthlyPayment =
    r === 0
      ? loanAmount / n
      : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

  const totalPaid = monthlyPayment * n
  const totalInterest = totalPaid - loanAmount

  // Amortization table — first 24 months
  const table: AmortRow[] = []
  let balance = loanAmount
  for (let m = 1; m <= Math.min(n, 24); m++) {
    const interest = balance * r
    const principal = monthlyPayment - interest
    balance = Math.max(balance - principal, 0)
    table.push({
      month: m,
      principal: Math.round(principal * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      balance: Math.round(balance * 100) / 100,
    })
  }

  // Chart data — annual
  const chartData: ChartPoint[] = []
  let chartBalance = loanAmount
  let cumulativeInterest = 0
  for (let y = 1; y <= years; y++) {
    for (let m = 0; m < 12; m++) {
      const interest = chartBalance * r
      const principal = monthlyPayment - interest
      cumulativeInterest += interest
      chartBalance = Math.max(chartBalance - principal, 0)
    }
    chartData.push({
      año: y,
      "Capital pendiente": Math.round(chartBalance),
      "Intereses pagados": Math.round(cumulativeInterest),
    })
  }

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPaid: Math.round(totalPaid),
    totalInterest: Math.round(totalInterest),
    loanAmount: Math.round(loanAmount),
    table,
    chartData,
  }
}

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(250000)
  const [downPct, setDownPct] = useState([20])
  const [annualRate, setAnnualRate] = useState([3.5])
  const [years, setYears] = useState([25])

  const result = useMemo(
    () => calcMortgage(propertyPrice, downPct[0], annualRate[0], years[0]),
    [propertyPrice, downPct, annualRate, years]
  )

  const downAmount = Math.round((propertyPrice * downPct[0]) / 100)
  const estimatedExpenses = Math.round(propertyPrice * 0.1)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Inputs + Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-violet-400" />
                  Datos de tu hipoteca
                </CardTitle>
                <CardDescription>Ajusta los parámetros para simular tu préstamo hipotecario</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Precio vivienda */}
                <div className="space-y-2">
                  <Label htmlFor="price">Precio de la vivienda</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">€</span>
                    <Input
                      id="price"
                      type="number"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(Math.max(0, Number(e.target.value)))}
                      min="10000"
                      step="5000"
                      className="pl-7"
                    />
                  </div>
                </div>

                {/* Entrada */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Entrada: {downPct[0]}%</Label>
                    <span className="text-sm font-semibold text-violet-400">{formatEur(downAmount)}</span>
                  </div>
                  <Slider
                    value={downPct}
                    onValueChange={setDownPct}
                    min={5}
                    max={60}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5% (mínimo)</span>
                    <span>60%</span>
                  </div>
                  {downPct[0] < 20 && (
                    <p className="text-xs text-amber-500 bg-amber-500/10 rounded p-2">
                      ⚠️ Los bancos suelen financiar hasta el 80%. Con menos del 20% de entrada es más difícil conseguir financiación.
                    </p>
                  )}
                </div>

                {/* TIN */}
                <div className="space-y-3">
                  <Label>Tipo de interés (TIN): {annualRate[0].toFixed(2)}%</Label>
                  <Slider
                    value={annualRate}
                    onValueChange={setAnnualRate}
                    min={0.5}
                    max={8}
                    step={0.05}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0.5%</span>
                    <span>Euribor ~2.5% + diferencial</span>
                    <span>8%</span>
                  </div>
                </div>

                {/* Plazo */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Plazo: {years[0]} años</Label>
                    <span className="text-sm text-muted-foreground">{years[0] * 12} cuotas</span>
                  </div>
                  <Slider
                    value={years}
                    onValueChange={setYears}
                    min={5}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5 años</span>
                    <span>40 años (máximo habitual)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resumen */}
            {result ? (
              <>
                <Card className="bg-violet-500/5 border-violet-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-violet-400">
                      <TrendingDown className="h-5 w-5" />
                      Resultado
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center py-2">
                      <p className="text-sm text-muted-foreground mb-1">Cuota mensual estimada</p>
                      <p className="text-4xl font-bold text-violet-400">{formatEur(result.monthlyPayment)}</p>
                      <p className="text-xs text-muted-foreground mt-1">Solo TIN, sin seguros ni comisiones</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm">
                      <div>
                        <p className="text-muted-foreground">Capital financiado</p>
                        <p className="font-bold text-base">{formatEur(result.loanAmount)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total a pagar</p>
                        <p className="font-bold text-base">{formatEur(result.totalPaid)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total intereses</p>
                        <p className="font-bold text-base text-destructive">{formatEur(result.totalInterest)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Intereses / Precio</p>
                        <p className="font-bold text-base text-destructive">
                          {((result.totalInterest / propertyPrice) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Gastos estimados compra */}
                <Card className="bg-amber-500/5 border-amber-500/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold text-amber-500 flex items-center gap-2">
                      <Euro className="h-4 w-4" />
                      Ahorro total estimado necesario
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Entrada ({downPct[0]}%)</span>
                      <span className="font-semibold">{formatEur(downAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gastos compra (~10%: ITP/AJD, notaría, registro)</span>
                      <span className="font-semibold">{formatEur(estimatedExpenses)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-bold">
                      <span>Total ahorro necesario</span>
                      <span className="text-amber-500">{formatEur(downAmount + estimatedExpenses)}</span>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="bg-destructive/5 border-destructive/20">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 mt-0.5 text-destructive shrink-0" />
                    Introduce valores válidos para calcular tu hipoteca.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT: Chart + Amortization table */}
          <div className="space-y-6">
            {result && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Evolución del préstamo</CardTitle>
                  <CardDescription>Capital pendiente vs. intereses acumulados pagados (por año)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={result.chartData} margin={{ top: 4, right: 8, left: 8, bottom: 0 }}>
                      <defs>
                        <linearGradient id="gradCapital" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.02} />
                        </linearGradient>
                        <linearGradient id="gradIntereses" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" strokeOpacity={0.5} />
                      <XAxis
                        dataKey="año"
                        tickFormatter={(v) => `A${v}`}
                        tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                        interval={Math.max(Math.floor(years[0] / 6) - 1, 0)}
                      />
                      <YAxis
                        tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                        tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                        width={45}
                      />
                      <Tooltip
                        formatter={(value: number, name: string) => [formatEur(value), name]}
                        labelFormatter={(label) => `Año ${label}`}
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: "12px" }} />
                      <Area
                        type="monotone"
                        dataKey="Capital pendiente"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        fill="url(#gradCapital)"
                      />
                      <Area
                        type="monotone"
                        dataKey="Intereses pagados"
                        stroke="#ef4444"
                        strokeWidth={2}
                        fill="url(#gradIntereses)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tabla de amortización</CardTitle>
                <CardDescription>Primeros 24 meses — desglose cuota a cuota</CardDescription>
              </CardHeader>
              <CardContent>
                {result && result.table.length > 0 ? (
                  <div className="max-h-[360px] overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="sticky top-0 bg-card border-b border-border">
                        <tr>
                          <th className="text-left py-2 pr-2 font-semibold text-xs">Mes</th>
                          <th className="text-right py-2 pr-2 font-semibold text-xs text-violet-400">Capital</th>
                          <th className="text-right py-2 pr-2 font-semibold text-xs text-destructive">Interés</th>
                          <th className="text-right py-2 font-semibold text-xs">Saldo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.table.map((row) => (
                          <tr key={row.month} className="border-b border-border/40 hover:bg-muted/30">
                            <td className="py-1.5 pr-2">{row.month}</td>
                            <td className="py-1.5 pr-2 text-right text-violet-400">{formatEur(row.principal)}</td>
                            <td className="py-1.5 pr-2 text-right text-destructive">{formatEur(row.interest)}</td>
                            <td className="py-1.5 text-right font-medium">{formatEur(row.balance)}</td>
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
