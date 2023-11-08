const express = require('express')
const app = express()
const port = 3300
const db = require("./models/db")
const handlebars = require('express-handlebars')
// importando o modelo
const Cliente = require('./models/Cliente')


app.engine('handlebars', handlebars.engine({default: 'main'}))
app.set('view engine', 'handlebars')

// Rotas
app.get('/', (req, res) => {
    res.send('Pagina Principal aula 15')
})

app.get('/cadastro_clientes', (req, res) => {
    res.render('formulario')
})



// server
app.listen(port, () => {
    console.log(`Logado na porta ${port}`)
})