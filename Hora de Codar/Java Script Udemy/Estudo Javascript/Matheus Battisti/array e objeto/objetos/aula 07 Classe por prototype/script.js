/*
// Classes

O prototype do javascript pose ser chamado de classed

Pois nas outras linguagens uma Class é um molde de um objeto

Ou seja, podemos criar diversos objetos em cima de um prototype

// Criando por new usando metodo prototype

Alem de propriedades, podemos criar a classe base já com
metodos

Basta definir ao prototype o metodo desejado

function Cachorro (raca) {
    this.raca = raca
}

Cachorro.prototype.uivar = function () {
    console.log('Auuuuu)
}

let husky = new Cachorro('Husky');

console.log(husky.raca)
husky.uivar()

*/

function Cachorro (raca) {
    this.raca = raca
}

Cachorro.prototype.uivar = function () {
    console.log('Auuuuu')
}

let husky = new Cachorro('Husky');

console.log(husky.raca)
husky.uivar()
