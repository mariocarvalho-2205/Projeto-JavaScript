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

function criaCelular (marca, modelo, tamanho, tela) {
    return {
        marca,
        modelo,
        tamanho,
        tela,
        ligar(nome) {
            return nome + 'ligado'
        }
    }
}

const cel1 = criaCelular('xiaomi', 'redmi Note10', 6.0, 5.5)

console.log(cel1.modelo, cel1.ligar('power'))

function criaCArro (marca, modelo, anoFabricacao, combustivel) {
    return {
        marca,
        modelo,
        anoFabricacao,
        combustivel,
        aprovado() {
            if (anoFabricacao < 2000) {
                return ' esta velho'
            } 
            return ' esta novo'
        },

        consumo() {
            if (combustivel === 'gasolina') {
                return 'o consumo é baixo'
            }
            return 'o consumo é alto'
        }
    }
}

const carro = criaCArro('audi', 'rs8', 2001, 'gasolina')
console.log(carro.marca, carro.modelo, carro.anoFabricacao, carro.consumo(), carro.aprovado())