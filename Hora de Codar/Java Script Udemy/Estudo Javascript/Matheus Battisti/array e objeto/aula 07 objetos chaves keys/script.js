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

console.log(Object.keys(carro), Object.values(carro))