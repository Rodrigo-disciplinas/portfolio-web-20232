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
