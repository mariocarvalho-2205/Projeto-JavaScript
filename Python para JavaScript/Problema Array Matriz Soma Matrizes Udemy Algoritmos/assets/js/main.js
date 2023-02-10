const qtdLinhas = Number(prompt('Quantas linhas vao ter cada Matriz?'))
const qtdColunas = Number(prompt('Quantas colunas vao ter cada Matriz?'))
let arrayMatrizA = new Array()
let arrayMatrizB = new Array()

let linha = new Array()
let input

let matrizA = ((qtdLinha, qtdColunas) => {
    console.log(`Digite os valores da matriz A:`)

    for (let i = 0; i < qtdLinha; i++) {
        linha = []

        for (let j = 0; j < qtdColunas; j++) {
            input = Number(prompt(`Elemento [${i}, ${j}]:`))
            linha.push(input)
        }
        arrayMatrizA.push(linha)
    }
    return arrayMatrizA
})

let matrizB = ((qtdLinha, qtdColunas) => {
    console.log('Digite os valores da matriz B:')

    for (let i = 0; i < qtdLinha; i++) {
        linha = []

        for (let j = 0; j < qtdColunas; j++) {
            input = Number(prompt(`Elemento [${i}, ${j}]:`))
            linha.push(input)
        }
        arrayMatrizB.push(linha)
    }
    return arrayMatrizB
})

function criaMatrizez (qtdLinhas, qtdColunas) {

    matrizC(matrizA(qtdLinhas, qtdColunas), matrizB(qtdLinhas, qtdColunas))
}


function matrizC (matA, matB) {
    let matrizC = new Array()
    console.table(matA)
    console.table(matB)

    console.log('Matriz Soma:')
    for (let i = 0; i < qtdLinhas; i++) {
        for (let j = 0; j < qtdColunas; j++) {
            matrizC.push(matA[i][j] + matB[i][j])
        }
    }

    matrizC.forEach((value) => console.log(value))
}
criaMatrizez(qtdLinhas, qtdColunas)
