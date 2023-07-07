function aparecer() {
    var elemento = document.getElementById("elemento");
    if (elemento.style.display === "none") {
      elemento.style.display = "block"; 
    } else {
      elemento.style.display = "none";
    }
  }