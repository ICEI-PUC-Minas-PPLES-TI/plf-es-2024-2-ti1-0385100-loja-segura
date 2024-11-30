// Caminho dos arquivos JSON
const jsonUrl = '/empresas';
const jsonUrl2 = '/avaliacoes';

// Elementos HTML
const dropdownMenu = document.getElementById("dropdownMenu");
const empresaDetalhes = document.getElementById("empresaDetalhes");

// Variável para armazenar as avaliações
let avaliacoes = [];

// Função para buscar empresas e popular o dropdown
fetch(jsonUrl)
  .then(response => response.json()) // Converte a resposta em JSON
  .then(empresas => {
    // Gera dinamicamente os itens do dropdown
    empresas.forEach(empresa => {
      const listItem = document.createElement("li");
      const button = document.createElement("button");

      // Configurações do botão
      button.className = "dropdown-item";
      button.textContent = empresa.nome;
      button.dataset.companyId = empresa.id; // Armazena o ID como atributo de dados
      button.onclick = () => exibirDetalhesEmpresa(empresa);

      // Adiciona o botão à lista
      listItem.appendChild(button);
      dropdownMenu.appendChild(listItem);
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON de empresas:', error));

// Função para buscar avaliações
fetch(jsonUrl2)
  .then(response => response.json()) // Converte a resposta em JSON
  .then(data => {
    avaliacoes = data; // Armazena as avaliações em uma variável global
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON de avaliações:', error));

// Função para exibir os detalhes da empresa selecionada
function exibirDetalhesEmpresa(empresa) {
  // Filtra as avaliações relacionadas à empresa
  const avaliacoesRelacionadas = avaliacoes.filter(a => a.id_empresa === empresa.id);

  // Renderiza o conteúdo
  empresaDetalhes.innerHTML = `
    <h3>${empresa.nome}</h3>
    <img src="${empresa.imagem}" alt="${empresa.nome}" class="img-fluid mb-3" style="max-width: 600px;">
    <p>${empresa.descricao}</p>
    <h4>Avaliações:</h4>
    <div class="row">
      ${avaliacoesRelacionadas.map(avaliacao => `
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${avaliacao.usuario}</h5>
              <p class="card-text">${avaliacao.comentario}</p>
              <span class="badge ${avaliacao.status === "verdadeira" ? "bg-success" : "bg-danger"}">
                ${avaliacao.status}
              </span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
