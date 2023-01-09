let numberN = Number(prompt('Quantos Numeros você vai digitar?'))
let arrayNumbers = []

function arrayColector () {

    for (let i = 1; i <= numberN; i++) {
        let numberForArray = Number(prompt(`Digite o ${i}º numero:`))
        arrayNumbers.push(numberForArray)
    }
    return valueArray(arrayNumbers)
}
function valueArray (array) {
    array.forEach(el => console.log(`VALORES = ${el}`))
    return sumArray(array)
}


function sumArray () {
    let sum = arrayNumbers.reduce((acu, i) => acu + i, 0)
    console.log(`Soma = ${sum}`)
    return sum
}

function media(itemArray, qtd) {
    let media = itemArray * qtd
    return console.log(`${media}`)
}
arrayColector()
//valueArray(arrayNumbers)
//console.log(arrayNumbers)