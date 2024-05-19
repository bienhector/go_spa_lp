import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

var swiper = new Swiper('.category-slide', {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
