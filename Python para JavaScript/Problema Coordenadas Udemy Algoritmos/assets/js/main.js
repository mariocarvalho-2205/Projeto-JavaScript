const form = document.querySelector('form')
const valueX = document.getElementById('coord-x')
const valueY = document.getElementById('coord-y')
const res = document.querySelector('#res')
const btn = document.querySelector('#btn')
const btnClose = document.querySelector('#btn-closed')
const modal = document.querySelector('dialog')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let valX = Number(valueX.value)
    let valY = Number(valueY.value)
    resultado(coord(valX, valY))
})

btnClose.addEventListener('click', () => {
    modal.close()
})

function coord (val1, val2) {
    if (val1 === 0 && val2 === 0) return 'Origem'
    if (val1 > 0 && val2 > 0) return 'Q1'
    if (val1 > 0 && val2 < 0) return 'Q2'
    if (val1 < 0 && val2 < 0) return 'Q3'
    if (val1 < 0 && val2 > 0) return 'Q4'
    if (val1 > 0 && val2 === 0) return 'Eixo X'
    if (val1 === 0 && val2 > 0) return 'Eixo Y'
}

function resultado (text) {
    let r = res.innerHTML = `As coordenadas são ${text}`
    modal.showModal(r)
    
}