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

// function createPhrases () {
//     console.log('essa é a 1 frase')
//     console.log('essa é a 2 frase')
//     console.log('essa é a 3 frase')
// }

// /*
// * - executar a função
// * - rodar, chamar, invocar
// * - execute, run, call, invoke
// */
// createPhrases()
// console.log('fim do programa')

// /* //! declaração dentro de variaveis 
//  * Também é possível declarar funções dentro de variáveis, desta maneira: 
//  * const variavel = function() {} 
//  * Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.
//  */
// // function expression
// // function anonumous
// const sum = function (number1, number2) {
//     console.log(number1 + number2)
// }

// sum(50, 35)  // arguments - argumentos

// /*
// ! Retornando valores dentro da função
// Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada
// ? return 
// seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.
// */
// const somando = function soma (number3, number4) {
//     const s = number3 + number4
//     return s
// }
// let number3 = 40
// let number4 = 60

// console.log(`o total somado é ${somando(number3, number4)}`)

// // ! Conversão de dadosd

// // type conversion vs type coersion

// // Conversão de numero em number

// let string = '123'
// console.log(Number(string))
// let num = 456
// console.log(String(num))
// let text = 'meu texto vai virar um array'
// let arrText = text.split(" ")  // separando as palavras e transformando em array
// console.log(arrText)
// let textJoin = arrText.join("_")  // juntando as palavras e separando com underscore
// // console.log(textJoin.)
// // ? Construindo array com constructor
// let newArray = new Array(2, 3, 4, 'textArray')
// console.log(newArray.length)

// // Manipulando Arrays - Trtanformar uma cadeia de caracteres qm um elemento de um array


// let word = "desconstrução"
// console.log(Array.from(word))  // cada caractere vira um elemento de um array ->  [ 'd', 'e','s', 'c', 'o', 'n', 's', 't', 'r', 'u', 'ç', 'ã', 'o' ]

// let arrayMethods = ["html", "css", "Java", "joao"]

 /* 
 Adicionando elementos no final do array
Existem várias maneiras de manipular arrays, como: 
*o método push(), que adiciona um elemento no final do array, 
*o método unshift(), que adiciona um elemento no começo do array, 
*o método pop(), que retira um elemento do final do array, 
*o método shift(), que retira um elemento do começo do array, 
*o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, 
*o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e 
*o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

 */

// push()
// arrayMethods.push("123")
// console.log(arrayMethods)

// unshift()
// arrayMethods.unshift(1000) 

// console.log(arrayMethods)

// arrayMethods.pop()
// arrayMethods.shift()

// console.log(arrayMethods)


 //console.log(arrayMethods.slice(1, 4))
// arrayMethods.splice(1, 2)
// console.log(arrayMethods)
// let ind = arrayMethods.indexOf('css')
// arrayMethods.splice(ind, 1)
// console.log(arrayMethods)
/*
Expressões e operadores
Descrição
Nas próximas aulas, falaremos sobre expressões e operadores.

Expresssões são bem tranquilas, porque expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo é a expressão:

let number
Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

let number = 1

(function(){
  console.log('alo')
})()
Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

*unário 
let number = 1

console.log(++number)

*binário 
let number = 1

console.log(number + 1)

*ternário 
console.log(true ? 'alo' : 'nada')
Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.

* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
New
Descrição
A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

Um exemplo de seu uso é:

let date = new Date('2020-12-01')
console.log(date.__proto__)

*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Typeof delete
Descrição
Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

Exemplos de uso:

*delete 
const person = {
    name: 'Mayk',
    age: 25,
}
?delete person.age

console.log(person)
Nesse caso estamos deletando a propriedade age do objeto person.

console.log(tyepof "mayk")
Aqui vemos qual o tipo de dado que temos, nesse caso uma string.

*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Operadores aritméticos
Descrição
Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

O operador de multiplicação é o * (asterisco);

O operador de divisão é a / (barra);

O operador de soma é o + (positivo);

O operador de subtração é o - (negativo).

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

* resto da divisão: sinal % 
let remainder
remainder = 11 % 9
console.log(remainder)

* incremento: sinal ++ 
let increment = 0

console.log(++increment)
console.log(increment)

* decremento: sinal -- 
! o uso do sinal antes incrementa antes da exibição ou do calculo
let decrement = 0
decrement--
console.log(decrement)

* exponencial: sinal ** 
console.log(2 ** 3)
*/
// let incre = 1
// console.log(++incre)

/*
Falsy e truthy
Descrição
? O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
    false
    0
    -0
    ""
    null
    undefined
    NaN


console.log( NaN ? 'verdadeiro' : 'falso' )

? já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:


	Todos os valores abaixo seriam representados como false em um boolean.
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity


console.log( Infinity ? 'verdadeiro' : 'falso' )

! Precedência dos operadores
Descrição
Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

? De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 



! If e Else
Descrição
Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

Sua sintaxe é simples, como pode ver a seguir:

if (condição) {
    apenas será executado o bloco de código caso condição seja true
} else {
    apenas será executado o bloco de código caso condição do if seja false
}
O exemplo utilizado pelo professor no vídeo é o seguinte, acompanhe para poder visualizar o processo até chegarmos nesse código.

* let temperature = 36.9
* let highTemperature = temperature >= 37.5
* let mediumTemperature = temperature < 37.5 && temperature >= 37

*if(highTemperature) {
*    console.log('Febre alta')
*} else if(mediumTemperature) {
*    console.log('Febre moderada')
*} else {
*    console.log('Saudável')
*}



let temp = 36
let highTemp = temp >= 37.5
let mediumTemp = temp < 37.5 && temp >= 37
let febre = highTemp < temp ? 'febre' : 'normal'

console.log(febre)
if (highTemp) {
    console.log("febre alta") 
} else if (mediumTemp) {
    console.log("febre") 
} else {
    console.log( 'normal')
}

! Switch
Descrição
?Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.

let expression = ''

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}
Temos também a calculadora que o professor construiu no vídeo:

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))
*/
/*
function calculate (num1, operator, num2) {
    let result

    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        default:
            console.log('sem parametros')
            break

        

    }
    return result
}

console.log(calculate(5, '', 5))
*/
/*

!Throw e Try/Catch
Descrição
? Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

? Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

?Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.


function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}
? Nesse caso, se o nome vier vazio, será disparada uma mensagem.

? Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')
? O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.



function err (name = '') {
    if (name === '') {
        throw new Error("nome e obrigatorio!")
    }
}

function err2 (name2 = '') {
    if (name2 === '') {
        throw "nome e necessario"  // lança o erro para fora
    }
    console.log('depois do erro')
}

try {
    err2()  // Captura o erro
}catch (e) {
    console.log(e)  // exibe o erro
}


For

A estrutura de repetição for tem a seguinte sintaxe:

for(inicialização de uma variável; condição de continuação para o loop; expressão final)

POdendo ser usado com:
break -> para a execução do codigo
continue -> pula a execução e continua o codigo da repetição seguinte


for (let i = 10; i > 0; i--) {
    console.log(i)
}

// ! while

let i = 0

while (i < 10) {
    console.log('while ' + i)
    i++
}

do {
    console.log('do while ' + i)
    i--
} while (i > 0)

// ! for of
// * for of ira pegar os valores da iteração

let n = 'paulo'
let names = ['joao', 'mario', 'adilma']

for (let char of names) {
    console.log(char)
}


// ! for in
// * for in ira pegar os indices da iteração ou as propriedades do objeto

for (let char in n) {
    console.log(char + ' ' + n[char])
}
*/
let pess = {
    name: 'mario',
    age: 48,
    peso: 52
}
for (let property in pess) {
    //console.log(property)
    // maneiras de acessar 
    //console.log(pess.name)
    console.log(pess[property])
}