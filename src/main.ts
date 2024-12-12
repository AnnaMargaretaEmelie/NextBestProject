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


const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;

if (nameInput && emailInput && phoneInput && form) {
  // Name validation: Only letters
  nameInput.addEventListener("input", () => {
    const namePattern = /^[a-zA-Z\s]*$/;
    if (!namePattern.test(nameInput.value)) {
      nameInput.setCustomValidity("Name can only contain letters and spaces.");
    } else {
      nameInput.setCustomValidity("");
    }
  });

  // Email validation: Must contain @
  emailInput.addEventListener("input", () => {
    if (!emailInput.value.includes("@")) {
      emailInput.setCustomValidity("Email must contain an '@' symbol.");
    } else {
      emailInput.setCustomValidity("");
    }
  });

  // Phone validation: Only numbers
  phoneInput.addEventListener("input", () => {
    const phonePattern = /^\d*$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.setCustomValidity("Phone number can only contain digits.");
    } else {
      phoneInput.setCustomValidity("");
    }
  });

  // Prevent form submission if there are invalid fields
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Please fill out the form correctly.");
    }
  });
} else {
  console.error("Form elements not found");
}
//#endregion Form Validation

