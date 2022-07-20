/* Criação de modulo e exportando */
function mostreIdade (nome, idade) {
    return `A idade de ${nome} é ${idade}`
}

function mostreCidade (nome, cidade) {
    return `A cidade de ${nome} é ${cidade}`
}

function mostreHobby (nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`
}

/* Metodo mais pratico */
export { mostreIdade, mostreCidade, mostreHobby }

/* 
Exportar:
pode se usar a extensao .js ou .mjs
Named Exports = E quando quer exportar mais de uma coisa no arquivo de maneira individual

Ex:
Individual
export function mostreHobby (nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`

Agrupado:
export { mostreIdade, mostreCidade, mostreHobby }`

default exports
So pode haver um dafault export por arquivo
Sera o retorno padrao do arquivo
Ex:
function mostreHobby (nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`
}
default export { mostreHobby }

Função comun
Estrutura inicial de uma function.
Definição comun de uma função
functon nome(parametros) {

}
* Variaveis criadas dentro de uma função, apenas podera ser usada dentro dela.

*Return - Quando o return é invocado, a função para de ser executada e retorna o 
que vier apos ser invocado.
Ex: 
function nome(parametros) {
    // instruções
    return // valor de retorno 'a função retorna o que estiver aqui'
}

Função anonima:
São funções que representam expressões - uma variavel pode armazenar uma função.
Ex:
const soma = function (a, b) { 
    return a + b
}
soma(1, 2) // 3
soma(5, 4) // 9

Função autoinvocavél:
IIFE (Immediately Invoked Function Experssion)

Uma função anonima entre parenteses, seguida por outro par de
parenteses, que representa sua chamada.
Ex: Função sem receber parametro retornando valor da variavel
(
    function() {
        let name = "Digital Innovation One"
        return name
    }
)()
// "Digital Innovation One"

Ex: Função utilizada com parametros ou armazenada em uma variavel
Com parametros:
(
    function(a, b) {
        return a + b
    }
)(1, 2)
// 3

Armazenando função em variavel

const soma3 = (
    funtion () {
        return a + b
    }
)(1, 2)
console.log(soma3) // 3


Callbacks
É uma função passada com argumento para outra.
Utilizando callbacks, você tem maior controle da ordem de chamadas
Ex:
const calc = funtion (operacao, num1, num2) {
    return operacao(num1, num2)
}
const soma = funtion (num1, num2) {
    retunr num1 + num2
}
const sub = function (num1, num2) {
    return num1 - num2
}
const resultSoma = calc(soma, 1, 2)
const resultSub = calc(sub, 1, 2)

console.log(resultSoma) // 3
console.log(resultSub) // -1

*/