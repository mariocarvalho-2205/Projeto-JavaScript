const cachorro = {
    nome: 'SRD',
    setNome: function (novoNome) {
        this.nome = novoNome
    },
    getNome: function () {
        return `O nome é  ${this.nome}`
    }
}

cachorro.setNome('mike')

console.log(cachorro.getNome())
console.log(cachorro.nome)

cachorro.setNome('tom')

console.log(Object.getPrototypeOf(cachorro))
console.log(Object.getPrototypeOf(cachorro) == Object.prototype)
console.log(cachorro.hasOwnProperty('setNome'))

let novoCachorro = Object.create(cachorro)
let novoCachorro2 = Object.create(cachorro)
novoCachorro.setNome('luna')
novoCachorro2.setNome('Jerry')
console.log(novoCachorro.nome)
console.log(novoCachorro.getNome())
console.log(novoCachorro2.getNome())
console.log(cachorro)
console.log(novoCachorro)
console.log(novoCachorro2)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Criando objeto atraves de uma function
function criaCachorro (raca) {
    let cachorro = Object.create({})

    cachorro.raca = raca
    return cachorro
}

let pastor = criaCachorro('Pastor')
let poodle = criaCachorro('Poodle')
console.log(pastor)
console.log(poodle)

function criaCarro (marca, modelo, ano, ligar) {
    let carro = Object.create({})

    carro.marca = marca;
    carro.modelo = modelo;
    carro.ano = ano;
    carro.ligar = function () {
        console.log('ligado')
    }
    

    return carro
}

let carro1 = criaCarro('ford', 'focus', 2010)

carro1.ligar()
let carro2 = new criaCarro('fiat', 'cronus', 2021)
carro2.ligar()
console.table(carro2)

// =-=-=-=- usando constructor por new

function FabricaCarro (marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

let carro3 = new FabricaCarro('GM', 'onix')

console.log(carro3)
//=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// criando metodos por protorype

function Produto (marca, modelo) {
    this.marca = marca
    this.modelo = modelo

}
Produto.prototype.ligar = function () {
    console.log('ligado')
}

Produto.prototype.lavar = function () {
    console.log('lavando')
}
let car = new Produto('ferrari', 'F40')
console.log(car.marca)
car.ligar()
car.lavar()

// -=-=-=-=-=-= class

class Product {
    constructor(marca, produto){
        this.marca = marca
        this.produto = produto


    }
    vencido(){
        console.log('vencido')
    }
}

Product.prototype.validade = function() {
    console.log('valido')
}

let arroz = new Product('tio joao', 'arroz')
console.log(arroz.marca, arroz.produto)
arroz.validade()
arroz.vencido()