const express = require('express')
const app = express()
const port = 3300

// importação Sequelize
const db = require('./models/db')
// importação do modelo
const Cliente = require('./models/Cliente')

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
    res.render("home")
})
// Rota de cadastro
app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

// Rota post
app.post('/cadastrado', (req, res) => {
    Cliente.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        idade: req.body.idade,
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.send(`Aula 18 deu o erro ${err}`)
    })
})

// Rota para Visualizar
app.get('/visual', (req, res) => {
    Cliente.findAll({order: [
        ['id', 'DESC']
    ]})
    .then((clientes) => {
        res.render('visual', {clientes})
    })
})





// Server
app.listen(port, () => {
    console.log(`Aula 18 rodando na porta ${port}`)
})