const num1 = 50
const num2 = 8
let aleatorio
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
}

function rand () {
    let rd = Math.floor(Math.random() * 10)
    let rd2 = (Math.random() * (5 - 1) + 1).toFixed(0)
    console.log(`Valor randomico 1 ${rd}`, rd2)
    return rd2
}
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


