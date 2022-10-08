let distancias = []
const form = document.querySelector('#form')
let distancia = document.querySelectorAll('.distancia')
const section = document.querySelector('.container')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    addArray()
    console.log(distancias)
    maxDistancia()
    res()
})

function addArray () {
    distancias = []
    for (d of distancia) {
        distancias.push(Number(d.value))
    }
}

function maxDistancia () {
    return Math.max(...distancias)
}

function criaRes () {
    let p = document.createElement('p')
    section.appendChild(p)
    section.insertAdjacentElement('beforeend', p)
    p.setAttribute('id', 'res')
}

function res () {
    criaRes()
    let res = document.querySelector('#res')
    let maxDis = maxDistancia().toFixed(2)
    if (maxDis == 0) {
        res.textContent = `Não tivemos nenhum dardo lançado!!!`
        res.style.color = 'red'
    } else {
        res.innerHTML = `A maior distancia foi <b>${maxDis}</b> metros.`
        res.style.color = 'green'
    }
    return
}