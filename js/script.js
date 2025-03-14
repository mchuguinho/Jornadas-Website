// Autor: Hugo Diniz e Eduardo Couto
// Armazena as informações de cada curso e do núcleo para posteriormente apresentá-las no modal

// Fecha a navbar ao clicar num link
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  var isOpen = false;

  navbarToggler.setAttribute("data-bs-toggle", "");
  
  navbarCollapse.classList.remove("show");
  navbarCollapse.style.maxHeight = "0";

  navbarToggler.addEventListener("click", function (e) {
    e.preventDefault();
    if (isOpen) {
      navbarCollapse.style.maxHeight = "0";
      setTimeout(function() {
        navbarCollapse.classList.remove("show");
      }, 400);
    } else {
      navbarCollapse.classList.add("show");
      setTimeout(function() {
        var height = navbarCollapse.scrollHeight + "px";
        navbarCollapse.style.maxHeight = height;
      }, 10);
    }
    
    isOpen = !isOpen;
  });

  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && isOpen) {
        navbarCollapse.style.maxHeight = "0";
        setTimeout(function() {
          navbarCollapse.classList.remove("show");
        }, 400);
        isOpen = false;
      }
    });
  });
});

// Carrega a imagem de fundo de forma assíncrona
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const body = document.body;
  const bgImage = new Image();
  bgImage.src = "assets/icons/background_gauss.webp";

  let minLoadTime = false;

  function hideLoader() {
    loader.classList.add("hidden");
    setTimeout(() => {
      body.style.opacity = "1";
    }, 500);
  }

  function checkAndHideLoader() {
    if (minLoadTime && bgImage.complete) {
      hideLoader();
    }
  }
  bgImage.onload = function () {
    minLoadTime = true;
    checkAndHideLoader();
  };
  if (bgImage.complete) {
    minLoadTime = true;
    checkAndHideLoader();
  }
  setTimeout(() => {
    minLoadTime = true;
    checkAndHideLoader();
  }, 1500);
});

// Atualiza o ano no footer sempre que a página é carregada
window.onload = function () {
  const d = new Date();
  document.getElementById("ano").textContent = d.getFullYear();
};

// Carrega o CSS dinamicamente
function openWorkshop() {
  const existingLink = document.getElementById("dynamic-css");

  if (existingLink) {
    existingLink.remove(); // Remove o CSS se já existir
  } else {
    const link = document.createElement("link");
    link.id = "dynamic-css";
    link.rel = "stylesheet";
    link.href = "css/workshops.css";
    document.head.appendChild(link);
  }
}

function openInfo() {
  const existingLink = document.getElementById("dynamic-css");

  if (existingLink) {
    existingLink.remove(); // Remove o CSS se já existir
  } else {
    const link = document.createElement("link");
    link.id = "dynamic-css";
    link.rel = "stylesheet";
    link.href = "css/info.css";
    document.head.appendChild(link);
  }
}

// Filtra os projetos de acordo com a categoria selecionada
document.addEventListener("DOMContentLoaded", function () {
  const filterLinks = document.querySelectorAll("#projetos .nav-link");
  const projects = document.querySelectorAll(".portfolio-item");

  const filterMap = {
    Todos: "todos",
    "Programação 3D": "filter-programacao3d",
    "Programação Web": "filter-web",
    Interação: "filter-interacao",
    Animação: "filter-animacao",
  };

  filterLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const filterText = this.textContent.trim();
      const filterClass = filterMap[filterText];

      projects.forEach((project) => {
        project.style.opacity = "0";
        setTimeout(() => {
          if (
            filterClass === "todos" ||
            project.classList.contains(filterClass)
          ) {
            project.style.display = "block";
            setTimeout(() => {
              project.style.opacity = "1";
            }, 100);
          } else {
            project.style.display = "none";
          }
        }, 300);
      });
    });
  });
});

function playVideo(element) {
  const img = element.querySelector("img");
  const video = element.querySelector("video");

  img.style.opacity = "0";
  video.style.opacity = "1";
  video.play();
}

function stopVideo(element) {
  const img = element.querySelector("img");
  const video = element.querySelector("video");

  video.pause();
  video.currentTime = 0;

  img.style.opacity = "1";
  video.style.opacity = "0";
}

