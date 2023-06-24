"use strict";
/**to stop loading */
const preloader = document.querySelector("[data-preload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};
/**for navigation */
const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventOnElements(navToggle, "click", toggleNavbar);
/**header */
const header = document.querySelector("[data-header]");
let lastScroll = 0;
const hideHeader = function () {
  const scrollBottom = lastScroll < window.scrollY;
  if (scrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScroll = window.scrollY;
};
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 50) {
    header.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
  }
});

/*slidercode*/
const heroSlider = document.querySelector("[data-hero-slider]");
const sliderItems = document.querySelectorAll("[data-hero-slider-item]");
const prevBtn = document.querySelector("[data-prev-btn]");
const nextBtn = document.querySelector("[data-next-btn]");

let currSlidePos = 0;
let lastActive = sliderItems[0];
const updateSlidePos = function () {
  lastActive.classList.remove("active");
  sliderItems[currSlidePos].classList.add("active");
  lastActive = sliderItems[currSlidePos];
};
const slideNext = function () {
  if (currSlidePos >= sliderItems.length - 1) {
    currSlidePos = 0;
  } else {
    currSlidePos++;
  }
  updateSlidePos();
};
nextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currSlidePos <= 0) {
    currSlidePos = sliderItems.length - 1;
  } else {
    currSlidePos--;
  }
  updateSlidePos();
};
prevBtn.addEventListener("click", slidePrev);

let autoSlideInterval;
const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
};
addEventOnElements([nextBtn, prevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([nextBtn, prevBtn], "mouseout", autoSlideInterval);
window.addEventListener("load", autoSlide);

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {
  x = (event.clientX / window.innerWidth) * 10 - 5;
  y = (event.clientY / window.innerHeight) * 10 - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - x * 2;
  y = y - y * 2;

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }
});

function redirectToLogin() {
  document.querySelector(".signin").classList.add("transition-link");
  window.setTimeout(function () {
    window.location.href = "images/validations/signin.html";
  }, 300);
}
