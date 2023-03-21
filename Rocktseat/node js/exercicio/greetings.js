
const myModule = require("./flags")


//  Sintaxe -> chama a variavel com require('flag')
console.log(`Oi ${myModule('--name')}. ${myModule('--greeting')}`)