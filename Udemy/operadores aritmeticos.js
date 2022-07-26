/* 
Operadores aritimeticos:
+ Adição / concatenação
- subtração
* multiplicação
/ divisão
** potenciação
% resto ou divisão inteira

ordem de precedencia:
1 - parenteses
2 - potenciação
3 - multiplicação, divisão e resto da divisão(modulo)
4 - soma e subtração
OBS: se os operadores forem da mesma ordem de precedencia, será calculado da esquerda para a direita

incremento e decremento - OBS: Não pode usar const. SOMENTE let ou var!!

incremento atribui um valor a variavel

contador++  // incremento no pos-fixado - executa a ação e depois faz o incremento
let contador = 1
console.log(contador++)  // 1
console.log(contador)  // 2

++contador  // incremento no pre-fixado - faz o incremento e depois faz a ação
let contador = 1
console.log(++contador)  // 2 - já mostra o valor incrementado
console.log(contador)  // 2

decremento   // faz o contrario do incremento, subtraindo o valor depois da ação
pos-fixado
let contador = 1
console.log(contador--)  // 1
console.log(contador)  // 0

pre-fixado
let contador = 1
console.log(contador++)  // 0
console.log(contador)  // 0

boa pratica JS
let contador = 1
contador++  // 1  - faz o incremento e depois chama o console.log(contador)
console.log(contador)  // 2

-=-=-=-=-=-=--=-=-=-=-=--=-=-=--=
Operadores de atribuição:
podemos utilizar o sinal de igual mais o operador:
Ex:
contador += passo
contador -= passo
contador *= passo
contador /= passo
contador **= passo
contador %= passo

=-=-=-=-=-=-=-=--=--=-
NaN - Not a Number
Equivalente a um resultado inesperado.
OBS: Cuidado ao misturar os tipos de dados

const num1 = 10
const num2 = '5'
console.log(num1 * num2)  // NaN
console.log(typeof num2)  // string

-=-=-=-=-=-=--=-=-=-=-=--=-=-=
convertendo string em number

const num1 = 10
const num2 = parseInt('5')  // converte a string em number inteiro
const num2 = parseFloat('5.2')  // converte a string em number com decimais
const num2 = Number('5.2')  // converte a string em number sem fazer disntinção de inteiro e ponto flutuante
console.log(num1 * num2) 
console.log(typeof num2) 

*/
let num3 = 2
let num4 = 10
num3 %= num4
console.log(`modulo ${num3}`)

//
let contador = 1
console.log(--contador)  // 0
console.log(contador)  // 0
const num1 = 5  // se for usada string, sera concatenado com a segunda variavel
const num2 = 10
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2)