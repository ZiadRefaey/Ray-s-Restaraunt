const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");
const sonday = document.querySelector(".sonday");
const openingDays = document.querySelectorAll(".day-opening-hour");
const d = new Date();
let day = d.getDay();
openingDays.forEach((d) => {
  d.classList.remove("active-day");
});

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
