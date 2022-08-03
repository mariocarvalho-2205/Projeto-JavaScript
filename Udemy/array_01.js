/*
array: uma coleção de tipos 

Ex:
let array = ['luis', 'maria', 'joao', 3, 2, true, false, null]


Para acessar o indice de um array
    indice ->   0         1       2
let alunos = ['mario', 'luis', 'maria']
console.log(arrya[num_indice])

para editar indice no array
alunos[0] = 'eduardo'  // acontecera a substituição do indice.
e caso nao existe o indice informado, será criado um novo indice com um 
novo dado.
Ex:
let alunos = ['mario', 'luis', 'maria']
alunos[0] = 'eduardo'  //  Retorna -> ['eduardo', 'luis', 'maria']
alunos[3] = 'joana'  // Retorna -> ['eduardo', 'luis', 'maria', 'joana']

alunos[alunos.length] = 'jorge'  // usando o length dessa forma tambem adiciona 
                                    dados ao final do indice

    indice ->   0         1       2       3
retornara ['eduardo', 'luis', 'maria', 'joana']

length - verificando o tamanho do array

console.log(alunos.length)

.push  -> adiciona elementos no final do array

Ex: 
alunos.push('cesario')

unshift -> adiciona ao final do array
alunos.unshift('fabio')

.pop -> remove do final do array
alunos.pop()

delete -> apaga o elemento mais mantem o indice

acessando indice inexistente ira retornar com undefined

fatiamento do array
array.slice(indice inicio, indice final)  
*/

let alunos = ['mario', 'luis', 'maria']
console.log(alunos[0])
console.log(alunos)
alunos[0] = 'eduardo'
console.log(alunos)
alunos[0] = 'eduardo'  //  Retorna -> ['eduardo', 'luis', 'maria']
alunos[3] = 'joana'  // Retorna -> ['eduardo', 'luis', 'maria', 'joana']
console.log(alunos)
console.log(`o array tem ${alunos.length} indices`)

alunos[alunos.length] = 'jorge'  // usando o length dessa forma tambem adiciona dados ao indice
alunos.push('cesario')  // adiciona no final do array
console.log(`. push para adiciona no final do array \n${alunos} indices`)
alunos.unshift('fabio') // adiciona no final do array
console.log(alunos)
alunos.pop()  // remove do final do array
console.log(alunos)
alunos.shift()  // remove do inicio do array
console.log(alunos)
//delete alunos[1] // deleta o dado mais mantem o indice, acessando esse indice retorna undefined
console.log(alunos)

alunos.push('luiza')
alunos.push('joaozinho')
console.log(alunos)
console.log(alunos.slice(0, 4))
console.log(alunos.slice(-3))  // retorna a quantidade começando do final
console.log(typeof alunos)  
console.log(alunos instanceof Array)  // verifica se é uma instancia de array
console.log(alunos[1][2])  // acessa o indice do indice no array 
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}