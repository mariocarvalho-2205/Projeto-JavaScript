class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado
    }
}



let myEndereco = new Endereco('Aroeira Vermelha', 'Periperi', 'Salvador', 'Bahia')

console.log(myEndereco)

myEndereco.novaRua = 'Rua Daniel Ferreira'
myEndereco.novoBairro = 'Itacaranha'
myEndereco.novaCidade = 'Belo Horizonte'
myEndereco.novoEstado = 'Minas'
console.log(myEndereco)
