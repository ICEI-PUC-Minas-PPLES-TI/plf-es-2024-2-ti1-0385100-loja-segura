// Função para carregar dados JSON de múltiplas rotas
async function carregarDados() {
    try {
        // Faz duas requisições para obter empresas e avaliações
        const [responseEmpresas, responseAvaliacoes] = await Promise.all([
            fetch('http://localhost:3000/empresas'),
            fetch('http://localhost:3000/avaliacoes')
        ]);

        if (!responseEmpresas.ok || !responseAvaliacoes.ok) {
            throw new Error('Erro ao carregar dados das rotas');
        }

        // Converte as respostas para JSON
        const empresas = await responseEmpresas.json();
        const avaliacoes = await responseAvaliacoes.json();

        // Combina os dados em um único objeto para compatibilidade com o código existente
        const jsonData = { empresas, avaliacoes };
        
        iniciarAplicacao(jsonData); // Passa os dados carregados para a função que inicia a aplicação
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Variável global para armazenar a instância do gráfico
let chartInstance;

// Função para exibir o modal com informações da empresa e gráfico
function mostrarModal(jsonData, id) {
    // Encontra a empresa pelo ID
    const empresa = jsonData.empresas.find(e => e.id === id);
    // Encontra as avaliações relacionadas à empresa
    const avaliacoes = jsonData.avaliacoes.filter(a => a.id_empresa === id);

    // Atualiza a imagem da empresa no modal
    document.getElementById('empresaImagem').src = empresa.imagem;

    // Atualiza as avaliações no modal
    const avaliacoesContainer = document.getElementById('avaliacoesContainer');
    avaliacoesContainer.innerHTML = ''; // Limpa o container

    avaliacoes.forEach(avaliacao => {
        const p = document.createElement('p');
        p.innerText = `${avaliacao.usuario} (${avaliacao.status}): ${avaliacao.comentario}`;
        avaliacoesContainer.appendChild(p);
    });

    // Conta avaliações verdadeiras e falsas
    const countVerdadeiras = avaliacoes.filter(a => a.status === 'verdadeira').length;
    const countFalsas = avaliacoes.filter(a => a.status === 'falsa').length;

    // Se o gráfico já foi criado, destrói a instância anterior
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Dados para o gráfico com base nas avaliações reais
    const graficoDados = {
        labels: ['Verdadeira', 'Falsa'],
        datasets: [
            {
                label: 'Avaliações',
                data: [countVerdadeiras, countFalsas],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Exibe o gráfico
    const ctx = document.getElementById('avaliacaoChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar', // Tipo do gráfico
        data: graficoDados,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Exibe o modal
    const modal = new bootstrap.Modal(document.getElementById('empresaModal'));
    modal.show();
}

// Função para iniciar a aplicação
function iniciarAplicacao(jsonData) {
    // Seleciona o elemento dropdown do menu de empresas
    const dropdownMenu = document.getElementById('empresasDropdownMenu');

    // Limpa o menu dropdown
    dropdownMenu.innerHTML = '';

    // Adiciona as empresas ao dropdown
    jsonData.empresas.forEach(empresa => {
        const item = document.createElement('a');
        item.classList.add('dropdown-item');
        item.textContent = empresa.nome;
        item.href = "#";
        item.addEventListener('click', () => mostrarModal(jsonData, empresa.id));
        dropdownMenu.appendChild(item);
    });
}

// Carrega os dados JSON ao iniciar
carregarDados();
