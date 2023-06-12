/*const cachorro = {
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

// adicionando propriedade via prototype
Product.prototype.validade = function() {
    console.log('valido')
}
Product.prototype.tipo = 'cereal'

let arroz = new Product('tio joao', 'arroz')
console.log(arroz.marca, arroz.produto)
arroz.validade()
arroz.vencido()
console.log(arroz.tipo)

class Deposito {
    constructor(material, tipo) {
        this.material = material
        this.tipo = tipo
    }


}

Deposito.prototype.tipo = 'Generico'

let deposito = new Deposito('bloco', 'pesado')
console.log(Deposito.prototype.tipo)
console.log(deposito.tipo)
let deposito2 = new Deposito('areia', 'areia')
console.log(deposito2.tipo)
console.log(Deposito.prototype.tipo)

//-=-=-==symbol

let dep = Symbol()

Deposito.prototype[dep] = '321654987'

let agora = new Deposito('sala', 'jantat')

console.log(dep.prototype[val])

class Cachorro {
    constructor(raca) {
        this.raca = raca
    }

    get getPorte() {
        return this.porte
    }

    set setPort(porte) {
        this.porte = porte
    } 

}


let patas = Symbol()
let pelo = Symbol()


Cachorro.prototype[pelo] = 'peludo'
Cachorro.prototype[patas] = 4

console.log(Cachorro.prototype[pelo])

let pastor = new Cachorro('pastor', 'sem tamanho')

pastor.setPort = 'grande'

console.log(pastor.getPorte)


class Car {
    constructor(marca) {
        this.marca = marca
    }

    get getCar() {
        return `Carro ${this.marca}`
    }

    set setCar(value) {
        this.marca = value
    }

}

class Moto extends Car{
    constructor(marca, rodas) {
        super(marca, marca)
        this.rodas = rodas
    }


}

let moto = new Moto('Yamaha', 2)

let carro = new Car('Ford')

console.log(carro.marca)

carro.setCar = 'Toyota'

console.log(carro.getCar)

//=-=-=-=-=-=-= Herança

class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
    

}

class Gato extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas)
        this.raca = raca
    }
}

let cat = new Gato(4, 'Bulldog')

console.log(cat.patas)

console.log(new Gato instanceof Mamifero)

console.log(moto)
console.log(moto.marca)
console.log(new Moto instanceof Car)
*/
/*class Carteira{
    constructor(money) {
        this.money = money
    }

    get total() {
        return `Tenho ${this.money} na carteira`
    }

    set deposito(value) { 
        this.money += value
    }

    saque(value) {
        this.money -= value
    }
}

let minhaCarteira = new Carteira(1000)
console.log(minhaCarteira)
minhaCarteira.deposito = 500

console.log(minhaCarteira)
minhaCarteira.deposito = 500
console.log(minhaCarteira.total)

minhaCarteira.saque(300)
console.log(minhaCarteira.total)*/

class Carrinho{
    constructor(itens, qtd, total) {
        this.itens = itens
        this.qtd = qtd
        this.total = total
    }

    addItens(item){

        let contador = 0
        for (let itemCarrinho in this.itens) {
            console.log(this.itens[itemCarrinho].item)
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1
             }
        }

        if (contador == 0) {
            this.itens.push(item)
        }
        this.qtd += item.qtd
        this.total += item.preco * item.qtd
    }

    removeItem(item) {
        for (let itemCarrinho in this.itens) {
            //console.log(this.itens[itemCarrinho].item)
            if (this.itens[itemCarrinho].id == item.id) {
                
                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id})

                
                this.qtd -= this.itens[itemCarrinho].qtd // item.qtd
                this.total -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd  //item.preco * item.qtd
                this.itens.splice(index, 1) 

            }
             }
        }

}

let carrinho = new Carrinho([
    {
        id: 1,
        item: 'Camisa',
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        item: 'Calça',
        qtd: 2,
        preco: 50
    }

], 3, 120)

//console.log(carrinho)
//carrinho.addItens()
carrinho.addItens({
    id: 1,
    item: 'Camisa',
    qtd: 3,
    preco: 20
})
console.log(carrinho)

carrinho.addItens({
    id: 3,
    item: 'Bone',
    qtd: 1,
    preco: 15
})

console.log(carrinho)

carrinho.removeItem({
    id: 1,
    item: 'Camisa',
    qtd: 1,
    preco: 20
})
console.log(carrinho)


