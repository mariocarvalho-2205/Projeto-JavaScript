class Pessoa {
    // constructor do objeto
    constructor(id, nome, idade, sexo){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo
    }

    // set utilizado para gravar nome no objeto
    setNome(novoNome) {
        this.nome = novoNome;
    }

    // set para gravar idade no objeto
    setIdade(novaIdade) {
        this.idade = novaIdade
    }
    
    // set para gravar sexo no objeto
    setSexo(novoSexo) {
        this.sexo = novoSexo
    }

}


// classe para registrar as pessoas
class RegistroPessoas {
    constructor(){
        this.pessoas = [];
        this.proximoId = 1;
    }

    // metodo para adicionar pessoa ao array de objeto
    adicionarPessoas(nome, idade, sexo) {
        const pessoa = new Pessoa(this.proximoId, nome, idade, sexo)

        // incrementa o id
        this.proximoId++
        this.pessoas.push(pessoa)
    }

    // metodo para editar pessoa
    editarPessoa(id, novoNome, novaIdade) {
        const pessoaIndex = this.pessoas.findIndex(p => p.id === id)

        if (pessoaIndex !== -1) {
            this.pessoas[pessoaIndex].setNome(novoNome)
            this.pessoas[pessoaIndex].setIdade(novaIdade)
        } else {
            console.log('pessoa não encontrada')
        }
    }

    // metodo para apagar pessoa
    apagarPessoa(id) {
        this.pessoas = this.pessoas.filter(p => p.id !== id)
    }
}

let registro = new RegistroPessoas()

// Registra pessoa no banco
registro.adicionarPessoas('mario', 48, 'masculino')
registro.adicionarPessoas('adilma', 49, 'feminino')

console.log(registro.pessoas)


// acessa pessoa no banco

registro.pessoas.forEach(index => {
    if (index.sexo === 'masculino') {
        console.log(` ${index.nome} tem ${index.idade} anos, e é do sexo ${index.sexo}`)
    } else {
        console.log(` ${index.nome} tem ${index.idade} anos, e é do sexo ${index.sexo}`)
    }
})

// editando pessoa
registro.editarPessoa(1, 'mario', 50)
console.log(registro.pessoas)

// apagando pessoa
registro.apagarPessoa(1)
console.log(registro.pessoas)