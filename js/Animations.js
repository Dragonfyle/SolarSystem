export default class Animations {
  SCALE_BOUNCE = {
    NAME: 'scale',
    CSS: `@keyframes scale {
        0% {
            transform: scaleX(0);
        }
    
        2% {
            transform: scaleX(0.2);
        }

        100% {
            transform: scaleX(1);
        }
    
    }`,
  };
  constructor() {
    this.#addNewStyleElement(this.SCALE_BOUNCE.CSS);
  }
  #addNewStyleElement(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.append(style);
  }
}
