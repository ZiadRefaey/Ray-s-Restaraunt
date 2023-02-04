const body = document.querySelector(".body");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".fa-xmark");
const roomsTabsContainer = document.querySelector(".rooms-tabs__container");
const roomsTabs = document.querySelectorAll(".room-tab");
const roomsConent = document.querySelectorAll(".rooms-content");
const formBtn = document.querySelector(".form-button");
formBtn.addEventListener("click", function (e) {
  e.preventDefault;
});
document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.add("is-active");
  body.classList.add("scroll-hidden");
});
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
  body.classList.remove("scroll-hidden");
});
roomsTabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".room-tab");
  if (!clicked) return;
  roomsTabs.forEach((t) => {
    t.classList.remove("rooms-tab__active");
  });
  clicked.classList.add("rooms-tab__active");

  roomsConent.forEach((c) => c.classList.remove("rooms-content__active"));
  //   if (!document.querySelector(`rooms-content__${clicked.dataset.tab}`)) return;

  document
    .querySelector(`.rooms-content__${clicked.dataset.tab}`)
    .classList.add("rooms-content__active");
  console.log(clicked.dataset.tab);
});
