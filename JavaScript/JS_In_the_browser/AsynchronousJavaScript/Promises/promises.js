// What is a promise?
// A promise is an assurance or guarantgee that something will happen in the future.
// In JS, a Promise is an object that will produce a single value some time in the feature.

/*
JS promises canbe in the one of three possible states.
These states indicate the progress of the promise. 
They are:
- Pending: This is the default state of defined promise
- fulfilled: This is the state of a successful promise
- rejected: This is the state of a failed promise.
*/

// How to create a promise in JavaScript
const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber >= 1) {
    resolve("Promise is fulfilled!");
  } else {
    reject("Promise failed!");
  }
});
// console.log(promise);

// How to attach a callback to promise using then method
// const promise2 = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   if (randomNumber >= 1) {
//     resolve("Promise is fulfilled!");
//   } else {
//     reject("Promise failed 2!");
//   }
// });

function handleResolve(value) {
  console.log(value);
}
function handleReject(reason) {
  console.error(reason);
}

// promise2.then(handleResolve, handleReject);

// Issues with CaLLBACKS - Callback hell

function greet(name, callbackFunction) {
  setTimeout(() => {
    console.log("Hello" + " " + name);
    callbackFunction();
  }, 1000);
}

function sayGoodbye() {
  console.log("Goodbye!");
}

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
// startDay("Nikola");

// How to avoid callback hell with chaining promises
function greetPromise(name) {
  return new Promise((reslove) => {
    setTimeout(() => {
      console.log("Hello", " " + name);
      reslove();
    }, 1000);
  });
}
function sayGoodbyePromise() {
  return new Promise((reslove) => {
    setTimeout(() => {
      console.log("Goodbye!");
      reslove();
    });
  });
}
function startDayWithPromises() {
  greetPromise("Nikola")
    .then(() => {
      return greetPromise("John");
    })
    .then(() => {
      return greetPromise("Doe");
    })
    .then(() => {
      return greetPromise("Alice");
    })
    .then(() => {
      return greetPromise("Ana");
    })
    .then(() => {
      return sayGoodbyePromise();
    })
    .catch((error) => {
      console.log("Error occured", error);
    });
}
startDayWithPromises();
