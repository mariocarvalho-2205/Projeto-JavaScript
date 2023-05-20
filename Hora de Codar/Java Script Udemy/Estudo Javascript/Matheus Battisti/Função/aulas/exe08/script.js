// argumentos opcionais

function pontencia(base, exp = 2) {
    return Math.pow(base, exp)
}

console.log(pontencia(2))
console.log(pontencia(2, 2))

console.log(pontencia(2, 3))
