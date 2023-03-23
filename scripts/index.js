import * as slider from "./slider.js";
import * as darkmode from "./darkmode.js";

// --- Opening/closing mobile nav menu ---

const navMenuLinks = document.querySelectorAll(".header__link"),
  navButton = document.querySelector(".hamburger-menu"),
  navButtonInput = navButton.querySelector("input"),
  themeSwitcher = document.querySelector(".theme-switcher");

navButton.addEventListener("click", () => {
  navButton.setAttribute("data-open", navButtonInput.checked);
  themeSwitcher.setAttribute("data-open", navButtonInput.checked);
});

// Closing mobile nav menu when clicking a nav link
navMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navButtonInput.checked = !navButtonInput.checked;
    navButton.setAttribute("data-open", navButtonInput.checked);
    themeSwitcher.setAttribute("data-open", navButtonInput.checked);
  });
});

// ---

// --- Linking radio buttons and dropdown menu

const dropdownMenu = document.querySelector(".bikes__dropdown");
const tabs = document.querySelectorAll(".tab");

function setRadioBtn() {
  const radioBtn = document.querySelector(`[data-id="${dropdownMenu.value}"]`);
  radioBtn.checked = true;
}

function setList(evt) {
  const selectedValue = evt.textContent;
  dropdownMenu.querySelector(`[value=${selectedValue}]`).selected = true;
}

tabs.forEach((tab) => {
  tab.addEventListener("mousedown", (evt) => {
    setList(evt.target);
  });
});

dropdownMenu.addEventListener("change", () => {
  setRadioBtn();
});

// ---
