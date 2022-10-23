function criaPessoa(nome, sobrenome, id, p, a) {
    const idade = id
    console.log(idade)
    return {
        nome,
        sobrenome,
    
        media(n1, n2) {
            return `A media ${nome} ${this.sobrenome} ${n1} é ${this.peso} ${(n1 + n2) / 2}`
        },

        peso: p,
        alt: a,

        imc() {
            const ind = this.peso / (this.alt ** 2)
            return ind.toFixed(2)
        },
    }
}

const p1 = criaPessoa('mario', 'carvalho', 47, 55, 1.6)
console.log(p1.nome, p1.media(8, 9))
console.log(p1.sobrenome)
console.log(p1.imc())
