const express = require('express')
const app = express();
const db = require('./db/connection')

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O express esta rodando na porta ${PORT}`)
})

// db connection
db.authenticate()
.then(() => {
    console.log('Connectou ao banco com sucesso')
})
.catch (err => {
    console.log('Ocorreu um erro ao conectar', err)
})



// routes
app.get('/', (req, res) => {
    res.send('está funcionando 4')
})