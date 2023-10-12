function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = (function () {
console.log(`Meu nome é ${this.nome}`)
})

const mario = new Pessoa('mario', 48)


mario.falar()

class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

    }

    falar () {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const joao = new Pessoa2('joao', 50)

joao.falar()
console.log(joao.nome)