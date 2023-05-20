// parametros

function multiplicar(a, b, c) {
    return a* b * c
}

console.log(multiplicar(5, 3, 5))

const multi = multiplicar(10, 5, 5)

console.log(multi)

function dirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log('pode dirigir')
    } else {
        console.log('não pode dirigir')
    }
}

dirigir(25, true)
dirigir(18, false)
dirigir(17, 0)
dirigir(44, 1)
dirigir(17, 1)