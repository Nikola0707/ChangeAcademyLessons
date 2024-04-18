// Object Data Type

// Example of user object representing a user profile.

let user = {
  firstName: "Nikola",
  lastName: "Ristoski",
  age: 31,
  country: "Macedonia",
  occupation: "Software Engineer",
  email: "nikola.example@gmail.com",
};

// console.log("user", typeof user);
console.log("user", user);

// printing only single property of an object
console.log(user.firstName);

// Printing object propertis using template strings
let userIntro = `${user.firstName} ${user.lastName} is ${user.age} years old and is from ${user.country}. His occupation is ${user.occupation} and his email address is ${user.email}`;
console.log("userIntro: ", userIntro);

// We can also change object properties value
user.email = "ristoski.example@gmail.com";

let userIntro2 = `${user.firstName} ${user.lastName} is ${user.age} years old and is from ${user.country}. His occupation is ${user.occupation} and his email address is ${user.email}`;
console.log("userIntro2: ", userIntro2);

// Adding data to empty object
let car = {};
console.log("car", car);
// Adding properties to the car object
car.make = "Toyota";
car.model = "Camry";
car.year = 2021;
car.color = "red";
console.log("car", car);

console.log(car.make);
console.log(car["year"]);
