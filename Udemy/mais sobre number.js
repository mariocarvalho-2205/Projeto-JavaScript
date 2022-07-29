// IEEE 754-2008  -  Padrao JavaScript de precisão para numeros com casas decimais

let num1 = 0.7
let num2 = 0.1

// Exemplo da imprecisão decimal

//  num1 += num2  // 0.8
//  num1 += num2  // 0.9
//  num1 += num2  // 1.0 
//  console.log(num1)  // retornara 0.9999999999999999

// num1 = num1.toFixed(2)  // arendondando as casas decimais, porem ainda não resolve o problema
num1 = parseFloat(num1.toFixed(2))  // Resolvemos utilizando parseFloat(variavel.toFixed(2))

console.log(num1)  //retornara 1.0  
console.log(Number.isInteger(num1))  // retornara false, caso seja numero redondo Ex: 1.0, retornara true

// Utilizando conta para ter o valor real da precisao

//  num1 = ((num1 * 100) * (num2 * 100)) / 100  // 0.8
//  num1 = ((num1 * 100) * (num2 * 100)) / 100  // 0.9
//  num1 = ((num1 * 100) * (num2 * 100)) / 100  // 1.0

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// toString() converte number para string - retorna concatenação ou somente string
// console.log(num1.toString() + num2)  // concatenando number com string
// console.log(num1.toString(16))  // variavel.toString(representação binaria) exibindo a representação binaria, coloca o 2 dentro dos parenteses, funciona com todos os outros
// console.log(num1.toFixed(2))  // variavel.toFixed(qtd de casas decimas)reduzindo as casas decimais

// Checagem de number
// console.log(Number.isInteger(num1))  // Number.isInteger(variavel)  - verifica se number é inteiro
// NaN
// let temp = num1 * 'ola'  // NaN  -  vai aparecer quando tentar somar string com number 
// let temp = num1 * '5'  // NaN  -  vai retornar false quando conseguir fazer o calculo 
// OBS: Não é uma boa pratica de programação  -  Não fazer contas com string

// console.log(Number.isNaN(temp))  // Number.isNaN(variavel) - verifica se trata-se de NaN
