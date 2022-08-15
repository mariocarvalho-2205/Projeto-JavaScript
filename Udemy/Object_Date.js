/*
Objeto date

const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 *1000*/
//const data = new Date(ano, mes, dia, hora, minuto, segundo, milessimos)
const data = new Date()


// para verificar o mes, usamos a mesma contagem dos indices, jan = 0 e dez = 11
//console.log(tresHoras, umDia)

//console.log(data.toString())
console.log(data.toString())
console.log('Dia', data.getDate()) // retorna o dia atual
console.log('mes', data.getMonth())  // começa do 0 --> jan = 0 e dez = 11
console.log('ano', data.getFullYear())
console.log('min', data.getMinutes()) 
console.log('seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia da semana', data.getDay())  // começa do 0 --> dom = 0 e sab = 6
console.log('em milessiomos de segundos', Date.now())

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const sec = zeroAEsquerda(data.getSeconds())
    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const date = new Date()
const dataFormatada = formataData(data)
console.log(dataFormatada)