// Import the prompt-sync library
const prompt = require("prompt-sync")({ sigint: true });

// Gets input information from the user
const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter your benefits: "));

// Calculates gross salary
const grossSalary = basicSalary + benefits;

// Calculates Monthly Taxable Pay using PAYE rates
const paye = calculatePaye(grossSalary);
function calculatePaye(grossSalary) {
  if (grossSalary <= 24000) {
    return (grossSalary * 0.1);
  } 
  else if (grossSalary >=24001 && grossSalary <= 32333) {
    return (grossSalary * 0.25);
  } 
  else if (grossSalary >=32334 && grossSalary <= 500000) {
    return (grossSalary * 0.30);
  } 
  else if (grossSalary >=500001 && grossSalary <= 800000) {
    return (grossSalary * 0.325);
  } 
  else  {
    return (grossSalary * 0.35);
  }
}


// Calculates NHIF deductions using NHIF rates
const nhifDeductions = calculateNHIFDeductions(grossSalary);
function calculateNHIFDeductions(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    return 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    return 400;
  } else if (grossSalary > 12000 && grossSalary <= 14999) {
    return 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    return 600;
  } else if (grossSalary > 20000 && grossSalary <= 24999) {
    return 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    return 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    return 900;
  } else if (grossSalary >= 35000 && grossSalary<= 39999) {
    return 950;
  } else if (grossSalary >= 40000 && grossSalary<= 44999) {
    return 1000;
  }else if (grossSalary >= 45000 && grossSalary<= 49999) {
    return 1100;
  }  else if (grossSalary >= 50000 && grossSalary<= 59999) {
    return 1200;
  }else if (grossSalary >= 60000 && grossSalary<= 69999) {
    return 1300;
  }else if (grossSalary >= 70000 && grossSalary<= 79999) {
    return 1400;
  }else if (grossSalary >= 80000 && grossSalary<= 89999) {
    return 1500;
  }else if (grossSalary >= 90000 && grossSalary<= 99999) {
    return 1600;
  }else {
    return 1700;
  } 
}

// Calculates NSSF deductions using NSSF rates
const nssfDeductions = calculateNSSF(grossSalary)
function calculateNSSF(grossSalary) {
  if (grossSalary <= 7000) {
    return (grossSalary * 0.06);
  } else if (grossSalary >= 7001 && grossSalary <= 36000) {
    return (grossSalary * 0.06);
  } else {
    return 2160; // Maximum NSSF pension contribution
  }
}

// Calculates Housing Levy
const housingLevy = Math.floor(grossSalary * 0.015);

// Calculates monthly net salary
const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions - housingLevy;

// Prints results
console.log("Net Salary: KES", netSalary);
