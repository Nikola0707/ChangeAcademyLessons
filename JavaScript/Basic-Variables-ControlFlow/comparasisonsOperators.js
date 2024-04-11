// Comparison Operators

// Equal to (==): Checks if two values are equal. It corects  the values to the same type before comparing.
console.log(5 == 5); //Output: true
console.log("9" == 9); //Output: true

// Strict Equal to (===): Checks if two VALUES are EQUAL and of the SAME TYPE. It does not perform type coercion.
console.log(5 === 5); //Output: true
console.log("9" === 9); //Output: false
console.log("mario" === "marioo"); //Output: false
console.log("stefan" === "stefan"); //Output: true

// Not Equal to (!=):Checks if two values are not equal. It corects  the values to the same type before comparing.
console.log(5 != 10); //Output: true
console.log("5" != 5); //Output: false

// Strict Not Equal To (!==): Checks if two VALUES are not EQUAL and or not of the SAME TYPE. It does not perform type coercion.
console.log(3 !== "3"); //Output: true
console.log(4 !== 4); //Output: false

// Greater than (>); Checks if the left operand is greater then the right operand.
console.log(10 > 5); // Output: true
console.log(5 > 19); // Output: false

// Less than (<): Checks if the left operand is less then the right operand
console.log(5 < 10); //Output: true
console.log(10 < 5); // Output: false

// Greater than or equal to (>=): Checks if the left operand is grater then or equal to the right operand
console.log(10 >= 5); //Output: true
console.log(5 >= 5); //Output: true

// Less than or equal to (<=): Checks if the left operand is less than or equal to the righ operand
console.log(10 <= 5); //Output: false
console.log(5 <= 5); //Output: true

// Example 1:
// Write a comparison to check if a given number is even
let number = 12;
let isTheNumberEven = number % 2 === 0;
console.log("isTheNumberEven", isTheNumberEven);

// Example 2:
// Write a comparison to check if a person is eligible to vote
let age = 18;
let isEligible = age >= 18;
console.log("isEligible", isEligible);
