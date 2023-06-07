/*
//  Instanceof -  verifica quem é a classe pai do objeto


*/

class Mamifero{
    constructor(patas) {
        this.patas = patas;
        
    }
}

let coiote = new Mamifero(4)

console.log(coiote.patas)

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas)
        this.raca = raca
    }

    latir() {
        console.log('au au au')
    }
}

let cachorro = new Cachorro(4, 'pastor')
console.log(cachorro.patas)
console.log(cachorro.raca)
cachorro.latir()
console.log(new Cachorro instanceof Mamifero)
console.log(coiote instanceof Mamifero)