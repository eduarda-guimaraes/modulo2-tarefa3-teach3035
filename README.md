# 🎬 Catálogo de Filmes

## 📋 Descrição da Tarefa

Desenvolver uma aplicação que utilize um arquivo JSON contendo dados de filmes, exibindo-os em formato de tabela com campo de pesquisa funcional e implementando checkboxes para selecionar filmes.

## ✅ Requisitos Cumpridos

- Utilizar arquivo JSON (`movies.json`) como fonte de dados
- Exibir filmes em formato de tabela organizada
- Implementar campo de pesquisa funcional
- Filtrar e mostrar itens localizados em tempo real
- Adicionar checkbox para selecionar filmes
- Exibir modal com informações do filme selecionado
- Mostrar contador de filmes selecionados
- Design responsivo e agradável
- Interface intuitiva e fácil de usar

### Instalação e Execução

1.  **Clone o repositório** (se aplicável):
    ```bash
    git clone https://github.com/eduarda-guimaraes/modulo2-tarefa3-teach3035.git
    ```
2.  **Acesse a pasta do projeto** no terminal:
    ```bash
    cd modulo2-tarefa3-teach3035
    ```
3.  **Execute a aplicação** em modo de desenvolvimento:
    ```bash
    npm start
    # ou
    yarn start
    ```
O projeto será iniciado e aberto automaticamente no seu navegador, geralmente em `http://localhost:3000`.

## 🎯 Objetivos da Tarefa

1. **Carregar dados do JSON** - Ler e processar dados de filmes
2. **Exibir em Tabela** - Apresentar dados estruturados em formato tabular
3. **Implementar Filtro** - Criar busca por nome ou gênero
4. **Atualização em Tempo Real** - Mostrar resultados conforme o usuário digita
5. **Adicionar Checkboxes** - Selecionar filmes com feedback visual
6. **Exibir Modal** - Mostrar informações detalhadas do filme selecionado
7. **Contador de Seleções** - Exibir total de filmes marcados
8. **Design Responsivo** - Funcionar em todos os tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework para construção da interface
- **TypeScript** - Linguagem tipada para maior segurança
- **CSS3** - Estilização e responsividade
- **JSON** - Formato de armazenamento dos dados

## 📁 Estrutura do Projeto

```
src/
├── App.tsx              # Componente principal
├── App.css              # Estilos globais
├── components/
│   ├── Header.tsx       # Header com barra de pesquisa
│   └── Footer.tsx       # Rodapé da aplicação
├── pages/
│   └── Home.tsx         # Página principal com tabela de filmes
├── styles/
│   ├── Header.css       # Estilos do header
│   └── Footer.css       # Estilos do footer
└── data/
    └── movies.json      # Base de dados dos filmes
```

## 🙋‍♀️ Desenvolvido por

| [<img src="https://avatars.githubusercontent.com/eduarda-guimaraes" width="100px;" alt="Foto de perfil do GitHub de Eduarda Guimarães"/>](https://github.com/eduarda-guimaraes) |
| :---: |
| **Eduarda Guimarães** |
