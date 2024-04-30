const getSinger = function () {
  return ["John", "Paul", "Jones"];
};

const singer = getSinger();
console.log(singer);
const singerFirstName = singer[0];
console.log("singerFirstName", singerFirstName);
const singerMiddleName = singer[1];
console.log("singerMiddleName", singerMiddleName);
const singerLastName = singer[2];
console.log("singerLastName", singerLastName);

// Let's rewrite the reveiving side using destructuring
const [singerFirstNameDest, singerMiddleNameDest, singerLastNameDest] =
  getSinger();

console.log("singerFirstNameDest", singerFirstNameDest);
console.log("singerMiddleNameDest", singerMiddleNameDest);
console.log("singerLastNameDest", singerLastNameDest);

// If we cared onlu about the first name and not the other details, we would gently ectract only the first name, like so:
const [singerFirstNameDestOne] = getSinger();
console.log("singerFirstNameDestOne", singerFirstNameDestOne);

// Spread Operator (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// [1,2,3,4,5,6]

const combinerdArray = [...arr1, ...arr2];
console.log("combinerdArray", combinerdArray);

// Copying arrays
const originalArray = [1, 2, 3, 4, 5, 6];
console.log("originalArray", originalArray);

// [1, 2, 3, 4, 5, 6]
originalArray.push(8);

const copiedArray = [...originalArray];
copiedArray.push(7);
console.log("copiedArray", copiedArray);

// Passing Arguments to Functions
function myFunction(a, b, c) {
  console.log("Function Arguments:", a, b, c);
}

const args = [1, 2, 3];
console.log("spread args", ...args);
myFunction(...args);

// REST Operator (...)

// function with variable arguments
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log("Sum of arguments: ", sum(1, 2, 3, 4, 5, 2));

// Ignoring some function arguments
function printDetails(name, ...details) {
  console.log("name", name);
  console.log("Additional Details", details.join(", "));
}

printDetails("John", "Age: 30", "Location: New York", "shoes size: 9");

// Object Destructuring
// Spread operator (...)

// Concatenating Objects
const obj1 = { foo: "bar" };
const obj2 = { baz: "qux" };

const combinedObject = { ...obj1, ...obj2 };
console.log("combinedObject", combinedObject);

// Destructuring an object, extracting properties "a" and "b", and collecting the rest into another object

// Example 1
const { a, b, ...remaining } = { a: 1, b: 2, c: 3, d: 4 };
console.log("Object a", a);
console.log("Object b", b);
console.log("remaining", remaining);

// Example 2
const person = {
  firstName: "John",
  age: 30,
  city: "New York",
};

const { firstName, age } = person;
console.log(firstName, age);

const personTwo = { name: "John", age: 30 };
const updatedPerson = { ...personTwo, city: "Struga" };
console.log("updatedPerson", updatedPerson);

// You can dynamically compute property names, in object literals, allowing for more flecibility when creating objects

const key = "age";
const value = 23;

const user = {
  [key]: value,
};
console.log("user", user);
