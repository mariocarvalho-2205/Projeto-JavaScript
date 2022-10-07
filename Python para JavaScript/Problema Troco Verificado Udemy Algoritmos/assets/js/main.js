const section = document.querySelector('.container')
const form = document.querySelector('form')
const price = document.querySelector('#produto')
const qtd = document.querySelector('#qtd')
const money = document.querySelector('#money')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    res()
})

function totalPagar () {
    let priceUnit = Number(price.value)
    let qtdComprada = Number(qtd.value)
    let aPagar = priceUnit * qtdComprada
    return aPagar
}

function troco () {
    let aPagar = totalPagar()
    let moneyRecebido = Number(money.value)
    let troco = moneyRecebido - aPagar

    if (moneyRecebido >= aPagar) {
        //troco = moneyRecebido - total
        return `Suas compras deram R$ ${aPagar.toFixed(2)}. <br>Seu troco é R$ ${troco.toFixed(2)}`
    } else if (moneyRecebido < aPagar) {
        return `Suas compras deram R$ ${aPagar.toFixed(2)}. <br>Ainda falta R$ ${Math.abs(troco.toFixed(2))}`  // Math.abs(variavel) converte negativo em positivo
    } else if (moneyRecebido === aPagar) {
        return `Suas compras deram R$ ${aPagar.toFixed(2)}. <br>Não tem troco!`
    }

}

function criaElemento () {
    const p = document.createElement('p')
    section.insertAdjacentElement('beforeend', p)
    p.setAttribute('id', 'res')
}

function res () {
    criaElemento()
    const res = document.querySelector('#res')
    res.innerHTML = troco()
}