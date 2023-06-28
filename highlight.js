const url = window.location.href;

const menuLinks = document.querySelectorAll('.mobile-menu ul a');
menuLinks.forEach((element) => {
  if (url === `${element.href}#` || url === element.href) {
    element.classList.add('active');
  }
});

const navLinks = document.querySelectorAll('.desktop-navigation a');
navLinks.forEach((element) => {
  if (url === `${element.href}#` || url === element.href) {
    element.classList.add('active');
  }
});