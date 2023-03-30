class DankiCode {
    constructor() {
        this.nome = []
        this.num = -1
        console.log(`funcionando`)

    }

    testes(n) {
        this.num++
        this.nome.push(n)
        console.log(`invocando testes com ${n}`)
    }
}

module.exports = DankiCode