let str = "Hello";
// Indexing
// H  e  l  l  o
// 0  1  2  3  4

let firstName = "Nikola";
// 1. length: Returns the lenhth of the string
console.log("Lenghth: ", firstName.length);

// 2. charAt(index): Returns the character at the specified index.
console.log("charAt: ", firstName.charAt(4));

// 3. concat(str1, str2, ...): Concatenate two or more strings.
let str1 = "Hello";
let str2 = "World";
console.log("concat: ", str1.concat(" ", str2));

// 4. toUpperCase(): Converts the string to uppercase.
console.log("toUppercase()", firstName.toUpperCase());

// 5. toLowerCase(): Converts the string to lowercase
console.log("toLowerCase()", firstName.toLowerCase());

// 6. indexOf(searchValue, startIndex): Returns the index of the first occurrence of the specified value withing the string. Starting from the fiven index
let str3 = "Hello World";
console.log("indexOf(o)", str3.indexOf("o"));
console.log("indexOf(o)", str3.indexOf("o", 5));

// 7. slice(startIndex, endIndex): Extracts a section of the string and returns it as a new string.
let str4 = "Hello World";
console.log("slice()", str4.slice(6, 11));

// 8. replace(searchValue, replaceValue): Replaces a specified value with another value in the string.
let str5 = "Hello World";
console.log("replace()", str5.replace("World", "Universe"));

// 9. Includes
let password = "nikolaChangeAcademy*897&%$";
console.log("includes", password.includes("*897&%$"));
console.log("includes", password.includes("*897&%das$"));

// 11. Trim
let lastName = "              Ristoski          ";
console.log("Without trim", lastName);
console.log("Using trim", lastName.trim());

// 12. TrimStart
console.log("Using trimStart ", lastName.trimStart());
// 13. TrimEnd
console.log("Using trimStart ", lastName.trimEnd());
