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

let dominio = /[?www.]\w+\.com.br|com/;
let dominioWWW = /www.\w+\.com.br|com/;


console.log(dominio.test('www.google.com'))
console.log(dominio.test('google.com'))
console.log(dominioWWW.test('www.google.com.br'))