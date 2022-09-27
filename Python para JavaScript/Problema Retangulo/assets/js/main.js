const base = document.querySelector('#base')
const altura = document.querySelector('#alt')
const res = document.querySelector('#textRes')
const button = document.querySelector('#btn')
const bs = 4
const al = 5

console.log(bs)
console.log(al)

button.addEventListener('click', (e) => {
  e.preventDefault()
  calculo()
  
})
/*const base = 10.3
const altura = 13.1*/

function area (n1, n2) {
  const areaTerreno = n1 * n2
  console.log('area ' + areaTerreno.toFixed(4))
}

function perim () {
  const perimetro = 2 * (bs + al)
  console.log('perimetro ' + perimetro.toFixed(4))
}

function diag () {
  const diagonal = Math.sqrt(Math.pow(bs, 2) + Math.pow(al, 2))
  console.log('diagonal ' + diagonal.toFixed(4))

}
function calculo () {
  area(bs, al)
  perim()
  diag()
}
