const coachesData = [
  {
    name: 'Vadim Makhmudov',
    position: 'One of the leading members of the Union of Architects of Uzbekistan recognized for his lifetime achievement in architecture',
    responsibilities: 'You will explore together at least five design studios in Tashkent. There you will be able to work on real-world projects with architects and gain insight into the lives and work ethics of architects.',
    photo: './images/speaker-vadim.jpg',
  },
  {
    name: 'Alexandra Lee',
    position: 'Art Specialist at Yeoju Technical Institute in Tashkent',
    responsibilities: 'Practice a variety of drawing and painting techniques with Alexandra. At her workshops, both beginners and advanced artists work with different types of coloured pencils, papers, and other related materials.',
    photo: './images/speaker-alexandra.jpg',
  },
  {
    name: 'Shukur Djuraev',
    position: 'Professor, Doctor of Architecture in History and Theory of Architecture, and Urban Planning',
    responsibilities: 'Known for his remarkable talent for explaining extremely complicated ideas in simple terms, Shukur will be your principal instructor. Teaching methods include lectures, tutorials, practical demonstrations, fieldwork and e-learning.',
    photo: './images/speaker-shukur.jpg',
  },
  {
    name: 'Andrea Schmidt',
    position: 'Docent in architecture and associate professor in theory and history of architecture at TIACE',
    responsibilities: 'Understand architecture as both cultural expression and technical achievement. Vivid analyses of exemplary buildings and hands-on exercises in drawing and modelling will bring you closer to the work of architects.',
    photo: './images/speaker-andrea.jpg',
  },
  {
    name: 'Yulia Nazarova',
    position: 'Certified coach and mentor with 8 years of experience in HR',
    responsibilities: 'You will replace your ingrained unhealthy habits with new ones that will benefit your study, work and life. Yuliya will help you to cultivate a “growth mindset” and foster confidence in your abilities and responsibility for your actions.',
    photo: './images/speaker-yulia.jpg',
  },
  {
    name: 'Christina Tursunova',
    position: 'Urban Planning Department Head, TIACE',
    responsibilities: 'Christina will introduce you to the career development process and different professional planning tools. You will create a career plan that will help you move smoothly from high school to further education or employment.',
    photo: './images/speaker-christina.jpg',
  },
];

for (let i = 0; i < coachesData.length; i += 1) {
  const coachesSection = document.getElementById('coaches');

  const coachCard = document.createElement('article');
  coachCard.id = `coach${i}`;
  if (i !== 1 && i !== 0) {
    coachCard.classList.add('hidden');
  }

  const coachPhoto = document.createElement('img');
  coachPhoto.alt = `Coach#${i}`;
  coachPhoto.src = coachesData[i].photo;
  coachCard.appendChild(coachPhoto);

  const coachName = document.createElement('h3');
  coachName.textContent = coachesData[i].name;
  coachCard.appendChild(coachName);

  const coachPosition = document.createElement('h4');
  coachPosition.textContent = coachesData[i].position;
  coachCard.appendChild(coachPosition);

  const divider = document.createElement('hr');
  coachCard.appendChild(divider);

  const coachRespons = document.createElement('p');
  coachRespons.textContent = coachesData[i].responsibilities;
  coachCard.appendChild(coachRespons);

  coachesSection.appendChild(coachCard);
}