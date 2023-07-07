// Função de exemplo para manipulação do DOM após o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento com id "botao" e adiciona um evento de clique
  var botao = document.getElementById("botao");
  botao.addEventListener("click", function () {
    // Ação a ser executada quando o botão for clicado
    alert("O botão foi clicado!");
  });
});

// script.js

// Função para lidar com o clique no elemento oculto
function lidarComCliqueMisterioso() {
  const senha = prompt("Digite sua data de aniversário (DD/MM/AAAA):");
  const dataAtual = new Date();
  const dataNascimento = new Date(senha.split("/").reverse().join("/")); // Converte a data digitada para o formato adequado

  if (
    dataAtual.getMonth() < dataNascimento.getMonth() ||
    (dataAtual.getMonth() === dataNascimento.getMonth() &&
      dataAtual.getDate() < dataNascimento.getDate())
  ) {
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 1);
  }

  if (senha === dataNascimento.toLocaleDateString("pt-BR")) {
    window.location.href = "mystery.html";
  } else {
    alert("Senha incorreta!");
  }
}

// Adicionar evento de clique ao elemento oculto
const elementoMisterio = document.querySelector(".mystery");
elementoMisterio.addEventListener("click", lidarComCliqueMisterioso);

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");
}
