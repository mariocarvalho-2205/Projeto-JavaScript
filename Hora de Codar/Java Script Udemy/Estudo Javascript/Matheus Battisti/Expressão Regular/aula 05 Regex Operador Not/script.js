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

// Operador Not ^
* Podemos escrever um set que aceite tudo, menos alguns caracteres com o operador NOT ^
* As combinações serão aceitas, somente será negado se a combinação for combinado com o set

Ex: 
let palavrasSemAeB = /[^123]/;

console.log(palavrasSemAeB.test('1112'))
console.log(palavrasSemAeB.test('14'))
console.log(palavrasSemAeB.test('1'))

*/

let notAB = /[^ab]/;  // OBS: Só dara false se a quantidade de caracteres for menor que a validação.

/*console.log(notAB.test('ab'));
console.log(notAB.test('abasdf'));
console.log(notAB.test('235'));*/


let notaz = /[^a-z]/
console.log(notaz.test('235poiwqer'));
console.log(notaz.test('poiqwerpoqiwer'));
//console.log(notaz.test('235'));


let az = /[a-z]/
console.log(az.test('235poiwqer'));
console.log(az.test('poiqwer2poqiwer'));
// let tresLetras = /\w\w\w/
// console.log(tresLetras.test('njh') && 'njh'.length == 3)
// console.log(tresLetras.test('ii') && 'ii'.length == 3)