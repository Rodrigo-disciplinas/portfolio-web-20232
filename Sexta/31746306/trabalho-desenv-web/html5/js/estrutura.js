const ativar = document.getElementById("ativar");

ativar.addEventListener("click", () => {
  const elements = document.querySelectorAll(
    "header, nav, section, aside, footer"
  );

  elements.forEach((element) => {
    element.classList.toggle("box-shadow");
  });

  if (ativar.innerHTML == "Ativar grade") {
    ativar.innerHTML = "desativar";
  } else {
    ativar.innerHTML = "Ativar grade";
  }
});

const button = document.getElementById("modos");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let element = document.body;
  element.classList.toggle("dark-mode");

  if (button.innerHTML == "Modo Escuro") {
    button.innerHTML = "Modo Claro";
  } else {
    button.innerHTML = "Modo Escuro";
  }
});
