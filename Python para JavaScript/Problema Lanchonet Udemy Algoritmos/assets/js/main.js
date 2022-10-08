const form = document.querySelector('#form')
const codigo = document.querySelector('#codigo')
const qtd = document.querySelector('#qtd')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    //if (codigoProduto() > 0 || codigoProduto() < 6) res()
    res()
})

function codigoProduto() {
    let cod = Number(codigo.value)
    switch (cod) {
        case 1:
            return 5.00
        case 2:
            return 3.50
        case 3:
            return 4.80
        case 4:
            return 8.90
        case 5:
            return 7.32
        default:
            return alert(`Digite um codigo valido!!`)
    }
}

function totProd () {
    let vrProd = codigoProduto()
    let qtdProd = Number(qtd.value)
    let totP = vrProd * qtdProd
    return totP.toFixed(2)
}

function criaEl () {
    const section = document.querySelector('.container')
    const p = document.createElement('p')
    section.appendChild(p)
    section.insertAdjacentElement('beforeend', p)
    p.setAttribute('id', 'res')
}

function res () {
    criaEl()
    const res = document.querySelector('#res')
    return res.innerHTML = `Total a pagar <b>R$ ${totProd()}</b>`

}