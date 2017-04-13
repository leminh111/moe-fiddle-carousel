'use strict';

class Page {
  constructor(src) {
    this.img = new Image(1600, 900);
    this.img.src = src;
    this.img.style.transition = 'transform 0.5s ease';
  }

  toDom() {
    return this.img;
  }

  getOffset() {
    return this.img.getBoundingClientRect();
  }

  goInSlide(parentEl, ev) {
    if (ev.target === parentEl) {
      console.log(ev);
      parentEl.removeEventListener('transitionend', window.listener);
      this.img.style.transform = 'scale3d(1,1,1)';
    }
  }

  goOutSlide(event) {
    this.img.style.transform = 'scale3d(0.8,0.8,1)';
  }

}

