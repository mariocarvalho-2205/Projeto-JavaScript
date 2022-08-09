/*  Avaliação Curto-Circuito

Valores considerados: se tiver algum desses dentro da comparação &&, retorna false
FALSY:
false
0
'' "" ``
null / undefined 
NaN

Ex1: 
console.log("Mario" && NaN && "Ady")  // retorna o valor(literalmente falso NaN ) false

Ex2:
function falaOi() {
    return 'Oi
}
let vaiExecutar = undefined  // é considerada false

console.log(vaiExecutar && falaOi())  // retorna false
console.log(vaiExecutar || falaOi())  // retorna true
 

-=-=-=-=-=-=-=-=- Lembrete da aula anterior
Operadores logicos:
&& --> equivalente ao // and // E
|| --> "pipes" Equivalente ao // OR // OU
! --> Negação Equivalente ao // NOT // Não

tabela verdade E --> &&

Se a e b forem true
a && b
v    v    v
v    f    f
f    v    f
f    f    f


tabela verdade OU --> ||  (pipe)

Se a ou b forem true
a || b
v    v    v
v    f    v
f    v    v
f    f    f


tabela verdade Negação --> !

Se a for true, b é false 
a = true  ! b = false
a = false ! b = true
*/
function falaOi() {
    return 'Oi'
}
let vaiExecutar = NaN  // é considerada false

console.log(vaiExecutar && falaOi())  // retorna primeiro valor false literal 
console.log(vaiExecutar || falaOi())  // retorna primeiro valor true literal
console.log(!vaiExecutar)  // retorna true
// curto circuito
console.log(NaN && 'ady' && undefined)  // retorna o primeiro valor falso literal
console.log(0 || null || false || 'mario' || true) // retorna primeiro valor true literal
console.log(0 || null || false || 'false' || false) // ratorna false verdadeiro (string)

console.log(0 || null || NaN || false || undefined)  // retorna o ultimo valor false


let corUsuario = 'red'
let corPadrao = corUsuario || 'black'
console.log(corPadrao)