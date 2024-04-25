const todos = [
  "Finish homework",
  "Buy groceries",
  "Walk the dog",
  "Write code",
  "Exercise",
];

console.log("todos", todos);

// // We'll use the push method to add a new item to the end of the todos array.
todos.push("Workout");
console.log("Add a new todo: ", todos);

// // // Updating an existing item in the array using array indexing
todos[0] = "Complete homework";
console.log("Update the first todo: ", todos);

// // Remove item form the array by its index
const indexToRemove = 3;
todos.splice(indexToRemove, 1);
console.log("indexToRemove", todos);

// // Replacing an item in the array using the SPLICE method
const indexToReplace = 3;
todos.splice(indexToReplace, 1, "Go for a run");
console.log("todos update", todos);

// // Remove the last todo item from the array
todos.splice(-1, 1);
console.log("remove the last item: ", todos);

// Add a new todo item to the beggining od the array
todos.unshift("Start coding project");
console.log("unshift", todos);

// Removing the first item from the array using the shift method
todos.shift();
console.log("Removed the first todo", todos);

// Removing the last item from the array using the pop method
todos.pop();
console.log("Removed the last todo", todos);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log("Slice method", animals.slice(1, 4));
