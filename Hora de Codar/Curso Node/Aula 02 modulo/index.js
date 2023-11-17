// Utilizando Modulo
const fs = require('fs')  // file system

// sintaxe - fs.readFile('nome do arquivo', 'formato)
fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data)
})