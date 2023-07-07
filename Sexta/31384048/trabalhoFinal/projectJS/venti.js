
function exibirGif() {
    var gifOverlay = document.createElement("div");
    gifOverlay.className = "gif-overlay";
      
    var gifImage = document.createElement("img");
    gifImage.src = "../projectIMG/Mondstadt/characters/ventiburst.gif";
      
    gifOverlay.appendChild(gifImage);
    document.body.appendChild(gifOverlay);

    setTimeout(function() {
        document.body.removeChild(gifOverlay);
    }, 3000);
  }