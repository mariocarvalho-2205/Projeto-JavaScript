class Conta {
    constructor(saldo) {
        this.saldo = saldo
    }

    aberturaConta() {
        
        console.log(`Sua conta Foi aberta com  ${this.saldo}`)
    }

    deposito(valor) {
        this.saldo += valor
        console.log(`Seu deposito foi de  ${valor}`)
        console.log(`Seu saldo agora é ${this.saldo}`)
    }

    saque(valor) {
        this.saldo -= valor
        console.log(`Saque no valor de  ${valor}`)
        console.log(`Seu saldo agora é ${this.saldo}`)
    }
}


let myConta = new Conta(1000)
//console.log(myConta.saldo)
myConta.aberturaConta()
myConta.deposito(500)
myConta.saque(250)

