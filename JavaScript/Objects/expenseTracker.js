// Example: Manage Personal Account

// Description: This example demonstrates managing a personal account with functions to add income, add expenses, reset account, and get a summary.

let personalAccount = {
  fullName: "Nikola Ristoski",
  expenses: 0,
  income: 0,
};

//Function to add income to the account
let addIncome = function (account, income) {
  account.income = account.income + income;
};

// Function to add expenses to the account
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

// Function to reset account expenses and income to 0
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// Function to get a summary of the account
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.fullName} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

// Add income to the parsonal account
addIncome(personalAccount, 3500);
console.log("personalAccount", personalAccount);

// Add expenses to the personal account
addExpense(personalAccount, 1550);
console.log("personalAccount", personalAccount);

let summaryResult = getAccountSummary(personalAccount);
console.log("summaryResult", summaryResult);

resetAccount(personalAccount);
console.log("personal account after reset:", personalAccount);
