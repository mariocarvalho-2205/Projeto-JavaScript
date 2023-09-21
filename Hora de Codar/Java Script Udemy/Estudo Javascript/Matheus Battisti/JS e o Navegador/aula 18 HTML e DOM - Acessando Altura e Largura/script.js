/*

// DOM e JS - Altura e Largura dos Elementos 
* Podemos verificar a altura e a largura dos elementos com o JS
* Para isso, utilizamos dois comandos
* offsetWidth e offserHeight para verificar sem as bordas
* clientWidth e clientHeght para verificar incluindo a borda

*/
// Acessando a altura e a largura dos elementos

let tamanho = document.getElementById('titulo-principal')
let tamanho2 = document.getElementById('titulo-principal2')

// sem a borda
console.log(`Largura -> ${tamanho.offsetWidth}px`)
console.log(`Altura -> ${tamanho.offsetHeight}px`)
// com a borda
console.log(`Largura -> ${tamanho2.offsetWidth}px`)
console.log(`Altura -> ${tamanho2.offsetHeight}px`)
