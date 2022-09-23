const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector(".nav");

menuHamburger.addEventListener("click", () => {
  nav.classList.toggle("mobile-menu");
});