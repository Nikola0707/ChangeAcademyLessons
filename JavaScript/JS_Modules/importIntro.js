import { name, age, fullName, dob } from "./exportIntro.js";
import greeeting from "./defaultExport.js";
import { add, substract } from "./math.js";
import user from "./user.js";

console.log("name", name);
console.log("age", age);
console.log("fullName", fullName);
console.log("dob", dob);

console.log(greeeting(name));

console.log(add(5, 3));
console.log(substract(5, 3));

console.log("user", user);
console.log("user.age", user.age);
console.log("user.name", user.name);
console.log("user.city", user.city);
console.log("user.country", user.country);
console.log("user.lastName", user.lastName);
