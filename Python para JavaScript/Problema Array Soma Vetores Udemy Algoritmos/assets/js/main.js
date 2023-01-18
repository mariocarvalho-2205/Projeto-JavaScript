const qtdNum = Number(prompt('Quantos valores vai ter cada vetor?'))
let vetA = []
let vetB = []
function vetorA (num) {

    alert('Digite os valores do vetor A:')
    for (let i = 0; i < num; i++) {
        let inputNumA = Number(prompt(`Digite o ${i + 1}º valor`))
        vetA.push(inputNumA)
    }
    vetorB(num, vetA)
}
vetorA(qtdNum)

function vetorB (num, vetA) {

    alert('Digite os valores do vetor B:')
    for (let i = 0; i < num; i++) {
        let inputNumB = Number(prompt(`Digite o ${i + 1}º valor`))
        vetB.push(inputNumB)
    }
    console.log(vetA, vetB)
    somaVetores(vetA, vetB, num)
}

function somaVetores (vetA, vetB, num) {
    let vetC = []
    for (let i = 0; i < num; i++) {
        vetC.push(vetA[i] + vetB[i])
    }
    console.log(`Valor Resultante: ${vetC}`)
}
