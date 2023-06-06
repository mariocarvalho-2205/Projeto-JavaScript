/*
// Classes

O prototype do javascript pose ser chamado de classed

Pois nas outras linguagens uma Class é um molde de um objeto

Ou seja, podemos criar diversos objetos em cima de um prototype

// Criando por função

Construtores sao formas de instanciar uma 
classe em uma linguagem de programação

Instanciar = criar um objeto novo

No construtor ja podemos definir propriedades



*/

function criarCachoro(raca, patas, cor) {
    let cachorro = Object.create({});

    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log('au, au, au')
    }
    return cachorro;
}

let doberman = criarCachoro('Doberman', 4, 'pardo');

console.log(doberman.raca);
console.log(doberman.patas);
console.log(doberman.cor);
doberman.latir();
console.log(doberman);
