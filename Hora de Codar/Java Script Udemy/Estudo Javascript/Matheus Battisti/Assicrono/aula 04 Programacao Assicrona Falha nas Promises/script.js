/*

// Falha nas Promises

* Uma promise pode falhar, podemos reter esse erro com um metodo chamado catch

* Com ele podemos exibir o erro no console, por exemplo, e fazer o debug no codigo



*/

let promessaErrada = Promise.resolve(new Error('Algo deu errado'))

console.log('lalala')

promessaErrada
        .then((value) => console.log(value))
        .catch(reason => console.log(`Error: ${reason}`))