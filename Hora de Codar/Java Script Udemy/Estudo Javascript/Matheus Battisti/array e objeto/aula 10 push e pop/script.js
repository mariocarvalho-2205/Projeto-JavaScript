// push e pop

// push adiciona no final do array
// pop remove do final do array
let pessoa = ['mario', 'joao', 'maria']


let pessoaAdicionada = pessoa.push('ady')

console.log('push')
console.log(pessoa)
console.log(pessoa[pessoa.length - 1])

pessoa.pop()

console.log('pop')
let pessoaRemovida = pessoa.pop()
console.log(pessoa)
console.log(pessoaRemovida)