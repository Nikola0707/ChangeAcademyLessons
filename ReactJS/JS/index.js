// JavaScript Fundamentals: Essential Concepts for learning ReactJS

// 1. Variables in JavaScript
var age = 30;
console.log(age);

let firstName = "Nikola";
console.log(firstName);
firstName = "Joco";
console.log(firstName);

const lastName = "Ristoski";
console.log(lastName);
// lastName = "Alksov";

// 2. Functions and Arrow functions in JS

// Function declaration
function multiply(a, b) {
  const value = a * b;
  console.log("value inside", value);
  return value;
}

console.log(multiply(2, 3));

// Arrow Functions
let sum = (num1, num2) => num1 + num2;
console.log(sum(2, 2));

let divide = (num1, num2) => {
  return num1 / num2;
};
console.log(divide(10, 2));

// 3. JavaScript Objects

let person = {
  fullName: "Nikola Ristoski",
  age: 32,
  profession: "Front end developer",
  location: "Struga",
  country: "Macedonia",
  isWebdeveloper: true,
  skills: ["html", "css", "JavaScript", "TypeScript", "ReactJS"],
};

console.log(person);
console.log(person.fullName);
console.log(person.isWebdeveloper);

// 4. JavaScript array Destructuring
const vehicles = ["BMW", "AUDI", "SKODA"];
const [one, two, three] = vehicles;
console.log("one is:", one);
console.log("two is:", two);
console.log("three is:", three);

// JavaScript object Destructuring
let employee = [
  {
    fullName: "Nikola Ristoski",
    age: 32,
    profession: "Front end developer",
    location: "Struga",
    country: "Macedonia",
    isWebdeveloper: true,
    skills: ["html", "css", "JavaScript", "TypeScript", "ReactJS"],
  },
];

let {
  fullName,
  age: age2,
  location,
  country,
  profession,
  isWebdeveloper,
  skills,
} = employee;

console.log("age2", age2);
console.log(`Our employee ${fullName}, is from ${location}, ${country}`);

// 5. Arrays Methods in JavaScript
// Examle Array
const numbersArray = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry", "avocado"];

let firstNum = numbersArray[0] * 2;
console.log("firstNumb", firstNum);
let secondNum = numbersArray[1] * 2;
console.log("secondNum", secondNum);

// .map()
// Creates a new array with  the results of calling a provided function on every element in the calling array
//const numbersArray = [1, 2, 3, 4, 5];
const doubled = numbersArray.map((number, index) => {
  console.log("value", number, "index", index);
  return number * 2;
});
console.log("doubled", doubled);

// .filter()
// Creates a neww array with all elements that pass the condition

const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
console.log("evenNumbers", evenNumbers);

// .reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const sumResult = [1, 2, 3, 4, 5].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("sumResult", sumResult);

/*
Step by Step Execution

Initial state: accumulator = 0

First iteration:
accumulator = 0 + currentValue = 1
new accumulator value is 1.

Second iteration:
accumulator = 1 + currentValue 2 = 3
new accumulator value 3

*/

// .find()
// Returns the value of the first element in the provided array that satisfies the provided condition
//  [1, 2,2,2,2,2,2,2 3, 4, 5]
const findEven = [1, 1, 1, 1, 1, 1, 5, 7, 5, 4, 2, 8, 10, 12].find(
  (number, index) => {
    console.log("number", number, "index", index);
    return number % 2 === 0;
  }
);
console.log("firstEven", findEven);

// .includes()
// Determines whether an array includes a certain value among its entries, returning true or false

// const fruits = ["apple", "banana", "cherry", "avocado"];

const hasBanana = fruits.includes("banana");
console.log("hasBanana", hasBanana); // true

const hasAnanas = fruits.includes("ananas");
console.log("hasAnanas", hasAnanas); // false

// forEach()
numbersArray.forEach((number) => console.log(number * 3));

//some()
const hasOdd = numbersArray.some((number) => number % 2 !== 0);
console.log("hasOdd", hasOdd);

//.every()
const allPositive = numbersArray.every((number) => number > 0);
console.log("allPositive", allPositive);

// Rest and Spread operaton in JS

// Rest Operator

// Function that takes multiple arguments and puts them into an array
function sumMultiple(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log("sumMultiple", sumMultiple(1, 2, 3, 4, 5, 6, 7, 12312, 3123));
console.log("sumMultiple", sumMultiple(1, 2));
console.log("sumMultiple", sumMultiple(1));

// Rest operator in array destructuring
const [a, b, c, ...rest] = [1, 2, 3, 4, 5, 6, 7, 12312, 3123];
console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("rest", rest);

// Spread operator in object literals
const car = {
  model: "Honda",
  color: "red",
  year: 2008,
};

const updatedCar = {
  ...car,
  km: 100000,
};
const updatedCar2 = {
  ...car,
  ...updatedCar,
  model: "Hyundai",
  // km: 100000,
};
console.log("car", car);
console.log("updatedCar", updatedCar);
console.log("updatedCar2", updatedCar2);

// 7. Callback functions in JS
// In JS a callback function is a function that is passed as an argument to another function and is intended to be executed after some spefific tas or event has occured.
//Example:

function greeting(name, callbackFunction) {
  console.log(`Hello ${name}!!!`);
  callbackFunction(name);
}

// callback function
function sayGoodbye(name) {
  console.log(`Goodbye ${name}!!!`);
}

greeting("Nikola", sayGoodbye);

function sayHelloWorldTo(name) {
  console.log(`Hello World to ${name}!!!`);
}

greeting("Cvetanka", sayHelloWorldTo);
