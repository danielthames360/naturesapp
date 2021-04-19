const lista = document.querySelector(".navigation__list");
const burguer = document.querySelector(".navigation__button");
const nav = document.querySelector(".navigation__nav");
const navigation = document.querySelector(".navigation__background");
const links = lista.querySelectorAll("a");

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  navigation.classList.toggle("background-open");
  burguer.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    navigation.classList.toggle("background-open");
    burguer.classList.toggle("toggle");
  });
});
