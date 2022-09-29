const form = document.querySelector('#form')
const inputA = document.querySelector('#input-a')
const inputB = document.querySelector('#input-b')
const inputC = document.querySelector('#input-c')

let inA
let inB
let inC

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inA = Number(inputA.value)
    inB = Number(inputB.value)
    inC = Number(inputC.value)
    resultado()
})

function quadrado () {
    let areaQuadrado = inA * inA
    return areaQuadrado.toFixed(4)
}
function triangulo () {
    let areaTriangulo = (inA * inB) / 2
    return areaTriangulo.toFixed(4)
}
function trapezio () {
    let areaTrapezio = ((inA + inB) * inC) / 2
    return areaTrapezio.toFixed(4)
}
function resultado () {
    const res = document.querySelector('#res')
    let aQ = quadrado()
    let aT = triangulo()
    let aTr = trapezio()
    res.innerHTML = `Area do Quadrado: ${aQ}<br> Area do Triangulo ${aT}<br> Area do Trapezio ${aTr}<br>`
}