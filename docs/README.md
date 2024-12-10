# Introdução

Este documento apresenta as informações detalhadas sobre o projeto Loja Segura, uma plataforma dedicada a oferecer uma experiência de compras online mais segura e confiável para os usuários. O projeto foi desenvolvido como parte de uma disciplina acadêmica e busca atender às necessidades de consumidores que enfrentam dificuldades e inseguranças ao realizar transações em sites de lojas virtuais.

* **Projeto:** Loja Segura
* **Repositório GitHub:** https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-2-ti1-0385100-loja-segura.git
* **Membros da equipe:**

  * [Agni Sofia](https://github.com/DopyCat) 
  * [Felipe Cury](https://github.com/fcfCury)
  * [joão]

A documentação do projeto é estruturada da seguinte forma:

1. Introdução:
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas

✅ [Documentação de Design Thinking (MIRO)](files/processo-dt.pdf)

# Contexto

Detalhes sobre o espaço de problema, os objetivos do projeto, sua justificativa e público-alvo.

## Problema

O comércio eletrônico tem experimentado um crescimento acelerado, proporcionando comodidade e acesso a uma variedade de produtos e serviços. No entanto, esse crescimento também traz consigo sérios problemas de segurança e confiança. Muitos consumidores enfrentam dificuldades para identificar lojas online seguras e autênticas, o que os torna vulneráveis a fraudes, roubo de dados pessoais e financeiros, e outros tipos de golpes. A falta de informações confiáveis e a ausência de regulamentação eficiente contribuem para um ambiente em que é fácil para sites falsificados se disfarçarem de plataformas legítimas.

Esse cenário afeta tanto os consumidores, que podem sofrer prejuízos financeiros e perda de dados sensíveis, quanto as empresas de e-commerce honestas, que enfrentam desafios para manter a confiança do cliente em um ambiente onde o risco de fraudes é alto. A necessidade de uma ferramenta que ajude os usuários a verificar a autenticidade das lojas online, identificando potenciais riscos antes da compra, é evidente. Essa aplicação visa proteger os consumidores e contribuir para um ecossistema de comércio eletrônico mais seguro e confiável, promovendo uma experiência de compra mais protegida e aumentando a confiança nas transações digitais.

## Objetivos

**Objetivos**

O objetivo principal é desenvolver um site seguro e confiável que gerencie as informações oficiais de lojas virtuais, permitindo que os consumidores tenham acesso a dados verificados para realizar compras com segurança. Dessa forma, buscamos proporcionar um ambiente digital onde o risco de fraudes seja minimizado, oferecendo uma experiência de compra online mais protegida.

Para alcançar esse objetivo principal, temos dois objetivos específicos. Primeiramente, garantir que as empresas possam criar e gerenciar perfis públicos completos e atualizados, com informações oficiais que assegurem a autenticidade de suas operações. Em segundo lugar, fomentar a colaboração entre a plataforma e as empresas para promover um ecossistema mais seguro, onde as práticas de golpes e fraudes sejam desestimuladas, contribuindo para um mercado mais confiável e fortalecendo a reputação das marcas. Com esses objetivos, a Loja Segura pretende beneficiar tanto os consumidores, oferecendo um espaço de compras mais seguro, quanto as empresas, que poderão reforçar a confiança do público e melhorar suas estratégias de marketing e vendas.

## Justificativa

A justificativa para a criação da Loja Segura está fundamentada na necessidade de combater o crescente problema de golpes e fraudes em lojas online, uma preocupação que afeta consumidores e empresas em todo o Brasil. Com o aumento do comércio eletrônico, crescem também as oportunidades para golpes de falsificação e fraudes, o que prejudica a confiança do consumidor e, por consequência, impacta negativamente as empresas honestas. A insegurança no ambiente digital tem levado a perdas significativas em termos de faturamento, reputação e fidelidade dos clientes, criando um ciclo prejudicial que precisa ser interrompido.

O desenvolvimento de um site que reúna e gerencie informações oficiais das lojas online é essencial para proteger os consumidores e apoiar as empresas na construção de uma imagem mais transparente e confiável. Os objetivos específicos, como permitir a criação e gestão de perfis por parte das empresas, foram escolhidos para oferecer um controle robusto sobre as informações disponibilizadas, garantindo a veracidade das mesmas. Além disso, incentivar a colaboração das empresas para o fortalecimento do mercado e a redução dos golpes visa criar um ambiente de comércio eletrônico mais seguro e sustentável. Com base em estudos de mercado e relatos de vítimas de fraudes online, a necessidade de uma plataforma como a Loja Segura se torna evidente para garantir mais segurança nas transações virtuais, promovendo a confiança tanto de consumidores quanto de comerciantes.

## Público-Alvo

O público-alvo pode incluir uma variedade de perfis, abrangendo desde consumidores finais até empresas que atuam no comércio eletrônico. Os consumidores são pessoas de diferentes faixas etárias e níveis de conhecimento tecnológico, desde jovens que estão familiarizados com a internet e compras online, até indivíduos mais velhos que buscam informações confiáveis para garantir uma experiência de compra segura. Esses consumidores possuem em comum o desejo de evitar fraudes e garantir a legitimidade das lojas nas quais realizam suas transações. Eles podem ter diferentes níveis de familiaridade com plataformas digitais, desde os mais experientes, que esperam funcionalidades avançadas, até aqueles que precisam de uma interface simplificada e intuitiva.

As empresas participantes, por outro lado, incluem tanto grandes marcas consolidadas quanto pequenos e médios empreendedores que buscam destacar-se em um mercado competitivo. Elas têm um interesse particular em manter uma imagem confiável e melhorar sua presença digital, minimizando o impacto de golpes que possam afetar sua reputação. As empresas têm, geralmente, diferentes níveis de familiaridade com tecnologias de gestão de informações e plataformas digitais. Algumas podem já ter estratégias de marketing e presença online bem estabelecidas, enquanto outras podem precisar de uma solução mais acessível e fácil de integrar. Esse público-alvo é composto por profissionais que, em sua maioria, têm conhecimentos básicos a intermediários em tecnologia e estão motivados a proteger suas operações e seus clientes de fraudes e falsificações online.

# Product Discovery

## Etapa de Entendimento

> * A seguir, a **Matriz CSD**: também conhecida por Matriz de Alinhamento, uma ferramenta utilizada no Design Thinking para organizar informações e facilitar o processo de tomada de decisão e solução de problemas:
>   
> ![matriz](https://github.com/user-attachments/assets/d1a4251c-01e6-4ad4-96a2-125d5d64886c)
> * A seguir, o**Mapa de stakeholders**: ferramenta que nos permite compreender o grupo de pessoas e entidades que devemos estudar e conversar para entender mais sobre o problema:
>
> ![image](https://github.com/user-attachments/assets/47c52151-419d-420d-87d0-ee488024bf32)
> 
> * A seguir, as**Entrevistas qualitativas e os Highnligthts de pesquisa**: série de entrevistas qualitativas para validar suposições e solucionar as dúvidas com as principais pessoas envolvidas e um complicado do levantamento realizado por meio das entrevistas:
>   
> ## [Leandro]  Entrevistado : Wesley  
>![image](https://github.com/user-attachments/assets/ff1eb465-d722-4d73-ba17-b815eb668c56)
>![image](https://github.com/user-attachments/assets/c873809a-f798-4c09-b9cc-ac5587ad9987)
>![image](https://github.com/user-attachments/assets/3dcfa9ed-e810-4496-a469-147de2481c68)
>
>## [João Victor]  Entrevistado : Eliane Martins
> ![image](https://github.com/user-attachments/assets/b1be2071-73cc-4786-a43b-56492a651119)
> ![image](https://github.com/user-attachments/assets/f10351e3-af23-46b9-9a16-f918ddc91d1d)
> ![image](https://github.com/user-attachments/assets/f7914f3b-a84c-4b77-b9a8-68a9b1a5562c)
>
> ## [Agni Sofia]  Entrevistado : Zelia Souza
> ![image](https://github.com/user-attachments/assets/7b54e177-0de8-43a6-a695-2d5e43e1e5a3)
> ![image](https://github.com/user-attachments/assets/64414b76-efb0-455f-8120-60b8f3d572aa)
> ![image](https://github.com/user-attachments/assets/15f4a9c4-9387-4cef-85a3-58cbdcd31e1f)
>
> ## [Felipe Cury]  Entrevistado : Claudia
> ![image](https://github.com/user-attachments/assets/bac0bad2-08ba-4cc8-abd4-b810cde0f624)
> ![image](https://github.com/user-attachments/assets/092d2eae-6fb4-4a3b-bc9b-95e2dff84f2d)
> ![image](https://github.com/user-attachments/assets/1586dca9-3d11-4f4c-9766-3693c4aee520)


## Etapa de Definição

### Personas

As Personas representam os perfis fictícios criados com base em dados reais para guiar o desenvolvimento do projeto e garantir que as soluções atendam às necessidades dos usuários.

> ## Persona 1: Lucas Lima
>![image](https://github.com/user-attachments/assets/28bea441-176a-4a00-aef8-7095347a8b79)
>![image](https://github.com/user-attachments/assets/17cd3786-074e-46cd-8e0d-52d5a18ea564)

> ## Persona 2: Alexandra Soraes
>![image](https://github.com/user-attachments/assets/77b36afa-148d-4bef-9682-1ea025b85bab)
>![image](https://github.com/user-attachments/assets/7a5fe3ab-38b9-4ff9-a122-e038cc2b123b)


# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`        | PARA ...`MOTIVO/VALOR`               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Consumidora (Alexandra) | Verificar se uma loja online é confiável | Evitar fraudes e proteger meus dados pessoais e financeiros |
| Consumidora (Alexandra)| Acessar avaliações e relatos de outros usuários sobre uma loja| Decidir com mais segurança antes de realizar uma compra |
| Consumidora menos experiente (Alexandra)| Encontrar informações sobre lojas facilmente | Usar a plataforma sem dificuldades
| Consumidor preocupado com segurança (Lucas) | Denunciar uma loja que acredito ser falsa | Alertar outros usuários e ajudar a prevenir possíveis golpes
| Consumidor que já sofreu fraudes (Lucas) | Saber se a loja está na lista de empresas cadastradas e verificadas | Evitar repetir experiências negativas

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

## Requisitos Funcionais

| ID     | Descrição do Requisito                                                                       | Prioridade |
| ------ | ---------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | Permitir que os usuários cadastrem suas contas e façam login para acessar a plataforma.        | ALTA       |
| RF-002 | Permitir que as empresas criem e gerenciem perfis públicos com informações de contato e verificação. | ALTA       |
| RF-003 | Implementar uma funcionalidade de busca de lojas, permitindo filtros como categoria e localização. | ALTA       |
| RF-004 | Exibir avaliações e relatos de outros consumidores sobre as lojas verificadas.                 | ALTA       |
| RF-005 | Permitir que os usuários denunciem lojas suspeitas de serem fraudulentas.                      | ALTA       |
| RF-006 | Fornecer uma lista de empresas verificadas, com informações detalhadas sobre sua autenticidade. | ALTA       |
| RF-007 | Oferecer um sistema de alertas sobre novas lojas adicionadas e atualizações importantes.        | MÉDIA      |
| RF-008 | Implementar uma página de "Dúvidas Frequentes" e suporte ao cliente via chat ou email.         | MÉDIA      |
| RF-009 | Permitir a atualização de informações de perfil e verificação para empresas já cadastradas.     | MÉDIA      |
| RF-010 | Gerar relatórios de análise de segurança com base nas denúncias e verificações realizadas.     | BAIXA      |

## Requisitos Não Funcionais

| ID      | Descrição do Requisito                                                                        | Prioridade |
| ------- | ----------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser responsivo, adaptando-se a diferentes tamanhos de tela, incluindo dispositivos móveis e desktops. | ALTA       |
| RNF-002 | A plataforma deve ter um tempo de resposta de no máximo 3 segundos para processar as solicitações dos usuários. | ALTA       |
| RNF-003 | O sistema deve ter alta disponibilidade, com uma meta de 99,9% de tempo de operação sem interrupções. | ALTA       |
| RNF-004 | As informações do usuário e da empresa devem ser armazenadas de forma segura, seguindo práticas de criptografia de dados. | ALTA       |
| RNF-005 | O sistema deve ser acessível para usuários com deficiências, seguindo as diretrizes de acessibilidade WCAG 2.1. | MÉDIA      |
| RNF-006 | O tempo de carregamento das páginas não deve ultrapassar 2 segundos em conexões de internet padrão. | MÉDIA      |
| RNF-007 | A plataforma deve ser compatível com os principais navegadores, como Chrome, Firefox, Safari e Edge. | ALTA       |
| RNF-008 | O sistema deve ser escalável, permitindo a adição de novos recursos sem comprometer a performance. | MÉDIA      |
| RNF-010 | A interface deve ter um design intuitivo e de fácil navegação para todos os perfis de usuários. | ALTA       |

## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.

**✳️✳️✳️ COLOQUE AQUI OS PROTÓTIPOS DE TELAS COM TÍTULO E DESCRIÇÃO ✳️✳️✳️**
Tela de login
![image](https://github.com/user-attachments/assets/2b6df0db-bdd3-4733-9eef-79c9202625ae)

Tela de registro
![image](https://github.com/user-attachments/assets/d77d66bc-a542-4a8e-8e56-c7e09fcce224)
Onde o usuário pode se registrar ou registrar uma loja que possui

Home page
![image](https://github.com/user-attachments/assets/883629dd-bde8-4173-8fcf-9e19807b195d)

Tela de edição de conta
![image](https://github.com/user-attachments/assets/1fb714c9-aa06-49c1-af11-69dbfd1a3b07)

**✳️✳️✳️ COLOQUE AQUI O DIAGRAMA DE FLUXO DE TELAS ✳️✳️✳️**

![image](https://github.com/user-attachments/assets/eae1a30d-4372-4efb-9cf6-5e6549e8b612)
O site será capaz de perceber se quem está logando é um comprador ou um dono de loja, e vai mostrar um layout diferente para cada um dos dois

### Protótipo Interativo

**✳️✳️✳️ COLOQUE AQUI UM IFRAME COM SEU PROTÓTIPO INTERATIVO ✳️✳️✳️**

https://marvelapp.com/project/7208171/design/96247152

# Metodologia

A metodologia adotada no desenvolvimento do projeto foi estruturada para integrar as melhores práticas de Design Thinking e da abordagem ágil Scrum, promovendo uma compreensão aprofundada das necessidades dos usuários e um desenvolvimento colaborativo e incremental das funcionalidades. O processo foi conduzido em ciclos curtos, permitindo feedback contínuo e a realização de ajustes e melhorias ao longo do projeto. As etapas de cada sprint foram detalhadamente organizadas para garantir um progresso consistente e eficiente. As principais etapas do desenvolvimento foram:

1. Pesquisa e entrevistas: Realização de entrevistas qualitativas e análise de dados para identificar desafios, mapear problemas e capturar insights importantes sobre as necessidades e expectativas dos usuários.

2. Prototipagem e testes de usabilidade: Criação de protótipos interativos e condução de testes de usabilidade para validar as soluções propostas, melhorar a experiência do usuário e ajustar as interfaces com base no feedback recebido.
   
3. Desenvolvimento e iteração: Colaboração contínua da equipe de desenvolvimento para a implementação das funcionalidades, seguidas de ciclos de iteração para refinar e aprimorar a aplicação. Esse processo incluía reuniões diárias, retrospectivas e revisões do progresso, assegurando que o produto evoluísse de acordo com as expectativas dos usuários e os requisitos estabelecidos.

## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       | https://miro.com/app/board/uXjVKnBCsFg=/       |
| Repositório de código     | GitHub     | https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-2-ti1-0385100-loja-segura      |


## Gerenciamento do Projeto

Divisão de papéis no grupo e apresentação da estrutura da ferramenta de controle de tarefas (Kanban).

![image](https://github.com/user-attachments/assets/799e678b-9d70-4a43-a08f-40557892d7f6)

Nosso planejamento foi muito ruim e com a saida de 2 membros do grupo muitas coisas tiveram que ser adapitadas 


# Solução Implementada

Esta seção apresenta todos os detalhes da solução criada no projeto.

## Vídeo do Projeto


## Funcionalidades

Tela de avaliação de lojas registradas
*clique em avaliar uma loja
![image](https://github.com/user-attachments/assets/9ca2dc58-ce31-45b3-a4ac-636f1202065f)


Tela de visualização das lojas cadastradas
*clique em visualizar lojas
![image](https://github.com/user-attachments/assets/e1ec976f-0c96-435e-8bad-783245abd1f6)


Tela de visualização de avaliações
*clique em avaliações de lojas
*clique em escolha a loje e depois clique na loja que gostaria de ver
![image](https://github.com/user-attachments/assets/2beddbcd-d9a1-46c4-8ad2-997ec754f1ec)


Dropdown de segurança das lojas 
*clique no dropdown no home screen
![image](https://github.com/user-attachments/assets/f0a939f6-2b20-45b0-8ead-b3b1b548351a)



## Estruturas de Dados

{
  "usuarios": [
    {
      "id": 1,
      "login": "admin",
      "senha": "123",
      "nome": "Administrador do Sistema",
      "email": "admin@abc.com"
    },
    {
      "id": 2,
      "login": "user",
      "senha": "123",
      "nome": "Usuario Comum",
      "email": "user@abc.com"
    },
    {
      "id": 3,
      "login": "rommel",
      "senha": "123",
      "nome": "Rommel",
      "email": "rommel@gmail.com"
    },
    {
      "login": "dopy",
      "senha": "12345",
      "nome": "agni sofia",
      "email": "asfjafn@gmail.com",
      "id": 4
    }
  ],
  "empresas": [
    {
      "id": 3,
      "nome": "TechGuru",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Plataforma especializada em tecnologia com uma ampla variedade de produtos de última geração."
    },
    {
      "id": 4,
      "nome": "EcoPower",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Empresa focada em soluções de energia sustentável e renovável para residências e empresas."
    },
    {
      "id": 5,
      "nome": "CyberMall",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Marketplace digital com uma grande seleção de produtos eletrônicos e de informática."
    },
    {
      "id": 6,
      "nome": "ElectroShop",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Loja online especializada em eletrônicos, desde gadgets até eletrodomésticos."
    },
    {
      "id": 7,
      "nome": "FashionHub",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Rede de moda e acessórios com as últimas tendências para todos os estilos."
    },
    {
      "id": 8,
      "nome": "BookNook",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Livraria online com uma vasta coleção de títulos de diversos gêneros."
    },
    {
      "id": 9,
      "nome": "HomeEssentials",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Tudo o que você precisa para sua casa, desde decoração até utensílios domésticos."
    },
    {
      "id": 10,
      "nome": "PetWorld",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Loja online para produtos e serviços para pets, com um amplo catálogo para diversos animais."
    },
    {
      "id": 11,
      "nome": "GadgetFlow",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Portal para os entusiastas de gadgets, com os lançamentos mais recentes do mercado."
    },
    {
      "id": 12,
      "nome": "AutoPartsPro",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Especialistas em peças e acessórios automotivos para manutenção e customização."
    },
    {
      "id": 13,
      "nome": "BeautyBliss",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Loja de cosméticos e produtos de beleza com as melhores marcas e tendências."
    },
    {
      "id": 14,
      "nome": "OutdoorKing",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Equipamentos e acessórios para atividades ao ar livre, camping e esportes de aventura."
    },
    {
      "id": 15,
      "nome": "OfficeGear",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Fornecedora de material de escritório e móveis para empresas e home offices."
    },
    {
      "id": 16,
      "nome": "KidsWorld",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Brinquedos, roupas e acessórios para crianças de todas as idades."
    },
    {
      "id": 17,
      "nome": "KitchenEssentials",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Produtos e utensílios de cozinha para todos os tipos de preparo culinário."
    },
    {
      "id": 18,
      "nome": "SportsMax",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Artigos esportivos para uma grande variedade de modalidades e atividades físicas."
    },
    {
      "id": 19,
      "nome": "TravelLite",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "descricao": "Loja de artigos de viagem, malas e acessórios para tornar seu deslocamento mais prático."
    },
    {
      "id": 20,
      "nome": "SmartHome",
      "imagem": "https://blog.sinalcenter.com.br/wp-content/uploads/2022/11/Sinalizacao-temporaria-de-obras-Quando-se-deve-utilizar.jpg",
      "link": "https://www.youtube.com/watch?v=dQw4w


## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

API foi só o do j.son


# Referências

Não utilizamos referências
