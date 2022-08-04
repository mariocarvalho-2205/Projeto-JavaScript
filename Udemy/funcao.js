/*
Funcao nome_da_funcao (parametro) {
    bloco do codigo
}
*/
// função simples
function saudacao (nome) {
    console.log(`Saudações ${nome} novamente`)
    return 123456;
} 
let variavel = saudacao('ady')
console.log(variavel)

function saudacao2 (nome) {
    return `Saudações ${nome}`  // OBS: Ao chegar em return, não será mais executado
} 
let variavel2 = saudacao2('joao')
console.log(variavel2)

//Saudações ady novamente
//Saudações

// somar valores

function somar (a, b) {
    const soma = a + b
    return soma
}
const resultado = somar(6, 10)
console.log(somar(5, 9))
console.log(somar(5, 8))
console.log(resultado)

// Função anonima é quando ela e criada dentro de uma variavel
/*
Ex:
let raiz = function (n) {
    retunr n ** 0.5
}
console.log(raiz(9))  // 3
console.log(raiz(16))  // 3

Arow function é quando criamos a funcao sem usar a palavra funtion
Ex:
let raiz = (n) => {
    return n ** 0.5
}
console.log(raiz(9))  // 3
console.log(raiz(16))  // 3

Simplificada:

let raiz = n => n ** 0.5  // arow function abreviada quando tem um parametro
console.log(raiz(9))  // 3
console.log(raiz(16))  // 3

 */

