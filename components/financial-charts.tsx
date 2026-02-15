'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Line, Doughnut, Bar, Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface FinancialChartsProps {
  savingsData?: {
    initial: number
    monthly: number
    years: number
    riskLevel: 'conservative' | 'moderate' | 'aggressive'
  }
  budgetData?: {
    needs: number
    wants: number
    savings: number
  }
  debtData?: Array<{
    name: string
    balance: number
    rate: number
    monthlyPayment: number
  }>
  costOfLivingData?: Array<{
    city: string
    rent: number
    food: number
    transport: number
    total: number
  }>
}

export default function FinancialCharts({ 
  savingsData, 
  budgetData, 
  debtData, 
  costOfLivingData 
}: FinancialChartsProps) {
  const [activeChart, setActiveChart] = useState('savings')

  // Calculate returns based on risk level
  const getReturnRate = (riskLevel: string) => {
    const rates = {
      conservative: 0.05,
      moderate: 0.07,
      aggressive: 0.12
    }
    return rates[riskLevel as keyof typeof rates] || 0.07
  }

  // Savings projection chart data
  const getSavingsChartData = (): any => {
    if (!savingsData) return {
      labels: [],
      datasets: [
        {
          label: 'Proyección de Ahorros',
          data: [],
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4
        },
        {
          label: 'Total Invertido',
          data: [],
          borderColor: 'rgb(156, 163, 175)',
          backgroundColor: 'rgba(156, 163, 175, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false
        }
      ]
    }
    
    const { initial, monthly, years, riskLevel } = savingsData
    const annualReturn = getReturnRate(riskLevel)
    const labels = Array.from({ length: years + 1 }, (_, i) => `Año ${i}`)
    const investedData = [initial]
    const projectedData = [initial]
    
    let currentInvested = initial
    let currentProjected = initial
    
    for (let year = 1; year <= years; year++) {
      currentInvested += monthly * 12
      investedData.push(currentInvested)
      
      // Compound interest calculation
      currentProjected = currentProjected * (1 + annualReturn) + (monthly * 12)
      projectedData.push(Math.round(currentProjected))
    }

    return {
      labels,
      datasets: [
        {
          label: 'Proyección de Ahorros',
          data: projectedData,
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4
        },
        {
          label: 'Total Invertido',
          data: investedData,
          borderColor: 'rgb(156, 163, 175)',
          backgroundColor: 'rgba(156, 163, 175, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false
        }
      ]
    }
  }

  // Budget breakdown chart data
  const getBudgetChartData = (): any => {
    if (!budgetData) return {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(34, 197, 94, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(168, 85, 247)',
          'rgb(34, 197, 94)'
        ],
        borderWidth: 2,
        hoverOffset: 8
      }]
    }
    
    const { needs, wants, savings } = budgetData
    const total = needs + wants + savings

    return {
      labels: ['Necesidades (50/30/20)', 'Deseos', 'Ahorros'],
      datasets: [{
        data: [needs, wants, savings],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',  // Blue
          'rgba(168, 85, 247, 0.8)',  // Purple
          'rgba(34, 197, 94, 0.8)'    // Green
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(168, 85, 247)',
          'rgb(34, 197, 94)'
        ],
        borderWidth: 2,
        hoverOffset: 8
      }]
    }
  }

  // Cost of living chart data
  const getCostOfLivingData = (): any => {
    if (!costOfLivingData) return {
      labels: [],
      datasets: [
        {
          label: 'Alquiler',
          data: [],
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
          borderColor: 'rgb(239, 68, 68)',
          borderWidth: 2
        },
        {
          label: 'Supermercado',
          data: [],
          backgroundColor: 'rgba(245, 158, 11, 0.8)',
          borderColor: 'rgb(245, 158, 11)',
          borderWidth: 2
        },
        {
          label: 'Transporte',
          data: [],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 2
        }
      ]
    }

    return {
      labels: costOfLivingData.map(city => city.city),
      datasets: [
        {
          label: 'Alquiler',
          data: costOfLivingData.map(city => city.rent),
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
          borderColor: 'rgb(239, 68, 68)',
          borderWidth: 2
        },
        {
          label: 'Supermercado',
          data: costOfLivingData.map(city => city.food),
          backgroundColor: 'rgba(245, 158, 11, 0.8)',
          borderColor: 'rgb(245, 158, 11)',
          borderWidth: 2
        },
        {
          label: 'Transporte',
          data: costOfLivingData.map(city => city.transport),
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 2
        }
      ]
    }
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: { size: 12, weight: 'bold' as const },
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.parsed.y !== null) {
              label += '€' + context.parsed.y.toLocaleString('es-ES')
            }
            return label
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '€' + value.toLocaleString('es-ES')
          }
        },
        title: {
          display: true,
          text: 'Cantidad (€)',
          font: { size: 14, weight: 'bold' as const }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Tiempo',
          font: { size: 14, weight: 'bold' as const }
        }
      }
    }
  }

  const budgetOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        display: false
      }
    }
  }

  return (
    <div className="w-full space-y-8">
      {/* Chart Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <Button
          variant={activeChart === 'savings' ? 'default' : 'outline'}
          onClick={() => setActiveChart('savings')}
          size="sm"
        >
          💰 Proyección Ahorros
        </Button>
        <Button
          variant={activeChart === 'budget' ? 'default' : 'outline'}
          onClick={() => setActiveChart('budget')}
          size="sm"
        >
          📊 Desglose Presupuesto
        </Button>
        <Button
          variant={activeChart === 'cost' ? 'default' : 'outline'}
          onClick={() => setActiveChart('cost')}
          size="sm"
        >
          🏙️ Costo de Vida
        </Button>
        <Button
          variant={activeChart === 'debt' ? 'default' : 'outline'}
          onClick={() => setActiveChart('debt')}
          size="sm"
        >
          💳 Eliminación Deudas
        </Button>
      </div>

      {/* Savings Projection Chart */}
      {activeChart === 'savings' && savingsData && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📈 Proyección de Ahorros con Interés Compuesto
            </CardTitle>
            <CardDescription>
              Visualización del crecimiento de tus ahorros durante {savingsData.years} años
              <Badge variant="secondary" className="ml-2">
                {savingsData.riskLevel === 'conservative' ? 'Conservador (5%)' : 
                 savingsData.riskLevel === 'moderate' ? 'Moderado (7%)' : 'Agresivo (12%)'}
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <Line data={getSavingsChartData()} options={chartOptions} />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-sm text-gray-600">Total Invertido</div>
                <div className="text-xl font-bold text-green-700">
                  €{savingsData.initial.toLocaleString('es-ES')}
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-gray-600">Aportaciones Mensuales</div>
                <div className="text-xl font-bold text-blue-700">
                  €{savingsData.monthly.toLocaleString('es-ES')}
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-sm text-gray-600">Retorno Estimado</div>
                <div className="text-xl font-bold text-purple-700">
                  {(getReturnRate(savingsData.riskLevel) * 100).toFixed(1)}% anual
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Budget Breakdown Chart */}
      {activeChart === 'budget' && budgetData && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Desglose de Presupuesto 50/30/20 Mejorado
            </CardTitle>
            <CardDescription>
              Distribución optimizada de tus ingresos según tus circunstancias personales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <Doughnut data={getBudgetChartData()} options={budgetOptions} />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-gray-600">Necesidades</div>
                <div className="text-xl font-bold text-blue-700">
                  €{budgetData.needs.toLocaleString('es-ES')}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {((budgetData.needs / (budgetData.needs + budgetData.wants + budgetData.savings)) * 100).toFixed(1)}%
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-sm text-gray-600">Deseos</div>
                <div className="text-xl font-bold text-purple-700">
                  €{budgetData.wants.toLocaleString('es-ES')}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {((budgetData.wants / (budgetData.needs + budgetData.wants + budgetData.savings)) * 100).toFixed(1)}%
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-sm text-gray-600">Ahorros</div>
                <div className="text-xl font-bold text-green-700">
                  €{budgetData.savings.toLocaleString('es-ES')}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {((budgetData.savings / (budgetData.needs + budgetData.wants + budgetData.savings)) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Cost of Living Chart */}
      {activeChart === 'cost' && costOfLivingData && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🏙️ Comparación Costo de Vida España 2025
            </CardTitle>
            <CardDescription>
              Análisis comparativo de gastos básicos entre principales ciudades españolas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <Bar data={getCostOfLivingData()} options={chartOptions} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {costOfLivingData.map((city, index) => (
                <div key={city.city} className="p-4 bg-gray-50 rounded-lg border">
                  <div className="font-semibold text-lg">{city.city}</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Total mensual: <span className="font-bold text-gray-800">
                      €{city.total.toLocaleString('es-ES')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Alquiler: €{city.rent}</span>
                    <span>Comida: €{city.food}</span>
                    <span>Transporte: €{city.transport}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Debt Elimination Chart */}
      {activeChart === 'debt' && debtData && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💳 Estrategia de Eliminación de Deudas
            </CardTitle>
            <CardDescription>
              Timeline visual para alcanzar la libertad de deudas usando método avalancha
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-red-600">
                €{debtData.reduce((sum, debt) => sum + debt.balance, 0).toLocaleString('es-ES')}
              </div>
              <div className="text-sm text-gray-600">Deuda Total Actual</div>
            </div>
            
            <div className="space-y-4">
              {debtData.map((debt, index) => {
                const progress = Math.max(0, 100 - (debt.balance / (debt.monthlyPayment * 12)) * 100)
                return (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold">{debt.name}</div>
                      <div className="text-sm">
                        <span className="text-red-600 font-bold">{debt.rate}%</span> TAE
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Saldo: </span>
                        <span className="font-bold">€{debt.balance.toLocaleString('es-ES')}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Pago mensual: </span>
                        <span className="font-bold">€{debt.monthlyPayment.toLocaleString('es-ES')}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Tiempo estimado: </span>
                        <span className="font-bold">
                          {Math.ceil(debt.balance / debt.monthlyPayment)} meses
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${100 - progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-600 mt-1 text-center">
                        {progress.toFixed(1)}% completado
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}