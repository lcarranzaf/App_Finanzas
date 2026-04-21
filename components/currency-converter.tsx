"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeftRight, RefreshCw, Clock } from "lucide-react"

const CURRENCIES = [
  // Principales
  { code: "USD", name: "Dólar Estadounidense", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "Libra Esterlina", flag: "🇬🇧" },
  { code: "CHF", name: "Franco Suizo", flag: "🇨🇭" },
  { code: "JPY", name: "Yen Japonés", flag: "🇯🇵" },
  { code: "CAD", name: "Dólar Canadiense", flag: "🇨🇦" },
  { code: "AUD", name: "Dólar Australiano", flag: "🇦🇺" },
  { code: "NZD", name: "Dólar Neozelandés", flag: "🇳🇿" },
  // Latinoamérica
  { code: "MXN", name: "Peso Mexicano", flag: "🇲🇽" },
  { code: "BRL", name: "Real Brasileño", flag: "🇧🇷" },
  { code: "ARS", name: "Peso Argentino", flag: "🇦🇷" },
  { code: "COP", name: "Peso Colombiano", flag: "🇨🇴" },
  { code: "CLP", name: "Peso Chileno", flag: "🇨🇱" },
  { code: "PEN", name: "Sol Peruano", flag: "🇵🇪" },
  { code: "UYU", name: "Peso Uruguayo", flag: "🇺🇾" },
  { code: "BOB", name: "Boliviano", flag: "🇧🇴" },
  { code: "PYG", name: "Guaraní Paraguayo", flag: "🇵🇾" },
  { code: "VES", name: "Bolívar Venezolano", flag: "🇻🇪" },
  { code: "DOP", name: "Peso Dominicano", flag: "🇩🇴" },
  { code: "GTQ", name: "Quetzal Guatemalteco", flag: "🇬🇹" },
  { code: "CRC", name: "Colón Costarricense", flag: "🇨🇷" },
  { code: "HNL", name: "Lempira Hondureño", flag: "🇭🇳" },
  { code: "CUP", name: "Peso Cubano", flag: "🇨🇺" },
  // Europa
  { code: "SEK", name: "Corona Sueca", flag: "🇸🇪" },
  { code: "NOK", name: "Corona Noruega", flag: "🇳🇴" },
  { code: "DKK", name: "Corona Danesa", flag: "🇩🇰" },
  { code: "PLN", name: "Esloti Polaco", flag: "🇵🇱" },
  { code: "CZK", name: "Corona Checa", flag: "🇨🇿" },
  { code: "HUF", name: "Forinto Húngaro", flag: "🇭🇺" },
  { code: "RON", name: "Leu Rumano", flag: "🇷🇴" },
  { code: "TRY", name: "Lira Turca", flag: "🇹🇷" },
  // Asia
  { code: "CNY", name: "Yuan Chino", flag: "🇨🇳" },
  { code: "HKD", name: "Dólar de Hong Kong", flag: "🇭🇰" },
  { code: "SGD", name: "Dólar de Singapur", flag: "🇸🇬" },
  { code: "KRW", name: "Won Surcoreano", flag: "🇰🇷" },
  { code: "TWD", name: "Dólar Taiwanés", flag: "🇹🇼" },
  { code: "INR", name: "Rupia India", flag: "🇮🇳" },
  { code: "PKR", name: "Rupia Pakistaní", flag: "🇵🇰" },
  { code: "BDT", name: "Taka Bangladesí", flag: "🇧🇩" },
  { code: "THB", name: "Baht Tailandés", flag: "🇹🇭" },
  { code: "MYR", name: "Ringgit Malayo", flag: "🇲🇾" },
  { code: "IDR", name: "Rupia Indonesia", flag: "🇮🇩" },
  { code: "PHP", name: "Peso Filipino", flag: "🇵🇭" },
  { code: "VND", name: "Dong Vietnamita", flag: "🇻🇳" },
  // Oriente Medio
  { code: "AED", name: "Dírham Emiratos", flag: "🇦🇪" },
  { code: "SAR", name: "Riyal Saudí", flag: "🇸🇦" },
  { code: "QAR", name: "Riyal Qatarí", flag: "🇶🇦" },
  { code: "ILS", name: "Séquel Israelí", flag: "🇮🇱" },
  // África
  { code: "ZAR", name: "Rand Sudafricano", flag: "🇿🇦" },
  { code: "EGP", name: "Libra Egipcia", flag: "🇪🇬" },
  { code: "MAD", name: "Dírham Marroquí", flag: "🇲🇦" },
  { code: "NGN", name: "Naira Nigeriana", flag: "🇳🇬" },
  { code: "KES", name: "Chelín Keniano", flag: "🇰🇪" },
]

const POPULAR_PAIRS = [
  { from: "USD", to: "MXN" },
  { from: "USD", to: "ARS" },
  { from: "USD", to: "COP" },
  { from: "USD", to: "CLP" },
  { from: "USD", to: "PEN" },
  { from: "USD", to: "BRL" },
  { from: "EUR", to: "USD" },
  { from: "EUR", to: "MXN" },
]

function formatAmount(value: number): string {
  if (value === 0) return "0"
  if (value >= 1000) return value.toLocaleString("es-MX", { maximumFractionDigits: 2 })
  if (value >= 1) return value.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 4 })
  return value.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 6 })
}

function getCurrencyInfo(code: string) {
  return CURRENCIES.find((c) => c.code === code) ?? { code, name: code, flag: "💱" }
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("MXN")
  const [rates, setRates] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string>("")

  const fetchRates = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD", { next: { revalidate: 3600 } })
      if (!res.ok) throw new Error("fetch failed")
      const data = await res.json()
      if (data.result === "success") {
        setRates(data.rates)
        const date = new Date(data.time_last_update_utc)
        setLastUpdated(
          date.toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" })
        )
      } else {
        throw new Error("api error")
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRates()
  }, [fetchRates])

  const convert = useCallback(
    (value: number, from: string, to: string): number => {
      if (!rates[from] || !rates[to]) return 0
      return (value / rates[from]) * rates[to]
    },
    [rates]
  )

  const numAmount = parseFloat(amount) || 0
  const result = convert(numAmount, fromCurrency, toCurrency)
  const rate = convert(1, fromCurrency, toCurrency)
  const inverseRate = convert(1, toCurrency, fromCurrency)

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const fromInfo = getCurrencyInfo(fromCurrency)
  const toInfo = getCurrencyInfo(toCurrency)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Converter principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Convertidor de Divisas</CardTitle>
                <CardDescription>
                  Tipos de cambio en tiempo real actualizados cada hora
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount input */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Cantidad a convertir</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                    step="any"
                    className="text-xl font-semibold h-12"
                    placeholder="0"
                  />
                </div>

                {/* Currency selectors */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
                  {/* From */}
                  <div className="space-y-2">
                    <Label>De</Label>
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {CURRENCIES.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            <span className="flex items-center gap-2">
                              <span>{c.flag}</span>
                              <span className="font-semibold">{c.code}</span>
                              <span className="text-muted-foreground hidden sm:inline">— {c.name}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Swap button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleSwap}
                    className="h-12 w-12 rounded-full"
                    aria-label="Intercambiar monedas"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>

                  {/* To */}
                  <div className="space-y-2">
                    <Label>A</Label>
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {CURRENCIES.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            <span className="flex items-center gap-2">
                              <span>{c.flag}</span>
                              <span className="font-semibold">{c.code}</span>
                              <span className="text-muted-foreground hidden sm:inline">— {c.name}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Result */}
                {loading ? (
                  <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
                    <div className="h-6 w-6 mx-auto animate-spin rounded-full border-2 border-primary border-t-transparent mb-2" />
                    <p className="text-sm text-muted-foreground">Cargando tipos de cambio...</p>
                  </div>
                ) : error ? (
                  <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-6 text-center space-y-3">
                    <p className="text-sm text-muted-foreground">No se pudo obtener los tipos de cambio.</p>
                    <Button variant="outline" size="sm" onClick={fetchRates}>
                      <RefreshCw className="h-3.5 w-3.5 mr-2" />
                      Reintentar
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 space-y-3">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        {fromInfo.flag} {formatAmount(numAmount)} {fromCurrency} =
                      </p>
                      <p className="text-4xl font-bold text-primary">
                        {toInfo.flag} {formatAmount(result)} {toCurrency}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 text-xs text-muted-foreground pt-2 border-t border-primary/10 text-center">
                      <span>1 {fromCurrency} = {formatAmount(rate)} {toCurrency}</span>
                      <span className="hidden sm:inline">·</span>
                      <span>1 {toCurrency} = {formatAmount(inverseRate)} {fromCurrency}</span>
                    </div>
                    {lastUpdated && (
                      <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        Actualizado: {lastUpdated}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Rate info note */}
            <p className="text-xs text-muted-foreground px-1">
              * Los tipos de cambio son de referencia (mercado interbancario). Para transacciones reales, consulta con tu banco o casa de cambio.
            </p>
          </div>

          {/* Popular pairs */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Pares Populares</CardTitle>
                <CardDescription>1 unidad de la moneda base</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-3">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="h-10 rounded-lg bg-muted/40 animate-pulse" />
                    ))}
                  </div>
                ) : error ? (
                  <p className="text-sm text-muted-foreground">No disponible</p>
                ) : (
                  <div className="space-y-2">
                    {POPULAR_PAIRS.map((pair) => {
                      const pairRate = convert(1, pair.from, pair.to)
                      const fromI = getCurrencyInfo(pair.from)
                      const toI = getCurrencyInfo(pair.to)
                      return (
                        <button
                          key={`${pair.from}-${pair.to}`}
                          onClick={() => {
                            setFromCurrency(pair.from)
                            setToCurrency(pair.to)
                          }}
                          className="w-full flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors text-sm"
                        >
                          <span className="font-medium">
                            {fromI.flag} {pair.from} → {toI.flag} {pair.to}
                          </span>
                          <span className="font-semibold text-primary tabular-nums">
                            {formatAmount(pairRate)}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
