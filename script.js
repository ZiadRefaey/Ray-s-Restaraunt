console.log("working");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".fa-xmark");
document.querySelector(".hamburger").addEventListener("click", function () {
  console.log("working");
  mobileNav.classList.add("is-active");
});
document;
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
});
