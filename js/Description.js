import Animations from './Animations.js';

export default class Description extends Animations {
  //   static #isPlaying = false;
  #celestialBody;
  #description;
  #data;
  #header;
  #overlay;
  #isHidden = true;
  #WIDTH = '15vw';
  #HIDDEN_WIDTH = '0vw';
  #DISPLAY = {
    NONE: 'none',
    BLOCK: 'block',
  };
  ANIMATION = {
    NAME: this.SCALE_BOUNCE.NAME,
    NO_NAME: 'none',
    DIRECTION: {
      NORMAL: 'normal',
      REVERSE: 'reverse',
    },
    PLAY_STATE: {
      RUNNING: 'running',
      PAUSED: 'paused',
    },
    DURATION: '.1s',
    TIMING_FUNCTION: 'linear',
  };
  #BORDER = {
    STYLE: {
      NONE: 'none',
      SOLID: 'solid',
    },
  };
  constructor(name) {
    super();
    this.#celestialBody = name;
    this.#description = document.querySelector(
      `.descriptions__${this.#celestialBody}`
    );
    this.#data = document.querySelectorAll(
      `.descriptions__data--${this.#celestialBody}`
    );
    this.#header = document.querySelector(
      `.descriptions__header--${this.#celestialBody}`
    );
    this.#overlay = document.querySelector(
      `.space__${this.#celestialBody}--overlay`
    );

    window.addEventListener('load', () => {
      this.#initListener();
    });
    // this.#description.addEventListener('animationstart', () => {
    //   this.#handleAnimStart();
    // });
    this.#description.addEventListener('animationend', () => {
      this.#handleAnimEnd();
    });

    this.#initAnimProperties({
      delay: this.ANIMATION.DURATION,
      timing: this.ANIMATION.TIMING_FUNCTION,
      border: this.#BORDER.NONE,
    });
  }

  #initListener() {
    this.#overlay.addEventListener('mouseover', () => {
      this.#showDescription();
    });
    this.#overlay.addEventListener('mouseout', () => {
      this.#hideDescription();
    });
  }

  #showDescription() {
    // if (Description.#isPlaying) {
    //   return;
    // }
    this.widthNow = this.#WIDTH;
    this.#setBorder(this.#BORDER.STYLE.SOLID);
    this.#setAnimProperties({
      name: this.ANIMATION.NAME,
      direction: this.ANIMATION.DIRECTION.NORMAL,
      playState: this.ANIMATION.PLAY_STATE.RUNNING,
    });
    this.#setHeaderDisplay(this.#DISPLAY.BLOCK);
    this.#setDataDisplay(this.#DISPLAY.BLOCK);

    this.#isHidden = false;
    console.log(getComputedStyle(this.#description));
  }

  #hideDescription() {
    this.#setAnimProperties({
      direction: this.ANIMATION.DIRECTION.REVERSE,
      name: this.ANIMATION.NAME,
      playState: this.ANIMATION.PLAY_STATE.RUNNING,
    });
    this.#setHeaderDisplay(this.#DISPLAY.NONE);
    this.#setDataDisplay(this.#DISPLAY.NONE);

    this.#isHidden = true;
  }

  set widthNow(width) {
    this.#description.style.width = width;
  }

  #setBorder(border) {
    this.#description.style.borderStyle = border;
  }

  #setAnimName(name) {
    this.#description.style.animationName = name;
  }

  #setAnimDirection(direction) {
    this.#description.style.animationDirection = direction;
  }

  #setAnimPlayState(state) {
    this.#description.style.animationPlayState = state;
  }

  #setHeaderDisplay(display) {
    this.#header.style.display = display;
  }

  #setDataDisplay(display) {
    this.#data.forEach((data) => (data.style.display = display));
  }

  #setAnimDuration(duration) {
    this.#description.style.animationDuration = duration;
  }

  #setAnimTiming(timing) {
    this.#description.style.animationTimingFunction = timing;
  }

  #setAnimProperties({ name, direction, playState }) {
    this.#setAnimName(name);
    this.#setAnimDirection(direction);
    this.#setAnimPlayState(playState);
  }

  #handleAnimEnd() {
    this.#setAnimProperties({
      name: this.ANIMATION.NO_NAME,
      playState: this.ANIMATION.PLAY_STATE.PAUSED,
    });

    if (this.#isHidden) {
      this.#setBorder(this.#BORDER.STYLE.NONE);
      this.widthNow = this.#HIDDEN_WIDTH;
    } else {
      this.widthNow = this.#WIDTH;
      //   this.#setBorder(this.#BORDER.STYLE.SOLID);
    }

    this.#isHidden;

    // Description.#isPlaying = false;
  }

  #initAnimProperties({ delay, timing, border }) {
    this.#setAnimDuration(delay);
    this.#setAnimTiming(timing);
    this.#setBorder(border);
  }

  //   #handleAnimStart() {
  // Description.#isPlaying = true;
  //   }

  //   static set isPlaying(boolean) {
  // if (typeof boolean === 'boolean') {
  //   Description.#isPlaying = boolean;
  // }
  //   }

  //   static get isPlaying() {
  // return Description.#isPlaying;
  //   }
}
