const fs = require('fs');

// fs.appendFile('mario.txt', 'estudando arquivos', (err, data) =>{
//     if(err) throw err
//     console.log('tudo certo')
// })

fs.readFile('mario.txt', (err, data) => {
    console.log(data.toString())
})