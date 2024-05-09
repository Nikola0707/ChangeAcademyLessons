// JSON (JavaScript object Notation)

// JSON EXAMPLE
/*
const person = {
    "name": 'John Doe',
    "age": "30",
    "isStudent": "false",
    "hobbies": ["reading", "coding", "swimming"],
    "address": {
        "street": "123 Main St",
        "city": "Chicago",
        "zip": "12345"
    }
}
*/

// Syntax Rules:
/*
 - Data is an name/value pairs
 - Data is separated by commas
 - Curly braces hold object
 - Squere brackets hold arrays
*/

// Parsing and Stringifying
// Parsing: Converting JSON into a JavaScript object, using the JSON.parse() method
// Stringifying: Converting a JavaScript object into a JSON string, using the JSON.stringify()

// Parsing Example:
const jsonString = '{"name":"John", "age": 30, "city":"New York"}';
const parsedObj = JSON.parse(jsonString);
console.log("parsedObj", parsedObj);
console.log("parsedObj", parsedObj.name);

// Stringifying Example:
const objToBeStringifid = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonStringified = JSON.stringify(objToBeStringifid);
console.log("jsonStringified", jsonStringified);
