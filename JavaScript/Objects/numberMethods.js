// 1. toFixed: Returns a string representation of a number with a specified number of digits after the decimal point.
let num = 10.12345467;
let fixedNum = num.toFixed(2);
console.log("toFixed(2)", fixedNum, typeof fixedNum);

// 2. parseInt(string): Parses a string argument and returns an integer.
let str = "123";
let parsedNum = parseInt(str);
console.log("parseInt(str)", parsedNum, typeof parsedNum);

// 3. parseFloat(string): Parses a string argument and returns a floating point number.
let floatStr = "3.14";
let parsedFloat = parseFloat(floatStr);
console.log("parseFlaot(string)", parsedFloat, typeof parsedFloat);

// 4. isNaN(value): Check if a value is NaN (Not-a-Number)
// Returns true if the value is NaN, otherwise false.
let resultNan = isNaN(5);
console.log("isNaN(value)", resultNan);
let resultNan2 = isNaN("Hello");
console.log("isNaN(value)", resultNan2);

// 5. round: Returns the valuf of number rounded to the nearest integer
let roundNum = Math.round(3.5);
console.log("Math.round(value)", roundNum);

// 6. floor: Returns the largest integer less than or equal to a given number.
// This method effecively rounds down a number to the nearest integer.

let floorNum = Math.floor(3.9);
console.log("Math.floor(value)", floorNum);

// 7. ceil: Returns the smallest integer grater than or equal to a given number
// This method effectively rounds up a number to the nearest integer.
let ceilNum = Math.ceil(3.1);
console.log("Math.ceil(value)", ceilNum);
