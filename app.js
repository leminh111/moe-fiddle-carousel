'use strict';
/*globals Page */

class PagesManager {
  constructor() {
    this.imgList = [];
    this.currentPosition = 0;
    this.slider = document.getElementById("slider");
    this.slider.style.transition = 'transform 0.5s ease';
  }

  init() {
    this.imgList.push(new Page('assets/wallhaven-466505.jpg'));
    this.imgList.push(new Page('assets/wallhaven-503875.jpg'));
    this.imgList.push(new Page('assets/wallhaven-505012.jpg'));
    this.imgList.push(new Page('assets/wallhaven-505146.jpg'));
    this.currentSlide = this.imgList[0];
    this.oldSlide = this.imgList[0];
    return this;
  }

  goToSlide(index) {
    this.oldSlide = this.currentSlide;
    this.currentSlide = this.imgList[index];
    this.goOutCurrentSlide();
  }

  goOutCurrentSlide() {
    const offset = this.currentSlide.getOffset();
    this.currentPosition -= offset.left;

    const sliderListener = this.sliderAnimation.bind(this);
    window.sliderListener = sliderListener;
    this.oldSlide.toDom().addEventListener('transitionend', sliderListener);

    this.allSlideEffect();

  }

  sliderAnimation() {
    this.oldSlide.toDom().removeEventListener('transitionend', window.sliderListener);

    const listener = this.currentSlide.goInSlide.bind(this.currentSlide, this.slider);
    window.listener = listener;
    this.slider.addEventListener('transitionend', listener);

    const style = 'translate3d(' + this.currentPosition + 'px, 0px, 0px)';
    this.slider.style.transform = style;

  }

  allSlideEffect() {
    this.imgList.forEach(image => {
      image.goOutSlide();
    });
  }

  render() {
    this.imgList.forEach(image => {
      this.slider.appendChild(image.toDom());
    });
  }

}


const a = new PagesManager();
a.init().render();
