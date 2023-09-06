/*
// Regex - Exercicio Validando Maiusculas 
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
let validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/  // \b ira determinar que a string termina com o ID

console.log(validaIp.test('127.0.0.1'))
console.log(validaIp.test('1.0.0.0'))
console.log(validaIp.test('255.0.0.1'))
console.log(validaIp.test('lkajdsf'))