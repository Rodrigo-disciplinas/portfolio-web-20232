
var selectOption = 1;

function createParagrath(text) {

    const paragraph = document.createElement("p");

    paragraph.textContent = text;

    const divJogabilidade = document.getElementById("jogabilidade_text");

    divJogabilidade.appendChild(paragraph);
}

function selectData(index,data) {

    switch(index) {
        case 1:
            return data.bf1;
            break;
        case 2:
            return data.bf2;
        case 3:
            return data.bf3;
        case 4:
            return data.bf4;
        case 5:
            return data.bf5;
        case 6:
            return data.bf6;

        default:
            return data.bf1;

    }

}

function fetchNewDatas () {
    fetch("../jsons/jogabilidade.json")
    .then( response => response.json()).then(data => {
    
        var result = [];
    
        result = selectData(selectOption,data);

        const divHistoriaText = document.getElementById("jogabilidade_text");

        divHistoriaText.innerHTML = "";
        
        result.forEach((element) => {
            createParagrath(element);
        });
    
    })
}

  var botao = document.getElementById("bf1");
  var botao2 = document.getElementById("bf2");
  var botao3 = document.getElementById("bf3");
  var botao4 = document.getElementById("bf4");
  var botao5 = document.getElementById("bf5");
  var botao6 = document.getElementById("bf6");

  
  botao.addEventListener("click", ()=> {
    selectOption = 1;
    fetchNewDatas();

  });
  
  botao2.addEventListener("click", ()=> {
    selectOption = 2;
    fetchNewDatas();
  });
  
  botao3.addEventListener("click", ()=> {
    selectOption = 3;
    fetchNewDatas();
  });
  
  botao4.addEventListener("click", ()=> {
    selectOption = 4;
    fetchNewDatas();
  });
  
  botao5.addEventListener("click", ()=> {
    selectOption = 5;
    fetchNewDatas();
  });
  
  botao6.addEventListener("click", ()=> {
    selectOption = 6;
    fetchNewDatas();
  });

  document.addEventListener("DOMContentLoaded",function(){
    selectOption = 1;
    fetchNewDatas();
  })