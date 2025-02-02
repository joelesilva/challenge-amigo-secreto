// Array que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  // Validação: campo vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Atualiza o array com o novo nome
  amigos.push(nome);

  // Limpa o campo de entrada
  input.value = "";

  // Atualiza a lista exibida
  exibirLista();
}

// Função para percorrer o array e exibir os nomes na lista HTML
function exibirLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista existente

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Valida se há amigos disponíveis
  if (amigos.length === 0) {
    alert("Nenhum amigo para sortear.");
    return;
  }

  // Seleciona um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Atualiza o resultado do sorteio
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
