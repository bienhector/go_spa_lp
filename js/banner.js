import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

var swiper = new Swiper('.banner-wrapper', {
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: '.swiper-button-next.banner-button-next',
    prevEl: '.swiper-button-prev.banner-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

swiper.on('slideChange', function () {
  var slides = document.querySelectorAll('.swiper-slide');

  slides.forEach((s) => {
    var slideFadeIns = s.querySelectorAll('.slide-and-fade-in');

    slideFadeIns.forEach((e) => {
      e.classList.remove('slide-and-fade-in');
    });
  });

  var activeSlide = slides[swiper.activeIndex];

  var bannerSlideItem = activeSlide.querySelector('.banner-slide__item');

  var h3 = bannerSlideItem.querySelector('h3');
  var h2 = bannerSlideItem.querySelector('h2');
  var p = bannerSlideItem.querySelector('p');
  var a = bannerSlideItem.querySelector('a');

  h3.classList.add('slide-and-fade-in');
  h2.classList.add('slide-and-fade-in');
  p.classList.add('slide-and-fade-in');
  a.classList.add('slide-and-fade-in');
});
