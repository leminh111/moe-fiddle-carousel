'use strict';
/*globals Page */

class PagesManager {
  constructor() {
    this.slider = document.getElementById("slider");
    this.imgList = [];
    this.currentSlide = this.imgList[0];
    this.currentPosition = 0;
  }

  init() {
    this.imgList.push(new Page('assets/wallhaven-466505.jpg'));
    this.imgList.push(new Page('assets/wallhaven-503875.jpg'));
    this.imgList.push(new Page('assets/wallhaven-505012.jpg'));
    this.imgList.push(new Page('assets/wallhaven-505146.jpg'));
    return this;
  }

  goToSlide(index) {
    this.currentSlide = this.imgList[index];
    return this.translateSlide();
  }

  translateSlide() {
    const offset = this.currentSlide.getOffset();
    this.currentPosition -= offset.left;
    const style = 'translate3d(' + this.currentPosition + 'px, 0px, 0px)';
    this.slider.style.transform = style;
    return this.currentPosition;
  }

  render() {
    this.imgList.forEach(image => {
      this.slider.appendChild(image.toDom());
    });
  }

}


const a = new PagesManager();
a.init().render();
