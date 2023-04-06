const express = require('express');
const app = express();
const ejs = require('ejs')
const port = process.env.PORT || 3000;
const path = require('path');



app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views/pages/')

let pessoas = [
    {
        nome: 'Mário',
        idade: 47
    },
    {
        nome: 'Adilma',
        idade: 48
    },
    {
        nome: 'Joao',
        idade: 50
    },
]

app.get('/', (req, res) => {
    res.render('index', {pessoas: pessoas})

})

app.get('/teste', function (req, res) {
    res.send('Entendendo agora!!!')
    
})


app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
})