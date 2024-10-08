// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
// const transactions = [
//   ["income", 1000],
//   ["income", 1500],
//   ["expense", 500],
//   ["expense", 300],
//   ["income", 700],
// ];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
     Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
     Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];
const incomeTransactions = transactions.filter(
  (transactions) => transactions[0] === "income"
);
console.log(incomeTransactions);

const expenseTransactions = transactions.filter(
  (transactions) => transactions[0] === "expense"
);
console.log(expenseTransactions);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
     Output 3) 3200

     
Task 4) Calculate the total expenses and return it.
     Output 4) 800

******************************************************************/
const totalIncome = transactions
  .filter((transactions) => transactions[0] === "income")
  .reduce((sum, transactions) => sum + transactions[1], 0);
console.log(totalIncome);

const totalExpenses = transactions
  .filter((transactions) => transactions[0] === "expense")
  .reduce((sum, transactions) => sum + transactions[1], 0);
console.log(totalExpenses);

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
     Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) a0bove  or equal to $500.
     Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]
******************************************************************/

//simple work
const nettotal = totalIncome - totalExpenses;
console.log(nettotal);

let netTotleUsingIf = 0;
// as mr tareq say using if statment
transactions.reduce((sum, transaction) => {
  // get total incomne income
  if (transaction[0] === "income") {
    netTotleUsingIf += transaction[1];
    // get total expense
  } else if (transaction[0] === "expense") {
    netTotleUsingIf -= transaction[1];
  }
  return sum;
}, 0);
console.log(netTotleUsingIf);
/////
const IdentifyTransactions = transactions.filter(([, sum]) => sum >= 500);
console.log(IdentifyTransactions);

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
