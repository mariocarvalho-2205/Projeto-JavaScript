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