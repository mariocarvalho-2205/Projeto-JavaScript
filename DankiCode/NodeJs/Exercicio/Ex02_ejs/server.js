const express = require('express');
const app = express();
const ejs = require('ejs')
const port = process.env.PORT || 3000;
const path = require('path');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine('html', ejs.renderFile);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views/pages/')

var pessoas = [
    {
        nome: 'Mário',
        // idade: 47
    },
    {
        nome: 'Adilma',
        // idade: 48
    },
    {
        nome: 'Joao',
        // idade: 50
    },
]

app.post('/', (req,res) => {
    console.log(req.body.pessoas)
    pessoas.push(req.body.pessoas)

    res.render('index', { pessoas: pessoas })
})


app.get('/', (req, res) => {
    res.render('index', {pessoas: pessoas})

})

app.get('/deletar/:id', (req, res) => {
    pessoas = pessoas.filter((val, ind) => {
        if(ind != req.params.id) {
            
            return val
        }
            
    })

    res.render('index', { pessoas: pessoas })
})

app.get('/teste', function (req, res) {
    res.send('Entendendo agora!!!')
    
})


app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
})