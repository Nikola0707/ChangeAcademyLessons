// Undefined and null Data Type

let firstName = "Nikola";
console.log("firstName", firstName);

let userName;
console.log("userName", userName);

console.log(userName === undefined);
console.log(userName !== undefined);

let setUndefinedValue = undefined; // IS NOT RECOMENDED
console.log("setUndefinedValue", setUndefinedValue);

function doSomething() {
  //   return 1 + 1;
  // No return statement
}
console.log(doSomething());

// Null represents absence of value.
let lastName = null;

console.log("lastName", lastName);
console.log("lastName", lastName === null);
