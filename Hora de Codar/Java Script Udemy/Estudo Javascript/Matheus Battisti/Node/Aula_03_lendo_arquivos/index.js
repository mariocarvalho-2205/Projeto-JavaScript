let { readFile } = require('fs');

readFile('arquivo.txt', 'utf-8', (error, text) => {
    if (error) {
        throw error;

    } else {
        console.log(text)
    }
})