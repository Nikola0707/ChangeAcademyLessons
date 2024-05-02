let input = document.getElementById("userInput");
let button = document.getElementById("enter");
let ulList = document.getElementById("shopping-list");

// console.log("ulList", ulList);

// Adding an event listener to the button element
// button.addEventListener("click", () => console.log("Click is working!"));

// When we click eneter a new item is added to our shopping list
// button.addEventListener("click", () => {
//   // Create a new list item element
//   let li = document.createElement("li");
//   //   Create a text node containing the text "new element"
//   li.appendChild(document.createTextNode("new element"));
//   ulList.appendChild(li);
// });

// Lets see now how we can read the value of the input field, and add that value in our list

// button.addEventListener("click", () => {
//   if (input.value.length === 0) return;
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ulList.appendChild(li);
//   input.value = "";
// });

// input.addEventListener("keydown", (event) => {
//   //   console.log("event", event);
//   if (input.value.length > 0 && event.key === "Enter") {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ulList.appendChild(li);
//     input.value = "";
//   }
// });

// Refactoring - DRY(Don't repeat yourself) is a principle of software develompent

function inputLength() {
  return input.value.length > 0;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ulList.appendChild(li);
  input.value = "";
}

function addListItemAfterClick() {
  if (inputLength()) {
    createListElement();
  }
}

function addListItemAfterKeypress(event) {
  if (inputLength() && event.key === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListItemAfterClick);
input.addEventListener("keydown", (event) => addListItemAfterKeypress(event));
