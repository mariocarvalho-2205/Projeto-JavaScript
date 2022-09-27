const num1 = 50
const num2 = 8
// array

var aleatorio = [10, 2, 5, 8]
var aleatorio2 = new Array(5, 8, 6, 3)

console.log(typeof aleatorio)
console.log(typeof aleatorio2)

let seta = function () {
    let soma = 5 + 5
    console.log('função com variavel', soma)

    const nov = () => {
        console.log('função anonima')
    }
    nov()
}


function soma () {
    let som = num1 + num2
    console.log(`Função com a soma: ${som}`)
}

function sub () {
    let sb = num1 - num2
    console.log(`Função com a subtração ${sb}`)
}
function mul () {
    let mt = num1 * num2
    console.log(mt)
}

function div() {
    let dv = num1 / num2
    console.log(dv.toFixed(4))
}

function calculo () {
    soma()
    sub()
    mul()
    div()
    rand()
    seta()

}

function rand () {
    let rd = Math.floor(Math.random() * 10)
    let rd2 = (Math.random() * (5 - 1) + 1).toFixed(0)
    console.log(`Valor randomico 1 ${rd}`, rd2)
    return
}

//==-=-=-=-=- usando função chamando função =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function vali () {

    //console.log(somada)
    console.log('função vali retornando variavel com função soma' )
    soma()
}

function tudo () {
    let text = 'nova função que chama tudo'
    calculo()
    vali()
    console.log(text)

}
tudo()
// funções com parametros
function param (a, b, c) {
    const som = a + b * c
    return console.log(`função com parametros sem return ${som}`)


}
param(5, 2, 6)

function ret () {
    return `função com return ter que usar console.log para imprimir ${5 + 90}`
}

function ret2 () {
    console.log(`função retonando outra /// ${ret()}`)
    return `função retonando outra /// ${ret()} mais no return ` + 5
}

console.log(ret2())
ret2()

function variav () {
    let somaVaria2 = 150 + 80
    console.log(somaVaria2)
    return 50 + 75
}
console.log(variav())
variav()
let somaVaria = variav()
console.log(somaVaria)

function media () {
    var tamArray = aleatorio.length
    var tot = 0
    for ( let i = 0; i < tamArray; i++) {
        tot += aleatorio[i]
    }

    return Math.round(tot / tamArray)
}

function media2 () {
    let tamArray = aleatorio2.length
    let tot2 = 0
    for (let i = 0; i < tamArray; i++ ) {
        tot2 += aleatorio2[i]
    }
    var med2 = tot2 / tamArray
    return med2
}
console.log(media())
console.log(media2())

function media3 (nums) {
    let tArray = nums.length
    let tot3 = 0
    for (let i = 0; i < tArray; i++) {
        tot3 += nums[i]
    }
    let md = tot3 / tArray
    console.log(md)
}
media3(aleatorio)

const name = ['mario', 'joao', 'maria']
const idade = [48, 25, 63]

const p = document.querySelector('p')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const btn = document.querySelector('#btn')

let sty = function () {
    p.style.color = 'blue'
}

let sty2 = () => {
    h2.style.backgroundColor = 'gray'
}

function printData(n, i) {
    const teste = media2()
    p.innerHTML += teste
    p.innerHTML += `name: ${n} <br/> idade:  ${i}<br />`
    p.style.fontSize = "50px"

    console.log('idade: ' + i,)
}

function printSoma (n1, n2) {
    h2.innerHTML = n1 + n2
}

function printTudo () {
    sty()
    sty2()
    printSoma(5, 9)
    printData(name[2], idade[0])
    printData(name[1], idade[1])
    printData(name[2], idade[2])
}


btn.addEventListener('click', () => {
    printTudo()
})

