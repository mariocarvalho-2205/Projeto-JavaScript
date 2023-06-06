/*
// Get e Set

Get: Serve para resgatar o valor de uma propriedade

Set: Serve para alterar o valor de uma propriedade


*/

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir () {
        console.log('au au au')
    }
    get verRaca () {
        return `A raça do cachorro é ${this.raca}` 
    }

    set novaRaca (value) { // no caso de set, é obrigatorio passar parametro
        this.raca = value
    }

    get getCor () {
        return ` a cor é ${this.cor}`
    }

    set setCor(value) {
        this.cor = value
    }
}

let golden = new Cachorro('Pastor Americano', 'Sem cor')

console.log(golden.raca)
console.log(golden.cor)

golden.novaRaca = 'poodle'  // atribuindo novo valor a propriedade

console.log(golden.raca)
golden.latir()
golden.setCor = 'preto'
console.log(golden.cor)
console.log(golden.getCor)