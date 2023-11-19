// Utilizando Modulo
const fs = require('fs')  // file system utilizado para ler e escrever arquivos

// sintaxe - fs.readFile('nome do arquivo', 'formato)
fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data)
})