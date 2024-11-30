// URL do arquivo JSON
const jsonUrl = '/empresas';

// Função para criar um card baseado nos dados de cada empresa
function criarCard(empresa) {
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3', 'p-3');

  const imagem = document.createElement('img');
  imagem.src = empresa.imagem;
  imagem.alt = empresa.nome;
  imagem.classList.add('card-img-top');

  const nome = document.createElement('h2');
  nome.textContent = empresa.nome;
  nome.classList.add('card-title');

  const descricao = document.createElement('p');
  descricao.textContent = empresa.descricao || "descricao não disponível"; // Exibe uma descricao padrão se não houver

  const link = document.createElement('a');
  link.textContent = "Visitar site";
  link.href = empresa.link;
  link.classList.add('btn', 'btn-primary');

  // Adicionar os elementos criados ao card
  card.appendChild(imagem);
  card.appendChild(nome);
  card.appendChild(descricao);  // Adicionando a descricao
  card.appendChild(link);

  return card;
}

// Pegar o container onde os cards vão aparecer
const container = document.getElementById('empresa-container');

// Função para buscar o arquivo JSON e criar os cards
fetch(jsonUrl)
  .then(response => response.json()) // Converte a resposta em JSON
  .then(data => {
    const empresas = data;  // Acessa o array de empresas no JSON
    empresas.forEach(empresa => {
      const card = criarCard(empresa);  // Cria o card para cada empresa
      container.appendChild(card);      // Adiciona o card ao container
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
