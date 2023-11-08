const express = require('express')
const app = express()
const port = 3300

// Banco de Dados 
const Sequelize = require('sequelize')
const sequelize = new Sequelize("sistemadecadastro", "root", "", {
    dialect: "mysql",
    host: "localhost",
})

sequelize.authenticate()
.then(() => {
    console.log(`Banco de Dados conectado ao MySQL`)
})
.catch((err) => {
    console.log(`O sequinte erro foi detectado ${err}`)
})

// form importação e config do hanclebars 
// Template Engine
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars.engine({defaultLayout: "main"}))
app.set('view engine', 'handlebars')

// Rotas GET
app.get('/', (req, res) => {
    res.send("Pagina principal")
})

app.get('/cad', (req, res) => {
    res.render("formulario")
})

// Body Parser
const bodyParser = require('body-parser')
// Configuração do Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rota POST de cadastro
app.post('/cadastrado', (req, res) => {

    res.send(`"Cadastro Efetuado" <br>
    Nome: ${req.body.nome} <br>
    Idade: ${req.body.idade}`)
})



// Servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})