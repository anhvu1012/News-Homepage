const menuOpenBtn = document.getElementById('menu-open-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const navLinks = document.querySelectorAll('a');

const navContainer = document.getElementById('navigation-container');

menuOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navContainer.style.display = 'block';
});

menuCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navContainer.style.display = 'none';
});

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
