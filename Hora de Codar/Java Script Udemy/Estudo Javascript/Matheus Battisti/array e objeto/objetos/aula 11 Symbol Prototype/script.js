/*
// Symnbols

Sao propriedades unicas, que não podem ser alteradas e nem criadas duas vezesd

Podemos utilizar como uma constante, so que para propriedade de objeto

*/

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log('au au au')
    }
}
// criando um symbol
let patas = Symbol()
// atribuindo um valor ao Symbol de patas
Cachorro.prototype[patas] = 4

Cachorro.prototype.raca = 'SRD'  // definindo um valor padrao as propriedades


let labrador = new Cachorro('Labrador', 'amarelo')

console.log(labrador.raca)
console.log(Cachorro.prototype.raca)

// Acessando o Symbol
console.log(labrador[patas])


