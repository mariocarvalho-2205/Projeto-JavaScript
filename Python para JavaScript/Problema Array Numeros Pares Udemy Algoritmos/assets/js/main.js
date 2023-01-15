let qtdNumbers = Number(prompt('Quantos numeros você vai digitar? '))

function numbers (num) {

    let pares = []
    let count = 0
    let dadosNumbers = 0
    for (let i = 0; i < num; i++) {
        dadosNumbers = Number(prompt('Digite um numero:'))
        if (dadosNumbers % 2 === 0) {
            pares.push(dadosNumbers)
            count += 1
        }
    }
    msgPares(pares, count)
}

function msgPares (array, count) {
    let msg = `Numeros pares: ${array.join(', ')}`
    console.log(msg)
    console.log(`Quantidade de numeros pares: ${count}`)
}
numbers(qtdNumbers)
