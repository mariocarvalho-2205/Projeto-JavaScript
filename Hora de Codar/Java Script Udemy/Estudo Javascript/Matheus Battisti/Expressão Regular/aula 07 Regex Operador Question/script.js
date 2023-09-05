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

// Operador Question ? +
* Faz com que o digito anterior seja opcional


*/
let opcional = /Prova\s?\d?/;

console.log(opcional.test("Prova"));
console.log(opcional.test("Prova 1"));
console.log(opcional.test("Prova Ç"));

let padrao = /Abacax?i/;

console.log(padrao.test("Abacai"));
console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacasi"));