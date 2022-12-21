// ! Exercicio Rocketseat de variaveia até array e objeto 

// 1 - Declare uma variavél de nmome weight

let weight

// 2 - Que tipo de é a variavél acima

console.log(typeof weight)  // undefined
weight = 52.3
/* 3 - Declare uma varivel e atribua valores para cada um dos dados
    * name: Strign
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed = Boolean
*/

let name = "mario"
let age = 47
let stars = 10.0
let isSubscribed = true

// 4 - A variavel student é de que tipo de dado
let student = {}

console.log(typeof student)

// 5 - Atribua a variavel student os mesmos valores usados no exercicio 03

student = {
    name: 'mario',
    age: 47,
    weight: 6.0,
    isSubscribed: false
}
console.table(student)
console.log(`${student.name} tem de idade ${student.age} e pesa ${student.weight}`)

let students = []
// 6 - Reatribua o valor a variavel acima, colocando dentro dela o objeto student da questão 4., (mas usar o objeto criado e inserir ele no array)

// students = ['mario', 'joao', {
//     name: 'jose', 
//     age: 50, 
//     weight: 65.0}
// ]
students = [
    student
]
// 7 - Coloque no console o valor da posição zero do array acima

//console.log(students[0])

// 8 - Crie um novo student e coloque na posição 1 do array students

const joao = {
    name: 'joao',
    age: 87,

}
students[1] = joao
console.log(students[1])

// 9  - Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que? Apos a sua resposta, rode o codigo e veja se voce acertou
// res -> undefined
console.log(a)
var a = 1