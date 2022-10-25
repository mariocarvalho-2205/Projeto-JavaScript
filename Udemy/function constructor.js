// utilizamos o pascal case ex: primeira letra maiuscula

function Person (nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    this.adulto = () => {
        if ( this.idade > 18 && this.idade < 50 ) {
            return 'idade adulto'
        } else if ( this.idade > 50 ) {
            return 'idoso'
        } else {
            return 'menor de idade'
        }
    }
}

const p1 = new Person('mario', 51, 'M')
console.log(p1.nome + ' é ' + p1.adulto())