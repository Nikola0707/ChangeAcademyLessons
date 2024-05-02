// DOM SELECTORS

// getElementsByTagName: Returns a live HTMLCollection of elements with the specified tag name.
const listItems = document.getElementsByTagName("li");
console.log("getElementsByTagName", listItems);

// getElementsByClassName: Returns a live HTMLCollection of elements with the specified class name.
const completedItems = document.getElementsByClassName("completed");
console.log("completedItems", completedItems);

// getElementById: Returns the elmen that has the specified ID
const title = document.getElementById("shopping-list");
console.log("getElementById", title);

// querySelector: Returns the first element that matches a specified element in the document.
const firstItem = document.querySelector("li");
console.log("querySelector", firstItem);

// querySelectorAll: Returns a static NodeList representing a list of the documents elements that match the specified group of selectors
const allItems = document.querySelectorAll("li");
console.log("querySelectorAll", allItems);

// getAttribute: Returns the value of a specified attribute on the element
const firstListItem = document.querySelector("li");
const attribute = firstListItem.getAttribute("class");
console.log("getAttribute", attribute);

const allListItem = document.querySelectorAll("li");
console.log("allListItem", allListItem);

const allListItemAttribute = [...allListItem].find((element) =>
  element.hasAttribute("class")
);
console.log("allListItemAttribute", allListItemAttribute);

//SetAttribute: Sets the value of an attribute on the element
const firstListItemSetAttribute = document.querySelector("li");
firstListItemSetAttribute.setAttribute("class", "text-red");
console.log(
  "firstListItemSetAttribute",
  firstListItemSetAttribute.getAttribute("class")
);

// Changing Styles
// style.{property}: Allow direct manipulation of the inline css style of an element
const ulList = document.querySelector("ul");
ulList.style.color = "blue";

// classList: Provides methods to add, remove and toggle css classes on an element
const firstListItemClassList = document.querySelector("li");
firstListItemClassList.classList.add("highlight");
firstListItemClassList.classList.remove("highlight");
firstListItemClassList.classList.toggle("highlight");

// innerHTML: Allows setting or getting the HTML contnet of an element
const titleInnerHTML = document.getElementById("shopping-list");
// Lets remove all list items and add Tea an Butter
titleInnerHTML.innerHTML = "<li>Tea</li> <li>Butter</li>";

// parentElement: Returns the paren elemen of the specified element.
const getTheparentElementOfLi = document.querySelector("li").parentElement;
console.log("getTheparentElementOfLi", getTheparentElementOfLi);

// children: Returns a live HTMLCollection containing all child elements of the specified element.
const children = getTheparentElementOfLi.children;
console.log("children", children);
