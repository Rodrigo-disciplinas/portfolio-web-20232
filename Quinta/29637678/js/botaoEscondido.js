var botao = document.getElementById("botao");
var mensagemEscondida = document.querySelector(".mensagemEscondida");

// Função para exibir a mensagem escondida
function showMensagemEscondida() {
  mensagemEscondida.style.display = "block";
}

// Evento de clique para mostrar o botão escondido
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.shiftKey && event.code === "KeyS") {
    botao.style.display = "block";
  }
});

// Evento de clique para exibir a mensagem escondida
botao.addEventListener("click", showMensagemEscondida);
