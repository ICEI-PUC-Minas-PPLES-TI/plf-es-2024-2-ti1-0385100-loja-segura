// Função para carregar dados JSON de múltiplas rotas
async function carregarDados() {
    try {
        // Faz duas requisições para obter empresas e denúncias
        const [responseEmpresas, responseDenuncias] = await Promise.all([
            fetch('/empresas'),
            fetch('/denuncias')
        ]);

        if (!responseEmpresas.ok || !responseDenuncias.ok) {
            throw new Error('Erro ao carregar dados das rotas');
        }

        // Converte as respostas para JSON
        const empresas = await responseEmpresas.json();
        const denuncias = await responseDenuncias.json();

        // Combina os dados em um único objeto para compatibilidade com o código existente
        const jsonData = { empresas, denuncias };
        
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
    const empresa = jsonData.empresas.find(e => e.id == id);
    // Encontra as denúncias relacionadas à empresa
    const denuncias = jsonData.denuncias.filter(d => d.id_empresa == id);

    // Atualiza a imagem da empresa no modal
    document.getElementById('empresaImagem').src = empresa.imagem;

    // Conta denúncias procedentes e improcedentes
    const countVerdadeira = denuncias.filter(d => d.status.toLowerCase() === 'verdadeira').length;
    const countFalsa = denuncias.filter(d => d.status.toLowerCase() === 'falsa').length;

    // Se o gráfico já foi criado, destrói a instância anterior
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Dados para o gráfico com base nas denúncias
    const graficoDados = {
        labels: ['Verdadeira', 'Falsa'],
        datasets: [
            {
                label: 'Denúncias',
                data: [countVerdadeira, countFalsa],
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

    // Adiciona o botão "Ver Mais Detalhes" abaixo do gráfico
    const detalhesContainer = document.getElementById('detalhesContainer');
    detalhesContainer.innerHTML = `<a href='/felipe/ver_avaliação.html?id=${empresa.id}' class='btn btn-primary mt-3'>Ver Mais Detalhes</a>`;


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