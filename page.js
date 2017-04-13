'use strict';

const Page = class Page {
  constructor(src) {
    this.img = new Image(1600, 900);
    this.img.src = src;
  }

  toDom() {
    return this.img;
  }

  getOffset() {
    return this.img.getBoundingClientRect();
  }

};

