/* Promisses */
/*
const promessa = new Promise((resolve, reject) => {
    console.log('inicio')
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})

console.log('caminhando')
promessa.then((value) => {
    console.log(value)
    return value + 10
})
.then((value) => {
    console.log(value)
})
.catch ((erro) => {
    console.log(erro)
})
.finally (() => {
    console.log('finalizou')
})
*/
// Lendo arquivo externo

let fs = require('fs')
let path = require('path')
const { fileURLToPath } = require('url')
const filePath = path.resolve(__dirname, 'dados.csv')

let promessaLeituraArquivo = fs.promises.readFile(filePath)


promessaLeituraArquivo
.then((arq) => arq.toString('utf-8'))
.then((text) => text.split('\n').slice(1))
.then((linhas) => linhas.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
        nome,
        feito: feito.trim() === 'true'
    }
}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch ((erro) => console.log('deu ruim', erro))
