const handleOpenSideBar = (e) => {
  e.preventDefault();
  document.querySelector('.overlay').classList.add('fade-in-overlay');
  document.querySelector('.overlay').classList.remove('fade-out-overlay');

  document.querySelector('.sidebar-wrapper').classList.add('slide-in');
  document.querySelector('.sidebar-wrapper').classList.remove('slide-out');

  document.body.style.overflowY = 'hidden';
};

const handleCloseSideBar = (e) => {
  e.preventDefault();
  document.querySelector('.overlay').classList.remove('fade-in-overlay');
  document.querySelector('.overlay').classList.add('fade-out-overlay');

  document.querySelector('.sidebar-wrapper').classList.remove('slide-in');
  document.querySelector('.sidebar-wrapper').classList.add('slide-out');

  document.body.style.overflowY = 'auto';
};

document
  .querySelector('.spa-toggle-button')
  .addEventListener('click', handleOpenSideBar);

document
  .querySelector('.overlay')
  .addEventListener('click', handleCloseSideBar);

document
  .querySelector('.close-icon')
  .addEventListener('click', handleCloseSideBar);
