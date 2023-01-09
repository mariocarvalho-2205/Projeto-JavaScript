let qtdNumbers = Number(prompt('Quantos numeros você quer digitar?'))
let arraNumbers = []

for (let i = 1; i <= qtdNumbers; i++) {
    let numbers = Number(prompt(`Digite o ${i}º numero:`))
    arraNumbers.push(numbers)
}
for (negativo of arraNumbers) {
    if (negativo < 0) {
        console.log(negativo)
    }
}
console.log(arraNumbers)