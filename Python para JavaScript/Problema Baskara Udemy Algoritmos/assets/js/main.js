const num1 = document.querySelector('#input-1')
const num2 = document.querySelector('#input-2')
const num3 = document.querySelector('#input-3')
const form = document.querySelector('#form')
const res = document.querySelector('#res')

let a
let b
let c


form.addEventListener('submit', (e) => {
    e.preventDefault()
    a = Number(num1.value)
    b = Number(num2.value)
    c = Number(num3.value)
    res.innerHTML = bhaskara(a, b, c)
    
    console.log(a, b, c)
})


function bhaskara (a, b, c) {    
    
    let x1
    let x2
    let delta = Math.pow(b, 2) - 4 * a * c
    if ( a === 0 || delta < 0) {
        return 'Essa equação não possui raizes reais'
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return `x1 = ${x1.toFixed(4)}<br> x2 = ${x2.toFixed(4)}` 
    }   
}
/*
function criaElemento () {
    var container = document.querySelector('.container')
    var el = document.createElement('p')
    el.appendChild(document.createTextNode('Resultado'))
    return el
}*/
