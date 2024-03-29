/* FOR HAMBURGER AND NAVIGATION MENU */
const hamburger = document.querySelector(".hamburger");
const nav__menu = document.querySelector(".nav__menu");
const nav__link = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav__menu.classList.toggle("active");
  /*  console.log(hamburger);
  console.log(nav__menu); */
});

nav__link.forEach((nav__link) => {
  nav__link.addEventListener("click", function handleClick(event) {
    console.log("box clicked", event);
    hamburger.classList.toggle("active");
    nav__menu.classList.toggle("active");
  });
});

//swiper

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/*FOR COLLAPSING CARD DESCRIPTION AND FADE EFFECT*/

const mores = document.querySelectorAll(".readMore");

mores.forEach((more) => {
  more.addEventListener("click", function handleClick(event) {
    console.log("button clicked", event);
    if (more.textContent == "Read more") {
      more.textContent = "Read less";
    } else {
      more.textContent = "Read more";
    }
    const cardDescription = more.previousElementSibling;

    cardDescription.classList.toggle("expand");
  });
});

const contactMeBtn = document.querySelector(".contactMeBtn");

contactMeBtn.addEventListener("click", function handleClick(event) {
  console.log("button clicked", event);
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  modal.classList.toggle("open");
  overlay.classList.toggle("open");
});
/* click anywhere on screen to toggle class */
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", function handleClick(event) {
  console.log("button clicked", event);
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  modal.classList.toggle("open");
  overlay.classList.toggle("open");
});

let docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
    console.log("Width: " + el.offsetWidth);
  }
});

/*FOR SCROLLING TO TOP OF PAGE*/
