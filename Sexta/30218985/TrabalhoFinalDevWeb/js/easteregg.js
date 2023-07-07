/*JavaScript para EasterEgg */
// Contador para rastrear os cliques
var clickCount = 0;

// Função chamada quando o clique ocorre
function handleClick() {
  clickCount++;

  // Verifica se o contador atingiu três cliques
  if (clickCount === 3) {
    window.alert("Você encontrou o Easter Egg!");
    clickCount = 0; // Reinicia o contador após exibir o alerta
  }
}

// Adiciona um ouvinte de eventos ao body
document.body.addEventListener("click", handleClick);

// Função chamada quando o botão é clicado
function handleButtonClick(event) {
  event.stopPropagation(); // Impede a propagação do evento para o ouvinte de eventos do body
}

// Seleciona o elemento do botão
var button = document.querySelector(".botao");

// Adiciona um ouvinte de eventos ao botão
button.addEventListener("click", handleButtonClick);
