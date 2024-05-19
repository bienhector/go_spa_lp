import '../scss/style.scss';

import '../scss/header.scss';
import '../scss/button.scss';
import '../scss/sidebar.scss';
import '../scss/banner.scss';
import '../scss/why-choose-us.scss';
import '../scss/category.scss';
import '../scss/feature.scss';
import '../scss/service.scss';
import '../scss/review.scss';
import '../scss/footer.scss';
import '../scss/form.scss';

import 'swiper/css/bundle';

import './header';
import './banner';
import './sidebar';
import './category';
import './review';

// HANDLE HOVER BUTTON
const spaButtons = document.querySelectorAll('.spa-button');

spaButtons.forEach((btn) => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('mouse-enter');
    btn.classList.remove('mouse-leave');
  });

  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('mouse-enter');
    btn.classList.add('mouse-leave');

    setTimeout(() => {
      btn.classList.remove('mouse-leave');
    }, 500);
  });
});

// ============================================================================
