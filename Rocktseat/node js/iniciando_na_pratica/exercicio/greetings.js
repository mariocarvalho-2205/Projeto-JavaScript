// Require vai chamar o outro arquivo(pagina com o codigo)
//Sintaxe -> require("endereço do arquivo")
const myModule = require("./flags")


//  Sintaxe -> chama a variavel com require('flag')
console.log(`Oi ${myModule('--name')}. ${myModule('--greeting')}`)