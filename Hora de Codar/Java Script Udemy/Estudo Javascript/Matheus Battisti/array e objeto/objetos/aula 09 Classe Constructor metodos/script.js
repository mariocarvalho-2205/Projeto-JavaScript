/*
// Classes utilizando o Constructor ES6 

Com a versão do ES6, uma possibilidade de criar uma classe (Objeto) com
constructor foi adicionada

Então não precisamos mais criar por meio de uma função

class Cachorro {
    constructor(raca) {
        this.raca = raca
    }


}

let labrador = new Cachorro('Labrador')

console.log(labrador.raca)
*/

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    uivar() {
        console.log('auuuuuu')
    }

    nome (nome) {
        return `O nome é ${nome}`;
    }


}


// dessa forma adicionamos propriedades atraves da prototype

Cachorro.prototype.rosnar = () => {
    console.log('grrrrrrr')
}

let labrador = new Cachorro('Labrador', 'marron')

console.log(labrador.raca)
labrador.uivar()
console.log(labrador.nome('mike'))
labrador.rosnar()
console.log(labrador.raca, labrador.cor)

