// use  series of if...else conditionals
//declare function


function calculateSalary(basicSalary, benefits) {
    //grossSalary variable
    const grossSalary = basicSalary + benefits;
    let payeeTax;
    if (grossSalary <= 24000) {
      payeeTax = grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      payeeTax = (8333 * 0.25 + 24000 * 0.1);
    } else if (grossSalary >= 32334 && grossSalary <= 500000) {
      payeeTax = (467667 * 0.3 + 4483.25);
    } else if (grossSalary >= 500001 && grossSalary <= 800000) {
      payeeTax = (300000 * 0.325) + 144783.1;
    } else if (grossSalary > 800000) {
      payeeTax = (((grossSalary - 800000) * 0.35 ) + 242283.1);
    } else {
      throw new Error("Invalid input");
    }
  
    // NHIF Deductions
    let nhifDeduction;
    if (grossSalary <= 5999) {
      nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
      nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
      nhifDeduction = 1600;
    }
    else if(grossSalary >= 100000){
        nhifDeduction = 1700;
    }
  
    // NSSF Deductions
    let nssfDeduction;
    if (grossSalary > 0 && grossSalary <= 6000) {
      nssfDeduction = grossSalary * 0.06;
    } else if (grossSalary > 6000 && grossSalary <= 18000) {
      nssfDeduction = 360 + (grossSalary - 6000) * 0.06;
    } else if (grossSalary > 18000) {
      nssfDeduction = 1080;
    }
  
    let netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
    return { grossSalary, payeeTax, nhifDeduction, nssfDeduction, netSalary };
  }

  
  
