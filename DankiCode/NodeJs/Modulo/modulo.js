// aqui criamos o modulo usando o require('url e nome do arquivo')

const index = require('./index')


// aqui invocamos o modulo usando a vairiavel usada na criação e
// chamamos a função criada no modulo index
index.person()  // aqui chama o modulo
console.log(index.num)
console.log(index.obj.nome, index.obj.idade)