window.addEventListener('scroll', function (e) {
  if (this.window.scrollY >= 100) {
    this.document.querySelector('.header-wrapper').classList.add('dark');
    this.document.querySelector('.header-wrapper img[alt="logo"]').src =
      '/images/logo-dark.svg';
    this.document.querySelector('.header-wrapper img[alt="menu"]').src =
      '/images/menu-dark.svg';
  } else {
    this.document.querySelector('.header-wrapper').classList.remove('dark');
    this.document.querySelector('.header-wrapper img[alt="logo"]').src =
      '/images/logo.svg';
    this.document.querySelector('.header-wrapper img[alt="menu"]').src =
      '/images/menu.svg';
  }
});

document.querySelector('.header-toggle-btn').addEventListener('click', () => {
  if (
    document
      .querySelector('.header-nav_mobile')
      .classList.contains('height-animation-in')
  ) {
    document
      .querySelector('.header-nav_mobile')
      .classList.remove('height-animation-in');
    document
      .querySelector('.header-nav_mobile')
      .classList.add('height-animation-out');

    setTimeout(() => {
      document
        .querySelector('.header-nav_mobile')
        .classList.remove('height-animation-out');
    }, 700);
  } else {
    document
      .querySelector('.header-nav_mobile')
      .classList.remove('height-animation-out');
    document
      .querySelector('.header-nav_mobile')
      .classList.add('height-animation-in');
  }
});
