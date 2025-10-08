// State
let isLoggedIn = false;

// Law cards data
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

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderExploreCards();
    renderRelatedCards(); // CHAMADA DE FUNÇÃO NOVA
    updateAuthState();
});
// Render explore cards
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

// Render related cards (NOVA FUNÇÃO)
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

// Update auth state
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

// Auth handlers
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

// Menu toggle
function toggleMenu() {
    showToast('Menu em desenvolvimento...');
}

// Search handlers
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

// Card click handler
function handleCardClick(title) {
    showToast(`Você clicou em: ${title}`);
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    // Remove existing toast if any
    toast.classList.remove('hidden');
    toastMessage.textContent = message;
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}
