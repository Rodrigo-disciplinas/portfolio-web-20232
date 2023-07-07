/**Função que alterna entre modo escuro e modo claro */
function trocarmodo(){
    const conteiner = document.getElementById("conteiner");
    const background = document.getElementById("modo_claro");
    const linksdiv = document.getElementsByClassName("links");
    const menu = document.getElementById('menu');
    const botao = document.getElementById('botao');

        /**Se conter dentro do background a classe modo claro, ele remove e adiciona o modo escuro, e se clicar denovo ele retorna ao modo claro */
        if(background.classList.contains('modoClaro')){
        
            background.style.transition = "background 2s";
            background.classList.remove('modoClaro');
            background.classList.add('modoEscuro');

            conteiner.style.backgroundColor = "rgb(15, 25, 35)";
            conteiner.style.transition = "background 2s";

            menu.style.color = "rgb(236, 231, 223)";
            menu.style.backgroundColor = "rgb(15, 25, 35)";
            menu.style.transition = "background 2s";

            botao.style.backgroundColor = "white";
            botao.style.color = "rgb(15, 25, 35)";
            botao.textContent = "MODO CLARO";
            botao.style.transition = "background 2s";


            for (var i = 0; i < linksdiv.length; i++) {
                linksdiv[i].style.color = "rgb(236, 231, 223)"; 
              }
        
        }else{

            background.classList.remove('modoEscuro');
            background.classList.add('modoClaro');

            conteiner.style.backgroundColor = "#ece7df";

            menu.style.color = "rgb(15, 25, 35)";
            menu.style.color = "rgb(15, 25, 35)";
            menu.style.backgroundColor = "rgb(236, 231, 223)";
            menu.style.transition="0.9s";

            botao.style.backgroundColor = "rgb(15, 25, 35)";
            botao.style.color = "rgb(236, 231, 223)";
            botao.textContent="MODO ESCURO";


            for (var i = 0; i < linksdiv.length; i++) {
            linksdiv[i].style.color = "rgb(15, 25, 35)";
            }
    }
}
/**Função que causa um delay ao clicar em alguma página do menu, para de tempo de aparecer o carregamento e dps de 2s ser redirecionado */
function atraso(event){
event.preventDefault();

    var carregamento = document.getElementById('carregamento');
    if(carregamento.classList.toggle){
        carregamento.classList.add('load');
    }

setTimeout(function(){
    window.location.href = event.target.href;
},2000);

}



