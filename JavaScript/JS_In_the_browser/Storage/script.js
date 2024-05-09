// LocalStorage and SessionStorage methods
/*
setItem() - takes a key-value pair and adds it to lacalStorage
getItem() - takes a key and returns the corresponding value
removeItem() - takse a key and removes the sorresponding key-value pair
clear() - clears localStorage (for the domain)
// 
*/

// const user = {
//   name: "Nikola Ristoski",
//   profession: "Software Engineer",
// };

// Session storage keeps data during the session, cleared when the tab or brwser is closed.
// Local Storage persists data even after the browser is closed and reopened

// Session Storage Example:
// sessionStorage.setItem("userData - [object Object]", user);
// sessionStorage.setItem("user", JSON.stringify(user));
// sessionStorage.setItem("example", "Hi!!!");

// const sessionUserData = sessionStorage.getItem("user");
// console.log("sessionUserData", sessionUserData);
// console.log("To Object", JSON.parse(sessionUserData));

const field = document.querySelector(".input");
const div = document.querySelector(".tasks");
const btn = document.querySelector(".add");

// Function to create a task element
function createTaskElement(value) {
  // Create a <div> element to contain the task and delete button
  const tasksField = document.createElement("div");
  //   Create a <p> element to display the task text
  const child = document.createElement("p");
  //   Create a <button> element for deleting the task
  const deleteBtn = document.createElement("button");
  //   Create a text node with the task value
  const text = document.createTextNode(value);
  //   Append the text node to the <p> element
  child.appendChild(text);
  //  Set the text content of the delete button to "Delete"
  deleteBtn.textContent = "Delete";
  //   Append the <p> element to the <div> container
  tasksField.appendChild(child);
  //   Append the delete button to the <div> container
  tasksField.appendChild(deleteBtn);

  //   Add event liostener to the delete button

  return tasksField;
}

// Function to initialize tasks from localStorage
function initTasksFromLocalStorage() {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const taskValue = localStorage.getItem(key);

      if (taskValue) {
        div.appendChild(createTaskElement(key));
      }
    }
  }
}

// Add event listener to the add button
btn.addEventListener("click", function () {
  //Get the trimmed value of the input field
  const taskValue = field.value.trim();
  //   Check if the task value is not empty
  if (taskValue !== "") {
    // Create a task element using the task value
    const taskElement = createTaskElement(taskValue);

    div.appendChild(taskElement);
    localStorage.setItem(taskValue, taskValue);
    field.value = "";
  }
});

window.addEventListener("load", initTasksFromLocalStorage);
