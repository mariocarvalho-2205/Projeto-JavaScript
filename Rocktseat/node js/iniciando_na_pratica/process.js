/*
Process - > traz uma lista de argumentos que está rodando no node
*/
// lista de argumentos
// console.log(process.argv)

console.log('seu nome é ' + process.argv[2] + ' ' + process.argv[3])

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome agora utilizando template Strings ${firstName} ${lastName}`)