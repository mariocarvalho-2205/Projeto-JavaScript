//confirm('Estou confirmando dados')  // abre caixa de pergunta no navegador
//alert('Mário Carvalho')  // abre caixa de alerta no navegador
const nome = prompt('Digite o que precisa')  // abre caixa para digitação
let confirmacao = confirm('Você vai ou nao?')  // confirm exibe se o resultado e false ou true
let num1 = Number(prompt('Digite um numero: '))  // Number(prompt('para converter em number'))
let num2 = Number(prompt('Digite outro numero: '))
let soma = num1 + num2
document.writeln(`${nome}\n`, confirmacao)  // exibe na pagina o texto ou valor da variavel ou operação
document.writeln(confirmacao) // writeln quebra a linha no final

document.writeln(`A soma de ${num1} + ${num2} e igual a ${soma}`)
document.writeln('O calculo foi feito')