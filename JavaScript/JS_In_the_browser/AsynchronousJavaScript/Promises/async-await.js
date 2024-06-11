// Async/Await
// Async/Await allows you to write async code that log sync, making it easier to read and maintain.
// It is build on top of promises and provides a cleaner syndax for working with async operations.

// Example
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 3000);
  });
}

async function displayData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
}

// displayData();

async function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("An error occurred!");
    }, 2000);
  });
}

async function displayDataWithErrorHandling() {
  try {
    const data = await fetchDataWithError();
    console.log("Resolved", data);
  } catch (error) {
    console.error("Error", error);
  }
}
displayDataWithErrorHandling();
