const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const sections = document.querySelectorAll(".section");
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
observerHeader.observe(header);

// function obsSectionsCallback(enteries, observer) {
//   const [entery] = enteries;
//   console.log(entery);
//   if (entery.isIntersecting) {
//     entery.target.classList.remove("hidden-section");
//   } else {
//     entery.target.classList.add("hidden-section");
//   }
// }

// const sectionObserver = new IntersectionObserver(obsSectionsCallback, {
//   root: null,
//   threshold: 0.05,
// });
// sections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add("hidden-section");
// });
