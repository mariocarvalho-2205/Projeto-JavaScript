let qtdDezenas = Number(prompt('Quantos numeros você vai digitar? '))
let dezenas;
let imparNeg = dezenas % 2 !== 0 && dezenas < 0
let parNeg = dezenas  % 2 === 0 && dezenas < 0
let msg;
for (let i = 1; i <= qtdDezenas; i++) {
    dezenas = Number(prompt(`Digite o ${i}º numero: `))
    if (imparNeg) {
        msg = `${dezenas} é IMPAR NEGATIVO`
        console.log(msg)
    } else if (parNeg) {
        msg = `${dezenas} é PAR NEGATIVO`
        console.log(msg)
    }
    console.log(i, dezenas)
}