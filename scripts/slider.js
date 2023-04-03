////////////////////
// Gallery slider
///////////////////

const surfaceTitleElements = document.querySelectorAll(".surface__title");
const surfaceTextElements = document.querySelectorAll(".surface__text");
const surfaceImageElements = document.querySelectorAll(".surface__image");
const imagesArrLength = surfaceImageElements.length;
const surfaceTypeElement = document.querySelector(".surface__type");
const surfaceButtonLeft = document.querySelector(".surface__button_left");
const surfaceButtonRight = document.querySelector(".surface__button_right");

const shiftedElements = [surfaceTitleElements, surfaceTextElements];

let n = 0;

function handleSurfaceType() {
  surfaceTypeElement.className = "surface__type";
  surfaceTypeElement.classList.add(`surface__type_image_${n + 1}`);
}

// Function for setting the display value of text elements (<h2> & <p> tags) related to the selected image / surface type
// n2 is the index of selected image / surface type
function setDisplayProp(
  { prop1 = "none", n1 },
  { prop2 = "block", n2 },
  elements = [...shiftedElements]
) {
  elements.forEach((element) => {
    element[n1].style.display = prop1;
    element[n2].style.display = prop2;
  });
}

function shiftRight() {
  if (n === imagesArrLength - 1) {
    for (let i = 0; i < imagesArrLength; i++) {
      surfaceImageElements[i].style.order = 0;
    }

    n = 0;

    handleSurfaceType();

    setDisplayProp({ n1: imagesArrLength - 1 }, { n2: n });
  } else {
    surfaceImageElements[n].style.order = n + imagesArrLength;

    n++;

    handleSurfaceType();

    setDisplayProp({ n1: n - 1 }, { n2: n });
  }
}

function shiftLeft() {
  if (n === 0) {
    // sets the conditions as if user scrolled to the last image
    for (let i = 0; i < imagesArrLength - 1; i++) {
      surfaceImageElements[i].style.order = i + imagesArrLength;
    }

    n = imagesArrLength - 1;

    handleSurfaceType();

    setDisplayProp({ n1: 0 }, { n2: n });
  } else {
    n--;

    surfaceImageElements[n].style.order = 0;

    handleSurfaceType();

    setDisplayProp({ n1: n + 1 }, { n2: n });
  }
}

surfaceButtonRight.addEventListener("click", shiftRight);
surfaceButtonLeft.addEventListener("click", shiftLeft);
