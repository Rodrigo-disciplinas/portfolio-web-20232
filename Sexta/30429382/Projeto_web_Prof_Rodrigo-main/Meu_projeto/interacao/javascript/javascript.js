var valor = Boolean;
valor = true;
let body = document.querySelector("body");

// aqui a contabilidade de pontos
var naruto = 0;
var sakura = 0;
var sasuke = 0;


function botao(){
//definimos as funcionalidades do botao da pagina!
let botao = document.querySelector("button");
let fieldset =document.querySelector(".fieldset_1");
let input = document.querySelectorAll("input");

naruto = 0;
sasuke =0;
sakura = 0;

input.forEach(function (elemet){
    elemet.checked = false;
    
});

while(valor == true){
if(valor == true){
    fieldset.style.display = "block";
    botao.style.display = "none";
    valor = false;
}

}
}

//criados varias funções relacionadas as quest da pagina 
function q1_op1(){
let fieldset =document.querySelector(".fieldset_1");
let fieldset2 =document.querySelector(".fieldset_2");


naruto++; 
fieldset2.style.display = "block";
fieldset.style.display ="none";



}

function q1_op2(){
    let fieldset =document.querySelector(".fieldset_1");
    let fieldset2 =document.querySelector(".fieldset_2");
    
    sakura++;
    fieldset2.style.display = "block";
    fieldset.style.display ="none";

    
}

function q1_op3(){
        let fieldset =document.querySelector(".fieldset_1");
        let fieldset2 =document.querySelector(".fieldset_2");
        
        sasuke++;            
        fieldset2.style.display = "block";
        fieldset.style.display ="none";

    
}
//questao 2
function q2_op1(){
    let fieldset =document.querySelector(".fieldset_2");
    let fieldset2 =document.querySelector(".fieldset_3");
    
    
    sasuke++; 
    fieldset2.style.display = "block";
    fieldset.style.display ="none";
    
    
    
    }
    
    function q2_op2(){
        let fieldset =document.querySelector(".fieldset_2");
        let fieldset2 =document.querySelector(".fieldset_3");
        
        naruto++;
        fieldset2.style.display = "block";
        fieldset.style.display ="none";
    
        
    }
    
    function q2_op3(){
            let fieldset =document.querySelector(".fieldset_2");
            let fieldset2 =document.querySelector(".fieldset_3");
            
            sakura++;            
            fieldset2.style.display = "block";
            fieldset.style.display ="none";
    
        
    }
//questao 3

function q3_op1(){
    let fieldset =document.querySelector(".fieldset_3");
    let fieldset2 =document.querySelector(".fieldset_4");
    
    
    sasuke++; 
    fieldset2.style.display = "block";
    fieldset.style.display ="none";
    
    
    
    }
    
    function q3_op2(){
        let fieldset =document.querySelector(".fieldset_3");
        let fieldset2 =document.querySelector(".fieldset_4");
        
        sakura++;
        fieldset2.style.display = "block";
        fieldset.style.display ="none";
    
        
    }
    
    function q3_op3(){
            let fieldset =document.querySelector(".fieldset_3");
            let fieldset2 =document.querySelector(".fieldset_4");
            
            naruto++;            
            fieldset2.style.display = "block";
            fieldset.style.display ="none";
    
        
    }
//questao 4

function q4_op1(){
    let fieldset =document.querySelector(".fieldset_4");
    let fieldset2 =document.querySelector(".fieldset_5");
    
    
    sasuke++; 
    fieldset2.style.display = "block";
    fieldset.style.display ="none";
    
    
    
    }
    
    function q4_op2(){
        let fieldset =document.querySelector(".fieldset_4");
        let fieldset2 =document.querySelector(".fieldset_5");
        
        naruto++;
        fieldset2.style.display = "block";
        fieldset.style.display ="none";
    
        
    }
    
    function q4_op3(){
            let fieldset =document.querySelector(".fieldset_4");
            let fieldset2 =document.querySelector(".fieldset_5");
            
            sakura++;            
            fieldset2.style.display = "block";
            fieldset.style.display ="none";
    
        
    }
//ultima questao

function q5_op1(){
    let fieldset =document.querySelector(".fieldset_5");
    let resultado =document.querySelector("h2");
    let fieldset_secreto = document.querySelector(".fieldset_6");
    let botao = document.querySelector("button");
    
    sakura++; 
   
    fieldset.style.display ="none";
    botao.style.display ="block";

    valor = true;

    if(naruto > sakura && naruto > sasuke){
        resultado.style.color= "yellow";
        resultado.innerHTML = "Você tem a mesma personalidade do Naruto";
        body.style.backgroundImage = "url('./imagens/wNaruot.jpg')";
        body.style.backgroundSize = "cover";
    }else if( sakura > naruto && sakura > sasuke){

    resultado.innerHTML = "Você tem a mesma personalidade da Sakura";
    body.style.backgroundImage = "url('./imagens/sak.jpg')";
    body.style.backgroundSize = "cover";
    }else if(sasuke > naruto && sasuke > sakura){
        resultado.innerHTML = "Você tem a mesma personalidade do Sasuke";
        body.style.backgroundImage = "url('./imagens/wSasuke.jpg')";

        body.style.backgroundSize = "cover";
    }else if ( sasuke == naruto || naruto == sakura || sakura == sasuke){
        fieldset_secreto.style.display = "block";
        valor = false;
        
    if(valor == false){
        botao.style.display = "none";
    }
    }
    
    
}
    
    function q5_op2(){
        let fieldset =document.querySelector(".fieldset_5");
        let resultado =document.querySelector("h2");
        let fieldset_secreto = document.querySelector(".fieldset_6");
        let botao = document.querySelector("button");


        sasuke++;
        valor = true;

        fieldset.style.display ="none";
        botao.style.display ="block";
         
    if(naruto > sakura && naruto > sasuke){
        resultado.style.color= "yellow";
        resultado.innerHTML = "Você tem a mesma personalidade do Naruto";
        body.style.backgroundImage = "url('./imagens/wNaruot.jpg')";
    }else if( sakura > naruto && sakura > sasuke){

    resultado.innerHTML = "Você tem a mesma personalidade da Sakura";
body.style.backgroundImage = "url('./imagens/sak.jpg')";
    }else if(sasuke > naruto && sasuke > sakura){
        resultado.innerHTML = "Você tem a mesma personalidade do Sasuke";
        body.style.backgroundImage = "url('./imagens/wSasuke.jpg')";
        body.style.backgroundSize = "cover";
    }else if ( sasuke == naruto || naruto == sakura || sakura == sasuke){
        fieldset_secreto.style.display = "block";
        valor = false;
        
    if(valor == false){
        botao.style.display = "none";
    }
    
    }   
 }
    
    function q5_op3(){
            let fieldset =document.querySelector(".fieldset_5");
            let resultado =document.querySelector("h2");
            let fieldset_secreto = document.querySelector(".fieldset_6");
            let botao = document.querySelector("button");
            
            naruto++;            
            valor = true;

            fieldset.style.display ="none";
     
            botao.style.display = "block";
           
            
    if(naruto > sakura && naruto > sasuke){
        resultado.innerHTML = "Você tem a mesma personalidade do Naruto";
        body.style.backgroundImage = "url('./imagens/wNaruot.jpg')";

        resultado.style.color= "yellow";
        body.style.backgroundSize = "cover";
    }else if( sakura > naruto && sakura > sasuke){

    resultado.innerHTML = "Você tem a mesma personalidade da Sakura";
    body.style.backgroundImage = "url('./imagens/sak.jpg')";
    body.style.backgroundSize = "cover";

    }else if(sasuke > naruto && sasuke > sakura){
        resultado.innerHTML = "Você tem a mesma personalidade do Sasuke";
        body.style.backgroundImage = "url('./imagens/wSasuke.jpg')";

        body.style.backgroundSize = "cover";
    }else if ( sasuke == naruto || naruto == sakura || sakura == sasuke){
        fieldset_secreto.style.display = "block";
        valor = false;
        
    if(valor == false){
        botao.style.display = "none";
    }
    }
        
    
        
    }
    //caso haja empate
    function q6_op1(){
        let fieldset =document.querySelector(".fieldset_5");
        let resultado =document.querySelector("h2");
        let fieldset_secreto = document.querySelector(".fieldset_6");
        let botao = document.querySelector("button");


        naruto++; 
        valor = true;

        fieldset.style.display ="none";
        fieldset_secreto.style.display = "none";
        botao.style.display = "block";

        if(naruto > sakura && naruto > sasuke){
            resultado.style.color= "yellow";
            resultado.innerHTML = "Você tem a mesma personalidade do Naruto";
            body.style.backgroundImage = "url('./imagens/wNaruot.jpg')";
            body.style.backgroundSize = "cover";
        }else if( sakura > naruto && sakura > sasuke){
    
        resultado.innerHTML = "Você tem a mesma personalidade da Sakura";
        body.style.backgroundImage = "url('./imagens/sak.jpg')";
        body.style.backgroundSize = "cover";
        }else{
            resultado.innerHTML = "Você tem a mesma personalidade do Sasuke";
            body.style.backgroundImage = "url('./imagens/wSasuke.jpg')";
            body.style.backgroundSize = "cover";
        }
        
        
        }
        
        function q6_op2(){
            let fieldset =document.querySelector(".fieldset_5");
            let resultado =document.querySelector("h2");
            let fieldset_secreto = document.querySelector(".fieldset_6");
            let botao = document.querySelector("button");
            
            sakura++;
           
            valor = true;

            fieldset.style.display ="none";
            fieldset_secreto.style.display = "none";
            botao.style.display = "block";

        if(naruto > sakura && naruto > sasuke){
            resultado.innerHTML = "Você tem a mesma personalidade do Naruto";
            resultado.style.color= "yellow";
            body.style.backgroundImage = "url('./imagens/wNaruot.jpg')";
            body.style.backgroundSize = "cover";
        }else if( sakura > naruto && sakura > sasuke){
    
        resultado.innerHTML = "Você tem a mesma personalidade da Sakura";
        body.style.backgroundImage = "url('./imagens/sak.jpg')";
        body.style.backgroundSize = "cover";
        }else{
            resultado.innerHTML = "Você tem a mesma personalidade do Sasuke";
            body.style.backgroundImage = "url('./imagens/wSasuke.jpg')";
            body.style.backgroundSize = "cover";
        }
        
            
        }
        
        function q6_op3(){
                let fieldset =document.querySelector(".fieldset_5");
                let resultado =document.querySelector("h2");
                let fieldset_secreto = document.querySelector(".fieldset_6");
                let botao = document.querySelector("button");
             

                sasuke++;            
         
                valor = true;

                fieldset.style.display ="none";
                fieldset_secreto.style.display = "none";
                botao.style.display = "block";


        if(naruto > sakura && naruto > sasuke){
            resultado.innerHTML = "Você tem a mesma personalidade do Naruto";
            resultado.style.color= "yellow";
            body.style.backgroundImage = "url('./imagens/wNaruot.jpg')";

            body.style.backgroundSize = "cover";
        }else if( sakura > naruto && sakura > sasuke){
    
        resultado.innerHTML = "Você tem a mesma personalidade da Sakura";
        body.style.backgroundImage = "url('./imagens/sak.jpg')";
        body.style.backgroundSize = "cover";
        body.style.width = "max-content";
        }else{
            resultado.innerHTML = "Você tem a mesma personalidade do Sasuke";
            body.style.backgroundImage = "url('./imagens/wSasuke.jpg')";
            body.style.backgroundSize = "cover";
        }
            
}
            
        