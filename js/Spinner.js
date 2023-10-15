export default class Spinner {
  #spinner;
  #overlay;
  constructor(selector) {
    this.#overlay = document.querySelector('.overlay');
    this.#spinner = document.querySelector(selector);
    window.addEventListener('DOMContentLoaded', () => this.#displayLoading());
    window.addEventListener('load', () => this.#hideLoading());
  }
  #displayLoading() {
    this.#spinner.style.display = 'block';
    this.#overlay.style.display = 'block';
  }
  #hideLoading() {
    this.#spinner.style.display = 'none';
    this.#overlay.style.display = 'none';
  }
}
