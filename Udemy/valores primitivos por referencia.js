/*
Valores primitivos por referencia
Tipos de dados primitivos são (imutavéis):  string, number, boolean, undefined, 
null (bigint, symbol )  -> valores copiados

let a = 'A"
let b = a  // cria uma copia da variavel a na variavel b, 
nesse caso o valor de b permacera o mesmo no decorrer do codigo
console.log(a, b)  // retorna -> A A
Ex:
a = 'outra coisa'
console.log(a, b)  // retorna -> outra coisa A

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Dados por referencia são mutaveis
referencia (mutavél) - array, object, function  --> passados por referencia
Ex:

let a = [1, 2, 3]
let b = a  // nesse caso b faz referencia a variavel a
ou seja, ele vai apontar para o caminho da variavel a
Ex:
console.log(a)  // retorna  -> 1, 2, 3
console.log(b)
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
para criar uma copia o valor de uma variavel mutavel é
abrir os colchetes e coloca ...variavel[]
Ex:
let b = [...a]  // nesse caso cria uma copia de a passando a ser independente

*/


let a = [1, 2, 3]
let b = [...a]  // nesse caso b faz referencia a variavel a
let c = b
// ou seja, ele vai apontar para o caminho da variavel a
// Ex:
console.log(a)  // retorna  -> [1, 2, 3]
console.log(b)  // retorna  -> [1, 2, 3]  // passado por referencia
// modificando a varivael a, a variavel b sempre retornara o valor de a

//Ex:

a.push(4)  // adicionando valor a var a, b vai retornar o mesmo valor
console.log(a)
console.log(b)

b.pop()  // ira remover o ultimo item de a e b, 
console.log(a)
console.log(b)
c.push('ady')
console.log(c)  // por referencia todas as variveis apontam para o mesmo lugar
// sendo assim, o que mudar em uma, muda em todas

// -=-=-=-=-=-=-=-=-=-=-=--=-=---=
// Utilizando em um objeto:
const d = {
    nome: 'mario',
    sobrenome: 'tenorio'
}
// const e = d
const e = {...d}  // cria uma copia do objeto, e um nao altera o outro

console.log(e)
d.nome = 'ady' // substitui o value do atributo nome
console.log(e)

console.log(d)
