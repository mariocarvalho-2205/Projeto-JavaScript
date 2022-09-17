// declarando função (function Hoisting)
/* As funções podem ser declaradas antes da função ser criada, ou seja,
    Elas podem ser chamadas antes da declaração da função.
    Ex:
    Função sendo chamada antes de ser declarada
falaOi ()

    Função sendo declarada depois de ser chamada
function falaOI () {
    console.log('oieeee')

}

// Utilizando a Function Expression - que é uma variavel com uma função sendo chamada
// First-class Objects (Objetos de primeira classe)
Ex: 
const souUmDado = function () {
    console.log( 'sou um dado' )
}
souUmDado(falaOi('===')) chamando outra função

// função recebendo outra função como parametro 
function executaFunction (funcao) {
    console.log('vou executar aqui outra função')
    funcao()
}
executaFunction(souUmDado)

// arrow function 
é uma function expression sendo que abreviada

Ex:
const arrow = () => {
    console.log(''sou uma arrow function)


    
// utilizando função em obj

const obj = {
    falar: function () {
        console.log('dentro de obj')
    }
}
obj.falar()

// abreviando a função

const obj = {
    falei () {    //// pode ser usado utilizando a chave do obj como função
        console.log('dentro de obj')
    }
}
obj.falei()
}

*/      

//falaOI()

function falaOI (dado) {
    console.log('oieeee => ' + dado)
}
falaOI(' assim')

// Function Expression
const souUmDado = function () {  // função anonima como variavel 
    console.log( 'sou um dado + ' )
}
//souUmDado(falaOI('===='))

// função recebendo outra função como parametro 
function executaFunction (funcao) {  
    console.log('vou executar aqui outra função')
    funcao()
}
executaFunction(souUmDado)  // chamando a função souUmDado

const arrow = () => {
    console.log('sou uma arrow')
}

// arrow function com uma função chamado outra e outra função declarando ,
// ou seja arrow chamando 3 funções
arrow(executaFunction(souUmDado), falaOI('*+*+*+*+*+'))

// utilizando função em obj

const obj = {
    falar: function () {
        console.log('dentro de obj')
    }
}
obj.falar()

const obj2 = {
    falei () {
        console.log('dentro de obj sem chave, direto com a função')
    }
}
obj2.falei()

/* Parametros : 
function nome_funcao (parametro) {
    logica 
    console.log(argumento)
}
nome_function(argumento)
*/

// se quantidade de argumentos forem divergirem da quantidade de parametros, será retornado undefined
function funcao (a, b, c, d, f) {
    let tot = 0;
    console.log(arguments[5])
    for (let arg of arguments) {
        tot += arg
    }
    console.log(tot, a, b, c, d, f)
}
funcao( 1, 2, 3)  // se quantidade de argumentos forem divergirem da quantidade de parametros, será retornado undefined
// Caso o numero de parametros seja maior que o numero de argumentos, 
// poderemos associar valores aos parametros caso o numero de argumentos tenha divergencia
/*
function parameter (a, b, c = 2, d = 5) { // dessa forma, caso nao tenha argumeto a função retornara o valor passado na criação

}
*/
function param(a, b, c = 3, d = 5) {
    console.log(a + b + c + d)
}
param(1, '', 2) // retorna 125
param(1, 3, 2)  // retorna 11
param(1, null, 10)

// função com desestruturação de parametros como objeto
function paramm ({nome, sobrenome, idade}) { // desestruturação de parametros como objeto
    console.log(nome, sobrenome, idade)
}
paramm({nome: 'Mario', sobrenome: 'Carvalho', idade: 47})  // recebe objeto como parametro

// função com desestruturação de parametros como array
function array ([var1, var2, var3, var4]) {
    console.log(var1, var2, var3, var4);
}
let arra = ['mario', 47, 'tenorio', 'teste']
array(arra)
array([100, 101, 200, 201])

// utilizando rest operator
function conta (operador, acumulador, ...numeros) {  // se for usar o res operator , ele tem que ser o ultimo parametro da função
    acumulador = 0
    for (let num of numeros) {
        if ( operador === '+') acumulador += num   
    }
    console.log(acumulador)
}
conta('+', 0, 10, 20, 30)

// function express
const cont = function (operador, acumulador, ...numeros) {  // se for usar o res operator , ele tem que ser o ultimo parametro da função
    acumulador = 0
    for (let num of numeros) {
        if ( operador === '+') acumulador += num   
    }
    console.log(acumulador)
};
cont("+", 0, 50, 100, 10);

