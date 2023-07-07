let valor = Boolean;
valor = false;
// Função para exibir ou ocultar a tabela de Goku
function Goku(id) {
  var tabela = document.getElementById(id);
  var estilo = window.getComputedStyle(tabela);
  let barra = document.querySelector(".load");
  let barra_bar = document.querySelector(".load_green");

  if (estilo.display == "none") {
    tabela.style.display = "block"; // Exibe a tabela
    barra.style.display = "block"; // Exibe a barra de progresso
    barra_bar.style.display = "block"; // Exibe a barrade animação
  
    tabela.style.transition = "2s ease";
    barra.style.transition = "2s ease";
    barra.style.transition = "2s ease";

  } else {
    tabela.style.display = "none"; // Oculta a tabela
    barra.style.display = "none"; // Oculta a barra de progresso
    barra_bar.style.display = "none"; // Oculta a barrade animação
  }
}

// Função para exibir ou ocultar a tabela de Naruto
function Naruto(id) {
  var tabela = document.getElementById(id);
  var estilo = window.getComputedStyle(tabela);
  let barra = document.querySelector(".loadN");
  let barra_bar = document.querySelector(".load_greenN");

  if (estilo.display === "none") {
    tabela.style.display = "block"; // Exibe a tabela
    barra.style.display = "block"; // Exibe a barrra 
    barra_bar.style.display = "block"; // Exibe a barra de animação

    
    tabela.style.transition = "2s ease";
    barra.style.transition = "2s ease";
    barra.style.transition = "2s ease";

  } else {
    tabela.style.display = "none"; // Oculta a tabela
    barra.style.display = "none"; // Oculta a barra
    barra_bar.style.display = "none"; // Oculta a barra de animação
  }
}

// Função para exibir ou ocultar a tabela de Luffy
function Luffy(id) {
  var tabela = document.getElementById(id);
  var estilo = window.getComputedStyle(tabela);
  let barra = document.querySelector(".loadL");
  let barra_bar = document.querySelector(".load_greenL");

  if (estilo.display === "none") {
    tabela.style.display = "block"; // Exibe a tabela
    barra.style.display = "block"; // Exibe a barra
    barra_bar.style.display = "block"; // Exibe a barra de animação

    
  
  } else {
    tabela.style.display = "none"; // Oculta a tabela
    barra.style.display = "none"; // Oculta a barra 
    barra_bar.style.display = "none"; // Oculta a barra animação
  }
}

// Função para alternar entre modos claro e escuro da página
function pag_escura() {
  let imagem = document.querySelector("body");
  let nome = document.querySelector("input");
  let tabela_fora = document.getElementById("minha_tabela");
  let tabela_goku = document.getElementsByClassName("minha_tabela");
  let foto_goku = document.querySelector(".img");
  let foto_naruto = document.querySelector(".imgN");
  let foto_luffy = document.querySelector(".imgL");
  let tabela_foraN = document.getElementById("minha_Naruto");
  let tabela_naruto = document.getElementsByClassName("minha_tabN");
  let tabela_foraL = document.getElementById("minha_Luffy");
  let tabela_luffy = document.getElementsByClassName("minha_tabL");
  let h1 = document.querySelector("h1");
  let tabela = document.getElementById("minha_Luffy");
  let botao = document.querySelectorAll("button");
  let son_N = document.querySelector(".espaco");
  let son_L = document.querySelector(".espaco_L");
  let sonhoK = document.querySelector(".load_green");
  let sonhoN = document.querySelector(".load_greenN");
  let sonhoL = document.querySelector(".load_greenL");

   


  if(valor == false){
    // Modo escuro
    imagem.style.backgroundImage = 'url("./imagens/blackmode.jpg")'; // Define a imagem de fundo como modo escuro para a pagina
    imagem.style.color = "white"; // Define a cor do texto como branco pra facilitar leitura 
    nome.value = "pag_clara"; // Define o valor do campo de input como "pag_clara" para ter coerencia
    tabela_fora.style.borderColor = "white"; // Define a cor da borda da tabela para uma cor melhor visivel
    tabela_foraN.style.borderColor = "aqua"; // Define a cor da borda da tabela Naruto 
    tabela_foraL.style.borderColor = "purple"; // Define a cor da borda da tabela de Luffy
    h1.style.color = "aqua"; // Define a cor do título 
    foto_goku.src = "./imagens/son.png"; // Define uma imagem de Goku  para o modo escuro
    foto_goku.style.width = "80px"; // Define a largura da imagem de Goku 
    foto_naruto.src = "./imagens/natu.png"; // Define uma imagem de Naruto  para o modo escuro
    foto_naruto.style.width = "90px"; // Define a largura da imagem de Naruto 
    foto_luffy.src = "./imagens/luffy5.png"; // Define uma imagem de Luffy para modo escuro
    foto_luffy.style.width = "110px"; // Define a largura da imagem de Luffy 
    imagem.style.overflow = "auto";

    imagem.style.transition = "1s ease";
    h1.style.transition = "2s ease";
    tabela.style.transition = "2s ease";
    tabela_fora.style.transition = "2s ease";
    tabela_foraN.style.transition = "2s ease";
    tabela_foraL.style.transition = "2s ease";

    sonhoK.style.backgroundColor = "red";
    sonhoL.style.color = "black";

    sonhoN.style.backgroundColor = "orange";
    sonhoN.style.color = "black";

    sonhoL.style.backgroundColor = "white";
    sonhoL.style.color = "black";

    botao.forEach(element => {      
      element.style.display = "block";
    });
    

    tabela.style.position = "relative"; // Define a posição da tabela de Luffy como relativa para melhorar o posicionamento
    tabela.style.top = "30px"; // Define a posição superior da tabela de Luffy

    tabela_foraN.style.position = "relative"; // Define a posição da tabela externa como relativa para melhorar o posicionamento
    tabela_foraN.style.top = "-27px"; // Define a posição superior da tabela externa 

    son_N.style.position ="relative";
    son_N.style.bottom = "30px";

    
    son_L.style.position ="relative";
    son_L.style.top = "1px";

    for (let i = 0; i < tabela_goku.length; i++) {
      tabela_goku[i].style.borderColor = "white"; // Define a cor da borda das tabelas de Goku 
      tabela_goku[i].style.color = "white"; // Define a cor do texto das tabelas de Goku  
      tabela_goku[i].style.backgroundColor = "black"; // Define a cor de fundo das tabelas de Goku 
      tabela_naruto[i].style.borderColor = "aqua"; // Define a cor da borda das tabelas de Naruto
      tabela_naruto[i].style.backgroundColor = "black"; // Define a cor de fundo das tabelas de Naruto
      tabela_luffy[i].style.color = "violet"; // Define a cor do texto das tabelas de Luffy 
      tabela_luffy[i].style.borderColor = "blue"; // Define a cor da borda das tabelas de Luffy 
      tabela_luffy[i].style.backgroundColor = "pink"; // Define a cor de fundo das tabelas de Luffy 
    }
    valor=true;
  }else{
      location.reload();
    }

  }
 
 

 // Modo claro
//    imagem.style.color = "black"; // Define a cor do texto 
  //  imagem.style.backgroundImage = 'url("./imagens/kakaroto.jpg")'; // Define a imagem de fundo para o modo claro
    //nome.value = "pag_escura"; // Define o valor do campo de input como "pag_escura" para melhor coerencia
    //tabela_fora.style.borderColor = "orange"; // Define a cor da borda da tabela 
    //tabela_foraN.style.borderColor = "black"; // Define a cor da borda da tabela de Naruto
    //tabela_foraL.style.borderColor = "pink"; // Define a cor da borda da tabela de Luffy 
    //h1.style.color = "black"; // Define a cor do título 
    //foto_goku.src = "./imagens/son_goku.webp"; // Define a imagem de Goku
    //foto_goku.style.width = "57px"; // Define a largura da imagem de Goku 
    //foto_naruto.src = "./imagens/char_naruto.webp"; // Define a imagem de Naruto 
    //foto_naruto.style.width = "70px"; // Define a largura da imagem de Naruto 
    //foto_luffy.src = "./imagens/luffy.png"; // Define a imagem de Luffy 
    //foto_luffy.style.width = "70px"; // Define a largura da imagem de Luffy 

//    animacao1.style.display = "none";
  //  animacao2.style.display = "none";
    //animacao3.style.display = "none";
    
    
//    sonhoK.style.backgroundColor = "greenyellow";
  //  sonhoL.style.color = "black";

//    sonhoN.style.backgroundColor = "greenyellow";
//    sonhoN.style.color = "black";

//    sonhoL.style.backgroundColor = "greenyellow";
  //  sonhoL.style.color = "black";

//    botao.forEach(function (element) {      
  //    element.style.display = "none";
    //});
    

//    tabela.style.position = "relative"; // Define a posição da tabela de Luffy como relativa
  //  tabela.style.top = "3px"; // Define a posição superior da tabela de Luffy
    
    //tabela_fora.style.position = "relative"; // Define a posição da tabela externa 
   // tabela_fora.style.top = "0px"; // Define a posição superior da tabela externa 

//    for (let i = 0; i < tabela_goku.length; i++) {
  //    tabela_goku[i].style.borderColor = "black"; // Define a cor da borda das tabelas de Goku 
    //  tabela_goku[i].style.color = "blue"; // Define a cor do texto das tabelas de Goku
      //tabela_goku[i].style.backgroundColor = "yellow"; // Define a cor de fundo das tabelas de Goku 
//      tabela_naruto[i].style.borderColor = "aqua"; // Define a cor da borda das tabelas de Naruto
  //    tabela_naruto[i].style.backgroundColor = "blue"; // Define a cor de fundo das tabelas de Naruto
    //  tabela_luffy[i].style.color = "black"; // Define a cor do texto das tabelas de Luffy
      //tabela_luffy[i].style.borderColor = "pink"; // Define a cor da borda das tabelas de Luffy
//      tabela_luffy[i].style.backgroundColor = "transparent"; // Define a cor de fundo das tabelas de Luffy 
  //    //no quesito de funcionalidade do botão para entrar em modo escuro e sair do mesmo são atribuidos valores para que ele volte para o ponto inicial do qual ele sai quando se é clicado no botão pela primeira vez 
    //}
 // }//