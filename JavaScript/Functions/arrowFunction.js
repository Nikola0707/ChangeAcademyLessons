// Traditional function expression
const sum = function (num1, num2) {
  return num1 + num2;
};

// Arrow function with explicit return
const multiply = (num1, num2) => {
  return num1 * num2;
};

let res1 = multiply(2, 3);
console.log("res1", res1);

// Arrow function with implicit return
const subtract = (num1, num2) => num1 - num2;

let res2 = subtract(10, 3);
console.log("res2", res2);
