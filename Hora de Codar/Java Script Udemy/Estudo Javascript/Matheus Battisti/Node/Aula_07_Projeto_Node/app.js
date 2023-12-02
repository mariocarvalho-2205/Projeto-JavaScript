const express    = require('express')
const handlebars = require('express-handlebars')
const app        = express()
const path       = require('path')
const port       = 3300
const db         = require('./db/db')
const bodyParser = require('body-parser')
const Job        = require('./models/Job')

// importar o sequelize e o modulo op para buscas mais detalhadas
const Sequelize  = require('sequelize')
const Op         = Sequelize.Op




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
// requisição quando vem da rota get, ela vem pelo query
    let search = req.query.job  // recebe os dados da busca
    let query = "%"+search+"%"

    if (!search) {
        
        Job.findAll({
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {jobs})
        }) 
        .catch((err) => console.log(err))
    } else {
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index', {jobs, search})
        })
        .catch((err) => console.log(err))
    }
})

// Jobs routes config
app.use('/jobs', require('./routers/jobs'))


// servidor 
app.listen(port, () => {
    console.log(`Hora de Codar esta na porta ${port}`)
})