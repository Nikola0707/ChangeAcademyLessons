// How the JavaScript works?

// JavaScript is a single-threaded, meaning it can only execute one operation at a time.
// JavaScript is a Synchronous programming langauge
// Asynchronous programming allows more things to be done simultaneously and is key concept in JS, enabling developers to perform tasks like data fetching,
// without blocking executation of other code.

// Synchronous Function
function synchronousExample() {
  console.log("Start Sync");
  for (let i = 0; i < 1000; i++) {
    console.log("i", i);
  }
  console.log("End Sync");
}
// synchronousExample();

// Asynchronous Function
function asynchronousExample() {
  console.log("Start Async");
  setTimeout(() => {
    console.log("Timeout Completed Async");
  }, 2000);
  console.log("End Async");
}
// asynchronousExample();
// console.log("After the asynchronousExample");

//==================================================
// Callback
//==================================================

// What is a Callback Function?

// A callback function is a function that is passed into another function as an argument and is executed after some operation has been completed.

// Example 1
function greet(name, callbackFunction) {
  console.log("Hello" + " " + name);
  callbackFunction();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// greet("Nikola", sayGoodbye);

// Example 2
// Real world examole: Fetching Data from an API (Application programming interface)

function fetchWeather(location, callbackFunction) {
  // Simulate an API Call
  setTimeout(() => {
    const weatherData = {
      location: location,
      temperature: 25,
      condition: "Sunny",
    };
    callbackFunction(weatherData);
  }, 2000);
}

function displayWeather(data) {
  console.log(
    `The weather in ${data.location} is ${data.condition} with a temperature of ${data.temperature}C`
  );
}
fetchWeather("Skopje", displayWeather);

// Issues with Callbacks - Callback hell

// Example:
function startDay(name) {
  greet(name, () => {
    greet("John", () => {
      greet("Doe", () => {
        sayGoodbye();
        greet("Alice", () => {
          sayGoodbye();
          greet("Ana", () => {
            sayGoodbye();
            console.log("All greetings done!");
          });
        });
      });
    });
  });
}
startDay("Nikola");
