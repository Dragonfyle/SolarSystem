import BackgroundMove from './BackgroundMove.js';
import Spinner from './Spinner.js';
import Description from './Description.js';

class Main {
  #BODIES = {
    SUN: 'sun',
    MERCURY: 'mercury',
    VENUS: 'venus',
    EARTH: 'earth',
    MARS: 'mars',
    SATURN: 'saturn',
    JUPITER: 'jupiter',
    URANUS: 'uranus',
    NEPTUNE: 'neptune',
  };
  #spinnerElement = document.querySelector('.spinner');

  constructor() {
    window.addEventListener('DOMContentLoaded', () => {
      this.#init();
    });
  }
  #init() {
    new BackgroundMove();
    new Spinner(this.#spinnerElement);
    new Description(this.#BODIES.SUN);
    new Description(this.#BODIES.MERCURY);
    new Description(this.#BODIES.VENUS);
    new Description(this.#BODIES.EARTH);
    new Description(this.#BODIES.MARS);
    new Description(this.#BODIES.SATURN);
    new Description(this.#BODIES.JUPITER);
    new Description(this.#BODIES.URANUS);
    new Description(this.#BODIES.NEPTUNE);
  }
}

new Main();
