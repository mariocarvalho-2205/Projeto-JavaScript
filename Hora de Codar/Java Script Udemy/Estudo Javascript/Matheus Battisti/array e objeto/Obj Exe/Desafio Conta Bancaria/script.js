class ContaBancaria {
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor

    }

    sacar(valor) {
        this.saldo -= valor
    }

    consultarSaldo() {
        return this.saldo
    }

}

let contaBancaria = new ContaBancaria( 'Ms124587', 1000)

console.log(contaBancaria.consultarSaldo())
contaBancaria.depositar(500)
console.log(contaBancaria.consultarSaldo())
contaBancaria.sacar(200)
console.log(contaBancaria.consultarSaldo())