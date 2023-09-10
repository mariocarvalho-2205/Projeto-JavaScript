/*

// Resolvendo varias Promises

* Utilizando o metodo all, conseguimos resolver varias promises de uma unica vez
* Ou seja, passamos ela por um array, e quando a ultima for resolvida, recebemos a resposta de todas

Ex:

const p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(100)
    }, 2500)
})

const p2 = Promise.resolve(5);
const p3 = new Promise(function(resolve, reject) {
    resolve(10)
})

Promise.all([p1, p2, p3]).then((value) => console.log(value))

*/

const p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(100)
    }, 2500)
})

const p2 = Promise.resolve(5);
const p3 = new Promise(function(resolve, reject) {
    resolve(10)
})

Promise.all([p1, p2, p3]).then((value) => console.log(value))
