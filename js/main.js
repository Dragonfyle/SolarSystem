import Animator from './Animator.js';
import Spinner from './Spinner.js';
import Description from './Description.js';

new Animator();
new Spinner(document.querySelector('.spinner'));
new Description(document.querySelector('.space__sun--overlay'));
new Description(document.querySelector('.space__mercury--overlay'));
new Description(document.querySelector('.space__venus--overlay'));
new Description(document.querySelector('.space__earth--overlay'));
new Description(document.querySelector('.space__mars--overlay'));
new Description(document.querySelector('.space__saturn--overlay'));
new Description(document.querySelector('.space__jupiter--overlay'));
new Description(document.querySelector('.space__uranus--overlay'));
new Description(document.querySelector('.space__neptune--overlay'));

// class Main {
// constructor() {
// window.addEventListener('DOMContentLoaded', this.#init);
// }
// #init() {}
// }
