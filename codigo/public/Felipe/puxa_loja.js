fetch('...') 
  .then(response => response.json())
  .then(empresas => {
    empresas.forEach(empresa => {
      const card = criarCard(empresa);
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao buscar empresas:', error));
