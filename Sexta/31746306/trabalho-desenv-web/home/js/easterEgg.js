let contadorCliques = 0;
const home = document.getElementById("home");

home.addEventListener("click", () => {
  contadorCliques++;

  if (contadorCliques === 10) {
    window.location.href = "../html/easterEgg.html";
  }
});
