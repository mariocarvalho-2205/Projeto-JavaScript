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
let validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/  // \b ira determinar que a string termina com o ID

console.log(validaUsuario.test('mario_123'))
console.log(validaUsuario.test('kj'))
console.log(validaUsuario.test('111111111111111111111111'))
