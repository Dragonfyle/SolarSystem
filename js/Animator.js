export default class Animator {
  #stars;
  #TRANSLATE_MULTIPLIER = 0.05;
  constructor() {
    // this.#TRANSLATE_MULTIPLIER = 0.1;
    this.#stars = document.querySelectorAll('.bodies');

    window.addEventListener('DOMContentLoaded', (e) => {
      this.#handleMove(e);
    });
    window.addEventListener('mousemove', (e) => {
      this.#handleMove(e);
    });
  }
  #translateElement(element, { clientX, clientY }) {
    const ratioX = element.getAttribute('ratioX');
    const ratioY = element.getAttribute('ratioY');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) * -ratioX * this.#TRANSLATE_MULTIPLIER;
    const y = (clientY - centerY) * -ratioY * this.#TRANSLATE_MULTIPLIER;

    element.style.transform = `translate(${x}%, ${y}%)`;
  }

  #handleMove(e) {
    this.#stars.forEach((image) => {
      this.#translateElement(image, e);
    });
  }
}
