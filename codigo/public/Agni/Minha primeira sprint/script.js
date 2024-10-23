// Função para carregar dados JSON
async function carregarDados() {
    try {
        const response = await fetch('db.json'); 
        if (!response.ok) {
            throw new Error('Erro ao carregar dados');
        }
        const jsonData = await response.json(); // Carrega os dados JSON
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

    // Se o gráfico já foi criado, destrói a instância anterior
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Dados fictícios para o gráfico
    const graficoDados = {
        labels: ['Ótima', 'Boa', 'Regular', 'Ruim'],
        datasets: [
            {
                label: 'Avaliações',
                data: [10, 5, 2, 1], // Números fictícios de avaliações
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Exibe o gráfico
    const ctx = document.getElementById('avaliacaoChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar', // Tipo do gráfico (pode ser 'bar', 'line', 'pie', etc.)
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
    // Adiciona os eventos de clique nas empresas cadastradas
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            const empresaNome = this.textContent;
            const empresa = jsonData.empresas.find(e => e.nome === empresaNome);
            
            if (empresa) {
                mostrarModal(jsonData, empresa.id);
            }
        });
    });
}

// Carrega os dados JSON ao iniciar
carregarDados();
