# Amigo Secreto

Um projeto simples para sortear o amigo secreto. Este projeto web permite que o usuário insira nomes, evite duplicatas (com validação case-insensitive), formate os nomes com a primeira letra maiúscula e o restante minúsculo (inclusive para nomes compostos) e realize o sorteio de um dos nomes inseridos.

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos e Instalação](#pré-requisitos-e-instalação)
- [Como Utilizar](#como-utilizar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Possíveis Problemas e Soluções](#possíveis-problemas-e-soluções)
- [Licença](#licença)

## Visão Geral

O **Amigo Secreto** é uma aplicação web criada para facilitar a organização de sorteios de amigos secretos. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript, com foco na simplicidade e eficiência. Ideal para demonstrar habilidades em manipulação de DOM, validação de entradas e sorteio aleatório.

## Funcionalidades

- **Adicionar Amigos**: Permite inserir nomes únicos (sem duplicatas) com a formatação adequada.
- **Validação de Dados**: Garante que os nomes não sejam duplicados, considerando letras maiúsculas e minúsculas.
- **Formatação de Nomes**: Converte nomes para que cada palavra comece com letra maiúscula e o restante seja minúsculo.
- **Sorteio de Amigo Secreto**: Realiza um sorteio aleatório e exibe o resultado, limpando a lista após o sorteio.

## Pré-requisitos e Instalação

Para executar o projeto, você precisará de um navegador web atualizado. Não há necessidade de instalar dependências adicionais.

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/amigo-secreto.git
cd amigo-secreto
```

## Abrindo o Projeto

Basta abrir o arquivo _index.html_ em seu navegador favorito.

## Como Utilizar

- _Adicionar um Amigo:_ Digite um nome no campo de entrada e clique no botão "Adicionar". O sistema valida a entrada e formata o nome automaticamente.
- _Exibir Lista:_ Todos os nomes inseridos são exibidos na lista de amigos.
- _Sortear Amigo Secreto:_ Clique no botão "Sortear Amigo". O sistema sorteará aleatoriamente um nome, exibindo a mensagem:

```text
O amigo secreto sorteado é: <nome>
```

Após o sorteio, a lista de amigos é automaticamente limpa.

## Estrutura do Projeto

```plaintext
amigo-secreto/
├── assets/
│   ├── amigo-secreto.png       # Imagem representativa
│   └── play_circle_outline.png # Ícone do sorteio
├── index.html                  # Estrutura HTML principal
├── style.css                   # Estilos do projeto
├── app.js                      # Lógica de adição e sorteio de amigos
└── README.md                   # Documentação do projeto
```

## Possíveis Problemas e Soluções

- _Problema:_ Nomes duplicados não são validados corretamente.
  _Solução:_ A validação é feita de forma case-insensitive. Se o problema persistir, verifique se a lógica de comparação está utilizando toLowerCase() corretamente para ambas as entradas.

- _Problema:_ O sorteio não funciona quando não há nomes na lista.
  _Solução:_ O sistema verifica se o array de amigos está vazio antes de realizar o sorteio, emitindo um alerta caso não haja nomes.

## Licença

Sem licença no momento.
