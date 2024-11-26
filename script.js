const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktop_menu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});
// object to store card properties
const projectCards = [
  {
    image: './assets/images/Snapshoot Portfolio.svg',
    description: 'An interactive gallery that showcases projects with a dynamic modal view',
    githubLink: '#',
    livelink: '#',
    title: 'multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
  },

  {
    image: './assets/images/Snapshoot Portfolio.svg',
    description: 'An interactive gallery that showcases projects with a dynamic modal view',
    githubLink: '#',
    livelink: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
  },

  {
    image: './assets/images/Snapshoot Portfolio.svg',
    description: 'An interactive gallery that showcases projects with a dynamic modal view',
    githubLink: '#',
    livelink: '#',
    title: 'multi-Post Stories Gain+Glory',
    technologies: ['rubyOnRails', 'CSS', 'javaScript', 'HTML'],
    link: '#',
  },

  {
    image: './assets/images/Snapshoot Portfolio.svg',
    description: 'An interactive gallery that showcases projects with a dynamic modal view',
    githubLink: '#',
    livelink: '#',
    title: 'multi-Post Stories Gain+Glory',
    technologies: ['rubyOnRails', 'CSS', 'javaScript', 'HTML'],
    link: '#',
  },

  {
    image: './assets/images/Snapshoot Portfolio.svg',
    description: 'An interactive gallery that showcases projects with a dynamic modal view',
    githubLink: '#',
    livelink: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['rubyOnRails', 'CSS', 'javaScript', 'HTML'],
    link: '#',
  },

  {
    image: './assets/images/Snapshoot Portfolio.svg',
    description: 'An interactive gallery that showcases projects with a dynamic modal view',
    githubLink: '#',
    livelink: '#',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['rubyOnRails', 'CSS', 'javaScript', 'HTML'],
    link: '#',
  },
];
function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.remove();
    window.removeEventListener('click', outSideClick);
  }
}
function outSideClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function openModal(project) {
  const modal = document.createElement('div');
  modal.id = 'projectModal';
  modal.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modalcontent');
  const closeButton = document.createElement('span');
  closeButton.classList.add('close_button');
  closeButton.innerHTML = '&times';
  closeButton.addEventListener('click', () => closeModal());
  modalContent.appendChild(closeButton);

  const modalImage = document.createElement('img');
  modalImage.classList.add('modalImage');
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalContent.appendChild(modalImage);

  const modalTittle = document.createElement('h3');
  modalTittle.innerHTML = project.title;
  modalContent.appendChild(modalTittle);

  const list = document.createElement('ul');
  list.id = 'modaltechnologies';
  project.technologies.forEach((tech) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = tech;
    list.appendChild(listItem);
  });
  modalContent.appendChild(list);

  const modalDescription = document.createElement('p');
  modalDescription.textContent = project.description;
  modalContent.appendChild(modalDescription);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.style.display = 'flex';
  const modalLinik = document.createElement('div');
  modalLinik.classList.add('modalLink');
  const githubLink = document.createElement('a');
  githubLink.classList.add('abt_btn');
  githubLink.style.textDecoration = 'none';
  githubLink.href = project.githubLink;
  githubLink.target = '#';
  githubLink.textContent = 'see live';
  modalLinik.appendChild(githubLink);

  const livelink = document.createElement('a');
  livelink.classList.add('abt_btn');
  livelink.href = project.livelink;
  livelink.target = '_blank';
  livelink.textContent = 'see source';
  livelink.style.textDecoration = 'none';
  modalLinik.appendChild(livelink);
  modalContent.appendChild(modalLinik);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}
// function to create a card
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const picture = document.createElement('img');
  picture.src = project.image;
  picture.alt = project.title;
  card.appendChild(picture);
  const titre = document.createElement('h3');
  titre.innerHTML = project.title;
  card.appendChild(titre);
  const list = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    list.appendChild(listItem);
  });
  card.appendChild(list);
  const cardButton = document.createElement('button');
  cardButton.textContent = 'See Project';
  cardButton.type = 'button';
  cardButton.addEventListener('click', () => openModal(project));
  card.appendChild(cardButton);
  return card;
}

// function to render project card
function renderProjectCard() {
  const projectCardsContainer = document.querySelector('.projects_cards');
  projectCards.forEach((project) => {
    const projectCard = createProjectCards(project);
    projectCardsContainer.appendChild(projectCard);
  });
}
document.addEventListener('DOMContentLoaded', renderProjectCard);
