# Introdução

Este documento apresenta as informações detalhadas sobre o projeto Loja Segura, uma plataforma dedicada a oferecer uma experiência de compras online mais segura e confiável para os usuários. O projeto foi desenvolvido como parte de uma disciplina acadêmica e busca atender às necessidades de consumidores que enfrentam dificuldades e inseguranças ao realizar transações em sites de lojas virtuais.

* **Projeto:** Loja Segura
* **Repositório GitHub:** https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-2-ti1-0385100-loja-segura.git
* **Membros da equipe:**

  * [Agni Sofia](https://github.com/DopyCat) 
  * [Beltrano](https://github.com/beltrano) ⚠️ EXEMPLO ⚠️
  * [Cicrano](https://github.com/cicrano) ⚠️ EXEMPLO ⚠️

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
> ![image](https://github.com/user-attachments/assets/bb2ed432-3d62-46d9-b97d-f2a459a3a432)
> ![image](https://github.com/user-attachments/assets/1586dca9-3d11-4f4c-9766-3693c4aee520)


## Etapa de Definição

### Personas

**✳️✳️✳️ APRESENTE OS DIAGRAMAS DE PERSONAS ✳️✳️✳️**

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que você deve ser enumerar e descrever precisamente e de forma personalizada todos os principais envolvidos com a solução almeja.
>
> **Orientações**:
>
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Criar personas (Hotmart)](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)

# Product Design

Nesse momento, vamos transformar os insights e validações obtidos em soluções tangíveis e utilizáveis. Essa fase envolve a definição de uma proposta de valor, detalhando a prioridade de cada ideia e a consequente criação de wireframes, mockups e protótipos de alta fidelidade, que detalham a interface e a experiência do usuário.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO...`PERSONA` | QUERO/PRECISO ...`FUNCIONALIDADE`        | PARA ...`MOTIVO/VALOR`               |
| --------------------- | ------------------------------------------ | -------------------------------------- |
| Usuário do sistema   | Registrar minhas tarefas ⚠️ EXEMPLO ⚠️ | Não esquecer de fazê-las             |
| Administrador         | Alterar permissões ⚠️ EXEMPLO ⚠️      | Permitir que possam administrar contas |

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.
>
> **Orientações**:
>
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Proposta de Valor

**✳️✳️✳️ APRESENTE O DIAGRAMA DA PROPOSTA DE VALOR PARA CADA PERSONA ✳️✳️✳️**

##### Proposta para Persona XPTO ⚠️ EXEMPLO ⚠️

![Exemplo de proposta de valor](images/exemplo-proposta-valor.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> O mapa da proposta de valor é uma ferramenta que nos ajuda a definir qual tipo de produto ou serviço melhor atende às personas definidas anteriormente.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                   | Prioridade |
| ------ | ---------------------------------------------------------- | ---------- |
| RF-001 | Permitir que o usuário cadastre tarefas ⚠️ EXEMPLO ⚠️ | ALTA       |
| RF-002 | Emitir um relatório de tarefas no mês ⚠️ EXEMPLO ⚠️ | MÉDIA     |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                              | Prioridade |
| ------- | ------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser responsivo para rodar em um dispositivos móvel ⚠️ EXEMPLO ⚠️ | MÉDIA     |
| RNF-002 | Deve processar requisições do usuário em no máximo 3s ⚠️ EXEMPLO ⚠️          | BAIXA      |

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Os requisitos de um projeto são classificados em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na plataforma (ex: cadastro de usuário).
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro (ex: suporte a dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma característica alvo da sua solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.
>
> **Orientações**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Projeto de Interface

Artefatos relacionados com a interface e a interacão do usuário na proposta de solução.

### Wireframes

Estes são os protótipos de telas do sistema.

**✳️✳️✳️ COLOQUE AQUI OS PROTÓTIPOS DE TELAS COM TÍTULO E DESCRIÇÃO ✳️✳️✳️**

##### TELA XPTO ⚠️ EXEMPLO ⚠️

Descrição para a tela XPTO

![Exemplo de wireframe](images/exemplo-wireframe.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante ao layout de elementos fundamentais na interface.
>
> **Orientações**:
>
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)

### User Flow

**✳️✳️✳️ COLOQUE AQUI O DIAGRAMA DE FLUXO DE TELAS ✳️✳️✳️**

![Exemplo de fluxo de telas](images/exemplo-userflow.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.
>
> **Orientações**:
>
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools &amp; Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)

### Protótipo Interativo

**✳️✳️✳️ COLOQUE AQUI UM IFRAME COM SEU PROTÓTIPO INTERATIVO ✳️✳️✳️**

✅ [Protótipo Interativo (MarvelApp)](https://marvelapp.com/prototype/4hd6091?emb=1&iosapp=false&frameless=false)  ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Um protótipo interativo apresenta o projeto de interfaces e permite ao usuário navegar pelas funcionalidades como se estivesse lidando com o software pronto. Utilize as mesmas ferramentas de construção de wireframes para montagem do seu protótipo interativo. Inclua o link para o protótipo interativo do projeto.

# Metodologia

Detalhes sobre a organização do grupo e o ferramental empregado.

## Ferramentas

Relação de ferramentas empregadas pelo grupo durante o projeto.

| Ambiente                    | Plataforma | Link de acesso                                     |
| --------------------------- | ---------- | -------------------------------------------------- |
| Processo de Design Thinking | Miro       | https://miro.com/XXXXXXX ⚠️ EXEMPLO ⚠️        |
| Repositório de código     | GitHub     | https://github.com/XXXXXXX ⚠️ EXEMPLO ⚠️      |
| Hospedagem do site          | Render     | https://site.render.com/XXXXXXX ⚠️ EXEMPLO ⚠️ |
| Protótipo Interativo       | MarvelApp  | https://marvelapp.com/XXXXXXX ⚠️ EXEMPLO ⚠️   |
|                             |            |                                                    |

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Liste as ferramentas empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível. Inclua itens como: (1) Editor de código, (2) )ferramentas de comunicação, (3) )ferramentas de diagramação, (4) )plataformas de hospedagem, entre outras.

## Gerenciamento do Projeto

Divisão de papéis no grupo e apresentação da estrutura da ferramenta de controle de tarefas (Kanban).

![Exemplo de Kanban](images/exemplo-kanban.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
>
> **Orientações**:
>
> - [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
> - [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
> - [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

# Solução Implementada

Esta seção apresenta todos os detalhes da solução criada no projeto.

## Vídeo do Projeto

O vídeo a seguir traz uma apresentação do problema que a equipe está tratando e a proposta de solução. ⚠️ EXEMPLO ⚠️

[![Vídeo do projeto](images/video.png)](https://www.youtube.com/embed/70gGoFyGeqQ)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> O video de apresentação é voltado para que o público externo possa conhecer a solução. O formato é livre, sendo importante que seja apresentado o problema e a solução numa linguagem descomplicada e direta.
>
> Inclua um link para o vídeo do projeto.

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.Info

##### Funcionalidade 1 - Cadastro de Contatos ⚠️ EXEMPLO ⚠️

Permite a inclusão, leitura, alteração e exclusão de contatos para o sistema

* **Estrutura de dados:** [Contatos](#ti_ed_contatos)
* **Instruções de acesso:**
  * Abra o site e efetue o login
  * Acesse o menu principal e escolha a opção Cadastros
  * Em seguida, escolha a opção Contatos
* **Tela da funcionalidade**:

![Tela de Funcionalidade](images/exemplo-funcionalidade.png)

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente cada uma das funcionalidades que a aplicação fornece tanto para os usuários quanto aos administradores da solução.
>
> Inclua, para cada funcionalidade, itens como: (1) titulos e descrição da funcionalidade; (2) Estrutura de dados associada; (3) o detalhe sobre as instruções de acesso e uso.

## Estruturas de Dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info

##### Estrutura de Dados - Contatos   ⚠️ EXEMPLO ⚠️

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de Dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema

```json
  {
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    email: "admin@abc.com",
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    login: "admin",
    nome: "Administrador do Sistema",
    senha: "123"
  }
```

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente as estruturas de dados utilizadas na solução tanto para dados utilizados na essência da aplicação quanto outras estruturas que foram criadas para algum tipo de configuração
>
> Nomeie a estrutura, coloque uma descrição sucinta e apresente um exemplo em formato JSON.
>
> **Orientações:**
>
> * [JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)
> * [Trabalhando com JSON - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)

## Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução

**Images**:

* Unsplash - [https://unsplash.com/](https://unsplash.com/) ⚠️ EXEMPLO ⚠️

**Fonts:**

* Icons Font Face - [https://fontawesome.com/](https://fontawesome.com/) ⚠️ EXEMPLO ⚠️

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) ⚠️ EXEMPLO ⚠️
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente os módulos e APIs utilizados no desenvolvimento da solução. Inclua itens como: (1) Frameworks, bibliotecas, módulos, etc. utilizados no desenvolvimento da solução; (2) APIs utilizadas para acesso a dados, serviços, etc.

# Referências

As referências utilizadas no trabalho foram:

* SOBRENOME, Nome do autor. Título da obra. 8. ed. Cidade: Editora, 2000. 287 p ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESSA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
>
> **Orientações**:
>
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
