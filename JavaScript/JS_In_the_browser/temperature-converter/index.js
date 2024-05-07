// Get the input element from the HTML document by its ID
const inputElement = document.getElementById("input");
// Get the result element from the HTML document by its ID
const resultElement = document.getElementById("result");

// Declare variables to store the timeout IDs for resilt clearing
// These variables will be used to mange the timeouts for clearing the result and resetting the input
let resultTime;

// Define a function to update the result based on the input value
function updateResults() {
  // Calculate the temperature in Fahrenheit from the Celsius input and update the result element.
  //   The unary plus operator (+) converts the string value from the input to a number for calculation
  resultElement.innerText = ((+inputElement.value * 9) / 5 + 32).toFixed(2);

  //Clear the previous timeout for result clearing to avoid clearing it while the user is still typing
  clearTimeout(resultTime);

  //  set a new timeout to clear the result and reset the input after a specified duration.
  resultTime = setTimeout(() => {
    resultElement.innerText = "";
    inputElement.value = "";
  }, 1000);
}

inputElement.addEventListener("input", updateResults);
