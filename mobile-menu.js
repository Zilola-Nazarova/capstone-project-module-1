const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('hidden');
  const restPage = document.querySelectorAll('nav, main, footer');
  restPage.forEach((element) => {
    element.classList.add('hidden');
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
  const restOfMobile = document.querySelectorAll('footer, #partners, #coaches article:not(#coach0, #coach1)');
  const moreBtn = document.querySelector('#more');
  restOfMobile.forEach((element) => {
    element.classList.add('hidden');
  });
  moreBtn.classList.remove('hidden');
});
