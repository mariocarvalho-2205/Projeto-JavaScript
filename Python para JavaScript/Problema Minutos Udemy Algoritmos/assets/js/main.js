const secondos = 60
const minutos = 60
const hora = 3600
var horas
let duracao = 140811

let horaTime = Math.trunc(duracao / hora)
let resto = duracao % hora
let minResto = Math.trunc(resto / 60)
let segResto = resto % 60

console.log()
console.log(resto)
if (horaTime < 10) {
    horaTime = `0` + horaTime
}
if (minResto < 10) {
    minResto = `0` + minResto
}
if (segResto < 10) {
    segResto = '0' + segResto
}

horas = `${horaTime} : ${minResto} : ${ segResto}`
console.log(horas)