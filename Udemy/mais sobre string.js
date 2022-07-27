// metodos para string

let umaString = 'Um texto completo'  // para usar aspas duplas dentro de aspas dupla e preciso 
// escapar o texto usando a barra invertida "um \"texto"" 
// para exibir a barra invertida usa-se duas barras "um \\texto"

/*
as strings são indexaveis 

                 01234567
let umaString = 'Um texto'
console.log(umaString[indice])  // pega o caractere do indice informado
console.log(umaString.cahrAt(indice))  //  retorna o caractere referente ao indice

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Concatenação
console.log(umaString.concat(' ', 'em', ' lindo dia'))  // concatena as strings
console.log(umaString + ' em um lindo dia')
console.log(`${umaString} em um lindo dia`)

Localizando trecho do da string:
console.log(umaString.indexOf('texto')) // esse metodo localiza o indice que inicia a string

lastIndexOf // faz a mesma coisa que o indexOf, porem, começando do final

console.log(umaString.match(/[a-z]/g))  // Expressoes regulares - encontra um array usando o g
console.log(umaString.match(/[a-z]/))  // mostra as caracteristicas da variavel


 */

let str = 'um texto'
console.log(str.concat(' em um lindo dia', ' caraca'))
console.log(`${str} em um lindo dia`)
console.log(umaString.indexOf('texto'))
console.log(umaString.indexOf('o', 3))
console.log(umaString.lastIndexOf('m', 3))
console.log(umaString.match(/[a-z]/))
console.log(umaString.search(/[a-z]/g))  // usando o x ele retorna o indice
console.log(umaString.search(/x/))