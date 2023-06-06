/*
// prototypes

Quando criamos um objeto a partir de um outro, o base será o prototype

Ele herdara tanto os metodos e propriedades de Object (o prototype do objeto base)

Quanto os do objeto abase para este novo

*/

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));


const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);