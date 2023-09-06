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

// Metodo Choice Pattern = Podemos colocar uma instrução na Regex que funciona como o operador || (or) das condicionais
! Trata-se de um metodo regex da string
// Se nada for encontrado, retonr anull

Sintaxe = /\d+ (maca|banana|pera)/
*/
let fruta = /\d+ (maca|banana|pera)/

console.log(fruta.test('10 banana'))
console.log(fruta.test('5 maca'))
console.log(fruta.test('150 morango'))

let nome = /\w+: (mario|joao|ady)/;

console.log(nome.test('nome: jose'))
console.log(nome.test('nome: mario'))
console.log(nome.test('nome: ady'))


