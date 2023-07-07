
//Modo claro
var pressionarBotao = document.getElementById('claro');
pressionarBotao.addEventListener('click', function () {
    document.body.classList.toggle('claro');
});


//EasterEgg
var easterEggArea = document.getElementById("easterEggArea");
    var clickCount = 0;

    easterEggArea.addEventListener("click", function() {
      clickCount++;

      if (clickCount >= 10) {
        showEasterEgg();
        clickCount = 0;
      }
    });

    function showEasterEgg() {
      easterEggArea.innerHTML = "<h1>Easter Egg Encontrado!</h1><p>Parabéns, você descobriu o easter egg secreto!</p>";
    }
