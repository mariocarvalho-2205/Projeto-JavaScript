/*
// Override nas propriedades do prototype

Sempre que adicionamos uma propriedade a um objeto, é criada uma identica no prototype

Podemos subistituir a do prototype

class Cachorro {
    constructor(raca) {
        this.raca = raca
    }


}

let labrador = new Cachorro('Labrador')

console.log(labrador.raca)

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

Cachorro.prototype.raca = 'SRD'  // definindo um valor padrao as propriedades
Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrador', 'amarelo')

console.log(labrador.patas)
console.log(labrador.raca)
console.log(Cachorro.prototype.raca)



