const mediaQuery = window.matchMedia('(min-width: 768px)');

function screenTest(e) {
  if (e.matches) {
    document.querySelector('.privacy-policy').classList.toggle('hidden');
    document.querySelector('.terms-cookies').classList.toggle('hidden');
  }
}

mediaQuery.addListener(screenTest);
