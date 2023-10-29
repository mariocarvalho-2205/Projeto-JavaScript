const { writeFile } = require('fs')

writeFile('arquivo.txt', 'incluindo texto pelo write', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('escreveu')
    }
})