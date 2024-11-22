const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('show');
  overlay.classList.add('show');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});