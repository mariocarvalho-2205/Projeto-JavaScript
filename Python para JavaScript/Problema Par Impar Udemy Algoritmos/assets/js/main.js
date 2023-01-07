let qtdDezenas = Number(prompt('Quantos numeros você vai digitar? '))
let dezenas = 0
let imparNeg = dezenas % 2 !== 0 //&& dezenas < 0
let imparPos = dezenas % 2 !== 0 //&& dezenas > 0
let parNeg = dezenas  % 2 === 0 //&& dezenas < 0
let parPos = dezenas % 2 === 0 //&& dezenas < 0

let msg;
for (let i = 1; i <= qtdDezenas; i++) {
    dezenas = Number(prompt(`Digite o ${i}º numero: `))
    if (imparNeg) {
        msg = `${dezenas} é IMPAR NEGATIVO`
        console.log(msg)
    } else if (parNeg) {
        msg = `${dezenas} é PAR NEGATIVO`
        console.log(msg)
    } else if (imparPos) {
        msg = `${dezenas} é IMPAR POSITIVO`
    } else if (parPos) {
        msg = `${dezenas} é PAR POSITIVO`
    }
    console.log(i, dezenas)
}