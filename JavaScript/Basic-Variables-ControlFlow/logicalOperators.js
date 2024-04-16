// Logical AND (&&)

// Example 1
let x = 0;
let y = 10;

let result =
  x > 0 && y > 0
    ? "Both x and y are grater then 0."
    : "At least one of x and y is not greater then 0.";

console.log("result", result);

// Example 2

let number = 13;

if (number % 2 === 0 && 10) {
  console.log("The number is even and greater than 10!");
} else {
  console.log("The number is either not even or not grater than 10!");
}

// Logical OR (||)
let isRaining = true;
let isSunny = false;

if (isRaining || isSunny) {
  console.log("Either its raining or its sunny");
} else {
  console.log("its neither raining or sunny");
}
