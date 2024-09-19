// console.log("Hello World - TypeScript");

// Number
// let age: number = 30;
// console.log("age", age);
// age = 'Nikola' Type 'String' is not aassignable to type number
// age = [12, 123, 1213]; Type 'number[]' is not assignable to type 'number'.

// String
// let firstName: string = "Jana";
// console.log("firstname", firstName);
// firstName = 99;Type 'number' is not assignable to type 'string'.
// console.log("firstname", firstName);Type 'number' is not assignable to type 'string'.

// Boolean
// let isActive: boolean = true;
// console.log("isActive", isActive);
// isActive = "false"; Type 'string' is not assignable to type 'boolean'.

// Array
// let numbers: number;
// numbers = ["1", "2", "hello"];Type 'string[]' is not assignable to type 'number'.

// String
// let names = ["Kana", "Cvetanka", "Mario", "Angela"];
// names = ["Stefan", "Valentina", 56]; Type 'number' is not assignable to type 'string'.

// Tuple
// let person: [string, number] = ["Nikola", 23];
// console.log("person", person);
// person = [30, "Nikola"];Type 'string' is not assignable to type 'number'. Type 'number' is not assignable to type 'string'.

// Enum
// Defines an 'enum' called 'Color' with specific named values.
// enum Color {
//   Red = "RED",
//   Green = "GREEN",
//   Blue = "BLUE",
// }

// let favouriteColor: Color = Color.Red;
// console.log("favoriteColor", favouriteColor);
// favouriteColor = "Yellow";Type '"Yellow"' is not assignable to type 'Color'

// Interface - An interface defines a contract for what properties an objec should have.
interface Person {
  email: string;
  name: string;
  age: number;
  hobbies: string[];
  isEmployed: boolean;
}

// let personOne: Person = {
//   name: "Nikola",
//   age: 32,
//   hobbies: ["reading", "teaching", "programming", "coding"],
//   isEmployed: true,
//   email: "nikola@example.com",
// };
// console.log("personOne", personOne);

// Function
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
// console.log(greet("Nikola"));

// Function with optional parameter
// function multiply(num1: number, num2?: number): number {
//   if (num2 === undefined) {
//     return num1 * 2; // If 'num2' is not provided, return "num1" multiplied by 2
//   } else {
//     return num1 * num2; // If 'num1' and 'num2' are provided
//   }
// }
// console.log(multiply(5));
// console.log(multiply(5, 3));

//Union type
//Defines a variable 'value' that can be either a 'number' or a 'string'

// let value: number | string;
// value = 42;
// console.log("value", value);
// value = "Nikola Ristoski";
// console.log("value", value);

// value = true; Type 'boolean' is not assignable to type 'string | number'

// Intersection Type
// interface Address {
// //   street: string;
// //   city: string;
// //   socialSecurityNumber?: number; // Optional
// // }

// // //Combines the "Person" and "Address" interfaces into a new type "PersonWithAddress"
// // type PersonWithAddress = Person & Address;

// // let personTwo: PersonWithAddress = {
// //   age: 30,
// //   city: "Struga",
// //   email: "nikola@example.com",
// //   hobbies: ["reading", "teaching", "programming", "coding"],
// //   isEmployed: false,
// //   name: "Nikola",
// //   street: "23 Oktomvri",
// // };

// Any Type
// let unknownValue: any = "This is a string";
// unknownValue = 21312;
// unknownValue = false;
// unknownValue = {
//   name: "Nikola",
//   age: "30",
//   street: "123 Main St.",
//   city: "Wonderland",
// };
