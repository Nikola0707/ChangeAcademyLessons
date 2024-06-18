// HTTP - HyperText Transfer Protocol
// HTTPS - HyperText Transfer Protocol Secure

// API (Application programming interface)
const fetchUsersButton = document.querySelector("#fetch-user-data");
const fetchPostsButton = document.querySelector("#fetch-posts-data");

async function fetchUsers() {
  try {
    // Await the fetch call to get the response
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //  Await the conversion of the response to JSON Format.
    const users = await response.json();
    // Log the users data to the console
    console.log(users);
  } catch (error) {
    console.error("Error fetching user data", error);
  }
}
fetchUsersButton.addEventListener("click", () => fetchUsers());

// Example = Fetching Data from an API using the then method (promises chaining)

const fetchPostsURL = "https://jsonplaceholder.typicode.com/posts";
async function fetchPosts() {
  fetch(fetchPostsURL)
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      console.log(posts);
    })
    .catch((error) => {
      console.error("Error fetching post data:", error);
    });
}

fetchPostsButton.addEventListener("click", () => fetchPosts());
