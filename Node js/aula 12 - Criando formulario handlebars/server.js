const express = require('express')
const app = express()
const porta = 3000
const handlebars = require('express-handlebars')

// conexao mysql
const Sequelize = require('sequelize')
const sequelize = new Sequelize("sistemadecadastro", "root", "", {
    dialect: "mysql",
    host: "localhost"
})
// template engine
app.engine('handlebars', handlebars.engine({defaultLayout: "main"}))
app.set('view engine', 'handlebars')

app.get("/cad", (req, res) => {
    res.send("Rota de Cadastro")
})

// testando conexao mysql
sequelize.authenticate()
.then(() => {
    console.log('conectou ao mysql')
})
.catch((err) => {
    console.log(`Erro ${err}`)
})



// conexao servidor
app.listen(porta, () => {
    console.log(`conectado a porta ${porta} form handlebars
    `)
})