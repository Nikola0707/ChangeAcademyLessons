// Basic Syntax: The basic syntax of an if statement is as follows:
/*
    if(condition){
        code block to be executed if condition is true
    }
*/

// Example 1: Using if statement to check if a number is positive

// Declare a variable to store the number
let number = 10;

// Check if the number is greater then 0
if (number > 0) {
  // It true, log a message inidicating that the number is positive
  console.log("The number is positive");
}

// Example 2: Using if-else statement to check if a number is even or odd

let anotherNumber = 7;
if (anotherNumber % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Example: 3: Using if-else / else-if statement to check the grade based on a score
let score = 91;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Example 4: Write a JavaScript program that determines the season based on the input month

let month = 11
if(month >= 3 && month <= 5){
    console.log("It's Spring")
}else if(month >= 6 && month <= 8){
    console.log("It's Summer")
}else if(month >= 9 && month <= 11){
    console.log("It's Autumn")
}else{
    console.log("It's winter!")
}