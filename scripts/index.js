//Dark mode switcher function and user persistent settings

const pageElement = document.querySelector(".page");
const surfaceButton = document.querySelectorAll(".surface__button");
const themeSwitcherElement = document.querySelector(".theme-switcher");
const switcherIconElement = themeSwitcherElement.querySelectorAll(
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

  surfaceButton[0].classList.add("surface__button_theme_dark");
  surfaceButton[1].classList.add("surface__button_theme_dark");

  switcherIconElement[0].classList.add("theme-switcher__icon_theme_dark");
  switcherIconElement[1].classList.add("theme-switcher__icon_theme_dark");

  localStorage.setItem("darkMode", "enabled");
  switcherCheckboxElement.setAttribute("checked", true);
}

function disableDarkMode() {
  pageElement.classList.remove("page_theme_dark");

  surfaceButton[0].classList.remove("surface__button_theme_dark");
  surfaceButton[1].classList.remove("surface__button_theme_dark");

  switcherIconElement[0].classList.remove("theme-switcher__icon_theme_dark");
  switcherIconElement[1].classList.remove("theme-switcher__icon_theme_dark");

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

////////////////////
// Gallery slider
///////////////////

const surfaceTitleElement = document.querySelectorAll(".surface__title");
const surfaceTextElement = document.querySelectorAll(".surface__text");
const surfaceImageElement = document.querySelectorAll(".surface__image");
const surfaceTypeElement = document.querySelector(".surface__type");
const surfaceButtonLeft = document.querySelector(".surface__button_left");
const surfaceButtonRight = document.querySelector(".surface__button_right");
const bikesSurfaceTypes = document.querySelectorAll(".bikes__type");
const bikesDropdownItemElement = document.querySelectorAll(
  ".bikes__dropdown-item"
);
const bikesCategoryElement = document.querySelectorAll(".bikes__category");

let n = 0;

function handleSurfaceType() {
  surfaceTypeElement.className = "surface__type";
  surfaceTypeElement.classList.add("surface__type_image_" + (n + 1));
}

function scrollButtonRight() {
  if (n === surfaceImageElement.length - 1) {
    for (let i = 0; i < surfaceImageElement.length; i++) {
      surfaceImageElement[i].style.order = 0;
    }

    n = 0;

    handleSurfaceType();

    surfaceTitleElement[surfaceTitleElement.length - 1].style.display = "none";
    surfaceTitleElement[n].style.display = "block";
    surfaceTextElement[surfaceTextElement.length - 1].style.display = "none";
    surfaceTextElement[n].style.display = "block";

    bikesCategoryElement[bikesSurfaceTypes.length - 1].style.display = "none";
    bikesCategoryElement[n].style.display = "flex";

    bikesSurfaceTypes[bikesSurfaceTypes.length - 1].classList.add(
      "bikes__type_inactive"
    );
    bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  } else {
    surfaceImageElement[n].style.order = n + surfaceImageElement.length;

    n++;

    handleSurfaceType();

    surfaceTitleElement[n - 1].style.display = "none";
    surfaceTitleElement[n].style.display = "block";
    surfaceTextElement[n - 1].style.display = "none";
    surfaceTextElement[n].style.display = "block";

    bikesCategoryElement[n - 1].style.display = "none";
    bikesCategoryElement[n].style.display = "flex";

    bikesSurfaceTypes[n - 1].classList.add("bikes__type_inactive");
    bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  }

  console.log(n);
}

function scrollButtonLeft() {
  if (n === 0) {
    // sets the conditions as if user scrolled to the last image
    for (let i = 0; i < surfaceImageElement.length - 1; i++) {
      surfaceImageElement[i].style.order = i + surfaceImageElement.length;
    }

    n = surfaceImageElement.length - 1;

    handleSurfaceType();

    surfaceTitleElement[0].style.display = "none";
    surfaceTitleElement[n].style.display = "block";
    surfaceTextElement[0].style.display = "none";
    surfaceTextElement[n].style.display = "block";

    bikesCategoryElement[0].style.display = "none";
    bikesCategoryElement[n].style.display = "flex";

    bikesSurfaceTypes[0].classList.add("bikes__type_inactive");
    bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  } else {
    n--;

    surfaceImageElement[n].style.order = 0;

    handleSurfaceType();

    surfaceTitleElement[n + 1].style.display = "none";
    surfaceTitleElement[n].style.display = "block";
    surfaceTextElement[n + 1].style.display = "none";
    surfaceTextElement[n].style.display = "block";

    bikesCategoryElement[n + 1].style.display = "none";
    bikesCategoryElement[n].style.display = "flex";

    bikesSurfaceTypes[n + 1].classList.add("bikes__type_inactive");
    bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  }

  console.log(n);
}

function switchTypeMenu(e) {
  for (let i = 0; i < e.length; i++) {
    e[i].addEventListener("click", () => {
      if (i === n + 1 && (i === 1 || i === 2)) {
        scrollButtonRight();
        n = i;
      } else if (i === n + 2) {
        scrollButtonRight();
        scrollButtonRight();
      } else if (i === n - 2) {
        scrollButtonLeft();
        scrollButtonLeft();
      } else if (i === n - 1) {
        scrollButtonLeft();
      }
    });
  }
}

surfaceButtonRight.addEventListener("click", scrollButtonRight);
surfaceButtonLeft.addEventListener("click", scrollButtonLeft);

switchTypeMenu(bikesSurfaceTypes);
switchTypeMenu(bikesDropdownItemElement);
