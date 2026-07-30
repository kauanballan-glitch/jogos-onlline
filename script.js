// Dados simulados dos jogos (Banco de Dados Local)
const jogos = [
    {
        id: 1,
        titulo: "The Witcher 3: Wild Hunt",
        categoria: "rpg",
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=500"
    },
    {
        id: 2,
        titulo: "Cyberpunk 2077",
        categoria: "rpg",
        nota: 4.5,
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500"
    },
    {
        id: 3,
        titulo: "Valorant",
        categoria: "fps",
        nota: 4.3,
        imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500"
    },
    {
        id: 4,
        titulo: "God of War Ragnarök",
        categoria: "acao",
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500"
    },
    {
        id: 5,
        titulo: "Counter-Strike 2",
        categoria: "fps",
        nota: 4.6,
        imagem: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500"
    },
    {
        id: 6,
        titulo: "Elden Ring",
        categoria: "rpg",
        nota: 4.8,
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500"
    }
];

// Seleção de elementos do DOM
const gamesGrid = document.getElementById('gamesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Função para renderizar os cards na tela
function renderGames(listaJogos) {
    gamesGrid.innerHTML = "";

    if (listaJogos.length === 0) {
        gamesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">Nenhum jogo encontrado.</p>`;
        return;
    }

    listaJogos.forEach(jogo => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        gameCard.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.titulo}">
            <div class="game-info">
                <h3 class="game-title">${jogo.titulo}</h3>
                <div class="game-details">
                    <span style="text-transform: uppercase; font-size: 0.8rem;">${jogo.categoria}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${jogo.nota}</span>
                </div>
            </div>
        `;

        gamesGrid.appendChild(gameCard);
    });
}

// Filtro por Categoria
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e adiciona ao clicado
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.getAttribute('data-category');

        if (categoria === 'todos') {// Dados simulados dos jogos (Banco de Dados Local)
const jogos = [
    {
        id: 1,
        titulo: "The Witcher 3: Wild Hunt",
        categoria: "rpg",
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=500"
    },
    {
        id: 2,
        titulo: "Cyberpunk 2077",
        categoria: "rpg",
        nota: 4.5,
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500"
    },
    {
        id: 3,
        titulo: "Valorant",
        categoria: "fps",
        nota: 4.3,
        imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500"
    },
    {
        id: 4,
        titulo: "God of War Ragnarök",
        categoria: "acao",
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500"
    },
    {
        id: 5,
        titulo: "Counter-Strike 2",
        categoria: "fps",
        nota: 4.6,
        imagem: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500"
    },
    {
        id: 6,
        titulo: "Elden Ring",
        categoria: "rpg",
        nota: 4.8,
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500"
    }
];

// Seleção de elementos do DOM
const gamesGrid = document.getElementById('gamesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Função para renderizar os cards na tela
function renderGames(listaJogos) {
    gamesGrid.innerHTML = "";

    if (listaJogos.length === 0) {
        gamesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">Nenhum jogo encontrado.</p>`;
        return;
    }

    listaJogos.forEach(jogo => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        gameCard.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.titulo}">
            <div class="game-info">
                <h3 class="game-title">${jogo.titulo}</h3>
                <div class="game-details">
                    <span style="text-transform: uppercase; font-size: 0.8rem;">${jogo.categoria}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${jogo.nota}</span>
                </div>
            </div>
        `;// Dados simulados dos jogos (Banco de Dados Local)
const jogos = [
    {
        id: 1,
        titulo: "The Witcher 3: Wild Hunt",
        categoria: "rpg",
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=500"
    },
    {
        id: 2,
        titulo: "Cyberpunk 2077",
        categoria: "rpg",
        nota: 4.5,
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500"
    },
    {
        id: 3,
        titulo: "Valorant",
        categoria: "fps",
        nota: 4.3,
        imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500"
    },
    {
        id: 4,
        titulo: "God of War Ragnarök",
        categoria: "acao",
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500"
    },
    {
        id: 5,
        titulo: "Counter-Strike 2",
        categoria: "fps",
        nota: 4.6,
        imagem: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500"
    },
    {
        id: 6,
        titulo: "Elden Ring",
        categoria: "rpg",
        nota: 4.8,
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500"
    }
];

// Seleção de elementos do DOM
const gamesGrid = document.getElementById('gamesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Função para renderizar os cards na tela
function renderGames(listaJogos) {
    gamesGrid.innerHTML = "";

    if (listaJogos.length === 0) {
        gamesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">Nenhum jogo encontrado.</p>`;
        return;
    }

    listaJogos.forEach(jogo => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        gameCard.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.titulo}">
            <div class="game-info">
                <h3 class="game-title">${jogo.titulo}</h3>
                <div class="game-details">
                    <span style="text-transform: uppercase; font-size: 0.8rem;">${jogo.categoria}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${jogo.nota}</span>
                </div>
            </div>
        `;

        gamesGrid.appendChild(gameCard);
    });
}

// Filtro por Categoria
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e adiciona ao clicado
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.getAttribute('data-category');

        if (categoria === 'todos') {
            renderGames(jogos);
        } else {
            const jogosFiltrados = jogos.filter(jogo => jogo.categoria === categoria);
            renderGames(jogosFiltrados);
        }
    });
});

// Busca dinâmica em tempo real
searchInput.addEventListener('input', (e) => {
    const termoBusca = e.target.value.toLowerCase();
    
    const jogosFiltrados = jogos.filter(jogo => 
        jogo.titulo.toLowerCase().includes(termoBusca)
    );
    
    renderGames(jogosFiltrados);
});

// Inicializa a renderização com todos os jogos
renderGames(jogos);

        gamesGrid.appendChild(gameCard);
    });
}

// Filtro por Categoria
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e adiciona ao clicado
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.getAttribute('data-category');

        if (categoria === 'todos') {
            renderGames(jogos);
        } else {
            const jogosFiltrados = jogos.filter(jogo => jogo.categoria === categoria);
            renderGames(jogosFiltrados);
        }
    });
});

// Busca dinâmica em tempo real
searchInput.addEventListener('input', (e) => {
    const termoBusca = e.target.value.toLowerCase();
    
    const jogosFiltrados = jogos.filter(jogo => 
        jogo.titulo.toLowerCase().includes(termoBusca)
    );
    
    renderGames(jogosFiltrados);
});

// Inicializa a renderização com todos os jogos
renderGames(jogos);
            renderGames(jogos);
        } else {
            const jogosFiltrados = jogos.filter(jogo => jogo.categoria === categoria);
            renderGames(jogosFiltrados);
        }
    });
});

// Busca dinâmica em tempo real
searchInput.addEventListener('input', (e) => {
    const termoBusca = e.target.value.toLowerCase();
    
    const jogosFiltrados = jogos.filter(jogo => 
        jogo.titulo.toLowerCase().includes(termoBusca)
    );
    
    renderGames(jogosFiltrados);
});

// Inicializa a renderização com todos os jogos
renderGames(jogos);
// Catálogo de jogos estruturado por categorias e metadados
const jogos = [
    {
        id: 1,
        titulo: "The Witcher 3: Wild Hunt",
        categoria: "rpg",
        plataformas: ["PC", "PS5", "Xbox"],
        ano: 2015,
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=500"
    },
    {
        id: 2,
        titulo: "Cyberpunk 2077",
        categoria: "rpg",
        plataformas: ["PC", "PS5", "Xbox"],
        ano: 2020,
        nota: 4.5,
        imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500"
    },
    {
        id: 3,
        titulo: "Valorant",
        categoria: "fps",
        plataformas: ["PC"],
        ano: 2020,
        nota: 4.3,
        imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500"
    },
    {
        id: 4,
        titulo: "God of War Ragnarök",
        categoria: "acao",
        plataformas: ["PS5", "PC"],
        ano: 2022,
        nota: 4.9,
        imagem: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500"
    },
    {
        id: 5,
        titulo: "Counter-Strike 2",
        categoria: "fps",
        plataformas: ["PC"],
        ano: 2023,
        nota: 4.6,
        imagem: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500"
    },
    {
        id: 6,
        titulo: "Elden Ring",
        categoria: "rpg",
        plataformas: ["PC", "PS5", "Xbox"],
        ano: 2022,
        nota: 4.8,
        imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500"
    }
];

let listaExibida = [...jogos];

const gamesGrid = document.getElementById('gamesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

// Renderiza os cards na página
function renderGames(lista) {
    gamesGrid.innerHTML = "";

    if (lista.length === 0) {
        gamesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">Nenhum jogo encontrado.</p>`;
        return;
    }

    lista.forEach(jogo => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const tagsPlataforma = jogo.plataformas.map(p => `<span class="tag">${p}</span>`).join('');

        gameCard.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.titulo}">
            <div class="game-info">
                <h3 class="game-title">${jogo.titulo}</h3>
                <div class="game-details">
                    <span style="text-transform: uppercase; font-size: 0.8rem; color: var(--primary-color); font-weight: bold;">
                        ${jogo.categoria} (${jogo.ano})
                    </span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${jogo.nota}</span>
                </div>
                <div class="game-tags">${tagsPlataforma}</div>
            </div>
        `;

        gamesGrid.appendChild(gameCard);
    });
}

// Ordenação dos dados
function ordenarJogos(lista, criterio) {
    const copia = [...lista];
    switch (criterio) {
        case 'nota-desc':
            return copia.sort((a, b) => b.nota - a.nota);
        case 'nome-asc':
            return copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
        case 'ano-desc':
            return copia.sort((a, b) => b.ano - a.ano);
        default:
            return copia;
    }
}

// Filtro e ordenação combinados
function aplicarFiltrosEOrdenacao() {
    const categoriaAtiva = document.querySelector('.filter-btn.active').getAttribute('data-category');
    const termoBusca = searchInput.value.toLowerCase();
    const ordem = sortSelect.value;

    let resultado = jogos.filter(jogo => {
        const bateCategoria = categoriaAtiva === 'todos' || jogo.categoria === categoriaAtiva;
        const bateBusca = jogo.titulo.toLowerCase().includes(termoBusca);
        return bateCategoria && bateBusca;
    });

    resultado = ordenarJogos(resultado, ordem);
    renderGames(resultado);
}

// Listeners de eventos
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        aplicarFiltrosEOrdenacao();
    });
});

searchInput.addEventListener('input', aplicarFiltrosEOrdenacao);
sortSelect.addEventListener('change', aplicarFiltrosEOrdenacao);

// Inicialização
renderGames(jogos);
