document.addEventListener("DOMContentLoaded", () => {
  const fetchPostsButton = document.getElementById("fetchPostsButton");
  const postsList = document.getElementById("postsList");

  fetchPostsButton.addEventListener("click", async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("No se pudo obtener los posts");
      }
      const posts = await response.json();
      renderPosts(posts);
    } catch (error) {
      console.error("Error al obtener los posts:", error.message);
      postsList.innerHTML = `<li>Error al obtener los posts: ${error.message}</li>`;
    }
  });

  function renderPosts(posts) {
    postsList.innerHTML = "";
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${post.title}</strong>: ${post.body}<br><br>`;
      postsList.appendChild(listItem);
    });
  }
});
