// importação do express para servidor
const express = require('express')
const app = express()
const port = 3000

// importação do sequelize para rotas
const Sequelize = require('sequelize')
const sequelize = new Sequelize("sistemadecadastro", "root", "", {
    dialect: "mysql",
    host: "localhost"
})
// testando conexao com BD MySQL
sequelize.authenticate().then(() => {
    console.log("Conectado ao MySQL")
})
.catch((err) => {
    console.log(`Apresentou o seguinte erro ao conectar ${err}`)
})

// importação e configuração do handlebars
// criar pasta views no diretorio principal
// criar pasta layouts dentro da pasta views
// criar arquivo principal main.handlebars dentro da pasta layouts
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


// Rotas

app.get('/', (req, res) => {
    res.send('Rota principal OK')
})

// rota do formulario
// GET - envia os dados na URL
    // OBS: Só é possivel acessar rotas do tipo GET pela URL
// POST - envia para o banco de dados sem passar pela URL
    // No formulario é preciso passar a rota para onde serão enviados os dados no atributo actions  
app.get('/cad', (req, res) => {
    res.render('formulario')
})


app.post('/cadpost', (req, res) => {
    res.send('formulario recebido')
})

// Servidor
app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})