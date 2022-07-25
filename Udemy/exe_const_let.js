/*
Antes de criar o codigo sempre verificar se a variavel
será modificada ao longo do codigo.

 */

const nome = 'Mário'
const sobrenome = 'Carvalho'
const idade = 47
const altura = 1.8
const peso = 54
const imc = peso / (altura * altura)
const anoNascimento = 2022 - 47

console.log( 'O nome é', nome )
console.log( 'O sobrenom é', sobrenome )
console.log( `Sua idade é ${idade}` )
console.log( 'Sua altura é', altura )
console.log( "Seu peso é '", peso, "'"  )
console.log( `Seu IMC é ${imc}` )
console.log( `Seu ano de nascimento é ${anoNascimento}` )

console.log( `${nome} ${sobrenome}, tem ${idade} anos, e pesa ${peso} kg` )
console.log( `Tem ${altura} de altura, e seu IMC é de ${imc} ` )
console.log( `${nome} ${sobrenome}, nasceu em ${anoNascimento}` )

// TESTANDO REDECLARAÇÃO E REATRIBUIÇÃO
// var
var teste1 = 'jose'  // declarada
console.log(teste1)
var teste1 = 'maria' // redeclarada e reatribuida
console.log(teste1)

// let
let nomeTeste = 'Mario'  // declarada
console.log(nomeTeste)
// let nomeTeste = 'joao'  // NÃO PODE SER REDECLARADA
nomeTeste = 'Joao'  // SOMENTE PODE SER REATRIBUIDA
console.log(nomeTeste)

// const
const teste2 = 'antonio'  // declarada
console.log(teste2)  
//const teste2 = 'josefina' // NÃO PODE SER REDECLARADA
//teste2 = 'josefina'  // NÃO PODE SER REATRIBUIDA
console.log(teste2)  