// Get references to the timer element, start, stop and reset buttons in the HTML
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Initialize variables to keep track of time

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Function to start the timer
function startTimer() {
  // Store the current time when the timer is started
  startTime = Date.now() - elapsedTime;

  // Update the timer every 10 milliseconds
  timerInterval = setInterval(() => {
    // Calculate the elapsed time
    elapsedTime = Date.now() - startTime;
    // Update the timer display with the formatted time
    timerElement.textContent = formatTime(elapsedTime);
  }, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
}

// Function to format the elapsed time
function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  //   return (
  //     `${formatTimeComponent(hours)}:` +
  //     `${formatTimeComponent(minutes)}:` +
  //     `${formatTimeComponent(seconds)}:` +
  //     `${formatTimeComponent(milliseconds)}`
  //   );

  return `
    ${formatTimeComponent(hours)}:${formatTimeComponent(
    minutes
  )}:${formatTimeComponent(seconds)}:${formatTimeComponent(milliseconds)}`;
}

function formatTimeComponent(timeComponent) {
  return timeComponent.toString().padStart(2, "0");
}

// Function to stop the timer
function stopTimer() {
  // Clear the interval to stop updating the timer
  clearInterval(timerInterval);

  //Enable the start button and disable the stop button
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Function resetTimer
function resetTimer() {
  // Clear the interval to stop updating the timer
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerElement.textContent = "00:00:00";

  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener("click", startTimer);

stopButton.addEventListener("click", stopTimer);

resetButton.addEventListener("click", resetTimer);
