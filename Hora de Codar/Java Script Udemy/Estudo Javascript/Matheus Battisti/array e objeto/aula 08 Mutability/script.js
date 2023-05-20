// mutabilidade


let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let opcionais = {
    tetoSolar: true,
    som: true
}

let carro3 = {
    vidro: 'verde',
}

console.log(carro)
let carro2 = carro

carro.portas = 4

console.log(carro)

console.log(carro2)

console.log(carro3)