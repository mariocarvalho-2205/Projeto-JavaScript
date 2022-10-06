const form = document.querySelector('.form')
const minut = document.querySelector('#input')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    result()
})

function contaMinuto () {
    let min = Number(minut.value);
    let maior100 = 0;
    if (min > 100) {
        maior100 = min - 100;
        return maior100
    }

}

function conta () {
    let min = contaMinuto()
    let valorConta = 50
    if (min > 0) {
        return valorConta + min * 2
    }
    return valorConta
}

function result () {
    let valorConta = conta()

    res.innerHTML = `Você utilizou ${Number(minut.value)} minutos.<br>O valor de sua conta é R$ ${valorConta.toFixed(2)}`
}