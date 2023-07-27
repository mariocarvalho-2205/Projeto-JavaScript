/*
* Caracteres Especias

\d - Qualquer tipo de caractere
\w - Um caractere alfanumerico
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não são digitos
\W - Caractere não alfanumerio
\S - Caractere quem não seja um espaço em branco
. - Qualquer caractere, menos nova linha

*/
// . - Qualquer caractere, menos nova linha
let pontoRegEx = /./;
console.log(pontoRegEx.test("asd"))
console.log(pontoRegEx.test(" "))
console.log(pontoRegEx.test("123"))
console.log(pontoRegEx.test("asd654"))
console.log(pontoRegEx.test("&*("))
console.log("")

// \d - Qualquer tipo de caractere
let dRegex = /\d/;
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("asd654"))
console.log(dRegex.test("&*("))
console.log("")

// \w - Um caractere alfanumerico
let wRegex = /\w/;
console.log(wRegex.test("asd"))
console.log(wRegex.test(" "))
console.log(wRegex.test("123"))
console.log(wRegex.test("asd654"))
console.log(wRegex.test("&*("))

console.log("")

// \s - Qualquer caractere de espaço em branco
let sRegex = /\s/;
console.log(sRegex.test("asd"))
console.log(sRegex.test(" "))
console.log(sRegex.test("123"))
console.log(sRegex.test("asd654 654asd"))
console.log(sRegex.test("&*("))

console.log("")

// \D - Caracteres que não são digitos
let DRegex = /\D/;
console.log(DRegex.test("asd"))
console.log(DRegex.test(" "))
console.log(DRegex.test("123"))
console.log(DRegex.test("asd654"))
console.log(DRegex.test("&*("))
console.log("")

// \W - Caractere não alfanumerio
let WRegex = /\W/;
console.log(WRegex.test("asd"))
console.log(WRegex.test(" "))
console.log(WRegex.test("123"))
console.log(WRegex.test("asd654"))
console.log(WRegex.test("&*("))
console.log("")

// \S - Caractere quem não seja um espaço em branco
let SRegex = /\S/;
console.log(SRegex.test("asd"))
console.log(SRegex.test(" "))
console.log(SRegex.test("123"))
console.log(SRegex.test("asd654"))
console.log(SRegex.test("&*("))