const express    = require('express')
const handlebars = require('express-handlebars')
const app        = express()
const path       = require('path')
const port       = 3300
const db         = require('./db/db')
const bodyParser = require('body-parser')




// body-parser config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// handlebars config
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', handlebars.engine({default: 'main'}))
app.set('view engine', 'handlebars')

// static folder - configura a pasta central do css e imagens do projeto
// dessa forma no handlebars, não precisa mais passar a pasta public
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.get('/', (req, res) => {
    res.render('index')
})

// Jobs routes
app.use('/jobs', require('./routers/jobs'))



// servidor 
app.listen(port, () => {
    console.log(`Hora de Codar esta na porta ${port}`)
})