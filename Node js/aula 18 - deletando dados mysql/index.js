const express = require('express')
const app = express()
const port = 3300

// importação handlebars, body-parser
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')




// Rota principal
app.get('/', (req, res) => {
    res.send(`Aula 18 - Deletando dados MySQL`)
})





// Server
app.listen(port, () => {
    console.log(`Aula 18 rodando na porta ${port}`)
})