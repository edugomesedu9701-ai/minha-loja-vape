// 1. Nosso banco de dados de produtos (Aqui é onde você vai colocar os 50 produtos depois)
const produtos = [
    {
        id: 1,
        nome: "Pod Descartável V Frozen - 20000 Puffs | Ignite",
        preco: 129.80,
        imagem: "https://via.placeholder.com/200x200?text=Pod+V+Frozen", 
        categoria: "Pod Descartável",
        avaliacao: 5
    },
    {
        id: 2,
        nome: "Líquido Halls Preto - LS JUICES",
        preco: 32.80,
        imagem: "https://via.placeholder.com/200x200?text=Halls+Preto", 
        categoria: "Juice",
        avaliacao: 5
    },
    {
        id: 3,
        nome: "Vaporizador de Ervas OONT Pro | XVape",
        preco: 699.00,
        imagem: "https://via.placeholder.com/200x200?text=Vaporizador+OONT", 
        categoria: "Vaporizador",
        avaliacao: 4
    }
];

// 2. Função que cria o HTML de um único produto
function criarCardProduto(produto) {
    // Cria as estrelinhas baseadas na nota
    let estrelasHTML = '';
    for (let i = 0; i < 5; i++) {
        estrelasHTML += i < produto.avaliacao ? '★' : '☆';
    }

    // Formata o preço para R$ XX,XX
    const precoFormatado = produto.preco.toFixed(2).replace('.', ',');

    // Retorna o bloco HTML do card
    return `
        <div class="card-produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <div class="estrelas">${estrelasHTML}</div>
            <p class="preco">R$ ${precoFormatado}</p>
            <a href="#" class="btn-comprar">🛒 Comprar</a>
        </div>
    `;
}

// 3. Função que coloca os produtos na tela
function renderizarVitrine() {
    const vitrine = document.getElementById('vitrine-produtos');
    
    // Limpa a vitrine antes de adicionar (para não duplicar se recarregar)
    vitrine.innerHTML = '';

    // Passa por cada produto da lista e cria o card
    produtos.forEach(produto => {
        vitrine.innerHTML += criarCardProduto(produto);
    });
}

// 4. Executa a função assim que a página carregar
document.addEventListener('DOMContentLoaded', renderizarVitrine);
