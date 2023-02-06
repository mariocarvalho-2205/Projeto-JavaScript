function inputLinhasColunas () {
    alert('Digite a quantidade de Linhas e Colunas')
    const inputLinhas = Number(prompt('Digite o numero de linhas:'))
    const inputColunas = Number(prompt('Digite o numero de colunas:'))
    inputMatriz(inputLinhas, inputColunas)
}

function inputMatriz (linhas, colunas) {
    let arrayMatriz = new Array()
    let linha = []
    let input
    for(let i = 0; i < linhas; i++) {

        for(let j = 0; j < colunas; j++) {
            input = Number(prompt(`Elemento [${i}, ${j}]`))
            linha.push(input)

        }
        arrayMatriz.push(linha)
        console.log(arrayMatriz)
    }

}
inputLinhasColunas()