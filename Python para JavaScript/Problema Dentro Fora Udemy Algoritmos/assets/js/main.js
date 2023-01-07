let qtdDezenas = Number(prompt("Quantas dezenas vai digitar?"))
let dentro = 0
let fora = 0
for (let i = 0; i < qtdDezenas; i++) {
    let dezena = Number(prompt('Digite um numero: '))
    if (dezena >= 10 && dezena <= 20) {
        dentro += 1
    } else {
        fora += 1
    }
}
console.log(`
    ${dentro} Dentro
    ${fora} Fora
    `)