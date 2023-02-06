function inputLinhasColunas () {
    //alert('Digite a quantidade de Linhas e Colunas')
    const inputLinhas = Number(prompt('Digite o numero de linhas:'))
    const inputColunas = Number(prompt('Digite o numero de colunas:'))
    inputMatriz(inputLinhas, inputColunas)
}

function inputMatriz (linhas, colunas) {
    let arrayMatriz = new Array()
    let linha = []
    let input
    for(let i = 0; i < linhas; i++) {
        linha = []
        for(let j = 0; j < colunas; j++) {
            input = Number(prompt(`Elemento [${i}, ${j}]`))
            linha.push(input)

        }
        arrayMatriz.push(linha)
    }
    printArray(arrayMatriz)
}

function printArray (matriz) {
    //console.log(matriz)
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; i < matriz.length; i++) {
            console.log(`${matriz[i]}`)
        }
    }
}
inputLinhasColunas()