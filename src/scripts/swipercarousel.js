import Swiper from 'swiper';
import { EffectCoverflow } from 'swiper/modules';

export function initSwiperCarousel() {
  const swiper = new Swiper('.mySwiper', {
    modules: [EffectCoverflow],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 4,
    slidesPerView: 'auto',
    initialSlide: 2,
    coverflowEffect: {
      rotate: 45,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: false,
    },
    preloadImages: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    on: {
      slideChangeTransitionEnd() {
        document.querySelectorAll('.swiper-slide').forEach(slide => {
          slide.classList.remove('slide-activa');
        });
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) activeSlide.classList.add('slide-activa');
      }
    }
  });

  swiper.on('init', () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) activeSlide.classList.add('slide-activa');
});
swiper.init();
}
