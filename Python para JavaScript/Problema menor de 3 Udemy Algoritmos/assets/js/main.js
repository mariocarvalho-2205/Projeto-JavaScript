const form = document.querySelector('.container')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    criaElement()
    res()
})

function criaArray() {
    let arrayNum = []
    let num1 = Number(document.querySelector('#input1').value)
    let num2 = Number(document.querySelector('#input2').value)
    let num3 = Number(document.querySelector('#input3').value)
    arrayNum.push(num1, num2, num3)
    return arrayNum
}

function menDeTres () {
    let numeros = criaArray()
    let men = Math.min(...numeros)
     return men
}

function criaElement () {
    let p = document.createElement('p')
    form.insertAdjacentElement('beforeend', p)
    p.setAttribute('id', 'res')
    return p
}

function res () {
    const res = document.querySelector('#res')
    res.innerHTML = `O menor dos tres numeros digitados é ${menDeTres()}`
}