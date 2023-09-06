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

// Metodo Exec = Retorna um objeto com algumas informações, 
// Se nada for encontrado, retonr anull

Sintaxe = /\tipo+/.exec("frase para validação")
*/
let digitos = 'mais uma variavel com 1'
let teste = /\d+/.exec(digitos);
let teste2 = /\d+/.exec('O numero e ');

console.log(teste)
//console.log(teste.index)
console.log(teste2)