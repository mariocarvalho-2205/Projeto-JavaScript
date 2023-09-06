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

// Operador de Precisão - Insere o numero de ocorrencias dentro de {} 

Sintaxe = /\tipo{intervalo ou quantidade}-separador\tipo{intervalo ou quantidade}/;
*/
let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("98888-5555"));
console.log(telefone.test("Prova 1"));
console.log(telefone.test("Prova Ç"));

let padrao = /Abacax?i/;

console.log(padrao.test("Abacai"));
console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacasi"));