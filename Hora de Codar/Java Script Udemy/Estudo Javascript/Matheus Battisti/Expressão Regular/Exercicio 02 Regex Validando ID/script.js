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
let validaId = /\d+ID\b/  // \b ira determinar que a string termina com o ID

console.log(validaId.test('123ID'))
console.log(validaId.test('563ID'))
console.log(validaId.test('123'))