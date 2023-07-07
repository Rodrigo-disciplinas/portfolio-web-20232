/*Esta linha cria uma variável chamada modoEscuro e a associa ao elemento HTML com o ID "modoEscuro".*/
var modoEscuro = document.getElementById("modoEscuro");
/*Retorna uma referência ao elemento que possui o ID especificado.*/
var body = document.body;
/*A função addEventListener() é usada para adicionar eventos ao botão.
 o evento é "click". Quando o botão é clicado, a função definida como argumento será executada.*/
modoEscuro.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    modoEscuro.innerHTML = "Modo Normal";
  } else {
    modoEscuro.innerHTML = "Modo Escuro";
  }
});
