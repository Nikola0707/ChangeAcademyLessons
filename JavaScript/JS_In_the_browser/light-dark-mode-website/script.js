// Select the toggle switch element
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Get the navigation bar
const nav = document.getElementById("nav");

// Get the toggle icon element
const toggleIcon = document.getElementById("toggle-icon");

// Get all images by their IDs
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

// Get the text box element by its ID
const textBox = document.getElementById("text-box");

// Function to set the source of the images base on color (dark/light)
function imageMode(color) {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
}

// Function to apply dark mode styles
function darkMode() {
  // Change the backround color of the navigation bar and text box
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  // Change the text and icon of the toggle button
  console.log("toggleIcon", toggleIcon);
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  // Execute the imageMode function with 'dark' parameter
  imageMode("dark");
}

// Function to apply light mode styles

function lightMode() {
  // Change the backround color of the navigation bar and text box
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  text.style.backgroundColor = "rgb(0 0 0  / 50%)";
  // Change the text and icon of the toggle button
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  // Execute the imageMode function with 'ligth' parameter
  imageMode("light");
}

// Function to switch between dark and light mode themes dynamically
function switchTheme(event) {
  // Checks if the toggle switch is checked (true) or unchecked (false)
  if (event.target.checked) {
    // Set the theme to dark mode
    document.documentElement.setAttribute("data-theme", "dark");
    // Stores the theme preference in the browser's local storage
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    // Set the theme to light mode
    document.documentElement.setAttribute("data-theme", "light");
    // Stores the theme preference in the browser's local storage
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event listener to the toggle switch to detect changes
toggleSwitch.addEventListener("change", switchTheme);

// Checks if there is a saved theme preference in local storage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  // Set the theme according to the saved preference
  document.documentElement.setAttribute("data-theme", currentTheme);
  //   Check the toggle switch if the saved theme is dark mode
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    // Applies dark mode styles
    darkMode();
  }
}
