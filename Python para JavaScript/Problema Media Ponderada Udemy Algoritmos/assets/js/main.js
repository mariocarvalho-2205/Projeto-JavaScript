let qtdCasos = Number(prompt('Quantos casos você vai digitar? '))
let caso;
let peso;
var soma = 0
let somaPesos = 2 + 3 + 5
let media;

for (let i = 0; i < qtdCasos; i++) {
    alert(`Digite tres numeros:`)
    for (let c = 1; c <= 3; c++) {
        caso = Number(prompt(`Digite o ${c}º valor:`))
        console.log(caso)
        if (c === 1) {
            peso = 2
            soma += caso * peso
        } else if (c === 2) {
            peso = 3
            soma += caso * peso
        } else if (c === 3) {
            peso = 5
            soma += caso * peso
        }
    }
    media = (soma / somaPesos).toFixed(1)
    console.log(`MEDIA = ${media}`)
    soma = 0

}
