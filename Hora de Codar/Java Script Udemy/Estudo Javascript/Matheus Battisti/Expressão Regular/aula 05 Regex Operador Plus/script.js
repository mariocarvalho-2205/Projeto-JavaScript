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

// Operador Plus +
* Espera uma repetição indefinida


*/
let umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("12345"));
console.log(umOuMaisNumeros.test("çlk"));