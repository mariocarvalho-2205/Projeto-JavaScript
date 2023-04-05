const express = require('express');
const app = express();
const ejs = require('ejs')
const port = process.env.PORT || 3000;
const path = require('path');



app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', {nome: 'Mário'})
})

app.get('/teste', function (req, res) {
    res.send('Entendendo agora!!!')
    
})


app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
})