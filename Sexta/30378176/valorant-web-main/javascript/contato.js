function fotoperfil(){
    /*Função que faz a trocar de imagem em contato */
    var imagem = document.getElementById("foto-perfil");
    if(imagem.src.match("../imagens/outros/perfil.jpg")){
        imagem.src = "../imagens/outros/real-desenho.png";
    }else{
        imagem.src = "../imagens/outros/perfil.jpg";
        imagem.src.style="transition: 1s;";
    }
}

