////////////////////
// Gallery slider
///////////////////

const surfaceTitleElements = document.querySelectorAll(".surface__title");
const surfaceTextElements = document.querySelectorAll(".surface__text");
const surfaceImageElements = document.querySelectorAll(".surface__image");
const surfaceTypeElement = document.querySelector(".surface__type");
const surfaceButtonLeft = document.querySelector(".surface__button_left");
const surfaceButtonRight = document.querySelector(".surface__button_right");
const bikesSurfaceTypes = document.querySelectorAll(".bikes__type");
const bikesDropdownItems = document.querySelectorAll(
  ".bikes__dropdown-item"
);
const bikesCategoryElements = document.querySelectorAll(".bikes__category");

let n = 0;

function handleSurfaceType() {
  surfaceTypeElement.className = "surface__type";
  surfaceTypeElement.classList.add("surface__type_image_" + (n + 1));
}

function scrollButtonRight() {
  if (n === surfaceImageElements.length - 1) {
    for (let i = 0; i < surfaceImageElements.length; i++) {
      surfaceImageElements[i].style.order = 0;
    }

    n = 0;

    handleSurfaceType();

    surfaceTitleElements[surfaceTitleElements.length - 1].style.display = "none";
    surfaceTitleElements[n].style.display = "block";
    surfaceTextElements[surfaceTextElements.length - 1].style.display = "none";
    surfaceTextElements[n].style.display = "block";

    // bikesCategoryElement[bikesSurfaceTypes.length - 1].style.display = "none";
    // bikesCategoryElement[n].style.display = "flex";

    // bikesSurfaceTypes[bikesSurfaceTypes.length - 1].classList.add(
    //   "bikes__type_inactive"
    // );
    // bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  } else {
    surfaceImageElements[n].style.order = n + surfaceImageElements.length;

    n++;

    handleSurfaceType();

    surfaceTitleElements[n - 1].style.display = "none";
    surfaceTitleElements[n].style.display = "block";
    surfaceTextElements[n - 1].style.display = "none";
    surfaceTextElements[n].style.display = "block";

    // bikesCategoryElement[n - 1].style.display = "none";
    // bikesCategoryElement[n].style.display = "flex";

    // bikesSurfaceTypes[n - 1].classList.add("bikes__type_inactive");
    // bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  }
}

function scrollButtonLeft() {
  if (n === 0) {
    // sets the conditions as if user scrolled to the last image
    for (let i = 0; i < surfaceImageElements.length - 1; i++) {
      surfaceImageElements[i].style.order = i + surfaceImageElements.length;
    }

    n = surfaceImageElements.length - 1;

    handleSurfaceType();

    surfaceTitleElements[0].style.display = "none";
    surfaceTitleElements[n].style.display = "block";
    surfaceTextElements[0].style.display = "none";
    surfaceTextElements[n].style.display = "block";

    // bikesCategoryElement[0].style.display = "none";
    // bikesCategoryElement[n].style.display = "flex";

    // bikesSurfaceTypes[0].classList.add("bikes__type_inactive");
    // bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  } else {
    n--;

    surfaceImageElements[n].style.order = 0;

    handleSurfaceType();

    surfaceTitleElements[n + 1].style.display = "none";
    surfaceTitleElements[n].style.display = "block";
    surfaceTextElements[n + 1].style.display = "none";
    surfaceTextElements[n].style.display = "block";

    // bikesCategoryElement[n + 1].style.display = "none";
    // bikesCategoryElement[n].style.display = "flex";

    // bikesSurfaceTypes[n + 1].classList.add("bikes__type_inactive");
    // bikesSurfaceTypes[n].classList.remove("bikes__type_inactive");
  }
}

// function switchTypeMenu(e) {
//   for (let i = 0; i < e.length; i++) {
//     e[i].addEventListener("click", () => {
//       if (i === n + 1 && (i === 1 || i === 2)) {
//         scrollButtonRight();
//         n = i;
//       } else if (i === n + 2) {
//         scrollButtonRight();
//         scrollButtonRight();
//       } else if (i === n - 2) {
//         scrollButtonLeft();
//         scrollButtonLeft();
//       } else if (i === n - 1) {
//         scrollButtonLeft();
//       }
//     });
//   }
// }

surfaceButtonRight.addEventListener("click", scrollButtonRight);
surfaceButtonLeft.addEventListener("click", scrollButtonLeft);

// switchTypeMenu(bikesSurfaceTypes);
// switchTypeMenu(bikesDropdownItems);
