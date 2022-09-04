document.addEventListener("DOMContentLoaded", function () {
  const slide = new HeroSlider(".swiper");
 slide.start();
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: "flow",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 1000,
        disableOnInteraction: true,
        pauseOnMouseEnter:true,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
