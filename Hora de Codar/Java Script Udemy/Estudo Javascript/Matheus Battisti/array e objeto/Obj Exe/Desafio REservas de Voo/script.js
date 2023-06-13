class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
        this.codigoVoo = codigoVoo
        this.origem = origem
        this.destino = destino
        this.assentosDisponiveis = assentosDisponiveis
    }

    reservarAssento() {
        if (this.assentosDisponiveis > 0) {
            this.assentosDisponiveis -= 1
            return 'Assento reservado com sucesso!'
        } 
    }
    
    consultarAssentosDisponiveis() {
        if (this.assentosDisponiveis > 0) {
            return `Restam ${this.assentosDisponiveis} assentos disponíveis.`
        } else {
            return 'Não há assentos disponíveis para reserva.'
        }
    }
}

let voo = new Voo(123, '', '', 1)
console.log(voo)
console.log(voo.consultarAssentosDisponiveis())
console.log(voo.reservarAssento())
console.log(voo.consultarAssentosDisponiveis())
console.log(voo.consultarAssentosDisponiveis())
console.log(voo)