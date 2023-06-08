class Carrinho {
    constructor(itens, qtd, valor) {
        this.itens = itens
        this.qtd = qtd
        this.valor = valor

    }

    addItens (item) {

        let contador = 0
        for(let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1
            }

        }
        if(contador == 0) {
            this.itens.push(item)
        }


        this.qtd += item.qtd
        this.valor += item.preco
    }

    removeItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function (obj) { return obj.id == item.id})

                
                this.qtd -= this.itens[itemCarrinho].qtd
                this.valor -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd
                this.itens.splice(index, 1)
            }
        }

    }
    
}


let carrinho = new Carrinho([
    {
        id: 1,
        nome: "camisa",
        qtd: 1,
        preco: 20,
    },
    {
        id: 2,
        nome: "bermuda",
        qtd: 2,
        preco: 50,
    },
    {
        id: 3,
        nome: "calca",
        qtd: 2,
        preco: 50,
    }


], 3, 220 )

console.log(carrinho)

carrinho.addItens({
    id: 1,
    nome: 'camisa',
    qtd: 2,
    preco: 20
})


console.log(carrinho)

carrinho.addItens({
    id: 4,
    nome:'bone',
    qtd: 3,
    preco: 15,
})
console.log(carrinho)

carrinho.removeItem({
    id: 1,
    nome: 'camisa',
    qtd: 2,
    preco: 20,
})

console.log(carrinho)

