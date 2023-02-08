const ordemMatriz = Number(prompt('Qual a ordem da Matriz?'))

function criaMatriz (ordem) {
    let matriz = new Array()
    let linha = new Array()
    let input

    for (let i = 0; i < ordem; i++) {
        linha = []
        for (let j = 0; j < ordem; j++) {
            input = Number(prompt(`Elemento [${i}, ${j}]`))
            linha.push(input)
        }
        matriz.push(linha)
    }
    maiorDaLinha(matriz)
}

function maiorDaLinha (matriz) {
    let maior
    let maiorLinha = new Array()

    console.log('Maior elemento de cada linha:')
    for (let i = 0; i < matriz.length; i++) {
        maior = matriz[i][0]

        for (let j = 1; j < matriz.length; j++) {

            if(matriz[i][j] > maior) {
                maior = matriz[i][j]
                maiorLinha.push(maior)
            }
        }
        console.log(maior)
    }

}

criaMatriz(ordemMatriz)