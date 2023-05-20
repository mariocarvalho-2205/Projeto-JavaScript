// escopo

let y = 5

const multi = function (n) {
    let y = n * 2
    console.log(y)
    if(y == 10){
        let y = 55
        console.log(y)

    }
    console.log(y)
    return y
} 

console.log(y)
multi(5)
console.log(multi(3))

let a = 10

function multiplicar (x, y) {
    let a = x * y
    console.log(`a antes do if ${a}`)
    if (a > 10) {
        let a = 0
        a++
        console.log(`a dentro do if ${a}`)
    }
    a++
    console.log(`a depois do if ${a}`)
}

console.log(`a ${a} fora da funcção`)

multiplicar(3, 5)

