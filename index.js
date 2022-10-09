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

indiceDaPrimeiraCartaRevelada = null
imagemDaPrimeiraCartaRevelada = null
pendente = false

function revelarCarta(indice) {
    if (pendente === true) {
        alert("Calma, meu filho")
        return
    }
    carta = document.getElementById(indice)
    imagem = ordemDasCartas[indice]
    carta.style.backgroundImage = imagem
    if (indiceDaPrimeiraCartaRevelada === null) {
        indiceDaPrimeiraCartaRevelada = indice
        imagemDaPrimeiraCartaRevelada = imagem
    } else {

        if (imagemDaPrimeiraCartaRevelada === imagem) {
            frase = document.getElementById("frase")
            frase.innerHTML = "Muito Bom!"
            pendente = true
            setTimeout(function () {
                frase.innerHTML = "Encontre os pares"
                pendente = false
            }, 1000)
            indiceDaPrimeiraCartaRevelada = null
            imagemDaPrimeiraCartaRevelada = null
        } else {
            frase = document.getElementById("frase")
            frase.innerHTML = "Errou"
            pendente = true
            setTimeout(function () {
                carta = document.getElementById(indice)
                carta.style.backgroundImage = null
                carta = document.getElementById(indiceDaPrimeiraCartaRevelada)
                carta.style.backgroundImage = null
                indiceDaPrimeiraCartaRevelada = null
                imagemDaPrimeiraCartaRevelada = null
                frase = document.getElementById("frase")
                pendente = false
                frase.innerHTML = "Encontre os pares"
            }, 1000)


        }


    }


}
