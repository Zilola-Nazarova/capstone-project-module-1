const mediaQuery = window.matchMedia('(min-width: 768px)');

function screenTest(e) {
  if (e.matches) {
    document.querySelector('.privacy-policy').classList.remove('hidden');
    document.querySelector('.terms-cookies').classList.remove('hidden');
  } else {
    document.querySelector('.privacy-policy').classList.add('hidden');
    document.querySelector('.terms-cookies').classList.add('hidden');
  }
}

screenTest(mediaQuery);
mediaQuery.addListener(screenTest);