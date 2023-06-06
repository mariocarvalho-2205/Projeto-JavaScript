/*
// prototypes - Um objeto fallback de outro objeto
Quando um objeto recebe uma requisição de uma propriedade que nao tem, 
ela e procura no prototype deste objeto

O prototype de um objeto criado do zero é o Object, que tem os metodos nativos da linguagem


*/

const pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));  // [Object: null prototype] {}
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);  // true

console.log(pessoa.hasOwnProperty('maos'))  // true - confirma se tem a propriedade no objeto
