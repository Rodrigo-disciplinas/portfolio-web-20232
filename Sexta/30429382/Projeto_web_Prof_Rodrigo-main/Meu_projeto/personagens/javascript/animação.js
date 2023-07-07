document.addEventListener("DOMContentLoaded", function(){
kamehameha1();
rasengan1();
gear1();
});

let valorG = Boolean;

function kamehameha1(){
let botao1 = document.querySelector(".fuck");


if(valorG == false){

botao1.style.display = "none";

}
if(valorG == false ){
valorG = true;
}else{
    valorG = false;
}
}

function kamehameha2(){
    let botao1 = document.querySelector(".fuck");
    const gokuImage = document.getElementById('goku-image');
    const gokuKame = document.getElementById("goku-kame");
    const audio = document.getElementById("meu_audio");
if(valorG == true){

  botao1.style.display = "block"; 
  audio.play();

  setTimeout(function() {
    gokuImage.classList.add('new-image');
  }, 3800);
  
  setTimeout(function() {
    gokuKame.style.display = "block";
  }, 4000);

}    

valorG = false;

}


//aqui esta animação do naruto 
let valorN = Boolean;

function rasengan1(){
let botao1 = document.querySelector(".fuck2");


if(valorN == false){

botao1.style.display = "none";

}
if(valorN == false ){

valorN = true;

}else{
    valorN = false;
}
}

function rasengan2(){
    let botao1 = document.querySelector(".fuck2");
    const gokuImage = document.getElementById('naruto-image');
    const gokuKame = document.getElementById("naruto-kame");
    const rasengan = document.getElementById("rasengan");
if(valorN == true){

  botao1.style.display = "block"; 
  setTimeout(function(){

    rasengan.play();
  }, 400);

  setTimeout(function() {
    gokuKame.style.display = "block";
  }, 1500);

}    

valorN = false;

}
//aqui sobre a animação do Luffy
let valorL = Boolean;

function gear1(){
let botao1 = document.querySelector(".fuck3");


if(valorL == false){

botao1.style.display = "none";

}
if(valorL == false ){

valorL = true;

}else{
    valorL = false;
}
}

function gear2(){
    let botao1 = document.querySelector(".fuck3");
    const gokuImage = document.getElementById('naruto-image');
    const luffy = document.getElementById("luffy_image");
    const gear = document.getElementById("second");
if(valorL == true){

  botao1.style.display = "block"; 
  gear.play();

  setTimeout(function() {
    luffy.style.display = "block";
  }, 1300);

}    

valorL = false;

}
