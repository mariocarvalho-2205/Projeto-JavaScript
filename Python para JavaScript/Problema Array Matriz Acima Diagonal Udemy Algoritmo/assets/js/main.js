const ordemMatriz = Number(prompt('Qual a ordem da Matriz?'))

function criaMatriz (ordem) {
    let matriz = new Array()
    let linha = new Array()
    let inputLinha

    for (let i = 0; i < ordem; i++) {
        linha = []
        for (let j = 0; j < ordem; j++) {
            inputLinha = Number(prompt(`Elemento [${i}, ${j}]:`))
            linha.push(inputLinha)

        }
        matriz.push(linha)
    }
    somaDiagonalSuperior(matriz)
}

function somaDiagonalSuperior (matriz) {
    let diagonalSuperior = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(j > i) {
                diagonalSuperior += matriz[i][j]
            }
        }
    }
    console.log(`Soma dos Elementos Acima da diagonal principal: ${diagonalSuperior}`)
}


criaMatriz(ordemMatriz)