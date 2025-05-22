# **Wiki de Repositórios do GitHub**

Este projeto é uma **wiki de repositórios** desenvolvida em **React**, onde é possível buscar, listar e gerenciar repositórios do GitHub. A aplicação consome a API oficial do GitHub para exibir informações sobre os repositórios de interesse.

---

## **📋 Funcionalidades**

- **Buscar repositórios** no formato `usuário/repositório`.
- **Listar os repositórios encontrados**.
- **Remover repositórios** da lista.
- **Salvar os repositórios no navegador** para persistência dos dados.
- **Alternar entre temas claro e escuro (personalizável)**.

---

## **🚀 Tecnologias Utilizadas**

As principais tecnologias e bibliotecas utilizadas no desenvolvimento deste projeto são:

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Axios](https://axios-http.com/)**: Para fazer requisições HTTP à API do GitHub.
- **[Styled-Components](https://styled-components.com/)**: Para estilização dinâmica dos componentes.
- **JavaScript (ES6+)**: Para manipulação da lógica e interação com a API.

---

## **📂 Estrutura do Projeto**

A estrutura do projeto foi organizada da seguinte forma:
/src
├── /assets # Imagens e ícones
│ └── github.png # Logo do GitHub utilizada na aplicação
├── /components # Componentes reutilizáveis
│ ├── /Button # Botão de busca
│ │ ├── Button.jsx
│ │ └── styles.js
│ ├── /Input # Campo de entrada
│ │ ├── Input.jsx
│ │ └── styles.js
│ ├── /ItemRepo # Item da lista de repositórios
│ ├── ItemRepo.jsx
│ └── styles.js
├── /pages
│ └── App.jsx # Página principal da aplicação
├── /services
│ └── api.js # Configuração da API do GitHub
├── /styles
│ ├── global.js # Estilos globais
│ └── styles.js # Estilos de layout e do container
└── index.js # Ponto de entrada da aplicação

plaintext
Copy

---

## **📦 Como Rodar o Projeto**

Siga os passos abaixo para clonar e rodar o projeto localmente:

### **Pré-requisitos**
- **Node.js** instalado (versão 14 ou superior).
- Um gerenciador de pacotes: **npm** ou **yarn**.

### **Passo a Passo**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/github-wiki.git
   cd github-wiki
Instale as dependências:

bash
Copy
npm install
# ou, se você usar yarn:
yarn install
Inicie o servidor de desenvolvimento:

bash
Copy
npm start
# ou
yarn start
Abra o navegador:

O projeto será executado em: http://localhost:3000.
🔧 Como Usar
Buscar repositórios:

Digite o nome do repositório no formato usuário/repositório (por exemplo, facebook/react) no campo de busca.
Clique no botão "Buscar" para adicionar o repositório à lista.
Remover repositórios:

Clique no link "Remover" para excluir um repositório da lista.
Persistência dos dados:

Os repositórios adicionados à lista serão salvos no navegador e permanecerão disponíveis mesmo após recarregar a página.
🖼️ Screenshots
Tela Inicial
(Adicione uma imagem da tela inicial funcionando)

Busca de Repositórios
(Adicione uma imagem com a busca de repositórios funcionando)

📚 Aprendizados
Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes como:

Consumo de APIs REST com Axios.
Utilização do React Hooks (useState, useEffect).
Estilização dinâmica com Styled-Components.
Manipulação de estado e persistência de dados no LocalStorage.
Boas práticas de organização de arquivos em um projeto React.
🔗 Links
Documentação da API do GitHub: https://docs.github.com/en/restOpens in a new window; external.
Repositório no GitHub: https://github.com/seu-usuario/github-wikiOpens in a new window; external.
⚖️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSEOpens in a new window; external. para mais detalhes.