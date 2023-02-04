const qtdNum = Number(prompt('Quantos valores vai ter cada vetor?'))

function vetores (num) {
    let vetA = []
    let vetB = []
    alert('Digite os valores do vetor A:')
    for (let i = 0; i < num; i++) {
        let inputNumA = Number(prompt(`Digite o ${i + 1}º valor`))
        vetA.push(inputNumA)
    }

    alert('Digite os valores do vetor B:')
    for (let i = 0; i < num; i++) {
        let inputNumB = Number(prompt(`Digite o ${i + 1}º valor`))
        vetB.push(inputNumB)
    }
    somaVetores(vetA, vetB)
}

function somaVetores (vetA, vetB) {
    let vetC = vetA.map((vetA, ind) => { return vetA + vetB[ind]})
    let resultado
    console.log(`Valor resultante:`)
    resultado = vetC.forEach(value => { console.log(value)})

}

vetores(qtdNum)
