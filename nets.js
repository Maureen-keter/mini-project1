function calculateNetSalary(basicSalary, benefits) {
    // Define Tax rates
    const taxRates = [
      { min: 0, max: 24000, rate: 0.1 },
      { min: 24001, max: 32333, rate: 0.25 },
      { min: 32334, max: 500000, rate: 0.3 },
      { min: 500001, max: 800000, rate: 0.325 },
      { min: 800001, rate: 0.35 },
    ];
  
    // Define NHIF rates
    const nhifRates = [
      { min: 0, max: 5999, amount: 150 },
      { min: 6000, max: 7999, amount: 300 },
      { min: 8000, max: 11999, amount: 400 },
      { min: 12000, max: 14999, amount: 500 },
      { min: 15000, max: 19999, amount: 600 },
      { min: 20000, max: 24999, amount: 750 },
      { min: 25000, max: 29999, amount: 850 },
      { min: 30000, max: 34999, amount: 900 },
      { min: 35000, max: 39999, amount: 950 },
      { min: 40000, max: 44999, amount: 1000 },
      { min: 45000, max: 49999, amount: 1100 },
      { min: 50000, max: 59999, amount: 1200 },
      { min: 60000, max: 69999, amount: 1300 },
      { min: 70000, max: 79999, amount: 1400 },
      { min: 80000, max: 89999, amount: 1500 },
      { min: 90000, max: 99999, amount: 1600 },
      { min: 100000, amount: 1700 },
    ];
  
    // Define NSSF rate
    const nssfRate = 0.06; // 6% of basic salary
  
    // Define Housing Levy rate
    const housingLevyRate = 0.015; // 1.5% of gross salary
  
    // Calculate PAYE
    let payee;
    for (const rate of taxRates) {
      if (basicSalary <= rate.max) {
        payee = basicSalary * rate.rate;
        break;
      } else {
        payee = rate.max * rate.rate;
      }
    }
  
    // Calculate NHIF Deductions
    let nhifDeduction;
    for (const rate of nhifRates) {
      if (basicSalary <= rate.max) {
        nhifDeduction = rate.amount;
        break;
      }
    }
  
    // Calculate NSSF Deduction
    const nssfDeduction = basicSalary * nssfRate;
  
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate Housing Levy
    const housingLevy = grossSalary * housingLevyRate;
  
    // Calculate Net Salary
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
  
    return {
      grossSalary,
      payee,
      nhifDeduction,
      nssfDeduction, 
      netSalary,
      housingLevy,
    };
  }
//   call the function to return results
  console.log(calculateNetSalary());
  
