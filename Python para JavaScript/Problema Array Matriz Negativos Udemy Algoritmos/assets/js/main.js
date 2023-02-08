function tamanhoMatriz () {
    const qtdLinha = Number(prompt('Qual a quantidade de linhas Da Matriz?'))
    const qtColunas = Number(prompt('Qual a quantidade de colunas da Matriz?'))
    inputMatriz(qtdLinha, qtColunas)
}

function inputMatriz (linhas, colunas) {
    let matriz = new Array()
    let linha = new Array()
    let inputValue
    for (let i = 0; i < linhas; i++) {
        linha = []
        for (let j = 0; j < colunas; j++) {
            inputValue = Number(prompt(`Elemento [${i} ${[j]}:`))
            linha.push(inputValue)
        }
        matriz.push(linha)
    }
    negativoMatriz(matriz)
}

function negativoMatriz (matriz) {
    let negativo = new Array()

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) negativo.push(matriz[i][j])
        }
    }
    mensagemNegativo(negativo)
}

function mensagemNegativo (msg) {
    console.log('Valores Negativos:')
    for (negativo of msg) {
        console.log(negativo)
    }
}


tamanhoMatriz()