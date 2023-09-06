/*
// Utilizando de varias formas
* Caracteres Especias

\d - Qualquer tipo de caractere não aceita letras e nem vazio, só aceita digitos
\w - Um caractere alfanumerico
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não são digitos
\W - Caractere não alfanumerio
\S - Caractere quem não seja um espaço em branco
. - Qualquer caractere, menos nova linha

// Metodo Match = O metodo match funciona de forma similar ao exec
! Trata-se de um metodo regex da string
// Se nada for encontrado, retonr anull

Sintaxe = "O numero 100".match(/\d+/)
*/
let digitos = 'mais uma variavel com 1'.match(/\d+/)

console.log(digitos)
console.log(digitos.input)
