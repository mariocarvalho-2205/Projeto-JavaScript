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
    if (arrayPares.length > 0) {
        return sumPares(arrayPares)
    } else {
        return console.log('NENHUM NUMERO PAR')
    }
}

function sumPares (array) {
    let qtd = array.length
    let sumPares = array.reduce((acu, ind) => acu + ind)
    return mediaPares(sumPares, qtd)
}

function mediaPares (sum, qtd) {
    return console.log(`MEDIA DOS NUMEROS PARES: ${(sum / qtd).toFixed(1)}`)
}

criaVetor(qtdNumber)