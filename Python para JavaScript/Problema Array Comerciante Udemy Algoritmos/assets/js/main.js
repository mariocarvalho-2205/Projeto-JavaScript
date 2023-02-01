let qtdProdutos = Number(prompt('Serão digitados dados de quantos produtos?'))

function inputProducts (qtd) {
    let nome
    let priceCompra
    let priceVenda
    let products = []
    let compra = []
    let venda = []
    for (let i = 1; i <= qtd; i++) {
        alert(`Produto ${i}:`)
        nome = prompt(`Nome ${i}`)
        priceCompra = Number(prompt(`Preço de compra ${i}`))
        priceVenda = Number(prompt(`Preço de venda ${i}`))
        products.push(nome)
        compra.push(priceCompra)
        venda.push(priceVenda)
    }
    console.log(products, compra, venda)
}

inputProducts(qtdProdutos)