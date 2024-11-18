// Variáveis para armazenar a avaliação do usuário
let avaliacao = null;

// Função para preencher o campo de seleção com os nomes das empresas
window.onload = async function() {
    // Obter as empresas do JSON usando fetch
    const response = await fetch('/empresas');
    const empresas = await response.json();

    // Preencher o campo de seleção com as empresas
    const selectElement = document.getElementById('idLoja');
    empresas.forEach(empresa => {
        const option = document.createElement('option');
        option.value = empresa.id;
        option.textContent = empresa.nome;
        selectElement.appendChild(option);
    });
};

// Função para enviar a denúncia
async function enviarDenuncia() {
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const nomeLoja = document.getElementById('idLoja').value;
    const urlLoja = document.getElementById('urlLoja').value;
    const experiencia = document.getElementById('experiencia').value;

    if (!nomeUsuario || !nomeLoja || !urlLoja || !experiencia || avaliacao === null) {
        alert('Todos os campos devem ser preenchidos, incluindo a avaliação!');
        return;
    }

    // Dados que serão enviados para o servidor
    const denuncia = {
        id_empresa: parseInt(nomeLoja), // Associa o ID da loja selecionada
        usuario: nomeUsuario,
        status: avaliacao, // Definir status como a avaliação dinâmica (Sim ou Não)
        comentario: experiencia, // O que foi escrito no campo "Contexto e Experiência de Compra"
        url: urlLoja // Adiciona a URL da loja
    };

    // Enviar os dados para o servidor usando POST
    const response = await fetch('/denuncias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(denuncia)
    });

    if (response.ok) {
        alert('Denúncia enviada com sucesso!');
        document.getElementById('denunciaForm').reset(); // Limpar o formulário após envio
    } else {
        alert('Erro ao enviar a denúncia!');
    }
}

// Função para gerenciar a avaliação do usuário
function setAvaliacao(valor) {
    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');
    
    if (valor === 'Sim') {
        // Definir avaliação como "Sim"
        likeButton.classList.add('btn-success'); // Adiciona a classe verde ao botão de like
        likeButton.classList.remove('btn-outline-success'); // Remove a classe do botão não pressionado
        
        dislikeButton.classList.remove('btn-danger'); // Remove a classe vermelha do botão de dislike
        dislikeButton.classList.add('btn-outline-danger'); // Deixa o botão de dislike com a borda vermelha

        avaliacao = 'Sim'; // Atualiza a avaliação para "Sim"
    } else if (valor === 'Não') {
        // Definir avaliação como "Não"
        dislikeButton.classList.add('btn-danger'); // Adiciona a classe vermelha ao botão de dislike
        dislikeButton.classList.remove('btn-outline-danger'); // Remove a classe do botão não pressionado
        
        likeButton.classList.remove('btn-success'); // Remove a classe verde do botão de like
        likeButton.classList.add('btn-outline-success'); // Deixa o botão de like com a borda verde

        avaliacao = 'Não'; // Atualiza a avaliação para "Não"
    }

    // Mostrar a avaliação no console (opcional para debug)
    console.log(`Avaliação: ${valor}`);
}
