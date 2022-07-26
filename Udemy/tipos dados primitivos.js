// Tipos de dados primitivos
// string, number, undefined, null, boolean, symbol(será tratado posteriomente)

const nome = 'mario'  // string com aspas simples
const nome1 = "mario"  // string com aspas duplas
const nome2 = `mario`  // string com crase usado para template string ou usar aspas na string
const num1 = 10  // number
const num2 = 10.50  // number
let nomeAluno  //  undefined -> não apnta para lugar nenhum na memoria
const sobrenomeAluno = null  // Nulo -> não aponta para lugar nenhum na memoria. pode usar let ou const
const aprovado = false   // boolean valor logico - verifica se é falso ou verdadeiro, true or false
const array = [1, 2]
const arrayB = array  // dados por referencia - dessa forma, e apontado para o mesmo valor na memoria, ou seja ele copia o valor
let a = 2
const b = a
console.log(a, b) // 2, 2
a = 3
console.log(a, b) // 3, 2

// para verificar o tipo, usamos o typeof

console.log(typeof nome, nome)  // repetindo a variavel e mostrada o tipo e o valor
console.log(typeof num1, num1)
console.log(typeof nomeAluno, nomeAluno)
console.log(typeof sobrenomeAluno, sobrenomeAluno)
console.log(typeof aprovado, aprovado)
console.log( array, arrayB)

