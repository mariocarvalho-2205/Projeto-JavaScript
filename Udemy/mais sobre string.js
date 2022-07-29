// metodos para string

let umaString = 'O rato roeu a roupa do rei de roma.'  // para usar aspas duplas dentro de aspas dupla e preciso 
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

string.replace(): Utilizado para substituir trecho de uma string

str = str.replace('m', 'gg')
console.log(str)
console.log(umaString.replace('Um', 'mais'))  // pode usar expressoes regulares /Um/
console.log(umaString.replace(/completo/, 'cheio de alegria'))  // usando expressão regular

substituindo varias letras por outra
console.log(umaString.replace(/))

string.length()
para ver o tamanho
console.log(umaString.slice(inicio, final - 1))  
// retorna o trecho do inicio ate uma posição a menos do incide solicitado
console.log(umaString.slice(-3))  faz o fatiamento do final para o inicio
do final para a frente não conta 0. EX: 
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)) faz a mesma coisa que slice

-=-=-=-=-=-=-=-=-=-=-=-=---=
dividindo a string 
string.split('') sem espaço, divide todos os caracteres
com espaço divide por palavras

utilizando string.split('', quantidade)  cira lista por quantidade informada

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
str = str.replace('m', 'gg')
console.log(str)
console.log(umaString.replace('Um', 'mais'))  // pode usar expressoes regulares /Um/
console.log(umaString.replace(/completo/, 'cheio de alegria'))
console.log(umaString)
console.log(umaString.replace(/r/g, '&'))  // usando expressao /letra/g, substitui todas as ocorrencias da string
console.log(umaString.length)  // mostra a quantidade
console.log(umaString.slice(2, 6))  // retorna o trecho do inicio ate uma posição a menos do incide solicitado
console.log(umaString.slice(-5, -1))  // começa fatiando do final da string
/*console.log(umaString.substring(umaString.length - 5, umaString.length - 1))  // mesma coisa que slice
console.log(umaString.split(" ", 4))  // divide a strinte com caractere colocado
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())*/
