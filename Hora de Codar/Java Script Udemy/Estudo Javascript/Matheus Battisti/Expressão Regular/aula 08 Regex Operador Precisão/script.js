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
let telefoneDDD = /\(\d{2}\) \d{4,5}-\d{4}/;
let cep = /\d{5}-\d{3}/;



console.log(telefone.test("98888-5555"));
console.log(telefone.test("9999-9999"));
console.log(telefoneDDD.test("(71) 88888-9595"));

console.log(cep.test("98888-523"));
console.log(cep.test("Prova 1"));
console.log(cep.test("Prova Ç"));
