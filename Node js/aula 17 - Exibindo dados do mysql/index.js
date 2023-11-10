const express = require('express')
const app = express()
const port = 3030

const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')

app.listen(port, () => {
    console.log(`Servidor aula 17 Rodando na porta ${port}`)
})