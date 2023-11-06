const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, res) => {
    
    // renderizando html, utilizaos o sendFile(__dirname)
    // __dirname - retorna o diretorio raiz completo 
    // e adiciona o complemento do diretorio padrão da aplicação
    res.sendFile(`${__dirname}/html/index.html`)
})

app.get('/sobre', (req, res) => {
    res.sendFile(`${__dirname}/html/sobre.html`)
})



app.listen(porta, () => {
    console.log(`Porta ${porta}, |Lendo HTML`)
})