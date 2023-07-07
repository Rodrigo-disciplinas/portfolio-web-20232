function pesquisar() {
    var inputText = document.getElementById('barra-pesquisa').value.toLowerCase();
    if (inputText.includes('dsz')) {
      exibirPopup();
    }
  }

function exibirPopup() {
    alert('VOCÊ DESCOBRIU O EASTER EGG!');
}