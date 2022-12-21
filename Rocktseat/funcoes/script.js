/*
 * Funções são tipos de dados estruturais, que são declarados dessa forma: 
? function nomeFunção() { 
?    código à cer executado 
?} 
* e para executar a função, usa-se: 
? nomeFunção()
* Uma função é importante para o agrupamento  e reutilização de código. 
 */

// * declaration - declaração da função 
// * function statement

function createPhrases () {
    console.log('essa é a 1 frase')
    console.log('essa é a 2 frase')
    console.log('essa é a 3 frase')
}

/*
* - executar a função
* - rodar, chamar, invocar
* - execute, run, call, invoke
*/
createPhrases()
console.log('fim do programa')

/* //! declaração dentro de variaveis 
 * Também é possível declarar funções dentro de variáveis, desta maneira: 
 * const variavel = function() {} 
 * Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.
 */
// function expression
// function anonumous
const sum = function (number1, number2) {
    console.log(number1 + number2)
}

sum(50, 35)  // arguments - argumentos

/*
! Retornando valores dentro da função
Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada
? return 
seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.
*/
const somando = function soma (number3, number4) {
    const s = number3 + number4
    return s
}
let number3 = 40
let number4 = 60

console.log(`o total somado é ${somando(number3, number4)}`)