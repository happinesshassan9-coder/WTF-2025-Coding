// Income Calculator

let income = 500000;
let dailySpending = 3000;
let monthlySpending = 150000;
let savings = 200000;
let spendings = (dailySpending * 30) + monthlySpending;

//calculate total expenses
let totalExpenses = spendings + savings;

//calculate final balance
let finalBalance = income - totalExpenses;

// print result

console.log(`Monthly Income: ${income}`);
console.log(`Daily Expenses: ${dailySpending }`);
console.log(`Monthly Expenses: ${monthlySpending }`);
console.log(`savings: ${savings }`);
console.log(`totalExpenses: ${totalExpenses}`);
console.log(`Final Balence: ${finalBalance }`);