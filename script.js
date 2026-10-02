let budget = Number(prompt("Enter your budget:"));
let expense = Number(prompt("Enter your total expenses:"));

function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}

function updateBalance() {
    let remainingBalance = calculateRemainingBalance(budget, expense);

    console.log("Budget:", budget);
    console.log("Total Expenses:", expense);
    console.log("Remaining Balance:", remainingBalance);

    document.getElementById("result").textContent =
        "Remaining Balance: KSh " + remainingBalance;
}

updateBalance();

const expenseForm = document.getElementById("expense-form");

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value;
    const amount = Number(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter an expense name and a valid amount.");
        return;
    }

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const amountCell = document.createElement("td");
    amountCell.textContent = "KSh " + amount;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;

    row.appendChild(nameCell);
    row.appendChild(amountCell);
    row.appendChild(categoryCell);

    document.querySelector("table tbody").appendChild(row);

    expense = expense + amount;

    updateBalance();

    expenseForm.reset();
});