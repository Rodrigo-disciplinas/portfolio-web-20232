function exibirGif() {
    var gifOverlay = document.createElement("div");
    gifOverlay.className = "gif-overlay";
      
    var gifImage = document.createElement("img");
    gifImage.src = "../projectIMG/Inazuma/characters/raidenburst.gif";
      
    gifOverlay.appendChild(gifImage);
    document.body.appendChild(gifOverlay);

    setTimeout(function() {
        document.body.removeChild(gifOverlay);
    }, 3000);
  }