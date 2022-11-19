/* 
array avançado filter, map e reduce

*/
/*
const array = []
const array2 = ['mario', 'joao', 'maria', 'ady']

array.push(5)  // adiciona no final
array.push(10)
array.push(15)
array.unshift(1)  // adiciona no inicio
array.unshift(3)


console.log(array.slice(-2))
array.pop()  // remove do final do array
console.log(array)
array[1] = 8
array[2] = 9
array.shift()  // remove do inicio

console.log(array)*/
// metodo splice
/*
Sintaxi 
array.splice(indice, delete"quantidade de elementos removidos", elem1, elem2, elem3)
*/
/*
const array2Splice = array2.splice(2, 2, 'antonio', 55)
console.log(array2, array2Splice)

// simulando pop - remove do final
console.log(array2, array2.splice(-1, 1))
// somulando shift - remove do inicio
console.log(array2.splice(0, 1))

// simulando push - adiciona no final do array
console.log(array2.splice(array2.length, 0, 'astro'))
console.log(array2)
// simulando unshift - adiciona no inicio do array
console.log(array2.splice(0, 0, 'nave'))
console.log(array2)

// concatenando array
const array3 = ['renato', 'jose', 'kaka']
let concat = array3.concat(array2)
console.log(concat)
*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// filter
// Sempre retorna um array com a mesma quantidade de elementos ou menos.
// Sintaxi array.filter(valor, indice, array)
const arrayFilter = [1, 2, 3, 50, 90, 77, 58, 20, 54, 101, 247]

const num = arrayFilter.filter(function (valor, indice) {
    if (valor > 50) {
        console.log(valor, indice)
    }
})

function callFilter (valor) {
    return valor < 50
}


const numFiltrados = arrayFilter.filter(callFilter) 
console.log(numFiltrados)

/*
Retorne as pessoas que tem nome com 5 letras ou mais
Retorna as pessoas com mais de 50 anos
Retorna as pessoas cujo nome termina com a
*/


const objFilter = [
    {nome: 'ady', idade: 48},
    {nome: 'joao', idade: 50},
    {nome: 'maria', idade: 47},
    {nome: 'stefany', idade: 17},
]
const nomeMaisDeCinco = objFilter.filter(function (valor) {
  return valor.nome.length < 5
})

const maisDeCinquenta = objFilter.filter((valor) => valor.idade < 40)


// endsWith pega a ultima string
const ultimaLetra = objFilter.filter((valor) => valor.nome.toLowerCase().endsWith('a'))

console.log(maisDeCinquenta)
console.log(nomeMaisDeCinco)
console.log(ultimaLetra)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/*
map  = muda os valores do array 
sintaxi é igual

*/

const dobrado = arrayFilter.map((valor, indice) => valor * indice)
console.log(dobrado)


/*
retorne apenas uma string com o nome
remova apenas as chaves "nome do obj"
adiciona uma chave id para cada objeto
*/
const unicaString = objFilter.map(function (valor) {
    return valor.nome
})
console.log(unicaString) 
/*const removeChave = objFilter.map((val) => {
    delete val.nome
    return val
})*/
const removeChave = objFilter.map((val) => ({ idade: val.idade }) )

console.log(removeChave)
/*
const criaId = objFilter.map((val, ind) => {
    val.id = ind + 1 
    return val
})*/
// dessa forma alteramos o obj original - Recomenda-se cria um segundo obj para os novos valores

const criaId = objFilter.map((val, ind) => {
    const newObj = {...val}
    newObj.id = ind + 1 
    return newObj
})


console.log(objFilter)
console.log(criaId)

// reduce
/*
sintaxe
const reduceTotal = arrayFilter.reduce(function(acumulador, valor, indice, array) {

}, 0 valor inicial do acumulador)
*/

const reduceTotal = arrayFilter.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
}, 0)

console.log(reduceTotal)

const maisvelha = objFilter.reduce((acum, val) => {
    if (acum.idade < val.idade) return acum
    return val
})
console.log(maisvelha)

// unindo tudo filter, map e reduce

const tudoJunto = arrayFilter
    .filter((val) => val % 2 === 0)  // filtra os numeros pares ou qualquer outro filtro
    .map((val) => val * 2)  // modifica o array
    .reduce((ac, val) => ac += val)   // reduz o array 

console.log(tudoJunto)