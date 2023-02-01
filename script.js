console.log("working");
const hamburger = document.querySelector(".hamburger");
document.querySelector(".hamburger").addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});
