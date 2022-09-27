const price = document.querySelector('#price')
const qtd = document.querySelector('#qtd')
const money = document.querySelector('#money')
const form = document.querySelector('.form')


form.addEventListener('submit', function (e) {
  e.preventDefault() 
  result()
})

function totProdutos () {
  let priceValue = Number(price.value)
  let qtdValue = Number(qtd.value)
  let tProdutos = priceValue * qtdValue
  return tProdutos
}

function troco () {
  let valorPago = Number(money.value)
  let valorProdutos = totProdutos()
  let troco = valorPago - valorProdutos
  let falta = valorPago - valorProdutos
  if (valorPago > valorProdutos) {
    return troco
  } else {
    return falta
  } 
}

function result () {
  const res = document.querySelector('#res')
  let tot = totProdutos()
  let trocoMoney = troco()
  let valorPago = Number(money.value)
  res.innerHTML = ''
  if (trocoMoney > 0) {
    res.innerHTML += `Suas compras deram R$ ${tot.toFixed(2)}<br />`
    res.innerHTML += `Seu troco é R$ ${trocoMoney.toFixed(2)}`
  } else {
    res.innerHTML += `Suas compras deram R$ ${tot.toFixed(2)}<br />`
    res.innerHTML += `Você pagou R$ ${valorPago.toFixed(2)}<br />`
    res.innerHTML += `Ainda falta R$ ${trocoMoney.toFixed(2)}`
  } 
  return
}