const express    = require('express')
const app        = express()
const port       = 3300
const db         = require('./db/db')
const bodyParser = require('body-parser')

// body-parser config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {
    res.send('Está funcionando')
})

// Jobs routes
app.use('/jobs', require('./routers/jobs'))



// servidor 
app.listen(port, () => {
    console.log(`Hora de Codar esta na porta ${port}`)
})