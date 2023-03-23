import * as slider from "./slider.js";
import * as darkmode from "./darkmode.js";

// --- Opening/closing mobile nav menu ---
const navMenuLinks = document.querySelectorAll(".header__link");
const navButton = document.querySelector(".hamburger-menu");
const navButtonInput = navButton.querySelector("input");

navButton.addEventListener("click", () => {
  navButton.setAttribute("data-open", navButtonInput.checked);
});

// Closing mobile nav menu when clicking a nav link
navMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navButtonInput.checked = !navButtonInput.checked;
    navButton.setAttribute("data-open", navButtonInput.checked);
  });
});

// ---
