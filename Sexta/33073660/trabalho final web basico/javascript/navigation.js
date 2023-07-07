var counter = 0;

var botao = document.getElementById("home");
var botao2 = document.getElementById("historia");
var botao3 = document.getElementById("jogabilidade");
var botao4 = document.getElementById("personagens");
var botao5 = document.getElementById("criadores");
var botao6 = document.getElementById("contato");


  
  botao.addEventListener("click", ()=> {
    
    document.getElementById("myFrame").src = "../pages/home.html";
    counter++;

  });
  
  botao2.addEventListener("click", ()=> {
    document.getElementById("myFrame").src = "../pages/historia.html";
    counter++;
  });
  
  botao3.addEventListener("click", ()=> {
    document.getElementById("myFrame").src = "../pages/jogabilidade.html";
    counter++;
  });
  
  botao4.addEventListener("click", ()=> {
    document.getElementById("myFrame").src = "../pages/personagens.html";
    counter++;
  });
  
  botao5.addEventListener("click", ()=> {
    document.getElementById("myFrame").src = "../pages/criadores.html";
    counter++;
  });
  
  botao6.addEventListener("click", ()=> {
    document.getElementById("myFrame").src = "../pages/contato.html";
    counter++;
  });

  document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("myFrame").src = "../pages/home.html";
    counter++;
  })

  if(counter => 20) {
    counter = 0;
    console.log(counter);
    alert("https://www.youtube.com/watch?v=ewxKgcqr4eA");
    
  }