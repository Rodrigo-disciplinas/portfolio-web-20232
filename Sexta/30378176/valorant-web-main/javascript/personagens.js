/**Ao clicar no video ele faz o display da imagem ser 'none' some da página e colocar no lugar o video 'block' */
function abrirVideo(id) {
  /**Ele retorna o id do respectivo personagem e junta com "imagem" ou "video" assim fez o codigo ser reaproveitado */
    var imagem = document.getElementById(id + "-imagem");
    var video = document.getElementById(id + "-video");
  
    imagem.style.display = "none";
    video.style.display = "block";
    video.play();
    
    contador++;
  }

    
  
  /**Assim que o video termina de ser reproduzido é chamado essa função que retorna a imagem */
  function fecharVideo(id) {
    /**Ele retorna o id do respectivo personagem e junta com "imagem" ou "video" assim fez o codigo ser reaproveitado */
    var video = document.getElementById(id + "-video");
    var imagem = document.getElementById(id + "-imagem");
  
    imagem.style.display = "block";
    video.style.display = "none";
    video.pause();
  }



