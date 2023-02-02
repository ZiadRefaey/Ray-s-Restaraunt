const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".fa-xmark");
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  },
});
document.querySelector(".hamburger").addEventListener("click", function () {
  console.log("working");
  mobileNav.classList.add("is-active");
});
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
});
