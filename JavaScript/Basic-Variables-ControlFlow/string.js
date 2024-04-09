// STRING DATA TYPE

/*
 What is a variable?
 - A variable is a fundamental concept in programming that acts a container for storing data values.
 - It provides a way to label and reference a pice of data within a program.
 - Variables allow developers to manipulate and work with data dynamically during the execution of a program.

 - In JavaScript, variables can hold various types of data, including string, numbers, arrays, objects, booleans,
    functions, and more.
*/

// How we create a variable?
let firstName = "Nikola";

// How to print our variable value?
console.log("firstName:", firstName);

/*
Here we use the console.log() function to print the value of the "firstName" variable to the console.
This helps us to see the current value of the variable during program execution.
*/

// Naming Convention:
/*
- Variables should have meningful names that describe the data they hold or represent.
- Use camelCase for variable names, starting with a lowercase letter.
- Avoid using reserved keywords and ensure consistency in name throughout your codebase.
*/

// Examples:
let userName = "John"; // GOOD: descriptive name with camelCase
console.log("userName:", userName);

let user_last_name = "Doe"; // BAD: uses underscore instead of camelCase
console.log("user_last_name:", user_last_name);

let boo1 = "vague name"; // BAD: vague name, should be more descriptive
console.log("boo1:", boo1);

// let let = "reserved keyword" BAD: DO NOT USE RESERVED KEYWORDS

// String concatenation
/*
- String concatenation is the process of combining two or more strings into a single string.
*/

// Example:
let userFirstName = "Nikola";
let userLastName = "Ristoski";

let fullName = userFirstName + " " + userLastName; // GOOD: meaningfull concatenation
console.log("fullName", fullName);

let greeting = "Hello, " + fullName + "!"; // GOOD: meaningful concatonation
console.log("greeting:", greeting);

// Template Literals
/*
- Templete literals are an alternative way to concatenate string in JavaScript.
- They allow you to embed expressions inside a string using ${}
*/

// Example:
let givenName = "Dalia";
let lastName = "Alavi";

let userFullName = `${givenName} ${lastName}`;
console.log("userFullName:", userFullName);

let city = "Struga";
let country = "Macedonia";
let locationInfo = `I live in ${city}, ${country}.`;
console.log("locationInfo:", locationInfo);
