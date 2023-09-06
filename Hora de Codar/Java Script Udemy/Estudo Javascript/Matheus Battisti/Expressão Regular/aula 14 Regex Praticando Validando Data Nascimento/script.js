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

*/

//let data = /^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{2,4}/;  // dessa forma ele reconhece datas inexistentes
let data = /[0-31]{1,2}[/][0-12]{1,2}[/][1950-2050]{2,4}/;



// console.log(data.test('14/05/1234'))
// console.log(data.test('14/05/12'))
// console.log(data.test('1/5/1234'))
// console.log(data.test('100/50/1234'))
console.log(data.test('20/05/2023'))
console.log(data.test('14/05/12'))
console.log(data.test('01/05/2023'))
console.log(data.test('10/12/2023'))
