// Interactive Charts and Visualizations for Financial Guide
// Save as: /lib/chart-configs.ts

import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto';

export const chartConfigs = {
  // Savings Growth Projection Chart
  savingsProjection: (initialAmount: number, monthlyContribution: number, years: number, annualReturn: number): ChartConfiguration => {
    const months = years * 12;
    const labels = Array.from({ length: years + 1 }, (_, i) => `Año ${i}`);
    const data: number[] = [];
    
    let currentAmount = initialAmount;
    data.push(currentAmount);
    
    for (let year = 1; year <= years; year++) {
      const monthlyReturn = annualReturn / 12 / 100;
      for (let month = 1; month <= 12; month++) {
        currentAmount = currentAmount * (1 + monthlyReturn) + monthlyContribution;
      }
      data.push(Math.round(currentAmount));
    }

    return {
      type: 'line' as ChartType,
      data: {
        labels,
        datasets: [{
          label: 'Proyección de Ahorros',
          data,
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4
        }, {
          label: 'Total Invertido (Sin Intereses)',
          data: labels.map((_, i) => initialAmount + (monthlyContribution * 12 * i)),
          borderColor: 'rgb(156, 163, 175)',
          backgroundColor: 'rgba(156, 163, 175, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { size: 12, weight: 'bold' },
              usePointStyle: true,
              padding: 20
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += '€' + context.parsed.y.toLocaleString('es-ES');
                }
                return label;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '€' + value.toLocaleString('es-ES');
              }
            },
            title: {
              display: true,
              text: 'Cantidad (€)',
              font: { size: 14, weight: 'bold' }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Tiempo',
              font: { size: 14, weight: 'bold' }
            }
          }
        }
      }
    };
  },

  // Budget Breakdown Pie Chart
  budgetBreakdown: (needs: number, wants: number, savings: number): ChartConfiguration => {
    const total = needs + wants + savings;
    
    return {
      type: 'doughnut' as ChartType,
      data: {
        labels: ['Necesidades (50/30/20)', 'Deseos', 'Ahorro'],
        datasets: [{
          data: [needs, wants, savings],
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',  // Blue
            'rgba(168, 85, 247, 0.8)',  // Purple
            'rgba(34, 197, 94, 0.8)'   // Green
          ],
          borderColor: [
            'rgb(59, 130, 246)',
            'rgb(168, 85, 247)',
            'rgb(34, 197, 94)'
          ],
          borderWidth: 2,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { size: 12, weight: 'bold' },
              padding: 15,
              generateLabels: function(chart: any) {
                const data = chart.data;
                if (data.labels?.length && data.datasets.length) {
                  const dataset = data.datasets[0];
                  const total = dataset.data.reduce((a: any, b: any) => {
                    const aVal = typeof a === 'number' ? a : 0;
                    const bVal = typeof b === 'number' ? b : 0;
                    return aVal + bVal;
                  }, 0);
                  return data.labels.map((label: any, i: any) => {
                    const value = dataset.data[i];
                    const numValue = typeof value === 'number' ? value : 0;
                    const percentage = ((numValue / total) * 100).toFixed(1);
                    return {
                      text: `${label}: €${numValue.toLocaleString('es-ES')} (${percentage}%)`,
                      fillStyle: 'rgba(75, 192, 192, 1)',
                      hidden: false,
                      index: i,
                      pointStyle: 'circle'
                    };
                  });
                }
                return [];
              } as any
            }
          },
          tooltip: {
            callbacks: {
              label: function(context: any) {
                const value = context.parsed as number;
                const total = context.dataset.data.reduce((a: any, b: any) => {
                  const aVal = typeof a === 'number' ? a : 0;
                  const bVal = typeof b === 'number' ? b : 0;
                  return aVal + bVal;
                }, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `€${value.toLocaleString('es-ES')} (${percentage}%)`;
              }
            }
          }
        }
      }
    };
  },

  // Debt Elimination Timeline Chart
  debtElimination: (debts: Array<{name: string, balance: number, monthlyPayment: number}>): ChartConfiguration => {
    // Calculate payoff timeline
    const timeline: Array<{month: number, debt: string, amount: number}> = [];
    let currentDebts = debts.map(d => ({...d}));
    let month = 0;
    
    while (currentDebts.length > 0 && month < 120) { // Max 10 years
      month++;
      currentDebts.forEach(debt => {
        if (debt.balance > 0) {
          timeline.push({
            month,
            debt: debt.name,
            amount: debt.balance
          });
        }
      });
      
      // Simplified payoff calculation (without interest for simplicity)
      for (let i = 0; i < currentDebts.length; i++) {
        currentDebts[i].balance -= currentDebts[i].monthlyPayment;
        if (currentDebts[i].balance <= 0) {
          currentDebts.splice(i, 1);
          break;
        }
      }
    }

    // Aggregate by debt
    const debtNames = [...new Set(timeline.map(t => t.debt))];
    const datasets = debtNames.map((debtName, index) => {
      const debtData = timeline.filter(t => t.debt === debtName);
      const colors = [
        { border: 'rgb(239, 68, 68)', bg: 'rgba(239, 68, 68, 0.1)' },  // Red
        { border: 'rgb(245, 158, 11)', bg: 'rgba(245, 158, 11, 0.1)' }, // Orange
        { border: 'rgb(59, 130, 246)', bg: 'rgba(59, 130, 246, 0.1)' }, // Blue
        { border: 'rgb(34, 197, 94)', bg: 'rgba(34, 197, 94, 0.1)' },   // Green
      ];
      const color = colors[index % colors.length];
      
      return {
        label: debtName,
        data: debtData.map(d => d.amount),
        borderColor: color.border,
        backgroundColor: color.bg,
        borderWidth: 2,
        fill: true,
        tension: 0.4
      };
    });

    return {
      type: 'line' as ChartType,
      data: {
        labels: Array.from({ length: month }, (_, i) => `Mes ${i + 1}`),
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { size: 11, weight: 'bold' },
              usePointStyle: true,
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null && context.parsed.y > 0) {
                  label += '€' + context.parsed.y.toLocaleString('es-ES');
                }
                return label;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '€' + value.toLocaleString('es-ES');
              }
            },
            title: {
              display: true,
              text: 'Saldo Restante (€)',
              font: { size: 14, weight: 'bold' }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Timeline',
              font: { size: 14, weight: 'bold' }
            }
          }
        }
      }
    };
  },

  // Cost of Living Comparison Bar Chart
  costOfLiving: (cities: Array<{name: string, rent: number, food: number, transport: number, total: number}>): ChartConfiguration => {
    return {
      type: 'bar' as ChartType,
      data: {
        labels: cities.map(city => city.name),
        datasets: [
          {
            label: 'Alquiler',
            data: cities.map(city => city.rent),
            backgroundColor: 'rgba(239, 68, 68, 0.8)',
            borderColor: 'rgb(239, 68, 68)',
            borderWidth: 2
          },
          {
            label: 'Supermercado',
            data: cities.map(city => city.food),
            backgroundColor: 'rgba(245, 158, 11, 0.8)',
            borderColor: 'rgb(245, 158, 11)',
            borderWidth: 2
          },
          {
            label: 'Transporte',
            data: cities.map(city => city.transport),
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { size: 12, weight: 'bold' },
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += '€' + context.parsed.y.toLocaleString('es-ES');
                }
                return label;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '€' + value.toLocaleString('es-ES');
              }
            },
            title: {
              display: true,
              text: 'Costo Mensual (€)',
              font: { size: 14, weight: 'bold' }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Ciudades',
              font: { size: 14, weight: 'bold' }
            }
          }
        }
      }
    };
  },

  // Investment Risk vs Return Scatter Plot
  riskReturnProfile: (investments: Array<{name: string, risk: number, return: number, category: string}>): ChartConfiguration => {
    const categories = ['Conservador', 'Moderado', 'Agresivo'];
    const colors = {
      'Conservador': { border: 'rgb(34, 197, 94)', bg: 'rgba(34, 197, 94, 0.6)' },
      'Moderado': { border: 'rgb(245, 158, 11)', bg: 'rgba(245, 158, 11, 0.6)' },
      'Agresivo': { border: 'rgb(239, 68, 68)', bg: 'rgba(239, 68, 68, 0.6)' }
    };

    return {
      type: 'scatter' as ChartType,
      data: {
        datasets: categories.map(category => ({
          label: category,
          data: investments
            .filter(inv => inv.category === category)
            .map(inv => ({ x: inv.risk, y: inv.return, name: inv.name })),
          backgroundColor: colors[category as keyof typeof colors].bg,
          borderColor: colors[category as keyof typeof colors].border,
          borderWidth: 2,
          pointRadius: 8,
          pointHoverRadius: 10
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { size: 12, weight: 'bold' },
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const point = context.raw as any;
                return [
                  `Inversión: ${point.name}`,
                  `Riesgo: ${point.x}/10`,
                  `Retorno: ${point.y}%`
                ];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Retorno Anual (%)',
              font: { size: 14, weight: 'bold' }
            },
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Nivel de Riesgo (1-10)',
              font: { size: 14, weight: 'bold' }
            },
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    };
  }
};

// Chart rendering utilities
export const renderChart = (ctx: CanvasRenderingContext2D, config: ChartConfiguration): Chart => {
  return new Chart(ctx, config);
};

// Export for use in components
export default chartConfigs;