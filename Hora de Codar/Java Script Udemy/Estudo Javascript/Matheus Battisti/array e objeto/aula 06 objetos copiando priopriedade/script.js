// copiando prorpiedades

let objA = {
    prop1: 'teste1',
    prop2: 'teste2'
}

let objB = {
    prop3: 'teste3'
}

let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let opcionais = {
    tetoSolar: true,
    som: true
}
// let objC = 

console.log(objA)
console.log(objB)
Object.assign(objA, objB)
console.log(objA)

console.log(carro)
console.log(opcionais)

// let carroCompleto = Object.assign(carro, opcionais)
Object.assign(carro, opcionais)

console.log(carro)
// console.log(carroCompleto)
