// This ensures the code runs onlu after the HTML document has been fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Define the base URL for the JSONPlaceholder API.
  const baserURL = "https://jsonplaceholder.typicode.com";

  // Function to fetch and display data
  // This function takes an endpoint as an argument and fetches data from the API
  function fetchData(endpoint) {
    fetch(baserURL + endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        displayData(data);
      })
      .catch((error) => console.log(error));
  }

  // function to display fetched data
  function displayData(data) {
    const output = document.getElementById("output");
    output.innerHTML = JSON.stringify(data, null, 2);
  }

  // Example: Fetch posts
  document
    .getElementById("fetchPosts")
    .addEventListener("click", () => fetchData("/posts"));

  // Example: Create post
  document.getElementById("createPost").addEventListener("click", () => {
    const newPost = {
      userId: 1,
      id: 3,
      title: "New post title",
      body: "New post body",
    };

    fetch(baserURL + "/posts", {
      // Specify the HTTP method as POST for creating a new resource
      method: "POST",
      //   Set the Content-Type header to application/json to indicate the request body format
      headers: {
        "Content-Type": "application/json",
      },
      //   Convert the new poset object to a JSON string for the request body
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post response data", data);
        fetchData("/posts");
      })
      .catch((error) => console.log("error", error));
  });

  // Example: Update a post (PUT)
  document.getElementById("updatePost").addEventListener("click", () => {
    const updatedPost = {
      id: 1,
      title: "Updated Title",
      body: "Updated Body",
    };
    fetch(baserURL + "/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log("Updated post", data);
        fetchData("/posts");
      })
      .catch((error) => console.log(error));
  });

  //   Example: Update a post partially (PATCH)
  document.getElementById("patchPost").addEventListener("click", () => {
    const updatedField = {
      title: "Patched Title",
    };
    fetch(baserURL + "/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedField),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Patched post:", data);
        fetchData("/posts");
      })
      .catch((error) => console.log(error));
  });

  // Example: Delete a post
  document.getElementById("deletePost").addEventListener("click", () => {
    fetch(baserURL + "/posts/1", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Post deleted successfully");
          fetchData("/posts");
        } else {
          console.error("Failed to delte post");
        }
      })
      .catch((error) => console.log("Error deleting post:", error));
  });
});
