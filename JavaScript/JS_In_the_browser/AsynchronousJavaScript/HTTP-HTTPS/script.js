// HTTP - HyperText Transfer Protocol
// HTTPS - HyperText Transfer Protocol Secure

// API (Application programming interface)
const fetchUsersButton = document.querySelector("#fetch-user-data");
const fetchPostsButton = document.querySelector("#fetch-posts-data");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error fetching user data", error);
  }
}
fetchUsersButton.addEventListener("click", () => fetchUsers());
