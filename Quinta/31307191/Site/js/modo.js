function alterarModo(){
    let body = document.querySelector("body")
    let links = document.querySelectorAll("a")

    if(body.className == "claro"){
        for(let i = 0; i < links.length; i++){
            links[i].className = "aescuro";
        }
        body.className = "escuro";
    
    } else {
        for(let i = 0; i < links.length; i++){
            links[i].className = "#aclaro";
        }
        body.className = "claro"
    }
}

function alterarModoIndex(){
    let body = document.querySelector("body")
    let gif = document.querySelector("#gif")
    let links = document.querySelectorAll("p")
    if(body.className == "claro"){
        body.className = "escuro";
        gif.className = "gifInvisivel";
    
    } else {
        body.className = "claro"
        gif.className = "gifVisivel"
       
    }
}
