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
            svgClone.setAttribute("width", "100%");
            svgClone.setAttribute("height", "auto");
            svgClone.classList.remove("svg-shadow");  

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
const d = new Date();
document.getElementById("ano").innerHTML = d.getFullYear();

// Carrega o CSS dinamicamente
function callUnity() {
    const existingLink = document.getElementById("dynamic-css");
    
    if (existingLink) {
        existingLink.remove(); // Remove o CSS se já existir
    } else {
        const link = document.createElement("link");
        link.id = "dynamic-css";
        link.rel = "stylesheet";
        link.href = "css/unity.css";
        document.head.appendChild(link);
    }
}

function callBlender() {
    const existingLink = document.getElementById("dynamic-css");
    
    if (existingLink) {
        existingLink.remove(); // Remove o CSS se já existir
    } else {
        const link = document.createElement("link");
        link.id = "dynamic-css";
        link.rel = "stylesheet";
        link.href = "css/blender.css";
        document.head.appendChild(link);
    }
}