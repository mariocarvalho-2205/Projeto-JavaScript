// acessando propriedades


let carro = {
    marca: 'VW',
    portas: 4,
    eletrico: false,
    motor: 1.0
}

console.log(carro)

console.log(carro.motor.toFixed(1))

delete carro.motor

console.log(carro)

carro.tetoSolar = true;

console.log(carro)
console.log(carro.tetoSolar)



