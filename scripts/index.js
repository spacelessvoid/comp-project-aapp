import Slider from "./slider.js";
import * as darkmode from "./darkmode.js";

const surfaceSlider = new Slider({
  container: ".surface",
  slides: "[data-surfaces-slider-item]",
  auxElements: [".surface__text", ".surface__title"],
  decorElement: ".surface__type",
  buttonLeft: ".surface__button_left",
  buttonRight: ".surface__button_right",
  enableButtonControls: true,
});
surfaceSlider.enable();

const bikesCategoryList = document.querySelectorAll(".bikes__category");
bikesCategoryList.forEach((category) => {
  const bikesSlider = new Slider({
    container: `#${category.id}`,
    slides: ".bikes__model",
    auxElements: [".bikes__model"],
    enableTouchControls: true,
  });
  bikesSlider.enable();
});

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
