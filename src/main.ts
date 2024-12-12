import "./style.css";
//#region Header
const app = document.getElementById("app");

const header = document.createElement("header");
header.classList.add("header");

const h1 = document.createElement("h1");
h1.innerHTML = "Get in touch!";
h1.classList.add("header_title");

const headerDiscription = document.createElement("p");
headerDiscription.innerHTML =
  "Contact us for help with Github, help(please) aswell us and yourself by joining our group.";

const headerButtonsContainer = document.createElement("section");
headerButtonsContainer.classList.add("header_buttons");

const articles = [
  {
    name: "location",
    imgSrc: "location.png",
    text: "MedieInstitutet, TS Tegelvägen 5",
  },
  { name: "phone", imgSrc: "phone.png", text: "0707200030" },
  { name: "mail", imgSrc: "mail.png", text: "Kontakt@example.com" },
];

articles.forEach((article) => {
  const articleElement = document.createElement("article");
  articleElement.classList.add(article.name);

  const img = document.createElement("img");
  img.src = article.imgSrc;
  img.alt = article.name;

  const p = document.createElement("p");
  p.innerHTML = article.text;

  articleElement.appendChild(img);
  articleElement.appendChild(p);

  headerButtonsContainer.appendChild(articleElement);
});

header.appendChild(h1);
header.appendChild(headerDiscription);
header.appendChild(headerButtonsContainer);

if (app) {
  app.appendChild(header);
} else {
  console.error("APP not found, RING 112, eller Seb");
}
//#endregion Header
