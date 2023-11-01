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
        this.atualizarLista();
    }

    // metodo para editar pessoa
    editarPessoa(id, novoNome, novaIdade) {
        const pessoaIndex = this.pessoas.findIndex(p => p.id === id)

        if (pessoaIndex !== -1) {
            this.pessoas[pessoaIndex].setNome(novoNome)
            this.pessoas[pessoaIndex].setIdade(novaIdade)
            this.atualizarLista();
        } else {
            console.log('pessoa não encontrada')
        }
    }

    // metodo para apagar pessoa
    apagarPessoa(id) {
        this.pessoas = this.pessoas.filter(p => p.id !== id)
    }

    atualizarLista() {
        const listaPessoas = document.getElementById('listaPessoas')
        listaPessoas.innerHTML = ''

        this.pessoas.forEach(pessoa => {
            const li = document.createElement('li');
            li.textContent = `ID: ${pessoa.id}, Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Sexo: ${pessoa.sexo}`
            listaPessoas.appendChild(li)
        })
    }
}

let registro = new RegistroPessoas()

// Registra pessoa no banco
function adicionarPessoa() {
    const nomeInput = document.getElementById('nome')
    const idadeInput = document.getElementById('idade')
    const sexoInput = document.getElementById('sexo')

    registro.adicionarPessoas(nomeInput.value, idadeInput.value, sexoInput.value)

    nomeInput.value = ''
    idadeInput.value = ''
    sexoInput.value = ''

}

function editarPessoa( ) {
    const idInput = prompt('Digite o ID da pessoa que deseja editar:')
    const nomeInput = prompt('Novo Nome: ')
    const novaIdade = prompt('Nova Idade:')
    const novoSexo = prompt('Novo Sexo:')

    registro.editarPessoa(parseInt(idInput), nomeInput, novaIdade, novoSexo)
}

function apagarPessoa () {
    const idInput = prompt('Digite o ID da pessoa que deseja apagar:')

    registro.apagarPessoa(parseInt(idInput))
}
// registro.adicionarPessoas('adilma', 49, 'feminino')

// console.log(registro.pessoas)


// acessa pessoa no banco

// registro.pessoas.forEach(index => {
//     if (index.sexo === 'masculino') {
//         console.log(` ${index.nome} tem ${index.idade} anos, e é do sexo ${index.sexo}`)
//     } else {
//         console.log(` ${index.nome} tem ${index.idade} anos, e é do sexo ${index.sexo}`)
//     }
// })

// editando pessoa
// registro.editarPessoa(1, 'mario', 50)
// console.log(registro.pessoas)

// apagando pessoa
// registro.apagarPessoa(1)
// console.log(registro.pessoas)