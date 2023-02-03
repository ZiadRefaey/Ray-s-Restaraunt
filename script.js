const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".fa-xmark");
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
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
const tabs = document.querySelectorAll(".reviews-tab");
const tabContainer = document.querySelector(".reviews-tabs__container");
const contentContainer = document.querySelector;
const reviewContent = document.querySelectorAll(".reviews-content");
tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".reviews-tab");
  if (!clicked) return;
  tabs.forEach((t) => {
    t.classList.remove("reviews-tab__active");
  });
  clicked.classList.add("reviews-tab__active");
  const datatab = clicked.dataset.tab;
  reviewContent.forEach((r) => {
    r.classList.remove("reviews-content__active");
  });
  const variable = document.querySelector(`.reviews-content__${datatab}`);
  console.log(variable);
  document
    .querySelector(`.reviews-content__${datatab}`)
    .classList.add("reviews-content__active");
});
