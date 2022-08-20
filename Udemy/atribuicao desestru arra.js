/*
Atribuição via desestruturação:
let a = 'A'
let b = 'B'
let c = 'C'

const numeros = [1, 2, 3];
[a, b, c] = numeros
 
                 0  1  2  3  4
const numeros = [1, 2, 3, 4, 5]

Atribuindo o resto do array a uma variavel

...rest traz o resto
...spread espalha
const [num0, num1, ...res] = numeros  // const [num0, num1, ...res] = numeros 
                                      //...variavel retorna o resto do array

let [num, num1, num2] = [0, 1, 3]
console.log()
*/
let a = 'A'
let b = 'B'
let c = 'C'

const letras = [b, c, a];
[a, b, c] = letras
console.log(a, b, c)


         //      0  1  2  3  4
const numeros = [100, 200, 300, 400, 500];

const [num0, num1, ...res] = numeros  // const [num0, num1, ...res] = numeros 
                                      //...variavel retorna o resto do array

console.log(num0)
console.log(res)

const array = [[1, 2, 3], [1, 2, 3], [1, 2, 4]]
console.log(array[1][2], array[0][0], array[2][1])
const [, , number2] = array
console.log(number2)
// selecionando um numero com destruturação