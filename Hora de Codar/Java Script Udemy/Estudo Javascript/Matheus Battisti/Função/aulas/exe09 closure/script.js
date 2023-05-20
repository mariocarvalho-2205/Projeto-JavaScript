// closure

function lembrarSoma(x) {
    return function (y) {
        return x + y
    }
}

let soma1 = lembrarSoma(2)

console.log(soma1(3))

function contador (i) {
    let cont = i;
    let somarcontador = function() {
        console.log(cont)
        cont++
    }
    return somarcontador;
}

let meucontador = contador(5)

meucontador()
meucontador()
meucontador()
meucontador()