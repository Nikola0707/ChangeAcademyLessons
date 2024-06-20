const fetchPostsURL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const response = await fetch(fetchPostsURL);
  const posts = await response.json();
  return posts;
}
function renderPost(post) {
  // const { body, title, userId } = post;
  const section = document.querySelector(".posts");
  const postDiv = document.createElement("div");

  const postTitle = document.createElement("h2");
  postTitle.innerText = post.title;

  const postAuthor = document.createElement("h4");
  postAuthor.innerText = `Author ID: ${post.userId}`;

  const postBody = document.createElement("div");
  postBody.innerText = post.body;

  postDiv.appendChild(postTitle);
  postDiv.appendChild(postAuthor);
  postDiv.appendChild(postBody);

  postDiv.classList.add("post");

  section.appendChild(postDiv);
}

async function renderPosts() {
  const response = await getPosts();
  response.forEach((post) => renderPost(post));
}
renderPosts();
