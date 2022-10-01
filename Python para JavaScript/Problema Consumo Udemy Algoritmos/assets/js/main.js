const form = document.querySelector('#form')
const dist = document.querySelector('#distancia')
const comb = document.querySelector('#comb')


form.addEventListener('submit', (e) => {
  e.preventDefault()
  res()
})

function consumo () {
  let d = Number(dist.value)
  let c = Number(comb.value)
  let consumo = d / c
  return consumo.toFixed(3)
}

function res () {
  const res = document.querySelector('#res')
  res.innerHTML += `<br>Consumo Medio ${consumo()} quilometros com litro`
}