const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");
const sonday = document.querySelector(".sonday");
const openingDays = document.querySelectorAll(".day-opening-hour");
const tabsContainer = document.querySelector(".menu-tabs__container");
const menuTabs = document.querySelectorAll(".menu-tabs__item");
const menuContent = document.querySelectorAll(".menu-content");
const d = new Date();
let day = d.getDay();

switch (day) {
  case 1:
    monday.classList.add("active-day");
    break;
  case 2:
    tuesday.classList.add("active-day");

    break;
  case 3:
    wednesday.classList.add("active-day");

    break;
  case 4:
    thursday.classList.add("active-day");

    break;
  case 5:
    friday.classList.add("active-day");
    break;
  case 6:
    saturday.classList.add("active-day");
    break;
  case 7:
    sonday.classList.add("active-day");
    break;
  default:
    console.log("something went wrong");
}

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".menu-tabs__item");
  if (!clicked) return;
  menuTabs.forEach((tab) => tab.classList.remove("menu-tabs__active"));
  clicked.classList.add("menu-tabs__active");
  menuContent.forEach((content) => {
    console.log(content);
    content.classList.remove("menu-content__active");
  });
  document
    .querySelector(`.menu-content__${clicked.dataset.tab}`)
    .classList.add("menu-content__active");
});
