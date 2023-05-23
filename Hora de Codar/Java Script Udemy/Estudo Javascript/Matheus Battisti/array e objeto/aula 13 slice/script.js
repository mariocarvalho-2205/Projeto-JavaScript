// slice

/*
slice - retorna um array a partir de outro array
o array retornado é determinado pelos parametros que sao os 
indices de inicio e fim do novo array

*/

let numeros = [1, 2, 5, 6, 7, 8, 11, 12, 13]

console.log(numeros.slice(1, 4))  // o indice final retorna um indice antes ou seja e o indice - 1

console.log(numeros.slice(5)) // retorna um array a partir do indice passado até o final

console.log(numeros.slice(-3))  // retorna o array começando pelo final

console.log(numeros.slice(3, -3))  // retorna o indice decresente começando menos o inicio passado