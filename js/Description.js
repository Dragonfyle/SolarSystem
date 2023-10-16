export default class Description {
  #celestialBody;
  #description;
  #data;
  #header;
  #animation;
  #isHidden;
  #WIDTH = '15vw';
  #HIDDEN_WIDTH = '0vw';
  #DISPLAY = {
    NONE: 'none',
    BLOCK: 'block',
  };
  #ANIMATION = {
    NAME: 'scale',
    NO_NAME: 'none',
    DIRECTION: {
      NORMAL: 'normal',
      REVERSE: 'reverse',
    },
    PLAY_STATE: {
      RUNNING: 'running',
      PAUSED: 'paused',
    },
  };
  constructor(selector) {
    this.#isHidden = true;
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
    this.#description.addEventListener('animationend', () => {
      this.#handleAnimEnd();
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
    this.widthNow = this.#WIDTH;
    this.#setAnimProperties({
      name: this.#ANIMATION.NAME,
      direction: this.#ANIMATION.DIRECTION.NORMAL,
      playState: this.#ANIMATION.PLAY_STATE.RUNNING,
    });
    this.#setHeaderDisplay(this.#DISPLAY.BLOCK);
    this.#setDataDisplay(this.#DISPLAY.BLOCK);
    this.#isHidden = false;
  }

  #hideDescription() {
    this.#setAnimProperties({
      name: this.#ANIMATION.NAME,
      direction: this.#ANIMATION.DIRECTION.REVERSE,
      playState: this.#ANIMATION.PLAY_STATE.RUNNING,
    });
    this.#setHeaderDisplay(this.#DISPLAY.NONE);
    this.#setDataDisplay(this.#DISPLAY.NONE);
    this.#isHidden = true;
  }

  set widthNow(width) {
    this.#description.style.width = width;
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

  #setAnimProperties({ name, direction, playState }) {
    this.#setAnimName(name);
    this.#setAnimDirection(direction);
    this.#setAnimPlayState(playState);
  }

  #handleAnimEnd() {
    this.#setAnimProperties({
      name: this.#ANIMATION.NO_NAME,
      playState: this.#ANIMATION.PLAY_STATE.PAUSED,
    });
    this.#isHidden
      ? (this.widthNow = this.#HIDDEN_WIDTH)
      : (this.widthNow = this.#WIDTH);
  }
}
