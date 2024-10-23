

// exemplo para ver se funciona
const empresas = [
  { nome: "Loja A", descricao: "Vende roupas", imagem: "https://via.placeholder.com/300x200?text=Loja+A", link: "http://127.0.0.1:5501/codigo/public/Felipe/index.html" },
  { nome: "Loja B", descricao: "Loja de eletrônicos", imagem: "https://via.placeholder.com/300x200?text=Loja+A", link: "http://127.0.0.1:5501/codigo/public/Felipe/index.html" },
  { nome: "Loja C", descricao: "Supermercado", imagem: "https://via.placeholder.com/300x200?text=Loja+A", link: "http://127.0.0.1:5501/codigo/public/Felipe/index.html" },
];

const container = document.getElementById('empresa-container');

// função para criar um card
function criarCard(empresa) {
  const card = document.createElement('div');
  card.classList.add('card');

  const imagem = document.createElement('img');
  imagem.src = empresa.imagem;
  imagem.alt = empresa.nome;

  const nome = document.createElement('h2');
  nome.textContent = empresa.nome;

  const descricao = document.createElement('p');
  descricao.textContent = empresa.descricao;

  const link = document.createElement('a');
  link.textContent = empresa.link;
  link.href = empresa.link;

  card.appendChild(imagem);
  card.appendChild(nome);
  card.appendChild(descricao);
  card.appendChild(link);

  return card;
}

empresas.forEach(empresa => {
  const card = criarCard(empresa);
  container.appendChild(card);
});