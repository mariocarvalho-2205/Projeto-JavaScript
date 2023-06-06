/*
// Classes

O prototype do javascript pose ser chamado de classed

Pois nas outras linguagens uma Class é um molde de um objeto

Ou seja, podemos criar diversos objetos em cima de um prototype

// Criando por new

Construtores sao formas de instanciar uma 
classe em uma linguagem de programação
* Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no js tambem
Instanciar = criar um objeto novo

No construtor ja podemos definir propriedades

function Cachorro (raca) {
    this.raca = raca

}

let husky = new Cachorro('Husky');

console.log(husky.raca)

*/


function Cachorro (raca, cor) {
    this.raca = raca;
    this.cor = cor;
    this.uivar = function () {
        console.log('auuuuuuuu')
    }

}

let husky = new Cachorro('Husky');
let pastor = new Cachorro('Pastor')
husky.cor = 'preto'
pastor.cor = 'caramelo'
console.log(husky.raca)
console.log(husky.cor)

husky.uivar()
pastor.uivar()
console.log(pastor.cor)
