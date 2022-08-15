/*
Operador Ternario:
Estrutura:
(condição) ? 'Valor verdadeiro' : 'Valor falso'

if ternario:
const pontuacao = 999
const nivelUsuario = pontuacao >= 1000 ? 'Usuario Vip' : 'Usuario Normal' 

const corUsuario = null
const corPadrao = corUsuario || 'preto'  // caso a corUsuario seja false, retorna a segunda opção

console.log(nivelUsuario, corPadrao)  // Usuario Normal Ternario preto 


*/
// if normal
const pontuacao = 1001

if (pontuacao >= 1000) {
    console.log('Usuario Vip')
} else {
    console.log('Usuario Normal')
}


const nivelUsuario = (pontuacao >= 1000) ? 'Usuario Vip Ternario' : 'Usuario Normal Ternario'
console.log(`Com ${pontuacao} pontos, você é um ${nivelUsuario}`)