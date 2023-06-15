class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
      this.codigoVoo = codigoVoo;
      this.origem = origem;
      this.destino = destino;
      this.assentosDisponiveis = assentosDisponiveis;
    }
  
      reservarAssento() {
        if (this.assentosDisponiveis > 0) {
            this.assentosDisponiveis--
        } else {

        }
      }
      
      consultarAssentosDisponiveis() {
        if (this.assentosDisponiveis <= 0) {
            return 'Não há assentos disponíveis para reserva.'
        } else {

            return this.assentosDisponiveis
        }
           
      }
  
  }

let voo = new Voo(123, '', '', 1)
console.log(voo)
console.log(voo.consultarAssentosDisponiveis())
voo.reservarAssento()
console.log(voo.consultarAssentosDisponiveis())
voo.reservarAssento()
console.log(voo.consultarAssentosDisponiveis())
console.log(voo)