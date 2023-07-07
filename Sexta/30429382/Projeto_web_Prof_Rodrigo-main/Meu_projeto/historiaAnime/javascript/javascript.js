let valor = Boolean;
valor = false;

function pag_escura(){
let botao_nome = document.querySelector(".valor");
let body = document.querySelector("body");
let botao = document.querySelectorAll("button");
let div_1 = document.querySelector(".div_1");    
let cor_dragon = document.querySelector(".dragon");
let div_2 = document.querySelector(".div_2");
let div_3 = document.querySelector(".div_3");


if(valor == false){
    body.style.backgroundColor = "black";
  
    div_1.style.backgroundColor = " rgb(57, 57, 56)";
    div_1.style.borderColor = "red"; 
    cor_dragon.style.color = "yellow";
    cor_dragon.style.textDecoration = "underline red"; 

    div_2.style.backgroundColor = "rebeccapurple";

    div_3.style.backgroundColor = "saddlebrown";

    body.style.transition = "2s ease";

    div_1.style.transition = "2s ease";
    div_2.style.transition = "2s ease";
    div_3.style.transition = "2s ease";

    botao_nome.innerHTML = "pag_clara";

    cor_dragon.style.transition = "2s ease";



    botao.forEach(element => {
        element.style.backgroundColor = "white";
    });
  

    


    valor = true;
}else{
    
    location.reload();
    
}
}