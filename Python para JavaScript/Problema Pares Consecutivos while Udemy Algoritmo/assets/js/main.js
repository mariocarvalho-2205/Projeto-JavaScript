/*let int = Number(prompt('Digite um numero inteiro! Ou "0" para Sair!!!'))
let soma = 0
let total = 0
if (int === 0) alert('Programa Finalizado!!!')
while (int !== 0 && int > 0){

    if (int % 2 === 0) {
        soma += int
        for (let c = 1; c <= 5; c++) {
            total += soma
            console.log(soma, c)
            soma += 2
        }
    } else {
        soma += int + 1
        for (let c = 1; c <= 5; c++) {
            total += soma
            console.log(soma, c)
            soma += 2
        }
    }

    alert(`Soma: ${total}`)
    soma = 0
    total = 0
    int = Number(prompt('Digite um numero inteiro! Ou "0" para Sair!!!'))
    if (int === 0) alert('Programa Finalizado!!!')
}*/

// solução
let x = Number(prompt('digite um numero'))
let soma;

while (x !== 0 && x > 0) {
    if (x % 2 !== 0) {
        x += 1
    }
    soma = 5 * x + 20
    console.log(soma)
    x = Number(prompt('digite um numero'))
}

