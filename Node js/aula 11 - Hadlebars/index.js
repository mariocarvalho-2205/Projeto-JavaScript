const express = require('express')
const app = express()
const porta = 3000
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '', {
    dialect: "mysql",
    host: "localhost",

})

// handlebars = é um template engine - consegue usar estruras de repetição e condicionais
// dentro do html

// configurando o handlebars
    // template engine
    app.engine('handlebars', handlebars({defaultLayout: "main"}))
    app.set('view engine', 'handlebars')



app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})


// conectado ao servidor
app.listen(porta, () => {
    console.log(`Conectado a porta ${porta}`)
})


// conectado ao banco de dados
sequelize.authenticate()
.then(() => {
    console.log('Conectou Sequelize ao MySQL Handlebars')
})
.catch((err) => {
    console.log(`Apresentou o seguinte Erro ${err}` )
})
