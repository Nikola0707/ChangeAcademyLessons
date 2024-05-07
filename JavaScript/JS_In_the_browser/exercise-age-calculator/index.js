const btnEl = document.getElementById("btn");
const birthdayEL = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// Function to calculate the age based on the provided birthday
function calculateAge() {
  const birthdayValue = birthdayEL.value;
  console.log("birthdayValue split", birthdayValue.split("/"));
  //   Split the input value into day, month and year
  const [day, month, year] = birthdayValue.split("/");
  //['11', '05', '1222']

  //   Create a new Date object with the parsed date components
  const birthdayDate = new Date(`${year}-${month}-${day}`);
  console.log("birthdayDate", birthdayDate);

  // Check if the parsed date is valid
  if (isNaN(birthdayDate.getTime())) {
    // If the date is not valid, display an alert to the user
    resultEl.innerText = "Please enter a valid date in the format dd/mm/yyyy";
    resultEl.classList.add("error");
  } else {
    //  if the date is valid, caluculate the age details
    resultEl.classList.remove("error");
    // const ageDetails = getAge(birthdayDate);

    // resultEl.innerHTML = `You are ${ageDetails.years} years, ${ageDetails.months} months, ${ageDetails.days} days, ${ageDetails.hours} hours, ${ageDetails.minutes} minutes and ${ageDetails.seconds} seconds old!`;

    const { years, months, days, hours, minutes, seconds } =
      getAge(birthdayDate);

    resultEl.innerHTML = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds old!`;
  }
}

// Function to calculate the age details
function getAge(birthdayDate) {
  // Get the current date
  const currentDate = new Date();

  // Initialize an empty object to store the age details
  let age = {};

  // Caluculate the difference in milliseconds between the current date and the birthday date
  let diff = Math.abs(currentDate - birthdayDate);

  // Calculate the age in years by dividing the difference in milliseconds
  age.years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  // Reduce the difference by the number of milliseconds equivalent to the calculated years
  diff -= age.years * (1000 * 60 * 60 * 24 * 365.25);

  // Calculate the in months by dividing the remaining difference in milliseconds.
  age.months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));

  // Reduce the difference by the number of milliseconds equivalent to the calculated months
  diff -= age.months * (1000 * 60 * 60 * 24 * 30.44);

  age.days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= age.days * (1000 * 60 * 60 * 24);

  age.hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= age.hours * (1000 * 60 * 60);

  age.minutes = Math.floor(diff / (1000 * 60));
  diff -= age.minutes * (1000 * 60);

  age.seconds = Math.floor(diff / 1000);
  console.log("age", age);
  return age;
}

btnEl.addEventListener("click", calculateAge);
