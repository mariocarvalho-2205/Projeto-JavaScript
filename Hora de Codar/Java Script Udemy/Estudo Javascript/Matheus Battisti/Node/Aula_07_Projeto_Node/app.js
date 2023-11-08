const express = require('express')
const app = express()
const port = 3300
const db = require('./models/db')

// Terminar de criar o modelo antes de tudo

// servidor 
app.listen(port, () => {
    console.log(`Hora de Codar esta na porta ${port}`)
})