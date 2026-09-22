document.addEventListener('DOMContentLoaded', () => {
    
    // Filtros de Abas Dinâmicas para "O que cai no ENEM"
    const tabButtons = document.querySelectorAll('.tab-btn');
    const cardsGrid = document.querySelector('.cards-grid');
    const tabLinks = document.querySelectorAll('.tab-a');

    // Modelo estruturado de dados simulando a API do ENEMBreak
    const conteudosData = {
        linguagens: [
            { title: "Análise Sintática", freq: "Média", desc: "É o estudo das funções que os sintagmas desempenham nas construções de frases.", type: "medium", aula: "simuladoCompleto.html?simulado=aula1ling" },
            { title: "A Linguagem Literária", freq: "Alta", desc: "Elementos como subjetividade, conotação, ficcionalidade e ausência de função utilitária.", type: "high", aula: "simuladoCompleto.html?simulado=aula2ling" },
            { title: "Linguagem", freq: "Alta", desc: "Tipos de linguagem, Polissemia e etc.", type: "high", aula: "simuladoCompleto.html?simulado=aula3ling" },
            { title: "Língua Estrangeira", freq: "Média", desc: "Inglês — Pronomes Subjetivos", type: "medium", aula: "simuladoCompleto.html?simulado=aula4ling" },
            { title: "Teoria da Cor", freq: "Baixa", desc: "Arte — Cor Luz e Cor Pigmento", type: "low", aula: "simuladoCompleto.html?simulado=aula5ling" }
        ],
        humanas: [
            { title: "A Revolução Françesa", freq: "Alta", desc: "As fases da Revolução Françesa, Período Napoleônico", type: "high", aula: "simuladoCompleto.html?simulado=aula1hum" },
            { title: "Problemas Ambientais", freq: "Alta", desc: "Conferências Ambientais, Principais Problemas Ambientais", type: "high", aula: "simuladoCompleto.html?simulado=aula2hum" },
            { title: "Ética Moderna", freq: "Média", desc: "Sentimento Moral em Rousseau, em Hume, Utilitarismo Ético", type: "medium", aula: "simuladoCompleto.html?simulado=aula3hum" }
        ],
        natureza: [
            { title: "Revestimentos Celulares", freq: "Alta", desc: "Paredes Celulares, Membranas Plasmáticas.", type: "high", aula: "simuladoCompleto.html?simulado=aula1nat" },
            { title: "Leis de Newton", freq: "Alta", desc: "Leis de Newton e suas aplicações.", type: "high", aula: "simuladoCompleto.html?simulado=aula2nat" },
            { title: "Ligação iônica", freq: "Alta", desc: "Ocorrência de uma ligação iônica, Tamanho dos íons.", type: "high", aula: "simuladoCompleto.html?simulado=aula3nat" }
        ],
        matematica: [
            { title: "Álgebra", freq: "Alta", desc: "Quadrado da Soma, Quadrado da Diferença, Produto da Soma pela Diferença.", type: "high", aula: "simuladoCompleto.html?simulado=aula1mat" },
            { title: "Geometria Espacial", freq: "Média", desc: "Posições relativas entre retas, Posições relativas entre retas e planos.", type: "medium", aula: "simuladoCompleto.html?simulado=aula2mat" },
            { title: "Estatística", freq: "Alta", desc: "Definição e elementos estáticos, Tabelas de distribuição de frequências.", type: "high", aula: "simuladoCompleto.html?simulado=aula3mat" }
        ],
        redacao: [
            { title: "Textos Narrativos", freq: "Alta", desc: "Elementos Naturais da Narrativa Escolar.", type: "high", aula: "simuladoCompleto.html?simulado=aula1red" },
            { title: "Estrutura Dissertativa", freq: "Alta", desc: "Construção de tese clara, encadeamento de argumentos e coesão textual.", type: "high", aula: "simuladoCompleto.html?simulado=aula2red" }
        ]
    };

    // Função de renderização para atualizar os cards de forma limpa
    function renderCards(category) {
        cardsGrid.innerHTML = '';
        if (conteudosData[category]) {
            conteudosData[category].forEach(item => {
                const card = document.createElement('div');
                card.className = 'content-card';
                card.innerHTML = `
                    <span class="freq-badge ${item.type}">${item.freq}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="${item.aula}" class="card-link">Ver aulas →</a>
                `;
                cardsGrid.appendChild(card);
            });
        }
    }

    // Ouvinte de eventos nos botões de abas
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const targetTab = e.target.getAttribute('data-tab');
            renderCards(targetTab);
        });
    });

      // Ouvinte de eventos nos botões de abas
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.target.getAttribute('data-tab');

            if (conteudosData[targetTab]) {
                tabButtons.forEach(b => b.classList.remove('active'));
              
                const botaoPrincipal = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
                if (botaoPrincipal) {
                    botaoPrincipal.classList.add('active');
                }
            }    
            renderCards(targetTab);
            document.getElementById('conteudos')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    
    // Evento de gatilho para os botões de Simulado
    const startButtons = document.querySelectorAll('.btn-start-simulado');
    startButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'simuladoCompleto.html?simulado=completo';
        });
    });

    // Evento de gatilho para os botões de Simulado
    const startButtons2 = document.querySelectorAll('.btn-start-simulado2');
    startButtons2.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'simuladoCompleto.html?simulado=simuladomatematica';
        });
    });


    // Evento de gatilho para os botões de Simulado
    const startButtons3 = document.querySelectorAll('.btn-start-simulado3');
    startButtons3.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'simuladoCompleto.html?simulado=simuladoredacao';
        });
    });

    // Evento de gatilho para o botão de cadastro
    const cadastroButton = document.querySelectorAll('.btn-register');
    cadastroButton.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'Cadastro.html';
        });
    });

     // Evento de gatilho para o botão de demo
    const demoButton = document.querySelectorAll('.btn-secondary');
    demoButton.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'simuladoCompleto.html?simulado=demo';
        });
    });

    // Evento de gatilho para o botão de Login
    const loginButton = document.querySelectorAll('.btn-login');
    loginButton.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'Login.html';
        });
    });

    // Evento de gatilho para o botão "ver aulas"
    const aulasButton = document.querySelectorAll('.btn-outline');
    aulasButton.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'TodasAsAulas.html';
        });
    });




});