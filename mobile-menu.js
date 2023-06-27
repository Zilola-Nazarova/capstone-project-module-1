const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('hidden');
  const restPage = document.querySelectorAll('nav, main, footer');
  restPage.forEach((element) => {
    element.classList.toggle('hidden');
  });
});

const closeBtn = document.getElementById('close-menu');

closeBtn.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('hidden');
  const restPage = document.querySelectorAll('nav, main, footer');
  restPage.forEach((element) => {
    element.classList.toggle('hidden');
  });
});
