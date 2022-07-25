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
-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Função anonima:
São funções que representam expressões - uma variavel pode armazenar uma função.
Ex:
const soma = function (a, b) { 
    return a + b
}
soma(1, 2) // 3
soma(5, 4) // 9
-=-=-=-=-=-=-=-=-=-=-=-=-=-=
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
-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Armazenando função em variavel

const soma3 = (
    funtion () {
        return a + b
    }
)(1, 2)
console.log(soma3) // 3

-=-=-=-=-=-=-=-=-=-=-=-=-=-=
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

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Parametros:
Valores Padrão:
Objetivo:
1 - Ensinar como manipular parametros de uma função
2 - Tecnica para lidar com numeros indefinidos de parametros

arguments: É um array com todos os parametro passado quando a função foi invocada.
Ex:
function findMax (aqui não é passado nenhum parametro e sao indefinidos) {
    let max = -Infinity

    for (let i = 0; arguments.length; i++) {
        if (arguments[i] > max)
            max = arguments[i]
    }
return max
}
findMax(1, 2, 3, 6, 90, 1)  // os parametros sao passados ao chamar a função
resultado 90

Ex 2:
function showArgs () {
    return arguments
}
showArgs(1, 2, [2, 3, 4], "string")
Resultado // 
0: 1
1: 2
2: [2, 3, 4]
3: "string"
podendo ser iterado como um array
callee: f showArgs
length: 4
Symbol(Symbol.iterator): f values()
__photo__: Object

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Array e Obejetos

O que era parte de um array se torna um elemento independente.
-=-=-=-=-=-=-=
Spread: É uma forma de lidar separadamente com elementos.

Ex: 
function sum (x, y, z) { / 03 parametros
    return x + y + z
}
const numbers = [1, 2, 3]  // um array com 03 indices

console.log(sum(...numbers))  // Tecnica spread: usa ...reticencias antes da variavel
                                 para associar cada indice do array com ada parametro.
-=-=-=-=-=-=-=-=-=-=
Rest: Combina os argumentos de um array, tornando o que era um elemento independente, 
se torna parte de um array
Ex:
function confereTamanho (...args) {
    console.log(args.length)
}
confereTamanho()  // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5)  // 3
Rest: usa quando está declarando a função

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Objetos
Object Destructuring: Entre chaves{} podemos filtrar apenas os dados que nos interessam 
em um objeto.

Ex: 
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}
function userId (id) {
    return id
}

function getFullName({fullName: {firstName: first, laastName: last}}) {
    return `${first} ${last}`
}

userId(user)  // 42
getFullName(user) // John Doe

-=-=-=-=-=-=-=-=-=-=-=-=-=-=
if, else if, switch

function numeroPositivo (num) {
    let resultado

    if (num < 0) {
        resultado = false
    } else if {
        resultado = true
    }
    return resultado
}
numeroPositivo(2)
numeroPositivo(-2)
*/
