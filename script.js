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

const body = document.querySelector(".body");
const tabs = document.querySelectorAll(".reviews-tab");
const tabContainer = document.querySelector(".reviews-tabs__container");
const reviewContent = document.querySelectorAll(".reviews-content");

document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.add("is-active");
  body.classList.add("scroll-hidden");
});
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
  body.classList.remove("scroll-hidden");
});
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
