var nome = prompt('Digite seu nome: ')
var num1 = Number(prompt('Agora digite um numero:'))
var num2 = Number(prompt('Outro numero:'))
soma = num1 + num2
document.write(`<h2>Olá ${nome}, é um prazer te-lo aqui!</h2>`)
document.write(`<p>A soma entre ${num1} e ${num2} é ${soma}</p>`)
document.write(`<p>A subtração entre ${num1} e ${num2} é ${num1 - num2}`)
var maior = 0
var menor = 0
if (num1 !== num2) {
    if (num1 > num2) {
        maior = num1
        menor = num2
    } else if (num2 > num1) {
        maior = num2
        menor = num1
    } document.write(`<p>O maior numero entre ${num1} e ${num2} é ${maior}</p>`)
    document.write(`<p>O menor entre eles é ${menor}</p>`)
} else {
    document.write(`<p>Os dois numeros são iguais</p>`)
}