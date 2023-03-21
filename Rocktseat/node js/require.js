/*
 * Require prcisa sempre de um argumento, é utilizado para fazer requisições chamar modulos que já sao nativos
* no nodeJs Ex: Path

usado para usar modulos dentro do node
 */

const path = require("path")

//console.log(path) 

// verificando o nome base do arquivo

console.log(path.basename(__filename))