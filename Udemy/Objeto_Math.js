/*
Math - Objeto

Arredonda para cima
ceil // arrendoda para cima o valor
Ex:
let num = 5.896
Let paraCima = Math.ceil(5.635)
Math.ceil(variavel)  // 6
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Arredonda para baixo:
floor // arredonda o valor para baixo
Math.floor(variavel) // 5
Ex:
let num = 5.896
Let paraBaixo = Math.floor(5.635)
Math.floor(variavel)  // 5

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Arredonda automaticamente:

round // arrendonda para o mais proximo, ou seja, acima de x.5, aproxima para cima, e abaixo, aproxima para baixo.
Ex: 
9.6  // arredonda para 10
9.4  // arredonda para 9
let arred1 = 9.6
let arred2 = 9.4
console.log(Math.round(arred1))  // 10
console.log(Math.round(arred2))  // 9

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Maior numero:
Math.max  // mostra o maior numero dentro de uma sequencia dada pelo usuário
Math.max(variavel ou sequencia de numeros) 
Ex: Math.max(arred1, arred2)


Menor numero:
Math.min  // mostra o menor numero dentro de uma sequencia dada pelo usuário
Math.min(variavel ou sequencia de numeros) 
Ex: Math.min(arred1, arred2)

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Math.random  // Gera numero aleatorio
Math.random() * (maximo - minimo) + minimo  //  retorna um numero aleatorio
Para arrendondar utilizamos o metodo round
Ex:
Math.round(Math.random() * (10 - 5) + 5)  // arredonda para cima ou para baixo

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Potenciação  // realiza a potenciação
Math.pow(numero, elevado a)

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Raiz quadrada
Math.qrt(numero)
num ** 0.5  // trara o mesmo resultado

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
numero infinito
100 / 0

ou 100 / 0.0000000000000000000000000000000000000000 até ficar infinity

converter medidas
100 / 0.01  // 10000
100 / 0.1  // 1000
100 / 1  //  100
100 / 10 // 10
100 / 100 // 1
*/

let num = 9.54578

console.log(`Math.ceil arredonda o numero ${num} para ${Math.ceil(num)}`)
console.log(`Math.floor arredonda o numero ${num} para ${Math.floor(num)}`)

let paraCima = Math.ceil(5.635)
console.log(`let paraCima = Math.ceil(5.635), usado na declaração da variavél arredonda para ${paraCima} `)

let arred1 = 9.6
let arred2 = 9.4
console.log(`Math.round(variavél) arredonda o numero ${arred1} para ${Math.round(arred1)}`)
console.log(`Math.round(variavél) arredonda o numero ${arred2} para ${Math.round(arred2)}`)

let maximo = [ 2, 8, 9, 100, 120, 3, 51, 70 ]
console.log(`Math.max(variavel ou sequancia numerica) mostra o maior numero informado`)
console.log(`O maior numero entre ${arred1} e ${arred2} é Ex: ${Math.max(arred1, arred2)}`)  
console.log(`Math.min(variavel ou sequancia numerica) mostra o menor numero informado`)
console.log(`O menor numero entre ${arred1} e ${arred2} é Ex: ${Math.min(arred1, arred2)}
`)  

const aleatorio = Math.random() * (10 - 5) + 5
console.log(`O numero aleatório é ${aleatorio}`)
console.log(`Math.round(Math.random() * (15 - 10) + 10) retorna um numero aleatório arredondado ${Math.round(Math.random() * (5 - 1) + 1)}`)

console.log(`Math.pow(2, 10) realiza a potenciação  ${Math.pow(2, 10)}`)

console.log(`Para saber a raiz quadrada usamos o Math.qrt(numero) e o mesmo que '25 ** 0.5' ex: Raiz de 5 é ${Math.sqrt(25)}`)

console.log(25 ** 0.5)
