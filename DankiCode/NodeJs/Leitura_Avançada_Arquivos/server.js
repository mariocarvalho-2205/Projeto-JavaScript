const fs = require('fs');
const read = require('readline');


// fs.appendFile('server.txt', 'mario/sergio/carvalho/tenorio', function(err) {
//     if(err) throw err
//     console.log('arquivo criado')
// })


fs.readFile('server.txt', function (err, data) {
    
    let str = data.toString()

    let newStr = str.split('/')
    let newStr2 = str.substring(1, 3)
    console.log(newStr, newStr2, `\narquivo modificado`)
    
})

