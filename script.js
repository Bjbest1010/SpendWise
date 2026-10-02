let budget = 0;
let expense = 0;
let remainingBalance = 0;

budget = Number(prompt("Enter your budget:"));
expense = Number(prompt("Enter your total expenses:"));

function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}

remainingBalance = calculateRemainingBalance(budget, expense);

console.log("Budget:", budget);
console.log("Total Expenses:", expense);
console.log("Remaining Balance:", remainingBalance);

document.getElementById("result").textContent =
    "Remaining Balance: " + remainingBalance;