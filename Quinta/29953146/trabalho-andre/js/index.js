const themeSwitcher = document.getElementById("theme-switcher");
const htmlElement = document.documentElement;

document
  .getElementById("theme-switcher")
  .addEventListener("click", function () {
    let body = document.body;
    let nav = document.body.querySelector("nav");

    if (body.classList.contains("body-dark-theme")) {
      body.classList.remove("body-dark-theme");
      nav.classList.remove("nav-dark-theme");
      this.innerText = "Alterar para o tema escuro";
    } else {
      body.classList.add("body-dark-theme");
      nav.classList.add("nav-dark-theme");
      this.innerText = "Alterar para o tema claro";
    }
  });

let teclasPressionadas = [];
const sequenciaSecreta =
  "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowLeft,ArrowRight,ArrowRight";

window.addEventListener("keydown", (e) => {
  teclasPressionadas.push(e.key);

  // Verifica se a sequência de teclas corresponde à sequência secreta
  if (teclasPressionadas.join(",") === sequenciaSecreta) {
    console.log("Soundtrack ativado");
    document.getElementById('soundtrack').play();
    teclasPressionadas = [];
  }
});
