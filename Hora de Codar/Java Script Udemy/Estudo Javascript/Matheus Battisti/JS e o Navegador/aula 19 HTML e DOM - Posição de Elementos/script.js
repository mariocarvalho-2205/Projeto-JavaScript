/*

// DOM e JS - Posição dos Elementos 
* Podemos verificar a Posição dos elementos na tela com o JS
* Utilizamos o comanto getBoundinsClientRect, ele nos da o posicionamento
* do top, left, right e bottom do
// Retornando um objeto podendo acessar suas propriedades 
DOMRect {x: 8, y: 21.4375, width: 387, height: 37, top: 21.4375, …}
bottom: 58.4375
height: 37
left: 8
right: 395
top: 21.4375
width: 387
x: 8
y: 21.4375
[[Prototype]]: DOMRect

*/
// Acessando a posição dos elementos

let tamanho = document.getElementById('titulo-principal')
let tamanho2 = document.getElementById('titulo-principal2')

// Posicionamento
console.log(tamanho.getBoundingClientRect())  // 
