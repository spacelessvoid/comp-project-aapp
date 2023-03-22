import * as slider from "./slider.js";
import * as darkmode from "./darkmode.js";

// --- Closing mobile nav menu when clicking a nav link ---
const navMenuLinks = document.querySelectorAll(".header__link");
const navButton = document
  .querySelector(".hamburger-menu")
  .querySelector("input");

navMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navButton.checked) {
      navButton.checked = false;
    }
  });
});
// ---
