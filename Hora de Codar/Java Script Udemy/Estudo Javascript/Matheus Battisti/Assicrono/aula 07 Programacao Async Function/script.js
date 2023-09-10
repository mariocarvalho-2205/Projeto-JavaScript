/*

// Async functions

* Podemos criar funções assincronas utilizando a palavra reservada
* async, retornando uma Promise

* Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é
* rejeitada


*/
// Ex:

async function somar (a, b) {
    return a + b
}

somar(3, 3 ).then(function(value) {
    console.log(value)
})

console.log(somar(4, 4))