/*const num = '5'
if (!isNaN(num)) { 
    console.log('é um numero') 
} else {
    console.log('náo é numero')
}
console.log(isNaN(num))

if (typeof num === 'number') {
    console.log('tambem é um numero')
} else {
    console.log("náo é numero");
}
let array = [1, 2, 2, 3, 5, 6, 8, 9, 7]
let salario = 100
var cargo =
  salario <= 1000
    ? "junior"
    : salario <= 3000
    ? "seniormedio"
    : salario <= 5000
    ? "senior"
    : "diretor";
console.log(cargo)

for (let i = 0 ; i < array.length ; i++) {
    console.log(array[i])
}*/

const obj = [
    {nome: 'mario', idade: 48, sexo: 'm'}, 
    {nome: 'ady', idade: 49, sexo: 'f'},
    {nome: 'joao', idade: 30, sexo: 'm'}
]

for (index in obj) {
    console.log(obj[index].idade)
}
for (ind of obj) {
    if (ind.idade > 40) {
        console.log(`${ind.nome} e mais velho que 40 anos`)
    } else if (ind.idade < 35) {
        console.log(`${ind.nome} tem menos que 35 anos`)
    }
}
for (ind in obj) {
    if (obj[ind].sexo === 'm') {
        console.log(`${obj[ind].nome} é masculino`)
    } else {
        console.log(`${obj[ind].nome} é feminino`)
    }
}