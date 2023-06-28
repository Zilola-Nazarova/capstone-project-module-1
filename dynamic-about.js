const mediaQuery1 = window.matchMedia('(min-width: 768px)');

function screenTest(e) {
  if (e.matches) {
    document.querySelector('h1 hr').classList.remove('hidden');
    document.querySelector('#logo-design p').textContent = "The Logo of TIACE Architecture Bootcamps 2021 was decided through a logo competition from 12.June to 24.July. After online public voting and Selection Committee's judging process, the logo from Javakhir Radjabov won the prize. After consultation with Mr. Radjabov we optimized the prize-winning-logo for this year's Bootcamp as following:";
    document.querySelector('#partners').classList.add('hidden');
    document.querySelector('footer img').src = './icons/logo-inverted.png';
  } else {
    document.querySelector('h1 hr').classList.add('hidden');
    document.querySelector('#logo-design p').textContent = 'The Logo of TIACE Architecture Bootcamps 2021 was decided through a logo competition from 12.June to 24.July.'
    document.querySelector('#partners').classList.remove('hidden');
    document.querySelector('footer img').src = './icons/logo3.png';
  }
}

screenTest(mediaQuery1);
mediaQuery1.addListener(screenTest);