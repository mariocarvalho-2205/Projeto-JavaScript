const express = require('express')
const app = express()
const port = 3300
const db = require('./models/db')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Cliente = require('./models/Cliente')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('handlebars', handlebars.engine({default: "main"}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')  // pagina principal
    // res.send(`Rota Principal da Aula 16 OK`)
})

app.get("/cadastro", (req, res) => {
    res.render('formulario')
})

app.post('/cadastrado', (req,res) => {
    Cliente.create({
        nome: req.body.nome, 
        cpf: req.body.cpf, 
        email: req.body.email, 
        idade: req.body.idade 
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.send(`Erro no cadastro ${err}`)
    })

    // res.send(`
    // Nome: ${req.body.nome}<br> 
    // CPF: ${req.body.cpf}<br> 
    // Email: ${req.body.email}<br> 
    // Idade: ${req.body.idade}
    // `)
})


// servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})