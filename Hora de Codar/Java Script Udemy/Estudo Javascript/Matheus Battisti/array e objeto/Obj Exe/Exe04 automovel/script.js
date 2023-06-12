class Carro {
    constructor (marca, cor, combustivel, consumo) {
        this.marca = marca
        this.cor = cor
        this.combustivel = combustivel
        this.consumo = consumo
    }

    viajar(km) {
        
        let litrosConsumidos = km / this.consumo

        if (litrosConsumidos > this.combustivel) {
            return `Voce só tem ${this.combustivel} litros, é necessario abastecer para completar a viagem!! Você ira precisar de mais ${Math.abs(this.combustivel -= litrosConsumidos).toFixed(2)} litros!`
            
        } else {
            this.combustivel -= litrosConsumidos
            return `Você teve um consumo de ${litrosConsumidos.toFixed(2)} litros, e ficou com ${this.combustivel.toFixed(2)} litros para rodar.`
        }
    }

    abastecer(litros) {
        this.combustivel += litros
    }


}

let myCarro = new Carro('Ford', 'Vermelho', 45, 12)
console.log(myCarro)
console.log(myCarro.viajar(1000))
myCarro.abastecer(40)
myCarro.abastecer(40)
console.log(myCarro.viajar(100))
