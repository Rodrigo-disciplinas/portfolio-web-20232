function toggleDarkMode() {
  var body = document.getElementById("bodyID");
  var icon = document.getElementById("icon");

  body.classList.toggle("dark-mode");
  icon.classList.toggle("dark-mode-icon");
}

// ../Js/script.js

// Sequência correta de botões a serem clicados
const sequence = [2, 2, 3, 1];
// Índice da sequência atual
let sequenceIndex = 0;

// Função para verificar a sequência de botões clicados
function checkSequence(buttonNumber) {
  // Verifica se o botão clicado está correto na sequência atual
  if (buttonNumber === sequence[sequenceIndex]) {
    // Incrementa o índice da sequência atual
    sequenceIndex++;

    // Verifica se a sequência atual foi concluída
    if (sequenceIndex === sequence.length) {
      // Ação especial a ser executada quando a sequência estiver completa
      activateEasterEgg();
      // Reinicia a sequência
      sequenceIndex = 0;
    }
  } else {
    // Botão incorreto clicado, reinicia a sequência
    sequenceIndex = 0;
  }
}

// Função para ativar o easter egg
function activateEasterEgg() {
  // Aqui você pode adicionar o código para realizar a ação especial do easter egg
  const vidPath = "../videos/ssstwitter.com_1687356020353.mp4";
  const vid = document.createElement("video");
  vid.src = vidPath;
  vid.width = "560";
  vid.height = "315";
  vid.controls = true;
  vid.autoplay = true;

  const videoContainer = document.getElementById("videoEasterEgg");

  


  // Adiciona a mensagem à div
  const message = document.createElement("p");
  message.textContent = "Estudante médio de ADS";
  videoContainer.appendChild(message);

  // Anexa o elemento de vídeo ao contêiner de vídeo
  videoContainer.appendChild(vid);

  

}
