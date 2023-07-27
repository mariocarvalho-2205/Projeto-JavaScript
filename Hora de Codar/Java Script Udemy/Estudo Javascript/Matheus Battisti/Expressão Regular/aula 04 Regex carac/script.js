/*
// Utilizando de varias formas
* Caracteres Especias

\d - Qualquer tipo de caractere
\w - Um caractere alfanumerico
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não são digitos
\W - Caractere não alfanumerio
\S - Caractere quem não seja um espaço em branco
. - Qualquer caractere, menos nova linha

*/

let dia = /\d\d/;

console.log(dia.test('10'));
console.log(dia.test('2010'));
console.log(dia.test('ano'));