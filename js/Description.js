export default class Description {
  #celestialBody;
  #description;
  #data;
  #header;
  constructor(selector) {
    this.#celestialBody = selector;
    this.#description = document.querySelector(
      `.descriptions__${selector.dataset.name}`
    );
    this.#data = document.querySelectorAll(
      `.descriptions__data--${selector.dataset.name}`
    );
    this.#header = document.querySelector(
      `.descriptions__header--${selector.dataset.name}`
    );
    window.addEventListener('load', () => {
      this.#initListener();
    });
  }

  #initListener() {
    this.#celestialBody.addEventListener('mouseover', () => {
      this.#showDescription();
    });
    this.#celestialBody.addEventListener('mouseout', () => {
      this.#hideDescription();
    });
  }

  #showDescription() {
    this.#data.forEach((data) => (data.style.display = 'block'));
    this.#header.style.display = 'block';
    this.#description.style.width = '15vw';
  }

  #hideDescription() {
    this.#description.style.width = '0vw';
    this.#header.style.display = 'none';
    this.#data.forEach((data) => (data.style.display = 'none'));
  }
}
