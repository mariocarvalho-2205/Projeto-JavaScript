// destructuring object

// podemos definir variaveis com propriedades do objeto
// com uma notação diferente

const person = {
    nome: 'mario',
    sobrenome: 'carvalho'
}

const { nome: fname, sobrenome: lname} = person

console.log(fname)
console.log(lname)