/*

// Rejeitando Promises

* Alem do resolve, existe o metodo reject
* É quando determinada lógica não satisfaz nosso programa, então
* podemos ir para outra com o reject, em vez do resolve
* Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then.
Ex:

function verificarAlgo (num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
                resolve(console.log(`O numero é ${num}`))
        } else {
                reject(new Error('Falhou))
        }
    })
}
verificarAlgo(3)
verificarAlgo(2)


*/
function verificarAlgo (num, num2) {
    let soma = num + num2
    return new Promise((resolve, reject) => {
        if (soma == 3) {
                resolve(console.log(`O numero é ${soma}`))
        } else {
                reject(new Error('Falhou'))
        }
    })
}
verificarAlgo(1, 4)
verificarAlgo(1, 2)


