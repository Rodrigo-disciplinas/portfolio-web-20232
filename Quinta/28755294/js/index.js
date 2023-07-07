document.getElementById("toggle-theme").addEventListener("click", () => toggleTheme());

let body = document.body;

// verifica se há a classe "body-dark-theme" no elemento botão de id "toggle-theme", remove se a classe já estiver lá, e coloca, caso contrário
function toggleTheme() {
  if (body.classList.contains("body-dark-theme")) {
    body.classList.remove("body-dark-theme");

    toggleTextColor("#09090b");
  } else {
    body.classList.add("body-dark-theme");

    toggleTextColor("#d4d4d4");
  }
}

// percorre todos os elementos de textElement e para cada elemento deste presente na página, irá alterar para a cor passada por parâmetro
function toggleTextColor(hexColor) {
  const textElements = ["p", "h2", "span", "strong", "td"];

  let element;

  for (let i = 0; i < textElements.length; i++) {
    element = document.querySelectorAll(textElements[i]);

    for (let k = 0; k < element.length; k++) {
      element[k].style.color = hexColor;
    }
  }
}

function floatingElements() {
  const elements = document.querySelectorAll("body *");

  elements.forEach((element) => {
    element.style.transition = "transform 2s ease";
    element.style.transform = `translate(${getRandomInt(
      -200,
      200
    )}px, ${getRandomInt(-200, 200)}px)`;
  });

  setInterval(() => {
    elements.forEach((element) => {
      element.style.transform = `translate(${getRandomInt(
        -200,
        200
      )}px, ${getRandomInt(-200, 200)}px)`;
    });
  }, 1000);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// sequência secreta para ativar o easter egg
let keys = [];
const secretSequence = "v,i,n,i";

window.addEventListener("keydown", (e) => {
  keys.push(e.key);

  // Verifica se a sequência é igual a sequência secreta
  if (keys.join(",") === secretSequence) {
    floatingElements();
    keys = [];
  }
});
