// Autor: Hugo Diniz e Eduardo Couto
// Armazena as informações de cada curso e do núcleo para posteriormente apresentá-las no modal

function mostrarCursoInfo(curso) {
    const cursoInfo = {
        ecgm: {
            title: 'Engª da Computação Gráfica e Multimédia',
            description: 'A Licenciatura em Engenharia da Computação Gráfica e Multimédia visa acompanhar e antecipar as necessidades de um setor de atividade em crescimento e deficitário no número de profissionais qualificados. O plano de formação contempla uma forte componente interdisciplinar que pretende formar profissionais com sólidos conhecimentos em Computação Gráfica e Multimédia Interativa. Salienta-se uma elevada componente prática que conduz a um domínio profundo dos conceitos, equipamentos e tecnologias, bem como ao desenvolvimento de metodologias de trabalho compativeis com as necessidades e competitividade do mercado de trabalho. Este curso superior foi recentemente acreditado pela A3ES (Agência de Avaliação e Acreditação do Ensino Superior). Após análise da OET - Ordem dos Engenheiros Técnicos foi registado na mesma e integrado no Colégio de Especialidade de Engenharia Informática.',
        },
        dwm: {
            title: 'Desenvolvimento Web e Multimédia',
            description: 'O CTeSP em Desenvolvimento Web e Multimédia pretende qualificar técnicos/as superiores que, de forma autónoma ou integrados numa equipa, sejam capazes de atuar na conceção, planeamento, desenvolvimento, implementação e manutenção de soluções no domínio dos sistemas e tecnologias web e na produção e integração de produtos e conteúdos multimédia. Destacam-se as saídas profissionais destes técnicos nomeadamente: o desenvolvimento de conteúdos multimédia interativos; a produção de áudio, vídeo e animação digital; o desenvolvimento e implementação de soluções para a web e a manutenção de Sistemas de Gestão de Conteúdos Web. Os detentores desta formação podem candidatar-se às licenciaturas da ESTG/IPVC, com dispensa de prova de ingresso, nomeadamente a de Engenharia da Computação Gráfica e Multimédia e a de Engenharia Informática.',
        },
        ncgm: {
            title: 'Núcleo da Computação Gráfica e Multimédia',
            description: 'O Núcleo da Computação Gráfica e Multimédia (NCGM) é composto por um grupo de estudantes de Engenharia da Computação Gráfica e Multimédia e do CTeSP de Desenvolvimento Web e Multimédia da Escola Superior de Tecnologias e Gestão (ESTG), que tem como objetivo principal representar e promover ambos os cursos. Além disso, o mesmo procura organizar atividades de conteúdos variados com o fundamento de complementar os cursos para que a experiência académica de cada estudante seja ainda mais rica.',
        }
    };

    if (cursoInfo[curso]) {
        document.getElementById('cursoModalLabel').innerText = cursoInfo[curso].title;
        document.getElementById('cursoModalBody').innerText = cursoInfo[curso].description;

        const originalSvg = document.getElementById(curso);
        if (originalSvg) {
            const svgClone = originalSvg.cloneNode(true);
            svgClone.removeAttribute("id");
            svgClone.removeAttribute("onclick");
            svgClone.setAttribute("width", "100%");
            svgClone.setAttribute("height", "auto");
            svgClone.classList.add("svg-shadow");

            const modalSvgContainer = document.getElementById('cursoModalSvgContainer');
            modalSvgContainer.innerHTML = "";
            modalSvgContainer.appendChild(svgClone);
        }

        var modal = new bootstrap.Modal(document.getElementById('cursoModal'));
        modal.show();
    } else {
        console.error('Curso não encontrado:', curso);
    }
}

// Atualiza o ano no footer sempre que a página é carregada
window.onload = function() {
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

// Filtra os projetos de acordo com a categoria selecionada
document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll("#projetos .nav-link");
    const projects = document.querySelectorAll(".portfolio-item");

    const filterMap = {
        "Todos": "todos",
        "Programação": "filter-programacao",
        "Modelação 3D": "filter-modelacao",
        "Programação Web": "filter-web",
        "Unity 3D": "filter-unity",
        "Animação": "filter-animacao",
        "Aplicações": "filter-aplicacao",
        "Jogáveis": "filter-jogaveis"
    };

    filterLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const filterText = this.textContent.trim();
            const filterClass = filterMap[filterText];

            projects.forEach(project => {
                project.style.opacity = "0";
                setTimeout(() => {
                    if (filterClass === "todos" || project.classList.contains(filterClass)) {
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

// Modal para os portfolio itens
function mostrarProjetoInfo(titulo, autores, mediaSrc) {
    document.getElementById('portfolioModalLabel').innerText = titulo;
    document.getElementById('portfolioModalBody').innerText = "Autor(es): " + autores;

    const modalImageContainer = document.getElementById('portfolioModalImageContainer');
    modalImageContainer.innerHTML = '';

    if (mediaSrc) {
        const isVideo = mediaSrc.endsWith('.mp4') || mediaSrc.endsWith('.webm') || mediaSrc.endsWith('.ogg');
        
        if (isVideo) {
            modalImageContainer.innerHTML = `
                <video controls class="img-fluid">
                    <source src="${mediaSrc}" type="video/mp4">
                    O seu navegador não suporta vídeos.
                </video>`;
        } else {
            modalImageContainer.innerHTML = `<img src="${mediaSrc}" class="img-fluid" alt="Imagem do projeto">`;
        }
    }

    var modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    modal.show();
}

