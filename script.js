
const mobile_menu = document.getElementById("mobile_menu");
mobile_menu.addEventListener("click",function(){
const desktop_menu = document.getElementById("desktop_menu");
desktop_menu.classList.toggle("active");
mobile_menu.classList.toggle("active");
})
//object to store card properties
const projectCards = [
    
 
    {
      image: "#",
      description:"An interactive gallery that showcase my project",
      title: "Multi-Post Stories Gain+Glory",
      technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
      link: "#",
      githublink:"#",
     liveserverlink:"#",
    },
  
    {
      image: "./asset/images/mobile_Portfolio_1.svg",
      description:"An interactive gallery that showcase my project",
      title: "Multi-Post Stories Gain+Glory",
      technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
      link: "#",
      githublink:"#",
     liveserverlink:"#",
    },
  
    {
      image: "./asset/images/mobile_Portfolio_1.svg",
      description:"An interactive gallery that showcase my project",
      title: "Multi-Post Stories Gain+Glory",
      technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
      link: "#",
      githublink:"#",
     liveserverlink:"#",
    },
  
    {
      image: "./asset/images/mobile_Portfolio_1.svg",
      description:"An interactive gallery that showcase my project",
      title: "Multi-Post Stories Gain+Glory",
      technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
      link: "#",
      githublink:"#",
     liveserverlink:"#",
    },
  
    {
      image: "./asset/images/mobile_Portfolio_1.svg",
      description:"An interactive gallery that showcase my project",
      title: "Multi-Post Stories Gain+Glory",
      technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
      link: "#",
      githublink:"#",
     liveserverlink:"#",
    },
  
      {
        image: "./asset/images/mobile_Portfolio_1.svg",
        description:"An interactive gallery that showcase my project",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['RubyOnRails', 'CSS', 'JavaScript', 'HTML'],
        link: "#",
        githublink:"#",
       liveserverlink:"#",
      }
  
  
  
      
      ]
      
      function createProjectCards(project) {
        const card = document.createElement("div");
        card.classList.add("project-card");
      
        const picture = document.createElement("img");
        picture.src = project.image;
        picture.alt = project.title;
        card.appendChild(picture);
      
        const subPage = document.createElement("div");
        subPage.classList.add("project-info");
      
        const titre = document.createElement("h3");
        titre.textContent = project.title;
        project_Title.appendChild(titre);
      
        const buttonPlace = document.createElement("div");
        buttonPlace.classList.add("buttons");
      
        const list = document.createElement("ul");
        project.technologies.forEach(element => {
          const listItem = document.createElement("li");
          listItem.textContent = element;
          list.appendChild(listItem);
        });
        buttonPlace.appendChild(list);
      
       project_Button.appendChild(buttonPlace);
      
        const cardButton = document.createElement("button");
        cardButton.textContent = "See Project";
        cardButton.classList.add("view-project-button");
        cardButton.addEventListener("click", () => openModal(project));
        project_Button.appendChild(cardButton);
      
        card.appendChild(project_Button);
        return card;
      }
      
      function openModal(project) {
        const modal = document.createElement("div");
        modal.id = 'projectModal';
        modal.classList.add('modal');
      
        const modalContent = document.createElement("div");
        modalContent.classList.add('modalcontent');
      
        const closeButton = document.createElement("span");
        closeButton.textContent = "×";
        closeButton.classList.add("closebutton");
        closeButton.addEventListener("click", () => closeModal());
        modalContent.appendChild(closeButton);
      
        const madalImage = document.createElement("img");
        madalImage.src = project.image;
        madalImage.alt = project.title;
        modalContent.appendChild(madalImage);
      
        const modalTitle = document.createElement("h3");
        modalTitle.textContent = project.title;
        modalContent.appendChild(modalTitle);
      
        const list = document.createElement("ul");
        list.id = "modaltechnologies";
        project.technologies.forEach(tech => {
          const listItem = document.createElement("li");
          listItem.textContent = tech;
          list.appendChild(listItem);
        });
        modalContent.appendChild(list);
      
        const modalDescription = document.createElement("p");
        modalDescription.textContent = project.description;
        modalContent.appendChild(modalDescription);
      
        const modallink = document.createElement("div");
        modallink.classList.add("modallink");
      
        const githublink = document.createElement("a");
        githublink.textContent = "See live";
        githublink.href = project.livelink;
        githublink.target = "_blank";
        modallink.appendChild(githublink);
      
        const livelink = document.createElement("a");
        livelink.textContent = "See source";
        livelink.href = project.githublink;
        livelink.target = "_blank";
        modallink.appendChild(livelink);
        modalContent.appendChild(modallink);
      
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        modal.style.display = "flex";
      }
      
      function closeModal() {
        const modal = document.getElementById("projectModal");
        if (modal) {
          modal.remove();
          window.removeEventListener("click", outsideClick);
        }
      }
      
      function outsideClick(event) {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }
      
      // Function to render project card
      function renderProjectCard() {
        const projectCardsContainer = document.querySelector(".project");
      
        project.forEach(project => {
          const projectCard = createProjectCards(project);
          projectCardsContainer.appendChild(projectCard);
        });
      }
      
      document.addEventListener("DOMContentLoaded", renderProjectCard);