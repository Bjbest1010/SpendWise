# SpendWise

SpendWise is a simple budget and expense tracking application. It uses JavaScript to collect budget and expense information from the user, calculate the remaining balance, and display the result.

## JavaScript Concepts Implemented

* Variables
* Data types
* User input
* Number conversion
* Calculations
* Functions
* Console output
* DOM manipulation
* Event handling

## How Variables Are Used

Variables are used to store important budgeting information. The `budget` variable stores the user's budget, the `expense` variable stores the total expenses, and the `remainingBalance` variable stores the amount left after expenses.

## How User Input Is Collected

SpendWise uses the JavaScript `prompt()` function to ask the user to enter their budget and total expenses. The `Number()` function converts the entered values into numbers so they can be used in calculations.

The Add Expense form also collects the expense name, amount, and category using JavaScript.

## How Calculations Are Performed

The application calculates the remaining balance by subtracting total expenses from the budget.

**Remaining Balance = Budget - Total Expenses**

For example, if the budget is 10,000 and expenses are 3,500, the remaining balance is 6,500.

When a new expense is added, the expense amount is added to the total expenses and the remaining balance is updated.

## How Functions Organize the Code

The `calculateRemainingBalance()` function performs the budget calculation. The `updateBalance()` function updates the balance and displays the results in the browser and console. Using functions makes the code reusable and organized.

## Technologies Used

* HTML
* CSS
* JavaScript
* GitHub
