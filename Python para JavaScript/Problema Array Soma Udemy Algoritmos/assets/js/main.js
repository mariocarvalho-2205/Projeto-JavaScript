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
    console.log(`Valores = ${array.join(', ')}`)
    //array.forEach(el => console.log(`${el}`))
    return sumArray(array)
}


function sumArray (array) {
    let sum = array.reduce((acu, i) => acu + i, 0)
    return media(sum, array)
}

function media(sum, array) {
    let media = sum / array.length
    console.log(`Soma = ${sum.toFixed(2)}`)
    console.log(`Media = ${media.toFixed(2)}`)
}
arrayColector(numberN)
//valueArray(arrayNumbers)
//console.log(arrayNumbers)