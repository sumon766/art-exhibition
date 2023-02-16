// Script for navigation menu
const navOpenButton = document.getElementById('bars');
const navCloseButton = document.getElementById('cross');

const nav = document.querySelector('.nav');

navOpenButton.addEventListener('click', () => {
  nav.style.marginLeft = '0px';
  nav.style.transition = 'all 1s ease-in-out';
  navCloseButton.style.display = 'block';
  navCloseButton.style.color = '#fff';
  navOpenButton.style.display = 'none';
});

navCloseButton.addEventListener('click', () => {
  if (window.screen.width < 1049) {
    nav.style.marginLeft = '-1000px';
  }
  nav.style.transition = 'all 1s ease-in-out';
  navCloseButton.style.display = 'none';
  navOpenButton.style.display = 'block';
});