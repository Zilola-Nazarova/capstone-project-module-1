const restOfMobile = document.querySelectorAll('footer, #partners, #coaches article:not(#coach0, #coach1)');
const moreBtn = document.querySelector('#more');
moreBtn.addEventListener('click', () => {
  restOfMobile.forEach((element) => {
    element.classList.remove('hidden');
  });
  moreBtn.classList.add('hidden');
});
