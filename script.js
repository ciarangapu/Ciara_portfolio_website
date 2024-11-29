const MobileMenu = document.getElementById('mobile_menu');
MobileMenu.addEventListener('click', () => {
  const DesktopMenu = document.getElementById('desktop_menu');
  DesktopMenu.classList.toggle('active');
  MobileMenu.classList.toggle('active');
});
// object to store card properties
const projects = [

  {
    image: './assets/images/snapshoot portfolio.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './assets/images/snapshoot portfolio.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './assets/images/snapshoot portfolio.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './assets/images/snapshoot portfolio.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './assets/images/snapshoot portfolio.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

  {
    image: './assets/images/snapshoot portfolio.svg',
    description: 'An interactive gallery that showcase my project',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
    link: '#',
    githublink: '#',
    liveserverlink: '#',
  },

];

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.remove();
    // window.removeEventListener('click', outsideClick);
  }
}
//function for popup

function openModal(projects) {
  const modal = document.createElement('div');
  modal.id = 'projectModal';
  modal.classList.add('modal_style');

  const ModalContent = document.createElement('div');
  ModalContent.classList.add('modalcontent');
  modal.appendChild(ModalContent);

  const closeButton = document.createElement('span');
  closeButton.classList.add('closebutton');
  closeButton.innerHTML = '&times';
  closeButton.addEventListener('click', () => closeModal(projects));
  ModalContent.appendChild(closeButton);

  const ModalImage = document.createElement('img');
  ModalImage.src = projects.image;
  ModalImage.alt = projects.title;
  ModalContent.appendChild(ModalImage);

  const ModalTitle = document.createElement('h3');
  ModalTitle.innerHTML = projects.title;
  ModalContent.appendChild(ModalTitle);

  const ModalList = document.createElement('ul');
  ModalList.id = 'modaltechnologies';
  projects.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    ModalList.appendChild(listItem);
  });
  ModalContent.appendChild(ModalList);

  const ModalDescription = document.createElement('p');
  ModalDescription.innerHTML = projects.description;
  ModalContent.appendChild(ModalDescription);
  modal.appendChild(ModalContent);
  document.body.appendChild(modal);

  const modallink = document.createElement('div');
  modallink.classList.add('modal_link');
  const githublink = document.createElement('a');
  githublink.classList.add('abt_btn');
  githublink.href = projects.githublink;
  githublink.target = '_blank';
  githublink.textContent = 'see live';
  modallink.appendChild(githublink);

  const livelink = document.createElement('a');
  livelink.classList.add('abt_btn');
  livelink.href = projects.livelink;
  livelink.target = '_blank';
  livelink.textContent = 'see source';
  modallink.appendChild(livelink);
  ModalContent.appendChild(modallink);
  modal.appendChild(ModalContent);
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const cardImage = document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'card Image';
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);
  const cardList = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.innerHTML = 'see project';
  card.appendChild(cardBtn);
  cardBtn.addEventListener('click', () => openModal(project));
  return card;
}


// Function to insert the  card in the projects_cards div

function insertCards() {
  const projectsContainer = document.getElementById('projects_cards');
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}
document.addEventListener('DOMContentLoaded', insertCards);
