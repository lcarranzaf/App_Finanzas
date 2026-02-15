// Interactive Financial Calculators for Guide Article
// Save as: /public/js/financial-calculators.js

// Savings Calculator
function calculateSavings() {
  const income = parseFloat(document.getElementById('income-input')?.value || 0);
  const expenses = parseFloat(document.getElementById('expenses-input')?.value || 0);
  const savingsRate = parseFloat(document.getElementById('savings-rate')?.value || 20);
  
  if (income <= 0) {
    alert('Por favor, ingresa un ingreso válido');
    return;
  }
  
  const monthlySavings = Math.max(income - expenses, income * (savingsRate / 100));
  const annualSavings = monthlySavings * 12;
  const fiveYears = annualSavings * 5 * 1.07; // 7% growth
  const tenYears = annualSavings * 10 * 1.96; // compound interest
  
  // Show results
  document.getElementById('savings-result').classList.remove('hidden');
  document.getElementById('savings-amount').textContent = `€${annualSavings.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('monthly-savings').textContent = `€${monthlySavings.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('five-years').textContent = `€${fiveYears.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('ten-years').textContent = `€${tenYears.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  
  // Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'calculate_savings', {
      'income': income,
      'monthly_savings': monthlySavings
    });
  }
}

// Budget Calculator
function calculateOptimalBudget() {
  const income = parseFloat(document.getElementById('budget-income')?.value || 0);
  const cityType = document.getElementById('city-type')?.value;
  const debtSituation = document.getElementById('debt-situation')?.value;
  
  if (income <= 0) {
    alert('Por favor, ingresa un ingreso válido');
    return;
  }
  
  let needsPercentage, wantsPercentage, savingsPercentage;
  
  // Adapt based on income level
  if (income < 1500) {
    needsPercentage = 0.65;
    wantsPercentage = 0.15;
    savingsPercentage = 0.20;
  } else if (income > 2500) {
    needsPercentage = 0.45;
    wantsPercentage = 0.25;
    savingsPercentage = 0.30;
  } else {
    needsPercentage = 0.50;
    wantsPercentage = 0.25;
    savingsPercentage = 0.25;
  }
  
  // Adjust for expensive cities
  if (cityType === 'expensive') {
    needsPercentage += 0.10;
    savingsPercentage -= 0.05;
    wantsPercentage -= 0.05;
  }
  
  // Prioritize debt if needed
  if (debtSituation === 'yes') {
    savingsPercentage += 0.10;
    wantsPercentage -= 0.10;
  }
  
  const needs = income * needsPercentage;
  const wants = income * wantsPercentage;
  const savings = income * savingsPercentage;
  
  // Show results
  document.getElementById('budget-result').classList.remove('hidden');
  document.getElementById('needs-amount').textContent = `€${needs.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('wants-amount').textContent = `€${wants.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('savings-amount').textContent = `€${savings.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  
  // Personalized tip
  let tip = '';
  if (income < 1500) {
    tip = 'Enfócate en aumentar tus ingresos (freelance, side hustles) mientras mantienes gastos al mínimo.';
  } else if (savingsPercentage >= 0.30) {
    tip = '¡Excelente! Tienes capacidad de ahorro superior. Considera diversificar en inversiones de mayor crecimiento.';
  } else {
    tip = 'Buen balance. Revisa mensualmente si puedes aumentar el ahorro sin sacrificar calidad de vida.';
  }
  
  document.getElementById('budget-tip').textContent = tip;
  
  // Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'calculate_budget', {
      'income': income,
      'savings_percentage': savingsPercentage
    });
  }
}

// Debt Elimination Calculator
function calculateDebtElimination() {
  const strategy = document.querySelector('input[name="strategy"]:checked')?.value;
  const extraPayment = parseFloat(document.getElementById('extra-payment')?.value || 0);
  
  // Collect debt data
  const debtRows = document.querySelectorAll('.debt-row');
  const debts = [];
  
  debtRows.forEach(row => {
    const name = row.querySelector('.debt-name')?.value;
    const balance = parseFloat(row.querySelector('.debt-balance')?.value || 0);
    const rate = parseFloat(row.querySelector('.debt-rate')?.value || 0);
    
    if (name && balance > 0 && rate > 0) {
      debts.push({ name, balance, rate, monthlyPayment: 0 });
    }
  });
  
  if (debts.length === 0) {
    alert('Por favor, ingresa al menos una deuda');
    return;
  }
  
  // Sort based on strategy
  if (strategy === 'snowball') {
    debts.sort((a, b) => a.balance - b.balance);
  } else {
    debts.sort((a, b) => b.rate - a.rate);
  }
  
  // Calculate minimum payments (assume 3% of balance)
  debts.forEach(debt => {
    debt.monthlyPayment = Math.max(debt.balance * 0.03, 50);
  });
  
  // Calculate timeline
  let totalMonthly = debts.reduce((sum, debt) => sum + debt.monthlyPayment, 0) + extraPayment;
  let currentDebts = [...debts];
  let month = 0;
  let timeline = [];
  
  while (currentDebts.length > 0 && month < 360) { // Max 30 years
    month++;
    let paymentThisMonth = totalMonthly;
    
    for (let i = 0; i < currentDebts.length; i++) {
      const debt = currentDebts[i];
      const interest = debt.balance * (debt.rate / 100 / 12);
      const principal = Math.min(debt.monthlyPayment, debt.balance + interest) - interest;
      
      debt.balance -= principal;
      paymentThisMonth -= debt.monthlyPayment;
      
      if (debt.balance <= 0) {
        timeline.push({
          month,
          name: debt.name,
          paidOff: true,
          message: `Mes ${month}: ¡${debt.name} pagada completamente!`
        });
        
        // Redistribute payment to next debt
        if (i < currentDebts.length - 1) {
          currentDebts[i + 1].monthlyPayment += debt.monthlyPayment;
        } else {
          totalMonthly -= debt.monthlyPayment;
        }
        
        currentDebts.splice(i, 1);
        break;
      }
    }
  }
  
  // Display results
  document.getElementById('debt-results').classList.remove('hidden');
  const timelineDiv = document.getElementById('debt-timeline');
  timelineDiv.innerHTML = timeline.slice(0, 6).map(item => 
    `<div class="p-3 bg-green-50 rounded border border-green-200">
      <div class="font-semibold text-green-800">${item.message}</div>
    </div>`
  ).join('');
  
  if (timeline.length === 0) {
    timelineDiv.innerHTML = '<div class="p-3 bg-red-50 rounded border border-red-200">Revisa los datos de las deudas, hay valores inválidos.</div>';
  }
  
  // Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'calculate_debt_elimination', {
      'strategy': strategy,
      'total_debts': debts.length
    });
  }
}

// Emergency Fund Calculator
function calculateEmergencyFund() {
  const rent = parseFloat(document.getElementById('rent-expense')?.value || 0);
  const food = parseFloat(document.getElementById('food-expense')?.value || 0);
  const transport = parseFloat(document.getElementById('transport-expense')?.value || 0);
  const utilities = parseFloat(document.getElementById('utilities-expense')?.value || 0);
  const other = parseFloat(document.getElementById('other-expense')?.value || 0);
  const months = parseFloat(document.getElementById('emergency-months')?.value || 6);
  
  const monthlyTotal = rent + food + transport + utilities + other;
  const emergencyTotal = monthlyTotal * months;
  const monthsToComplete = emergencyTotal / 200; // Assuming €200/month
  
  // Show results
  document.getElementById('emergency-result').classList.remove('hidden');
  document.getElementById('emergency-total').textContent = `€${emergencyTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('monthly-total').textContent = `€${monthlyTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('months-covered').textContent = months;
  document.getElementById('time-to-complete').textContent = `${monthsToComplete.toFixed(1)} meses`;
  
  // Strategy suggestion
  let strategy = '';
  if (months < 3) {
    strategy = 'Este es el mínimo absoluto. Te recomiendo aumentar a 6 meses tan pronto como sea posible.';
  } else if (months === 6) {
    strategy = '¡Excelente! 6 meses te da buena seguridad para mayoría de emergencias.';
  } else {
    strategy = 'Muy conservador y seguro. Considera si el exceso podría estar mejor invertido.';
  }
  
  document.getElementById('emergency-strategy').textContent = strategy;
  
  // Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'calculate_emergency_fund', {
      'emergency_total': emergencyTotal,
      'months': months
    });
  }
}

// Investment Simulator
function runInvestmentSimulation() {
  const initial = parseFloat(document.getElementById('initial-investment')?.value || 0);
  const monthly = parseFloat(document.getElementById('monthly-investment')?.value || 0);
  const riskProfile = document.getElementById('risk-profile')?.value;
  const years = parseFloat(document.getElementById('time-horizon')?.value || 10);
  
  // Returns based on risk
  const returns = {
    conservative: 0.05,
    moderate: 0.07,
    aggressive: 0.12
  };
  
  const annualReturn = returns[riskProfile] || 0.07;
  const monthlyReturn = annualReturn / 12;
  
  // Calculate compound interest with monthly contributions
  let total = initial;
  for (let month = 1; month <= years * 12; month++) {
    total = total * (1 + monthlyReturn) + monthly;
  }
  
  const totalInvested = initial + (monthly * years * 12);
  const gains = total - totalInvested;
  
  // Show results
  document.getElementById('investment-results').classList.remove('hidden');
  document.getElementById('final-amount').textContent = `€${total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('final-years').textContent = years;
  document.getElementById('total-invested').textContent = `€${totalInvested.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  document.getElementById('total-gains').textContent = `€${gains.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  
  // Portfolio recommendation
  const recommendations = {
    conservative: 'Portfolio recomendado: 70% Cuentas Remuneradas + 20% Bonos + 10% Fondos Indexados Conservadores',
    moderate: 'Portfolio recomendado: 60% Fondos Indexados + 30% ETFs Internacionales + 10% Bonos',
    aggressive: 'Portfolio recomendado: 70% ETFs de Crecimiento + 20% Tecnología + 10% Cripto/Biotech'
  };
  
  document.getElementById('portfolio-recommendation').textContent = recommendations[riskProfile];
  
  // Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'investment_simulation', {
      'initial_investment': initial,
      'monthly_investment': monthly,
      'risk_profile': riskProfile
    });
  }
}

// Utility functions
function addDebt() {
  const container = document.getElementById('debts-container');
  const newRow = document.createElement('div');
  newRow.className = 'debt-row p-3 bg-white rounded-lg border mt-2';
  newRow.innerHTML = `
    <input type="text" placeholder="Nombre deuda" class="debt-name w-full px-3 py-2 border rounded mb-2">
    <div class="grid grid-cols-2 gap-2">
      <input type="number" placeholder="Saldo (€)" class="debt-balance w-full px-3 py-2 border rounded">
      <input type="number" placeholder="Tasa interés (%)" class="debt-rate w-full px-3 py-2 border rounded">
    </div>
  `;
  container.appendChild(newRow);
}

function updateProgress(month, checkbox) {
  // Simple progress tracking
  const checkboxes = document.querySelectorAll(`input[onchange*="${month}"]`);
  const checked = document.querySelectorAll(`input[onchange*="${month}"]:checked`);
  const progress = (checked.length / checkboxes.length) * 100;
  
  // Update progress bar if exists
  const progressBar = checkbox.closest('.month-plan')?.querySelector('.progress');
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
}

function analyzeBiases() {
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;
  
  if (!q1 || !q2 || !q3) {
    alert('Por favor, responde todas las preguntas');
    return;
  }
  
  // Analyze answers
  let score = 0;
  let analysis = [];
  
  // Question 1 analysis
  if (q1 === 'a') {
    score += 3; // FOMO bias
    analysis.push('🚨 FOMO (Fear Of Missing Out): Tiendes a comprar por miedo a quedarte afuera');
  } else if (q1 === 'b') {
    score += 1;
    analysis.push('✅ Buen enfoque: Investiga antes de actuar');
  } else {
    score += 2;
    analysis.push('⚠️ Timing market: Intentas predecir el mercado perfecto');
  }
  
  // Question 2 analysis
  if (q2 === 'a') {
    score += 3; // Panic selling
    analysis.push('🚨 Pánico vendedor: Vendes por miedo y conviertes pérdidas temporales en permanentes');
  } else if (q2 === 'b') {
    score += 2;
    analysis.push('⚠️ Sobre-inversión: Puedes estar comprando demasiado en caídas');
  } else {
    score += 0;
    analysis.push('✅ Disciplinado: Mantienes tu estrategia');
  }
  
  // Question 3 analysis
  if (q3 === 'a') {
    score += 3; // Herd behavior
    analysis.push('🚨 Comportamiento de manada: Sigues éxitos ajenos sin análisis propio');
  } else if (q3 === 'b') {
    score += 1;
    analysis.push('✅ Mentalidad de aprendizaje: Buscas entender el éxito ajeno');
  } else {
    score += 0;
    analysis.push('✅ Independiente: Mantienes tu propio camino');
  }
  
  // Show results
  document.getElementById('biases-result').classList.remove('hidden');
  document.getElementById('biases-analysis').innerHTML = analysis.map(item => `<div>${item}</div>`).join('');
  
  // Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'biases_analysis', {
      'score': score
    });
  }
}

function downloadTemplate() {
  // Create CSV content for budget template
  const csvContent = `Categoría,Presupuesto,Gasto Real,Diferencia
Alquiler,1200,,
Comida,400,,
Transporte,150,,
Servicios,200,,
Entretenimiento,100,,
Ahorros,500,,
Total,2550,,`;
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'presupuesto-personal-2025.csv';
  a.click();
  
  // Analytics event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download_template');
  }
}

function filterBanks(filter) {
  const rows = document.querySelectorAll('#banks-comparison tr');
  
  rows.forEach(row => {
    if (filter === 'all') {
      row.style.display = '';
    } else if (filter === 'nostudent') {
      // Show banks without special conditions
      row.style.display = row.textContent.includes('Estudiantes') ? 'none' : '';
    } else if (filter === 'student') {
      // Show only student-friendly banks
      row.style.display = row.textContent.includes('Estudiantes') || row.textContent.includes('Jóvenes') ? '' : 'none';
    } else if (filter === 'highinterest') {
      // Show only high interest accounts
      const rateText = row.textContent;
      const match = rateText.match(/(\d+\.\d+)%/);
      const rate = match ? parseFloat(match[1]) : 0;
      row.style.display = rate >= 2 ? '' : 'none';
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add input validation
  const numberInputs = document.querySelectorAll('input[type="number"]');
  numberInputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.value < 0) this.value = 0;
    });
  });
  
  // Add button hover effects
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  console.log('Financial calculators loaded successfully');
});