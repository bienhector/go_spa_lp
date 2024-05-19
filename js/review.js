import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

var swiper = new Swiper('.review-slide', {
  slidesPerView: 1,
  module: [Autoplay],
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
