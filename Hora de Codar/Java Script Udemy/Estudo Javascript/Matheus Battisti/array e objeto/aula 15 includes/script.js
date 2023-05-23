// forEach

/*
forEach - itera por cada elemento do array
*/

let dados = ["mario", 'joao', 'maria', 'jorge']

dados.forEach(dado => console.log(dado))

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numeros.forEach(numero => {
    if (numero % 2 == 0) {
        console.log(numero + ' numero e par')
    } 
})