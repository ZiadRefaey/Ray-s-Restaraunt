//mobile nav
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".fa-xmark");

document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.add("is-active");
  body.classList.add("scroll-hidden");
});
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
  body.classList.remove("scroll-hidden");
});
// Sticky Navigation
const header = document.querySelectorAll(".header");
const nav = document.querySelector(".navbar");
function obsCallBack(enteries, observerHeader) {
  const [entery] = enteries;
  if (!entery.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

const observerHeader = new IntersectionObserver(obsCallBack, obsOptions);
header.forEach((header) => {
  observerHeader.observe(header);
});

//Img Lazy Loading
const targetImgs = document.querySelectorAll("img[data-src]");
function imgObsCallBack(enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  imgObserver.unobserve(entry.target);
}
const imgObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "300px",
};
const imgObserver = new IntersectionObserver(imgObsCallBack, imgObsOptions);
targetImgs.forEach((target) => imgObserver.observe(target));

// Reveal Sections

// const sections = document.querySelectorAll(".section");

// function obsSectionsCallback(entries, observer) {
//   const [entry] = entries;
//   if (entry.isIntersecting) {
//     entry.target.classList.remove("section-hidden");
//   } else {
//     entry.target.classList.add("section-hidden");
//   }
//   // sectionObserver.unobserve(entry.target)
// }
// const sectionObserver = new IntersectionObserver(obsSectionsCallback, {
//   root: null,
//   threshold: 0.1,
// });
// sections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add("section-hidden");
// });
