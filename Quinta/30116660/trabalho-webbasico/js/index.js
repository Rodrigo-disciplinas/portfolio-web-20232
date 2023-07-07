const theme = document.getElementById("theme");
const htmlElement = document.documentElement;

//logica do botao de mudar de tema
document
  .getElementById("theme")
  .addEventListener("click", function () {
    let body = document.body;
    let nav = document.body.querySelector("nav");

    if (body.classList.contains("body-dark-theme")) {
      body.classList.remove("body-dark-theme");
      nav.classList.remove("nav-dark-theme");
      this.innerText = "Alterar o tema";
    } else {
      body.classList.add("body-dark-theme");
      nav.classList.add("nav-dark-theme");
      this.innerText = "Alterar o tema";
    }
  });

let teclasPressionadas = [];
const sequenciaSecreta =
  "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";

window.addEventListener("keydown", (e) => {
  teclasPressionadas.push(e.key);

  // Verificacao das teclas apertadas para ativacao do easteregg
  if (teclasPressionadas.join(",") === sequenciaSecreta) {
    console.log(" easteregg ativado");
    window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0", "_blank")
    teclasPressionadas = [];
  }
});
