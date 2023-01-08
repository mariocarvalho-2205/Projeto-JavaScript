let valorN = Number(prompt("Digite o valor de N: "))
let total = 0

if (valorN > 15) {
    alert(`Digite um numero MENOR que 15: `)
} else if (valorN === 0 || valorN === 1) {
    total = 1
} else {
    for (let i = valorN - 1; i >= 1; i--) {
       total = valorN *= i
    }
}
console.log(total)

