const qtdNum = Number(prompt('Quantos valores vai ter cada vetor?'))

function vetorA (num) {
    let vetA = []
    alert('Digite os valores do vetor A:')
    for (let i = 0; i < num; i++) {
        let inputNumA = Number(prompt(`Digite o ${i + 1}º valor`))
        vetA.push(inputNumA)
    }
    console.log(vetA)
    vetorB(num)
}
vetorA(qtdNum)

function vetorB (num) {
    let vetB = []
    alert('Digite os valores do vetor B:')
    for (let i = 0; i < num; i++) {
        let inputNumB = Number(prompt(`Digite o ${i + 1}º valor`))
        vetB.push(inputNumB)
    }
    console.log(vetB)
}

function somaVetores (vetorA, vetorB) {
    let vetC = []
}
