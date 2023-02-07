const qtdLinhas = Number(prompt('Qual a quantidade de linhas da matriz?'))
const qtdColunas = Number(prompt('Qual a quantidade de colunas da matriz?'))

function criaMatriz (lin, col) {
    let matriz = new Array()
    let linha = new Array()
    let inputValueLinhas

    for (let i = 0; i < lin; i++) {
        linha = []
        for (let j = 0; j < col; j++) {
            inputValueLinhas = Number(prompt(`Digite os elementos da ${i + 1}ª linha e da  ${j + 1}ª posição`))
            linha.push(inputValueLinhas)
        }
        matriz.push(linha)
    }
    somaMatriz(matriz)
}

function somaMatriz (matriz) {
    let soma
    let linha = new Array()

    for (let i = 0; i < matriz.length; i++) {
        linha[i] = 0

        for (let j = 0; j < matriz[i].length; j++) {
            linha[i] += matriz[i][j]
        }

    }
    console.log('Vetor Gerado:')
    for (soma of linha) {
        console.log(soma.toFixed(1))
    }

}
criaMatriz(qtdLinhas, qtdColunas)