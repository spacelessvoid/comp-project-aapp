////////////////////
// Gallery slider
///////////////////

const sliderImages = document.querySelectorAll("[data-surfaces-slider-item]");
const elementsArrLength = sliderImages.length;

const surfaceTitleElements = document.querySelectorAll(".surface__title");
const surfaceTextElements = document.querySelectorAll(".surface__text");
const surfaceTypeElement = document.querySelector(".surface__type");

const surfaceButtonLeft = document.querySelector(".surface__button_left");
const surfaceButtonRight = document.querySelector(".surface__button_right");

let n = 0;

// Setting the decorative image of the active surface type
function handleSurfaceType() {
  surfaceTypeElement.setAttribute("data-surface-type", n + 1);
}

// Setting the display value of text elements (<h2> & <p> tags) related to the selected image / surface type
// `n2` is the index of the selected image / surface type

const shiftedElements = [surfaceTitleElements, surfaceTextElements];

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
  if (n === elementsArrLength - 1) {
    for (let i = 0; i < elementsArrLength; i++) {
      sliderImages[i].style.order = 0;
    }

    n = 0;

    handleSurfaceType();

    setDisplayProp({ n1: elementsArrLength - 1 }, { n2: n });
  } else {
    sliderImages[n].style.order = n + elementsArrLength;

    n++;

    handleSurfaceType();

    setDisplayProp({ n1: n - 1 }, { n2: n });
  }
}

function shiftLeft() {
  if (n === 0) {
    // sets the conditions as if user scrolled to the last image
    for (let i = 0; i < elementsArrLength - 1; i++) {
      sliderImages[i].style.order = i + elementsArrLength;
    }

    n = elementsArrLength - 1;

    handleSurfaceType();

    setDisplayProp({ n1: 0 }, { n2: n });
  } else {
    n--;

    sliderImages[n].style.order = 0;

    handleSurfaceType();

    setDisplayProp({ n1: n + 1 }, { n2: n });
  }
}

surfaceButtonRight.addEventListener("click", shiftRight);
surfaceButtonLeft.addEventListener("click", shiftLeft);
