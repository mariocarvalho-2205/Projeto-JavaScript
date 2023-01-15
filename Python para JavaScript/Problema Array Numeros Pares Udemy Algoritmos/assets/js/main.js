let qtdNumbers = Number(prompt('Quantos numeros você vai digitar? '))

function numbers (num) {

    let pares = []
    let array2 = []
    let count = 0
    let dadosNumbers = 0
    for (let i = 0; i < num; i++) {
        dadosNumbers = Number(prompt('Digite um numero:'))
        if (dadosNumbers % 2 === 0) {
            pares.push(dadosNumbers)
            count += 1
        }
        array2.push(dadosNumbers)
    }
    console.log(array2)
    msgPares(pares, count)
}

function msgPares (array, count) {
    let msg = `Numeros pares: `
    console.log(msg)
    for (let i = 0; i < count; i++) {
        console.log(`${array[i]}`)
    }
    console.log(`Quantidade de numeros pares: ${count}`)
}
numbers(qtdNumbers)
