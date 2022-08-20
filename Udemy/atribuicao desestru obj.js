const pessoa = {
    nome: 'mario',
    sobrenome: 'carvalho',
    idade: 47,
    endereco: {
        rua: 'aroeira',
        bairro: 'colinas'
    }
}

/*console.log(pessoa.endereco, pessoa.nome)
// atribuição normal
const sobrenome = pessoa.sobrenome
console.log(pessoa)
console.log(sobrenome)

// atribuição via desestruturação
const { nome, endereco: { rua: r } } = pessoa
console.log(nome, r)

// renomeando a variavel via desestruturação
const { nome: teste, endereco: { rua } } = pessoa
console.log(teste, rua)

const {nome, endereco: { rua: r = 123, bairro} } = pessoa  // caso a variavel rua nao exista no obj, será criada a partir desse momento
console.log(nome, r, bairro)*/

const { nome, ...resto} = pessoa
console.log(nome, resto)