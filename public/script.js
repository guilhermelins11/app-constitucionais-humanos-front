let isLoggedIn = false;

const lawCards = [
    {
        id: 1,
        title: "Direitos do consumidor",
        law: "Lei 93994.34",
        description: "cosnsi idanei iokaojmi italoroeammmm",
        thumbnail: "📚"
    },
    {
        id: 2,
        title: "Direitos relacionados a restaurantes--",
        law: "Lei 30r2394",
        description: "affa",
        thumbnail: "⚖️"
    },
    {
        id: 3,
        title: "fa",
        law: "fd",
        description: "Subsfdequent amendments include important updates...",
        thumbnail: "✍️"
    },
    {
        id: 4,
        title: "fa",
        law: "fd",
        description: "Subsfdequent amendments include important updates...",
        thumbnail: "⚖️"
    }
];

const relatedCards = [
    {
        id: 1,
        title: "Direito Trabalhista",
        subtitle: "Lista do vid",
        count: 1
    },
    {
        id: 2,
        title: "Educação",
        subtitle: "•1",
        count: 1
    },
    {
        id: 3,
        title: "Saúde",
        subtitle: "•1",
        count: 1
    }
];

document.addEventListener('DOMContentLoaded', function() {
    renderExploreCards();
    renderRelatedCards();
    updateAuthState();
});

function renderExploreCards() {
    const exploreList = document.getElementById('exploreList');
    exploreList.innerHTML = '';
    
    lawCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'explore-card';
        cardElement.onclick = () => handleCardClick(card.title);
        
        cardElement.innerHTML = `
            <div class="card-thumbnail">${card.thumbnail}</div>
            <div class="card-content">
                <h3 class="card-title">${card.title}</h3>
                <span class="card-law">${card.law}</span>
                <p class="card-description">${card.description}</p>
            </div>
        `;
        
        exploreList.appendChild(cardElement);
    });
}

function renderRelatedCards() {
    const relatedList = document.getElementById('relatedList');
    relatedList.innerHTML = '';
    
    relatedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'related-card';
        cardElement.onclick = () => showToast(`Você clicou em: ${card.title}`);
        
        cardElement.innerHTML = `
            <div class="related-thumbnail">
                <span class="related-count-top">${card.subtitle}</span>
            </div>
            <div class="related-content">
                <h3 class="related-title">${card.title}</h3>
                <span class="related-subtitle">${card.subtitle}</span>
            </div>
        `;
        
        relatedList.appendChild(cardElement);
    });
}


function updateAuthState() {
    const loggedOutState = document.getElementById('loggedOutState');
    const loggedInState = document.getElementById('loggedInState');
    
    if (isLoggedIn) {
        loggedOutState.classList.add('hidden');
        loggedInState.classList.remove('hidden');
    } else {
        loggedOutState.classList.remove('hidden');
        loggedInState.classList.add('hidden');
    }
}

function handleSignup() {
    showToast('Abrindo tela de cadastro...');
}

function handleLogin() {
    showToast('Entrando...');
    setTimeout(() => {
        isLoggedIn = true;
        updateAuthState();
        showToast('Login realizado com sucesso!');
    }, 1000);
}

function handleLogout() {
    showToast('Saindo...');
    setTimeout(() => {
        isLoggedIn = false;
        updateAuthState();
        showToast('Logout realizado com sucesso!');
    }, 1000);
}

function toggleMenu() {
    showToast('Menu em desenvolvimento...');
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        showToast(`Pesquisando por: ${query}`);
    } else {
        showToast('Digite algo para pesquisar');
    }
}

function handleSearchKeypress(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
}

function handleFilters() {
    showToast('Abrindo filtros...');
}

function handleCardClick(title) {
    showToast(`Você clicou em: ${title}`);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toast.classList.remove('hidden');
    toastMessage.textContent = message;
    
    // Será ocultado apos 3 segundos
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

const novoUsuario = {name: "Antony", email: "antony@email.com", password: "1234"};

fetch(`http://localhost:8080/usuarios`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoUsuario)
})
.then(response => {
    if (!response.ok) {    // checar se a resposta vai ser um erro HTTP
        throw new Error(`Erro HTTP Status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log('Usuário criado:', data))
.catch(error => console.error('Erro na requisição:', error));