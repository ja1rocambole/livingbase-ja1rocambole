import { getPosts } from "../../scripts/request.js";

const arrayPosts = await getPosts();
const news = arrayPosts.news;
console.log(news);

function filterPosts() {
  const arrayCategories = document.querySelectorAll(".catefories");
  arrayCategories.forEach((element) => {
    element.addEventListener("click", () => {
      const category = element.innerText;
      console.log(category);
      localStorage.setItem("categoria:", category);

      renderCardsFiltered(news, category);
      acessContent();
    });
  });
}
filterPosts();

function renderCardsFiltered(newsArray, category) {
  if (category == "Todos") {
    renderCards(news);
  } else {
    const newsArrayFiltered = newsArray.filter((value) => {
      if (value.category == category) {
        return value;
      }
    });

    console.log(newsArrayFiltered);

    const ulCards = document.querySelector("#ul-cards");
    ulCards.innerHTML = "";
    newsArrayFiltered.forEach((element) => {
      //   console.log(element);
      const card = createCard(element);
      ulCards.appendChild(card);
    });
  }
}

function renderCards(newsArray) {
  const ulCards = document.querySelector("#ul-cards");
  ulCards.innerHTML = "";
  newsArray.forEach((element) => {
    // console.log(element);
    const card = createCard(element);
    ulCards.appendChild(card);
  });
}
renderCards(news);

const objeto = {
  category: "Decoração",
  content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
  description: `Invite as many collaborators as you’d like. They can register as team members or join as guests – no registration required.",
  id: "959de015-6973-40bb-a4f7-ee5b98c27776`,
  image:
    "https://arrumandoacasa.com.br/wp-content/uploads/2021/03/quadros-9.jpg",
  title:
    "Quadros - Como utilizar com cautela para deixar sua casa com um aspecto mais moderno ",
};

function createCard(objeto) {
  const card = document.createElement("li");
  card.insertAdjacentHTML(
    "afterbegin",
    `
        <img src=${objeto.image} alt="">
        <h3>${objeto.title}</h3>
        <p>${objeto.description}</p>
        <span class="acess-content">Acessar conteúdo</span>
        <span class="hidden">${objeto.id}</span>
        `
  );

  return card;
}
// createCard(objeto);

const categoryLocal = localStorage.getItem("categoria:");
console.log(categoryLocal);
if (categoryLocal !== null) {
  renderCardsFiltered(news, categoryLocal);
}

function acessContent() {
  const arraybuttons = document.querySelectorAll(".acess-content");
  console.log(arraybuttons);
  arraybuttons.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(element);
        const postId = event.path[1].children[4].innerText
        console.log(postId);
        localStorage.setItem("postID:", postId)
        window.location.replace("../post")
    });
  });
}
acessContent();
