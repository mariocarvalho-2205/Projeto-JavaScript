const form = document.getElementById('form')
const glicose = document.querySelector('#glicose')
const container = document.querySelector('.container')



function medGlicose () {
    let glic = Number(glicose.value);
    if (glic <= 100) {
        return `Você está com ${glic} mg/dl de açucar. Está normal!!`;
    } else if (glic < 140) {
        return `Você está com ${glic} mg/dl de açucar. Está elevado!`;
    } else {
        return `Você está com ${glic} mg/dl de açucar. Está com Diabetes!!`;
    }
}

function criaEl () {
    let p = document.createElement('p')
    container.insertAdjacentElement('beforebegin', p)
    container.appendChild(p)
    p.setAttribute('id', 'res')
}

function res () {
    criaEl()
    let res = document.querySelector('#res')
    res.textContent = medGlicose()

}

form.addEventListener('click', function(e) {
    e.preventDefault()
    res()
})

