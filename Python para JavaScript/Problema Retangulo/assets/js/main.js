const base = document.getElementById('base')
const altura = document.querySelector('#alt')
const res = document.querySelector('#textRes')
const button = document.querySelector('#btn')






button.addEventListener('click', (e) => {
  e.preventDefault()
  let bs = Number(base.value);
  let al = Number(altura.value);
  res.innerHTML = ''
  
  calculo(bs, al);
})
/*const base = 10.3
const altura = 13.1*/

function area (n1, n2) {
  const areaTerreno = n1 * n2
  res.innerHTML += `Area = ${areaTerreno.toFixed(4)}<br />`
}

function perim (n1, n2) {
  const perimetro = 2 * (n1 + n2)
  res.innerHTML += `Perimetro = ${perimetro.toFixed(4)}<br />`;
}

function diag (n1, n2) {
  const diagonal = Math.sqrt(Math.pow(n1, 2) + Math.pow(n2, 2))
  res.innerHTML += `Diagonal = ${diagonal.toFixed(4)}<br />`;

}
function calculo (n1, n2) {
  area(n1, n2)
  perim(n1, n2)
  diag(n1, n2)
}
