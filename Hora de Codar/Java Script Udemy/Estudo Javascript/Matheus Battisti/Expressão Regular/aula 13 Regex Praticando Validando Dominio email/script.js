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

let email = /\w+@\w+\.\w+/;



console.log(email.test('joao@gmail.com'))
console.log(email.test('joao@gmail'))
console.log(email.test('joaojj.com'))
console.log(email.test('joao@jj.com.br'))
