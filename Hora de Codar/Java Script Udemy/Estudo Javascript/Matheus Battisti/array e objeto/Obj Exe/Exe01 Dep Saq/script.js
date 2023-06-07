class Carrinho {
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }

    saque (valor) {
        this.saldo -= valor
    }
}
