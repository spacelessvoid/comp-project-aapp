//Dark mode switcher function and user persistent settings

const pageElement = document.querySelector(".page");
const sliderButtons = document.querySelectorAll(".surface__button");
const themeSwitcherElement = document.querySelector(".theme-switcher");
const switcherIconElements = themeSwitcherElement.querySelectorAll(
  ".theme-switcher__icon"
);
const switcherCheckboxElement = themeSwitcherElement.querySelector(
  ".theme-switcher__checkbox"
);

//checks user system preferences
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

let darkMode = localStorage.getItem("darkMode");

if (darkMode !== "disabled" && prefersDarkMode) {
  localStorage.setItem("darkMode", "enabled");
} else {
  localStorage.setItem("darkMode", "disabled");
}

if (darkMode === "disabled") {
  disableDarkMode();
} else {
  enableDarkMode();
}

function enableDarkMode() {
  pageElement.classList.add("page_theme_dark");

  sliderButtons[0].classList.add("surface__button_theme_dark");
  sliderButtons[1].classList.add("surface__button_theme_dark");

  switcherIconElements[0].classList.add("theme-switcher__icon_theme_dark");
  switcherIconElements[1].classList.add("theme-switcher__icon_theme_dark");

  localStorage.setItem("darkMode", "enabled");
  switcherCheckboxElement.setAttribute("checked", true);
}

function disableDarkMode() {
  pageElement.classList.remove("page_theme_dark");

  sliderButtons[0].classList.remove("surface__button_theme_dark");
  sliderButtons[1].classList.remove("surface__button_theme_dark");

  switcherIconElements[0].classList.remove("theme-switcher__icon_theme_dark");
  switcherIconElements[1].classList.remove("theme-switcher__icon_theme_dark");

  localStorage.setItem("darkMode", "disabled");
  switcherCheckboxElement.removeAttribute("checked");
}

function toggleDarkMode() {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

switcherCheckboxElement.addEventListener("click", toggleDarkMode);
