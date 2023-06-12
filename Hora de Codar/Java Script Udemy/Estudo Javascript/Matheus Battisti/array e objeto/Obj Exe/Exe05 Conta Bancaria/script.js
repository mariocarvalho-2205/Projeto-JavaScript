class ContaBancaria{
    constructor(nome, sContaCorrente, sContaPoupanca, jurosPoupanca) {
        this.nome = nome
        this.sContaCorrente = sContaCorrente
        this.sContaPoupanca = sContaPoupanca
        this.jurosPoupanca = jurosPoupanca

    }

    depositoCCorrente(valor) {
        this.sContaCorrente += valor
        return `${this.nome}, Valor de deposito ${valor.toFixed(2)}, Saldo atual Conta Corrente é ${this.sContaCorrente.toFixed(2)}`
    }

    depositoCPoupanca(valor) {
        this.sContaPoupanca += (valor + this.jurosPoupanca)
        return `${this.nome}, Seu saldo na Conta Poupança é ${this.sContaPoupanca.toFixed(2)}`
    }

    tranferenciaPoupacatoCorrente(valor){
        this.sContaPoupanca -= valor
        this.sContaCorrente += valor
        return `Transferencia feita da Poupança para Corrente no valor de R$ ${valor.toFixed(2)}`
    }
    tranferenciaCorrentePoupanca(valor){
        this.sContaCorrente -= valor
        this.sContaPoupanca += valor
        return `Transferencia feita da Corrente para Poupança no valor de R$ ${valor.toFixed(2)}`
    }

    jurosAniversário() {
        let juros = (this.sContaPoupanca * this.jurosPoupanca) / 100
        this.sContaPoupanca += juros
        return `Você recebeu ${juros.toFixed(2)} de Juros, e seu saldo agora é ${this.sContaPoupanca.toFixed(2)}`
    }

    saque(valor) {
        this.sContaCorrente -= valor
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(nome, sContaCorrente, sContaPoupanca, jurosPoupanca){
        super(nome, sContaCorrente, sContaPoupanca, jurosPoupanca*2)
        
    }
}
let minhaConta = new ContaBancaria('Mário', 100, 100, 2)
let myCEspecial = new ContaEspecial('Ady', 5000, 3000, 2)

console.log(minhaConta.depositoCCorrente(500.50))
console.log(minhaConta.depositoCPoupanca(250))
console.log(minhaConta.depositoCPoupanca(250))
minhaConta.saque(350)
console.log(minhaConta.tranferenciaPoupacatoCorrente(204))
console.log(minhaConta.jurosAniversário())
console.log(minhaConta)
console.log(myCEspecial)
console.log(myCEspecial.jurosAniversário())

