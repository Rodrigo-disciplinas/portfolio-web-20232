

fetch("../jsons/criadores.json")
    .then( response => response.json()).then(data => {
        
        data.about.forEach((element) => {
            createParagrath(element);
        });
    
})

function createParagrath(text) {

    const paragraph = document.createElement("p");

    paragraph.textContent = text;

    const divHistoriaText = document.getElementById("criadores_text");

    divHistoriaText.appendChild(paragraph);
}