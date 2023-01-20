let qtdNumber = Number(prompt('Quantos elementos vai ter o vetor?'))
let vetor = []
function criaVetor (qtd) {

    let inputNumber
    for (let i = 0; i < qtd; i++) {
        inputNumber = Number(prompt('Digite um numero:'))
        vetor.push(inputNumber)
    }
    return arrayPar(vetor)
}

function arrayPar (array) {
    let arrayPares = []
    let numPares = array.forEach((value) => { if (value % 2 === 0) {arrayPares.push(value)}})
    return mediaPares(arrayPares)
}

function mediaPares (array) {
    let qtd = array.length
    let numEach = array.forEach((value) => {})
    console.log(media)
    return //msg(media)
}


criaVetor(qtdNumber)