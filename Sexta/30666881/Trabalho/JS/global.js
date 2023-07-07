//Obtém o elemento do botão de alternância de modo escuro
var toggleButton = document.getElementById('escuro');

toggleButton.addEventListener('click', function () {
    // Alterna a classe 'modo_escuro' no elemento body
    document.body.classList.toggle('modo_escuro');
});

//Easter Egg
var clickCount = 0;

function EasterEgg() {
    clickCount++;

    if (clickCount == 3) {
        var image = document.getElementById('minhaImagem');
        image.style.display = 'block';

        clickCount = 0;
    }
}

var div = document.getElementById('meuDiv');
div.addEventListener('click', EasterEgg);


