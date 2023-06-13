class Livro {
    constructor(titulo, autor, disponivel) {
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }

    emprestar() {
        if(this.disponivel == true) {
            this.disponivel = false
            return 'Reservado com sucesso!'
        }
    }

    devolver() {
        if(this.disponivel == false) {
            this.disponivel = true
            return 'Devolvido com sucesso!'
        }
    }

    consultarDisponibilidade() {
        if(this.disponivel == true) {
            return 'O Livro está disponível'
        } else {
            return 'O Livro não está disponível'
        }
    }
}

let livro = new Livro()

console.log(livro)
console.log(livro.consultarDisponibilidade())
console.log(livro.emprestar())
console.log(livro.consultarDisponibilidade())
console.log(livro.devolver())