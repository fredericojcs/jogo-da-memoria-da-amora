ordemDasCartas = [
    "url('imagens/1.jpeg')",
    "url('imagens/2.jpeg')", 
    "url('imagens/3.jpeg')", 
    "url('imagens/4.jpeg')", 
    "url('imagens/5.jpeg')", 
    "url('imagens/1.jpeg')", 
    "url('imagens/2.jpeg')", 
    "url('imagens/3.jpeg')", 
    "url('imagens/4.jpeg')", 
    "url('imagens/5.jpeg')",
];
function revelarCarta(id){
    carta = document.getElementById(id)
    indice = Number.parseInt(id) - 1
    imagem = ordemDasCartas[indice]



    carta.style.backgroundImage = imagem


}


