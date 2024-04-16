// The syntax of the ternary operator is as follow

//  condition ? expression1 : expression2

// Example 1
let isRaining = true;

let action = isRaining ? "Take an umbrella" : "Leave the umbrella at home";
console.log("action", action);

if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("Leave the umbrella at home");
}

// Example 2
let age = 20;
age >= 18 ? console.log("You are an adult") : console.log("You are a minor");

// Example 3
let isLoggedIn = false;
let greeting = isLoggedIn ? "Welcome back!" : "Please log in to continue";

console.log("greeting", greeting);
