// Declaring variable using var

var max = 100;
console.log("max", max);

// Redefining using var
// It's poor programming pratice to redefine a variable in the same scope as that often leads to errors in code.
var max = 200;
console.log("max2", max);

// Declaring variable using let
// NO REDEFINITION

let firstName = "Nikola";
console.log("firstName", firstName);

// let firstName = "Stefan";
// console.log("firstName", firstName);

firstName = "Stefan";
console.log("firstName", firstName);

// Declaring variable using const
// The const keyword is used to declare variables that cannot be reassigned a new value once they have been initialized.
const userName = "Nikola";
console.log("userName", userName);

// userName = "Mario";

/*
Rules related to variable names
    1. DO NOT USE VAR!!!
    2. You can't define a variable more then once with the same name.
    3. Variables names must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($). They cannot begin with a number.
*/

// Valid variable name
let name = "Cvetanka";
let _age = 31;
let $salary = "$3500";
let user1 = "Angela * 2";
let camelCaseVariable = "camel case example"; // RECOMENDED NAMING

// Invalid variable names

// let 1stName = "Alex" => Invalid: starts with a number
// let let = 'Variable' => Invalid: reserved keyword used as variable name
// let first-name = "James" => Invalid: hyphens are not allowed in variable names
