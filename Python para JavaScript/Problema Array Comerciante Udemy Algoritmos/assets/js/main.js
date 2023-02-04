let qtdProdutos = Number(prompt('Serão digitados dados de quantos produtos?'))

function inputProducts (qtd) {
    let nome
    let priceCompra
    let priceVenda
    let products = []
    let compra = []
    let venda = []

    for (let i = 1; i <= qtd; i++) {

        nome = prompt(`Nome ${i}`)
        priceCompra = Number(prompt(`Preço de compra ${i}`))
        priceVenda = Number(prompt(`Preço de venda ${i}`))
        products.push(nome)
        compra.push(priceCompra)
        venda.push(priceVenda)
    }

    lucro(compra,venda)
    console.log(products, compra, venda)
}

function totalCompraVenda (compra, venda) {
    let totalCompra = compra.reduce((total, item) => total + item)
    let totalVenda = venda.reduce((total, item) => total + item)
    let lucroTotal = totalVenda - totalCompra
    console.log(`
        Total de compra R$ ${totalCompra.toFixed(2)}
        Total de venda R$ ${totalVenda.toFixed(2)}
        Lucro Total: R$ ${lucroTotal.toFixed(2)}
    `)

}

function lucro (compra, venda) {
    let lucroProdutos = []
    let lucroMenorQueDez = 0
    let lucroEntreDezeVinte = 0
    let lucroMaiorQueVinte = 0

    // Lucro dos Produtos
    venda.forEach((venda, index) => lucroProdutos.push(venda - compra[index]).toFixed(2))
    // Lucro menor que 10%
    compra.forEach((compra, index) => { if ((lucroProdutos[index] * 100) / compra < 10) lucroMenorQueDez += 1 })
    // Lucro entre 10% e 20%
    compra.forEach((compra, index) => {
        if ((lucroProdutos[index] * 100) / compra >= 10 && (lucroProdutos[index] * 100) / compra <= 20) {
        lucroEntreDezeVinte += 1
        }
    })
    // Lucro maior que 20%
    compra.forEach((compra, index) => { if ((lucroProdutos[index] * 100) / compra > 20) lucroMaiorQueVinte += 1 })

    console.log(`
        Lucro abaixo de 10%: ${lucroMenorQueDez}
        Lucro entre 10% e 20%: ${lucroEntreDezeVinte}
        Lucro acima de 20%: ${lucroMaiorQueVinte}
    `)
    totalCompraVenda(compra, venda)

}
inputProducts(qtdProdutos)