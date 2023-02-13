/*
a) calcular e imprimir a soma de todos os elementos positivos da matriz.
b) fazer a leitura do índice de uma linha da matriz e, daí, imprimir todos os elementos desta linha.
c) fazer a leitura do índice de uma coluna da matriz e, daí, imprimir todos os elementos desta coluna.
d) imprimir os elementos da diagonal principal da matriz.
e) alterar a matriz elevando ao quadrado todos os números negativos da mesma. Em seguida imprimir
a matriz alterada.

Ex:
Qual a ordem da matriz? 3
Elemento [0,0]: 7.0
Elemento [0,1]: -8.0
Elemento [0,2]: 10.0
Elemento [1,0]: -2.0
Elemento [1,1]: 3.0
Elemento [1,2]: 5.0
Elemento [2,0]: 11.0
Elemento [2,1]: -15.0
Elemento [2,2]: 4.0


SOMA DOS POSITIVOS: 40.0

Escolha uma linha: 1
LINHA ESCOLHIDA: -2.0 3.0 5.0

Escolha uma coluna: 2
COLUNA ESCOLHIDA: 10.0 5.0 4.0

DIAGONAL PRINCIPAL: 7.0 3.0 4.0

MATRIZ ALTERADA:
7.0 64.0 10.0
4.0 3.0 5.0
11.0 225.0 4.0
*/

const ordemMatriz = Number(prompt('Qual a ordem da matriz?'))

function criaMatriz (ordem) {
    let matriz = new Array()
    let elementLine
    let line = new Array()

    for (let i = 0; i < ordem; i++) {
        line = []
        for (let j = 0; j < ordem; j++) {
            elementLine = Number(prompt(`Elemento [${i}, ${j}]`))
            line.push(elementLine)
        }
        matriz.push(line)
    }
    somaPositivo(matriz)
}

function somaPositivo (matriz) {
    let somaPos = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] > 0) {
                somaPos += matriz[i][j]
            }
        }
    }
    console.log(`Soma dos Positivos: ${somaPos.toFixed(1)}`)
    seachLine(matriz)
}

function seachLine(matriz) {
    let seach = Number(prompt('Escolha uma linha: '))
    let linha

    if (seach > matriz.length - 1 || seach < 0) {
        console.log('linha inexistente!!!')
    } else {

        console.log(`Linha Escolhida: ${matriz[seach].join(', ')}`)
    }
    seachColunm(matriz)
}

function seachColunm (matriz) {
    let seachCol = Number(prompt('Escolha uma coluna:'))
    let col = new Array()

    if (seachCol > matriz.length - 1) {
        console.log('Coluna inexistente!!!')
    } else {
        for (let i = 0; i < matriz.length; i++) {
            col.push(matriz[i][seachCol].toFixed(1))
        }
        console.log(`Coluna Escolhida: ${col.join(', ')}`)
    }
    diagonal(matriz)

}

function diagonal (matriz) {
    let diagonal = new Array()

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length;j++) {
            if (i === j) {
                diagonal.push(matriz[i][j].toFixed(1))
            }
        }
    }

    console.log(`Diagonal Principal: ${diagonal.join(', ')}`)
    matrizAlterada (matriz)
}

function matrizAlterada (matriz) {
    let newMatriz = new Array()
    let linha = new Array()

    for (let i = 0; i < matriz.length; i++) {
        linha = []
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] < 0) {
                linha.push((matriz[i][j] ** 2).toFixed(1))
            } else {
                linha.push((matriz[i][j]).toFixed(1))
            }
        }
        newMatriz.push(linha)
    }
    console.log(`Matriz Alterada: `)
    for (value of newMatriz) {
        console.log(` ${newMatriz.join(' ')} `)
    }

}

criaMatriz(ordemMatriz)