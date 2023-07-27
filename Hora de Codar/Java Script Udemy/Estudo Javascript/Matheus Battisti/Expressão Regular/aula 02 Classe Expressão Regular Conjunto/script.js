/*
RegEx - Conjunto de Caracteres

podemos definir um conjunto de caracteres para encontrar por regex

Para isso, basta inserir os caracteres entre colchetes

console.log(/[123]/.terst("existe 123 no texto?"));

para procurar em um intervalo utilizamos o colchete da sequinte forma /[1-5]/ 

*/

let text = /[123]/
let num = /[1-5]/
console.log(text.test('existe 41235 aqui?'))
console.log(num.test('exite 321'))