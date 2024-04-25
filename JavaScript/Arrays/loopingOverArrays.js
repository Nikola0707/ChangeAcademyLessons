const todos = [
  "Finish homework",
  "Buy groceries",
  "Walk the dog",
  "Write code",
  "Exercise",
];

// forEach() method
// array.forEach(callback function)

// Example 1
const example1 = todos.forEach(function (item, index) {
  console.log("Item", item);
  console.log("Index", index);
});
console.log("example1", example1);

// Example 2
const example2 = todos.forEach((item, index) => {
  console.log("Item", item);
  console.log("Index", index);
});
console.log("example2", example2);

// Foor loop
/*
for(initialization; condition; increment/decrement){
    Code block to be executed
}
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// looping over the todos array
for (let k = 0; k < todos.length; k++) {
  console.log("Todo item: ", todos[k]);
  console.log("Index", k);
}
