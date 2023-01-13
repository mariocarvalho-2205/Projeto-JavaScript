let array = [1, 5, 9, 5]
let qtd = 4
let soma = 0
let somaReduce = array.reduce((acu, ind, q, ar) => acu + ind, 0)
let media2 = somaReduce / qtd
for (let i = 0; i < array.length; i++) {
    soma += array[i]
}
let media = soma / array.length

console.log(soma, media)
console.log(somaReduce / qtd, media2)