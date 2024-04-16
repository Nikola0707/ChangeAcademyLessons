// var - GLOBAL SCOPE - RECOMENDED NOT TO USE
var isAdmin = true; // Global scope variable
var firstName = "Nikola"; // Global scope variable
// var isAdmin = false;

if (isAdmin) {
  console.log("firsName", firstName);
  var lastName = "Ristoski"; // Global scope
}

console.log("lastName", lastName);

// let / const - BLOCK SCOPE - REcomended to use instead of var

let isTheUserAdmin = true; //Global scope variable
let userName = "Nikola"; //Global scope variable

if (isTheUserAdmin) {
  console.log("userName", userName);
  let userLastName = "Ristoski"; // local scope variable
  console.log("userLastName", userLastName);
}

// console.log("userLastName2", userLastName); Error userLastName is not defined

// Variable Shadowing

// Global scope variable
let count = 10;

if (count > 5) {
  let count = 20;
  console.log("Inner count variable", count); // 20
}
console.log("Outer count variable", count); // 10
