/*let array = []
for (let i = 0; i < 10; i++) {
    console.log(i)    
    array.push(i)

} 
console.log(array)*/

function falaOi (fala) {
    const falar = 'eu to falando aqui'
    console.log(falar, fala)
    
}
//falaOi('jose')

function teste (n1, n2) {
    const soma = n1 + n2
    falaOi('e ao mesmo tempo somando ' + soma)
}


function dado(n) {
    teste(50, 79)
    console.log('aqui eu fiz um teste usando 3 funções ' + n)
    
}
dado('fim!!!')


var a = 3
var N = 18

soma = 0

for (let i = 0; i <= N; i++) {
    if (i % a == 0) {
        soma += i
    }
}
console.log(soma)


let resultado = 4
//print(fizzBuzz(resultado));
if (resultado % 3 == 0 && resultado % 5 == 0 ) {
    console.log("FizzBuzz")
    } else if ( resultado % 3 == 0 ) {
        console.log("Fizz")
    } else if ( resultado % 5 == 0 ) {
        console.log("Buzz")
    } else {
        console.log(resultado)
}

let n = 15
var soma = 0
while (n >= 0){
    soma += n
    n -= 1
}
console.log(soma)

let A = 38
let B = 90

if (A === B) {
    console.log(`São iguais!`)
} else {
    console.log(`Não são iguas!`)
}

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];
let valor = -16
for (let i = 0; i <= elementos.length; i++ ){
    if (elementos[i] === valor) {
        console.log(`Achei ${valor} na posicao ${i}`)
    }

}
if (elementos.includes(valor) === false) {
    console.log(`Numero ${valor} nao encontrado!`)
}
let a1 = [1, 2, 3, 4, 5]
let no = "mario sergio carvalho tenorio"
let arr = ['mario', 'sergio', 'carvalho', 'tenorio']
/*console.log(no.slice(8, -5))
console.log(no.split(' '))
console.log(arr.join(' '))
console.log(arr, arr.splice(0, 0, 'joao', 'luis'))
//console.log(arr.splice(0,Number.MAX_VALUE))
let conca = arr.concat(elementos, [1, 2, 3], 'Adilma')
console.log(conca)
let a3 = [...a1, ...arr, 'adyyy']
console.log(a3)*/

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//filter
// reduzindo a função para o filter
/*function callbackFilter(valor){
    return valor > 10
}*/

// reduzido
/*const maior = elementos.filter(valor => valor > 10)
console.log(maior)*/

/*let m = elementos.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});*/

let nomePessoa = [
    {nome: 'mario', idade: 47},
    {nome: 'ady', idade: 88},
    {nome: 'joao', idade: 50},
]

const pessoa = nomePessoa.filter(n => n.idade < 50)
const pessoaFimA = nomePessoa.filter(l => l.nome.toLowerCase().endsWith('y'))
console.log(pessoa)
console.log(pessoaFimA)


const pess = nomePessoa.map(obj => ({idade:obj.idade}));
const comId = nomePessoa.map((obj, indice) =>{
    indice += 1 * 20;
    const newObj = { ...obj}
    newObj.id = indice
    //obj.id = (indice + 1) * 1000
    return newObj;
})
let aa = [1, 2, 3, 4, 5]
const red = nomePessoa.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
//console.log(pess)
//console.log(comId)
console.log(red)
//-=-=-=-=-=-=-=-=-=-=-=-=-=
// unindo filter reduce map
let element = [64, 137, 316, 43, 67, 81, 90, 212, 10, 75];
/*const pares = element.filter(function (valor) {
    return valor % 2 === 0
}).map(function (valor) {
    return valor * 2
}).reduce(function(ac, valor) {
    return ac + valor
})*/

const pares = element
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce ((ac, valor) => ac + valor);

// [ 64, 316, 90, 212, 10 ] pare
// [ 128, 632, 180, 424, 20 ] dobro
// 1384 soma dos valores

console.log(pares)

//-=-=-=-=-=-=-=-=-=-=-=-=-=
// fatorial desajeitado
/*
let num = 4
let fato = 0
let opera = ['*', '/', '+', '-']
let i = num
let f = 0
while (i > 0) {
    f += num * (i)
    num -= 1
    i -= 1

}
console.log(f)*/