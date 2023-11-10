const express = require('express')
const app = express()
const port = 3300

// importação handlebars, body-parser
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

// config handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// config body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



// Rota principal
app.get('/', (req, res) => {
    res.send(`Aula 18 - Deletando dados MySQL`)
})





// Server
app.listen(port, () => {
    console.log(`Aula 18 rodando na porta ${port}`)
})