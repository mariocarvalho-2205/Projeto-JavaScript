const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, res) => {
    res.send('rodando com nodemon')
})

app.listen(porta, () => console.log(`porta ${porta} em atividade com nodemon`))