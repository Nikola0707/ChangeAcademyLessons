// Get the button element with the id "calulate"
const calulateButton = document.getElementById("calulate");

// Get the input element for bill amount by id "bill"
const billInput = document.getElementById("bill");

// Get the input element for tip percentage by id "tip"
const tipInput = document.getElementById("tip");

// Get the input element for number of people
const peopleInput = document.getElementById("people");

// Get the span element where the tip per person will be displayed
const tipPerPersonSpan = document.getElementById("tipPerPerson");

// Get the span element where the total per person will be displayed
const totalPerPersonSpan = document.getElementById("totalPerPerson");

// Define a function to calculate the tip and total per person
function calculateTotal() {
  // Parse the value of bill input field as floating point number
  const billAmount = parseFloat(billInput.value);

  // Parse the value of tip input field as a floating point number
  const tipPercentage = parseFloat(tipInput.value);

  // Parse the value of number of people input field as a floating point number
  const numberOfPeople = parseFloat(peopleInput.value);

  // Check if any of the input values are not valid numbers
  if (isNaN(billAmount) || isNaN(tipPercentage || isNaN(numberOfPeople))) {
    // If any input value is not valid, display a message in the tipPerPersonSpan and clear totalPerPersonSpan
    tipPerPersonSpan.innerText = "Please enter valid numbers";
    totalPerPersonSpan.innerText = "";
    return; // Exit the function
  }

  // Check if any input value is not possitive
  if (billAmount <= 0 || tipPercentage <= 0 || numberOfPeople <= 0) {
    // If any input value is not positive,  display a message in the tipPerPersonSpan anc clear totalPerPersonSpan
    tipPerPersonSpan.innerText = "Please enter positive numbers.";
    totalPerPersonSpan.innerText = "";
    return; // Exit the function
  }
  //   Calculate the tip amount per person
  const tipPerPerson = (billAmount * tipPercentage) / 100 / numberOfPeople;
  // console.log('tipPerPerson',tipPerPerson)

  // Calculate the total amount per person including the tip
  const totalPerPerson =
    (billAmount + (billAmount + tipPercentage) / 100) / numberOfPeople;
  //   console.log("totalPerPerson", totalPerPerson);

  // Display the tip amount per person in the tipPerPersonSpan with 2 decimal places
  tipPerPersonSpan.innerText = `$${tipPerPerson.toFixed(2)}`;
  // Display the total amount per person in the totalPerPersonSpan with 2 decimal places
  totalPerPersonSpan.innerText = `$${totalPerPerson.toFixed(2)}`;
}

calulateButton.addEventListener("click", calculateTotal);
