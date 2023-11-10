const express = require('express')
const app = express()
const port = 3030

const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const db = require('./models/db')
const Cliente = require('./models/Cliente')

// handlebars
app.engine('handlebars', handlebars.engine({default: "main"}))
app.set("view engine", "handlebars")

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res)  => {
  // verificar porque so esta aparecendo desse jeito
  // [object SequelizeInstance:clientes],[object SequelizeInstance:clientes]
  Cliente.findAll().then(function (clientes) {
    res.render("home", { nome: clientes });
  });
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.get('/sucesso', (req, res) => {
    res.render('sucesso')
})

app.post('/cadastrado', (req, res) => {
    Cliente.create({
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      idade: req.body.idade
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.send(`Deu o seguinte erro no cadastro${err}`)
    })
})

app.listen(port, () => {
    console.log(`Servidor aula 17 Rodando na porta ${port}`)
})