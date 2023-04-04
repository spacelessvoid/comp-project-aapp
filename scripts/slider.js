////////////////////
// Gallery slider
///////////////////

export default class Slider {
  constructor({
    container,
    slides,
    auxElements,
    decorElement,
    buttonLeft,
    buttonRight,
    enableButtonControls,
    enableTouchControls,
  }) {
    this._container = document.querySelector(container);
    this._slides = this._container.querySelectorAll(slides);
    this._elementsArrLength = this._slides.length;
    this._auxElements = auxElements;
    this._decorElement = this._container.querySelector(decorElement);
    this._buttonLeft = this._container.querySelector(buttonLeft);
    this._buttonRight = this._container.querySelector(buttonRight);
    this._touchStartX = 0;
    this._touchEndX = 0;
    this._n = 0;

    this._enableButtonControls = enableButtonControls;
    this._enableTouchControls = enableTouchControls;
  }

  _getAuxElementsList() {
    this._arr = [];
    this._auxElements.forEach((selector) => {
      this._auxElementsList = this._container.querySelectorAll(selector);
      this._arr.push(this._auxElementsList);
    });
    return this._arr;
  }

  // Setting the decorative image of the active slide
  _handleDecorElement() {
    if (this._decorElement) {
      this._decorElement.setAttribute("data-decor-type", this._n + 1);
    }
  }

  // Setting the display value of text elements (<h2> & <p> tags) related to the active slide
  // `n2` is the index of the active slide
  _setDisplayProp(
    { prop1 = "none", n1 },
    { prop2 = "block", n2 },
    elements = this._shiftedElements
  ) {
    elements.forEach((element) => {
      element[n1].style.display = prop1;
      element[n2].style.display = prop2;
    });
  }

  _shiftRight = () => {
    if (this._n === this._elementsArrLength - 1) {
      for (let i = 0; i < this._elementsArrLength; i++) {
        this._slides[i].style.order = 0;
      }

      this._n = 0;

      if (this._auxElements) {
        this._setDisplayProp(
          { n1: this._elementsArrLength - 1 },
          { n2: this._n }
        );
      }
      this._handleDecorElement();
    } else {
      this._slides[this._n].style.order = this._n + this._elementsArrLength;

      this._n++;

      if (this._auxElements) {
        this._setDisplayProp({ n1: this._n - 1 }, { n2: this._n });
      }
      this._handleDecorElement();
    }
  };

  _shiftLeft = () => {
    if (this._n === 0) {
      // sets the conditions as if user scrolled to the last image
      for (let i = 0; i < this._elementsArrLength - 1; i++) {
        this._slides[i].style.order = i + this._elementsArrLength;
      }

      this._n = this._elementsArrLength - 1;

      if (this._auxElements) {
        this._setDisplayProp({ n1: 0 }, { n2: this._n });
      }
      this._handleDecorElement();
    } else {
      this._n--;

      this._slides[this._n].style.order = 0;

      if (this._auxElements) {
        this._setDisplayProp({ n1: this._n + 1 }, { n2: this._n });
      }
      this._handleDecorElement();
    }
  };

  _handleTouch() {
    if (this._touchEndX < this._touchStartX) this._shiftRight();
    if (this._touchEndX > this._touchStartX) this._shiftLeft();
  }

  _setClickEventListeners() {
    this._buttonLeft.addEventListener("click", this._shiftLeft);
    this._buttonRight.addEventListener("click", this._shiftRight);
  }

  _setTouchEventListeners() {
    this._container.addEventListener("touchstart", (evt) => {
      this._touchStartX = evt.changedTouches[0].screenX;
    });
    this._container.addEventListener("touchend", (evt) => {
      this._touchEndX = evt.changedTouches[0].screenX;
      this._handleTouch();
    });
  }

  enable() {
    if (this._auxElements) {
      this._shiftedElements = this._getAuxElementsList();
    }
    if (this._enableButtonControls) this._setClickEventListeners();
    if (this._enableTouchControls) this._setTouchEventListeners();
  }
}
