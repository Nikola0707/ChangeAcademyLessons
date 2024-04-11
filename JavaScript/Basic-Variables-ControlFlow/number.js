// NUMBER DATA TYPE - Allow us to integrate numberic operations into our program
// We can have whole or numbers with decimal places

let wholeNumber = 9; // Declaring a variable 'wholeNumber' and assigning it the value 9 of NUMBER DATA TYPE
console.log("wholeNumber:", wholeNumber);

let decimalNumber = 9.9; // Declaring a variable 'decimalNumber' and assigning it the value 9.9 of NUMBER DATA TYPE
console.log("decimalNumber", decimalNumber);

// The real usefulness of numbers comes when you can actually perform all of those math operations on them.

let sum1 = 2 + 2; // Performing addition operation, result stored in 'sum1'
console.log("sum1", sum1);

let sum2 = 2.9 + 1.3; //Performing addition operation with decimal numbers, restult stored in 'sum2'
console.log("sum2", sum2);

let sum3 = 5 + 1.3; // Performing addition operation with a whole and decimal numbers, result stored in 'sum3
console.log("sum3", sum3);

// Subtraction
let difference = 10 - 5; // Performing subtraction operation, result store in 'difference'
console.log("difference", difference);

// Multiplication
let product = 3 * 4; // Performing multiplication operation, result stored in 'product'
console.log("product", product);

// Division
let quotient = 20 / 5; // Performing division operation, result stored in 'quotient'
console.log("quotient", quotient);

// Modulus (Remainder)
let remainder = 10 % 3; // Performing modulus operation (finding remainder), result stored in 'remainder'
console.log("remainder", remainder);

// Exponentiation
let exponentiation = 2 ** 3; //Performing exponentiation operation (2 raised to the power od 3), result stored in 'exponentiation'
console.log("exponentiation", exponentiation);

// Storing results in one variable
let result =
  sum1 +
  sum2 +
  sum3 +
  difference +
  product +
  quotient +
  remainder +
  exponentiation;
console.log("result", result);

// Example: Human years to a dog years
let humanAge = 31;
let dogYears = (humanAge + 1) / 7;
console.log("dogYears", dogYears);

// Example: Finding the average of four numbers
let num1 = 10;
let num2 = 15;
let num3 = 22;
let num4 = 57;

let average = (num1 + num2 + num3 + num4) / 4;
console.log("average", average);

// Example: Calculating the area of rectangle
let length = 90;
let width = 45;
let area = length * width;
console.log("area", area);

// Example: Converting kilometers to miles
let kilometers = 100;
let miles = kilometers * 0.62;
console.log("miles", miles);

// Example: Calculating the time taken to travel a distance
let distance = 120; // in kilometers
let speed = 60; // in kilometers per hour
let timeTaken = distance / speed;
console.log("timeTaken", timeTaken);
