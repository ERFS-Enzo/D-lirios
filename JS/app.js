// Sistema de Gerenciamento da Loja D'lírios

// Dados dos produtos
const produtos = {
  destaques: [
    { id: 1, nome: "Lingerie plus size", preco: 89.90, imagem: "../IMG/Destaque1.jpeg", imagens: ["../IMG/Destaque1.jpeg", "../IMG/Destaque1.1.jpeg"], categoria: "destaques" },
    { id: 2, nome: "Esfoliantes", preco: 99.90, imagem: "../IMG/Destaque2.jpeg", imagens: ["../IMG/Destaque2.jpeg"], categoria: "destaques" },
    { id: 3, nome: "Pijama", preco: 79.90, imagem: "../IMG/Destaque3.jpeg", imagens: ["../IMG/Destaque3.jpeg"], categoria: "destaques" },
    { id: 4, nome: "Bolsa", preco: 109.90, imagem: "../IMG/Destaque4.jpeg", imagens: ["../IMG/Destaque4.jpeg"], categoria: "destaques" },
    { id: 5, nome: "Lingerie", preco: 89.90, imagem: "../IMG/Destaque5.jpeg", imagens: ["../IMG/Destaque5.jpeg"], categoria: "destaques" },
    { id: 6, nome: "Sabonete Intimo", preco: 99.90, imagem: "../IMG/Destaque6.jpeg", imagens: ["../IMG/Destaque6.jpeg"], categoria: "destaques" },
  ],
  lingerie: [
    { id: 21, nome: "Lingerie 1", preco: 79.90, imagem: "../IMG/Lingerie1.jpeg", imagens: ["../IMG/Lingerie1.jpeg", "../IMG/Lingerie1.1.jpeg", "../IMG/Lingerie1.2.jpeg"], categoria: "lingerie" },
    { id: 22, nome: "Lingerie 2", preco: 89.90, imagem: "../IMG/Lingerie2.jpeg", imagens: ["../IMG/Lingerie2.jpeg"], categoria: "lingerie" },
    { id: 23, nome: "Lingerie 3", preco: 99.90, imagem: "../IMG/Lingerie3.jpeg", imagens: ["../IMG/Lingerie3.jpeg"], categoria: "lingerie" },
    { id: 24, nome: "Lingerie 4", preco: 85.90, imagem: "../IMG/Lingerie4.jpeg", imagens: ["../IMG/Lingerie4.jpeg", "../IMG/Lingerie4.1.jpeg"], categoria: "lingerie" },
    { id: 25, nome: "Lingerie 5", preco: 79.90, imagem: "../IMG/Lingerie5.jpeg", imagens: ["../IMG/Lingerie5.jpeg"], categoria: "lingerie" },
    { id: 26, nome: "Lingerie 6", preco: 89.90, imagem: "../IMG/Lingerie6.jpeg", imagens: ["../IMG/Lingerie6.jpeg"], categoria: "lingerie" },
    { id: 27, nome: "Lingerie 7", preco: 99.90, imagem: "../IMG/Lingerie7.jpeg", imagens: ["../IMG/Lingerie7.jpeg", "../IMG/Lingerie7.1.jpeg"], categoria: "lingerie" },
    { id: 28, nome: "Lingerie 8", preco: 85.90, imagem: "../IMG/Lingerie8.jpeg", imagens: ["../IMG/Lingerie8.jpeg", "../IMG/Lingerie8.1.jpeg"], categoria: "lingerie" },
    { id: 29, nome: "Lingerie 9", preco: 79.90, imagem: "../IMG/Lingerie9.jpeg", imagens: ["../IMG/Lingerie9.jpeg"], categoria: "lingerie" },
    { id: 30, nome: "Lingerie 10", preco: 89.90, imagem: "../IMG/Lingerie10.jpeg", imagens: ["../IMG/Lingerie10.jpeg", "../IMG/Lingerie10.1.jpeg"], categoria: "lingerie" },
    { id: 31, nome: "Lingerie 11", preco: 99.90, imagem: "../IMG/Lingerie11.jpeg", imagens: ["../IMG/Lingerie11.jpeg", "../IMG/Lingerie11.1.jpeg"], categoria: "lingerie" },
    { id: 32, nome: "Lingerie 12", preco: 85.90, imagem: "../IMG/Lingerie12.jpeg", imagens: ["../IMG/Lingerie12.jpeg"], categoria: "lingerie" },
    { id: 33, nome: "Lingerie 13", preco: 79.90, imagem: "../IMG/Lingerie13.jpeg", imagens: ["../IMG/Lingerie13.jpeg", "../IMG/Lingerie13.1.jpeg"], categoria: "lingerie" },
    { id: 34, nome: "Lingerie 14", preco: 89.90, imagem: "../IMG/Lingerie14.jpeg", imagens: ["../IMG/Lingerie14.jpeg", "../IMG/Lingerie14.1.jpeg"], categoria: "lingerie" },
  ],
  pijamas: [
    { id: 7, nome: "Pijama 1", preco: 129.90, imagem: "../IMG/7.jpeg", imagens: ["../IMG/7.jpeg"], categoria: "pijamas" },
    { id: 8, nome: "Pijama 2", preco: 139.90, imagem: "../IMG/8.jpeg", imagens: ["../IMG/8.jpeg"], categoria: "pijamas" },
    { id: 9, nome: "Pijama 3", preco: 119.90, imagem: "../IMG/9.jpeg", imagens: ["../IMG/9.jpeg"], categoria: "pijamas" },
    { id: 10, nome: "Pijama 4", preco: 149.90, imagem: "../IMG/10.jpeg", imagens: ["../IMG/10.jpeg"], categoria: "pijamas" },
    { id: 11, nome: "Pijama 5", preco: 129.90, imagem: "../IMG/11.jpeg", imagens: ["../IMG/11.jpeg"], categoria: "pijamas" },
    { id: 12, nome: "Pijama 6", preco: 139.90, imagem: "../IMG/12.jpeg", imagens: ["../IMG/12.jpeg"], categoria: "pijamas" },
    { id: 13, nome: "Pijama 7", preco: 119.90, imagem: "../IMG/13.jpeg", imagens: ["../IMG/13.jpeg"], categoria: "pijamas" },
    { id: 14, nome: "Pijama 8", preco: 149.90, imagem: "../IMG/14.jpeg", imagens: ["../IMG/14.jpeg"], categoria: "pijamas" },
  ],
  cosmeticos: [
    { id: 25, nome: "Cosmético 1", preco: 45.90, imagem: "../IMG/5.jpeg", imagens: ["../IMG/5.jpeg"], categoria: "cosmeticos" },
    { id: 26, nome: "Cosmético 2", preco: 55.90, imagem: "../IMG/6.jpeg", imagens: ["../IMG/6.jpeg"], categoria: "cosmeticos" },
    { id: 27, nome: "Cosmético 3", preco: 65.90, imagem: "../IMG/1.jpeg", imagens: ["../IMG/1.jpeg"], categoria: "cosmeticos" },
    { id: 28, nome: "Cosmético 4", preco: 50.90, imagem: "../IMG/2.jpeg", imagens: ["../IMG/2.jpeg"], categoria: "cosmeticos" },
  ],
  camisolas: [
    { id: 15, nome: "Camisola 1", preco: 99.90, imagem: "../IMG/15.jpeg", imagens: ["../IMG/15.jpeg"], categoria: "camisolas" },
    { id: 16, nome: "Camisola 2", preco: 109.90, imagem: "../IMG/16.jpeg", imagens: ["../IMG/16.jpeg"], categoria: "camisolas" },
    { id: 17, nome: "Camisola 3", preco: 119.90, imagem: "../IMG/17.jpeg", imagens: ["../IMG/17.jpeg"], categoria: "camisolas" },
    { id: 18, nome: "Camisola 4", preco: 99.90, imagem: "../IMG/18.jpeg", imagens: ["../IMG/18.jpeg"], categoria: "camisolas" },
    { id: 19, nome: "Camisola 5", preco: 129.90, imagem: "../IMG/19.jpeg", imagens: ["../IMG/19.jpeg"], categoria: "camisolas" },
    { id: 20, nome: "Camisola 6", preco: 109.90, imagem: "../IMG/20.jpeg", imagens: ["../IMG/20.jpeg"], categoria: "camisolas" },
  ],
  bolsas: [
    { id: 29, nome: "Bolsa 1", preco: 159.90, imagem: "../IMG/3.jpeg", imagens: ["../IMG/3.jpeg"], categoria: "bolsas" },
    { id: 30, nome: "Bolsa 2", preco: 169.90, imagem: "../IMG/4.jpeg", imagens: ["../IMG/4.jpeg"], categoria: "bolsas" },
    { id: 31, nome: "Bolsa 3", preco: 179.90, imagem: "../IMG/5.jpeg", imagens: ["../IMG/5.jpeg"], categoria: "bolsas" },
    { id: 32, nome: "Bolsa 4", preco: 149.90, imagem: "../IMG/6.jpeg", imagens: ["../IMG/6.jpeg"], categoria: "bolsas" },
  ],
  produtosIntimos: [
    { id: 33, nome: "Produto Íntimo 1", preco: 69.90, imagem: "../IMG/7.jpeg", imagens: ["../IMG/7.jpeg"], categoria: "produtosIntimos" },
    { id: 34, nome: "Produto Íntimo 2", preco: 79.90, imagem: "../IMG/8.jpeg", imagens: ["../IMG/8.jpeg"], categoria: "produtosIntimos" },
    { id: 35, nome: "Produto Íntimo 3", preco: 89.90, imagem: "../IMG/9.jpeg", imagens: ["../IMG/9.jpeg"], categoria: "produtosIntimos" },
    { id: 36, nome: "Produto Íntimo 4", preco: 75.90, imagem: "../IMG/10.jpeg", imagens: ["../IMG/10.jpeg"], categoria: "produtosIntimos" },
  ],
  pecasAvulsas: [
    { id: 37, nome: "Peça Avulsa 1", preco: 39.90, imagem: "../IMG/11.jpeg", imagens: ["../IMG/11.jpeg"], categoria: "pecasAvulsas" },
    { id: 38, nome: "Peça Avulsa 2", preco: 49.90, imagem: "../IMG/12.jpeg", imagens: ["../IMG/12.jpeg"], categoria: "pecasAvulsas" },
    { id: 39, nome: "Peça Avulsa 3", preco: 59.90, imagem: "../IMG/13.jpeg", imagens: ["../IMG/13.jpeg"], categoria: "pecasAvulsas" },
    { id: 40, nome: "Peça Avulsa 4", preco: 44.90, imagem: "../IMG/14.jpeg", imagens: ["../IMG/14.jpeg"], categoria: "pecasAvulsas" },
  ],
  plusSize: [
    { id: 41, nome: "Plus Size 1", preco: 89.90, imagem: "../IMG/Destaque1.jpeg", imagens: ["../IMG/Destaque1.jpeg", "../IMG/Destaque1.1.jpeg"], categoria: "plusSize" },
    { id: 42, nome: "Plus Size 2", preco: 99.90, imagem: "../IMG/plus2.jpeg", imagens: ["../IMG/plus2.jpeg", "../IMG/plus2.1.jpeg"], categoria: "plusSize" },
    { id: 46, nome: "Plus Size 4", preco: 99.90, imagem: "../IMG/plus3.jpeg", imagens: ["../IMG/plus3.jpeg", "../IMG/plus3.1.jpeg"], categoria: "plusSize" },
  ],  
};

// Carrinho
class Carrinho {
  constructor() {
    this.itens = JSON.parse(localStorage.getItem('carrinho')) || [];
  }

  adicionar(produto) {
    const itemExistente = this.itens.find(item => item.id === produto.id);
    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.itens.push({ ...produto, quantidade: 1 });
    }
    this.salvar();
  }

  remover(id) {
    this.itens = this.itens.filter(item => item.id !== id);
    this.salvar();
  }

  atualizar(id, quantidade) {
    const item = this.itens.find(item => item.id === id);
    if (item) {
      item.quantidade = quantidade;
      if (item.quantidade <= 0) {
        this.remover(id);
      } else {
        this.salvar();
      }
    }
  }

  salvar() {
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
    this.atualizarBadge();
  }

  limpar() {
    this.itens = [];
    localStorage.removeItem('carrinho');
    this.atualizarBadge();
  }

  obterTotal() {
    return this.itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }

  obterQuantidadeTotal() {
    return this.itens.reduce((total, item) => total + item.quantidade, 0);
  }

  atualizarBadge() {
    const badge = document.getElementById('cartBadge');
    const quantidade = this.obterQuantidadeTotal();
    if (badge) {
      badge.textContent = quantidade;
      badge.style.display = quantidade > 0 ? 'flex' : 'none';
    }
  }

  notificar(mensagem) {
    const notif = document.createElement('div');
    notif.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce';
    notif.textContent = mensagem;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
  }
}

// Usuário
class Usuario {
  constructor() {
    this.dados = JSON.parse(localStorage.getItem('usuario')) || null;
  }

  login(email, senha) {
    this.dados = { email, nome: email.split('@')[0], logado: true };
    localStorage.setItem('usuario', JSON.stringify(this.dados));
    this.atualizarUI();
    return true;
  }

  logout() {
    this.dados = null;
    localStorage.removeItem('usuario');
    this.atualizarUI();
  }

  estaLogado() {
    return this.dados?.logado || false;
  }

  atualizarUI() {
    const userBtn = document.getElementById('userBtn');
    const userName = document.getElementById('userName');
    if (this.estaLogado()) {
      if (userBtn) userBtn.textContent = 'Sair';
      if (userName) userName.textContent = this.dados.nome;
    } else {
      if (userBtn) userBtn.textContent = 'Entrar';
      if (userName) userName.textContent = '';
    }
  }
}

// Inicializar globalmente
const carrinho = new Carrinho();

// Busca e Filtros
class Busca {
  static buscar(termo, categoria = null) {
    termo = termo.toLowerCase().trim();
    if (!termo) return [];

    let resultado = [];
    
    if (categoria) {
      const prods = produtos[categoria] || [];
      resultado = prods.filter(p => 
        p.nome.toLowerCase().includes(termo)
      );
    } else {
      for (let cat in produtos) {
        resultado.push(...produtos[cat].filter(p =>
          p.nome.toLowerCase().includes(termo)
        ));
      }
    }

    return resultado;
  }

  static filtrarPorCategoria(categoria) {
    return produtos[categoria] || [];
  }

  static filtrarPorPreco(min, max, categoria = null) {
    let prods = [];
    if (categoria) {
      prods = produtos[categoria] || [];
    } else {
      for (let cat in produtos) {
        prods.push(...produtos[cat]);
      }
    }
    return prods.filter(p => p.preco >= min && p.preco <= max);
  }

  static ordenar(produtos, tipo) {
    const copia = [...produtos];
    switch(tipo) {
      case 'menor-preco':
        return copia.sort((a, b) => a.preco - b.preco);
      case 'maior-preco':
        return copia.sort((a, b) => b.preco - a.preco);
      case 'nome':
        return copia.sort((a, b) => a.nome.localeCompare(b.nome));
      default:
        return copia;
    }
  }
}

// Função para enviar carrinho via WhatsApp
function enviarParaWhatsApp() {
  if (carrinho.itens.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  let mensagem = 'Olá, gostaria de comprar:\n\n';
  
  carrinho.itens.forEach(item => {
    mensagem += `• ${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}\n`;
  });

  const total = carrinho.itens.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  mensagem += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;

  const numeroWhatsApp = '5517997620690'; // Número da loja
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
  
  window.open(urlWhatsApp, '_blank');
}

// Carrossel de Imagens
let currentImageIndex = 0;
let productImages = [];

function initCarousel(imagens) {
  productImages = imagens || ['../IMG/default.jpg'];
  currentImageIndex = 0;
  renderCarousel();
}

function renderCarousel() {
  const container = document.getElementById('carouselImages');
  const dotsContainer = document.getElementById('carouselDots');
  const counter = document.getElementById('carouselCounter');

  if (!container) return;

  // Renderizar slides
  container.innerHTML = productImages.map((img, index) => `
    <div class="carousel-slide">
      <img src="${img}" alt="Produto - Imagem ${index + 1}" class="main-image" onerror="this.src='../IMG/placeholder.jpg'">
    </div>
  `).join('');

  // Renderizar dots
  dotsContainer.innerHTML = productImages.map((_, index) => `
    <div class="carousel-dot ${index === currentImageIndex ? 'active' : ''}" onclick="goToImage(${index})"></div>
  `).join('');

  // Atualizar contador
  counter.textContent = `${currentImageIndex + 1} / ${productImages.length}`;

  // Atualizar posição do carrossel
  container.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % productImages.length;
  renderCarousel();
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
  renderCarousel();
}

function goToImage(index) {
  currentImageIndex = index;
  renderCarousel();
}

// Ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  carrinho.atualizarBadge();
});
