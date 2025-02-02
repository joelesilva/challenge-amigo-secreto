// Array que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim();

  // Validação: campo vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Validação: nome duplicado (case-insensitive)
  const nomeLower = nome.toLowerCase();
  const nomeExiste = amigos.some((amigo) => amigo.toLowerCase() === nomeLower);
  if (nomeExiste) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  // Transforma o nome: primeira letra maiúscula e o restante minúsculo
  nome = nome
    .split(" ")
    .map(
      (palavra) =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
    )
    .join(" ");

  // Atualiza o array com o novo nome
  amigos.push(nome);

  // Limpa o campo de entrada
  input.value = "";

  // Atualiza a lista exibida
  exibirLista();
}

// Função para percorrer o array e exibir os nomes na lista HTML
function exibirLista() {
  // Limpa o sorteio, caso tenha exibido ele anteriormente.
  document.getElementById("resultado").innerHTML = "";

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

  // Atualiza o resultado do sorteio na tag <ul id="resultado">
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;

  // Limpa o array de amigos e a lista exibida
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
}
