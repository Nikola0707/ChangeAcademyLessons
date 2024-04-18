// Handling Multiple Arguments and Argument Defaults in Functions

// Example function without arguments
let greet = function () {
  return "Welcome";
};
let greetResult = greet();
console.log(greetResult);

// Example function with one argument
const getUserName = function (userName) {
  return userName;
};
const user = getUserName("Nikola");
console.log("user", user);

// Example function with more then one argument
let sum = function (num1, num2, num3) {
  return num1 + num2 + num3;
};
let sumResult = sum(2, 9, 10);
console.log("sumResult:", sumResult);

// Function default Arguments

// Example 1: function with default argument
const greetWithName = function (name = "Guest") {
  return `Hello, ${name}!`;
};

let withoutArg = greetWithName();
console.log("withoutArg", withoutArg);

let withArg = greetWithName("Nikola");
console.log("withArg", withArg);

// Example 2:
// Define a function named getScore with two arguments: playerName and score.
// Both arguments have default values: playerName === 'Anonymous' and score === 0
// Return a string indicating the player name and score using template literals.

let getScore = function (playerName = "Anonymous", score = 0) {
  return `${playerName} has score of ${score}`;
};

let playerOne = getScore("Bisera", 98);
console.log("playerOne:", playerOne);

let playerTwo = getScore("Biljana", 88);
console.log("playerTwo:", playerTwo);

let playerThree = getScore();
console.log("playerThree", playerThree);

let playerFour = getScore("Stefan");
console.log("playerFour", playerFour);

let playerSix = getScore(undefined, 12);
console.log("playerSix", playerSix);

// Example 3
// Tip and total amount calculator
// Define a function to calculate the tip amount based on the bill amount and tip percentage
// Call the calculateTip function with some arguments

function calculateTip(billAmount, tipPercentage = 10) {
  return (billAmount + tipPercentage) / 100;
}

function totalWithTip(billAmount, tipPercentage = 10) {
  return billAmount + tipPercentage;
}

let tipAmountOne = calculateTip(100, 50);
let totalAmountOne = totalWithTip(100, 50);

console.log("tipAmountOne:", tipAmountOne);
console.log("totalAmountOne", totalAmountOne);
