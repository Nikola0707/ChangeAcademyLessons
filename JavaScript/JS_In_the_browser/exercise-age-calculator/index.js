const btnEl = document.getElementById("btn");
const birthdayEL = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// Function to calculate the age based on the provided birthday
function calculateAge() {
  const birthdayValue = birthdayEL.value;
  console.log("birthdayValue", birthdayValue.split("/"));
  //   Split the input value into day, month and year
  const [day, month, year] = birthdayValue.split("/");
  //   Create a new Date object with the parsed date components
  const birthdayDate = new Date(`${year}-${month}-${day}`);
  console.log("birthdayDate", birthdayDate);

  //   Check if the parsed date is valid
  if (isNaN(birthdayDate.getTime())) {
    // If the date is not valid, display an alert to the user
    resultEl.innerText = "Please enter a valid date in the format dd/mm/yyyy";
  } else {
    //  if the date is valid, caluculate the age details
    const ageDetails = /* create getAge function */ "to be continue...";
  }
}

btnEl.addEventListener("click", calculateAge);
