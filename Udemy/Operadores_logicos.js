/*
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

const expressaoAnd = true && true && true && true  // se alguma delas forem false --> retorna false
const expressaoOr = true || true || false || true  // se alguma for false, retorna true, se for tudo false, retorna false
const negacao = !true // retorna a negação da expressão atual (invertido)
console.log(expressaoAnd)
console.log(expressaoOr)
console.log(negacao)

const usuario = 'Mario'
const senha = 123456

const vaiLogar = usuario === 'Mario' && senha === 123456
console.log(vaiLogar)
