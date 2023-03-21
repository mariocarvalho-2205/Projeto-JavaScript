/*
 * Require prcisa sempre de um argumento, é utilizado para fazer requisições chamar modulos que já sao nativos
* no nodeJs Ex: Path

usado para usar modulos dentro do node
 */


// modulos nativos do nodeJs
// const path = require("path")

// console.log(path) 

// verificando o nome base do arquivo

// console.log(path.basename(__filename))

/* Meus modulos */

// sintaxe => require('./endereço do arquivo -> pode ser usando sem a extensão')
const myModule = require('./exports.js')

console.log(myModule)