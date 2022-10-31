import { getPostId } from "../../scripts/request.js";

const idPost = localStorage.getItem("postID:");
console.log(idPost);

const post = await getPostId(idPost);
console.log(post)

const body = document.querySelector("body")
body.insertAdjacentHTML("afterbegin",
    `
    <h2>${post.title}</h2>
    <img src=${post.image} alt="" srcset="">
    <p>${post.description}</p>
    `
)