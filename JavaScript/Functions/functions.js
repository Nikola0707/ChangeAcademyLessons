// Parts of a function  ----- input(argument), code, output (return value)

// Example 1
// Named Functions: These are the traditional functions defined with the function keyword followed by a name

function greet() {
  // This part is the function body
  console.log("Hello World!");
}

// Execution a function
greet();
greet();
greet();
greet();
greet();

// Example 2 -function that acceptr an argument
function greetTo(name) {
  console.log(`Welcome ${name}`);
}

greetTo("Angela Petreska");
greetTo("Cvetanka Apostolova");
greetTo("Dalia Alavi");
greetTo("BM");

// Example 3
// Anonymous function
// input(argument), code, output (return value)
let square = function (number) {
  let result = number * number;
  return result;
};

let squareValue1 = square(6);
console.log("squareValue1", squareValue1);

let squareValue2 = square(88);
console.log("squareValue2", squareValue2);

// Example 4
// Define a function called add that takes two arguments (a and b)
function add(a, b, c) {
  let sum = a + b + c;
  return sum;
}

let result = add(5, 3, 2);
console.log("result", result);

// Example 5 - Calculator
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero!";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator!";
  }
}
console.log(calculator(5, 4, "+"));
console.log(calculator(10, 2, "-"));
console.log(calculator(14, 2, "*"));
console.log(calculator(5, 0, "/"));
console.log(calculator(5, 5, "/"));
console.log(calculator(5, 8, "a"));

// Example 6 - Convert fahrenheit to celsius
// input(argument), code, output (return value)
let fahrenheitToCelsius = function (fahrenheit) {
  let resultInCelsius = ((fahrenheit - 32) * 5) / 9;
  return resultInCelsius;
};

let celsiusResultOne = fahrenheitToCelsius(32);
console.log("celsiusResultOne", celsiusResultOne);

let celsiusResultTwo = fahrenheitToCelsius(50);
console.log("celsiusResultTwo", celsiusResultTwo);
