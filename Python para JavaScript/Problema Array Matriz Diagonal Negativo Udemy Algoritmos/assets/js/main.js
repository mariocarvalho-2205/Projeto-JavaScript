const ordemMatriz = Number(prompt('Qual a ordem da Matriz?'))

function createMatriz (ordemM) {
    let matriz = new Array()
    let linha = new Array()
    let inputMatriz
    for (let i = 0; i < ordemM; i++) {
        linha = []
       for (let j = 0; j < ordemM; j++) {
           inputMatriz = Number(prompt(`Numero da matriz: [${i} - ${j}]`))
           linha.push(inputMatriz)
       }
       matriz.push(linha)
    }

    diagonal(matriz)
    negativo(matriz)
}

function diagonal (arrayMatriz) {
    const diag = new Array()

    for (let i = 0; i < arrayMatriz.length; i++) {
        for (let j = 0; j < arrayMatriz.length; j++) {
            if (i === j) {
                diag.push(arrayMatriz[i][j])

            }
        }
    }
    console.log(`Diagonal Principal: ${diag.join(" ")}`)
}

function negativo (arrayMatriz) {
    let negativoCount = 0

    for (let i = 0; i < arrayMatriz.length; i++) {
        for (let j = 0; j < arrayMatriz.length; j++) {
            if (arrayMatriz[i][j] < 0) {
                negativoCount += 1
            }
        }
    }
    console.log(`Quantidade de negativos: ${negativoCount}`)
}

createMatriz(ordemMatriz)