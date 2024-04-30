// Define an array of todos, each todo having an id, text, and completion status
// Define a function to sort todos based on their completion status
// Define a function to delete a todo from the list based on its id
// Define a function to get todos that are not completed
// Define a function to add a new todo to the list
// Define a function to update the properties of a todo

// SOLUTION

// Define an array of todos, each todo having an id, text, and completion status
const todos = [
  {
    id: 1,
    text: "order cat food",
    completed: false,
  },
  {
    id: 2,
    text: "Clean kitchen",
    completed: true,
  },
  {
    id: 3,
    text: "Buy Food",
    completed: true,
  },
  {
    id: 4,
    text: "Do work",
    completed: false,
  },
  {
    id: 5,
    text: "Exercise",
    completed: true,
  },
  {
    id: 6,
    text: "Read a book",
    completed: false,
  },
  {
    id: 7,
    text: "Write a journal entry",
    completed: true,
  },
  {
    id: 8,
    text: "Go for a walk",
    completed: false,
  },
  {
    id: 9,
    text: "Call a friend",
    completed: true,
  },
  {
    id: 10,
    text: "Do the laundary",
    completed: false,
  },
];

// Define a function to sort todos based on their completion status

const sortTodos = (array, completed) => {
  if (!array || completed) return "Pass array as argument or completed status";
  array.sort((a, b) => {
    if (completed) {
      if (a.completed && !b.completed) return -1; // Completed todos comes first
      if (!a.completed && b.completed) return 1; // incompleted todos come later
    } else {
      if (!a.completed && b.completed) return -1; // incompleted todos come first
      if (a.completed && !b.completed) return 1; // incompleted todos come later
    }
  });
};

// // Define a function to delete a todo from the list based on its id
const deleteTodo = (array, todoId) => {
  // Find the index of the todo with given id
  const index = array.findIndex(({ id }) => id === todoId);
  if (index !== -1) {
    todos.splice(index, 1);
  } else {
    console.log("Todo Not Found!");
  }
};

// Define a function to get todos that are not completed
const getIncompleteTodos = (todos) =>
  todos.filter(({ completed }) => !completed);

// Define a function to add a new todo to the list
const addTodo = (todos, newText) => {
  if (newText.trim() !== "") {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    todos.push({
      id: newId,
      text: newText,
      completed: false,
    });
  } else {
    console.log("Cannot add an empty todo");
  }
};

// Define a function to update the properties of a todo
const updateTodo = (todos, todoId, updates) => {
  // Find the todo with the given id
  const todo = todos.find(({ id }) => id === todoId);
  if (todo) {
    // Loop through each property in the updates
    for (let key in updates) {
      todo[key] = updates[key];
    }
  } else {
    console.log("Todo not found!");
  }
};

// ==============================================================================
// // Sorting completed todos first
// sortTodos(todos, true);
// console.log("completed TRUE todos first", todos);

// // Sorting not completed todos first
// sortTodos(todos, false);
// console.log("not completed TRUE todos first", todos);

// console.log("sortTodos();", sortTodos());

// // Delete a todo with id 2
// deleteTodo(todos, 2);
// console.log("Delete todos", todos);

// // Get Incompleted TODOS
// const incompletedTodos = getIncompleteTodos(todos);
// console.log("incompletedTodos", incompletedTodos);

// Add new todo
// addTodo(todos, "walk the dog");
// console.log("new todo", todos);

// Update todo
updateTodo(todos, 1, { id: 1, text: "ORDER cat food", completed: true });
// console.log("updateTodo", todos);
