
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// seta a engine para renderização do tipo html e vai utilizar o ejs para renderizar
app.engine('html', require('ejs').renderFile);

// seta a view engine para ser html
app.set('view engine', 'html');

// vai dizer onde está o diretorio estatico onde fica arquivos, fotos, css na pasta public
app.use('/public', express.static(path.join(__dirname, 'public')));

// vai dizer onde está a pasta 
app.set('views', path.join(__dirname, '/views'));


var tarefas = ['arrumar', 'comprar', 'comer'];

// criação de rota
// rota pagina principal

app.get('/', (req, res) => {
    //res.send('Carregado a Pagina Inicial' { passando objeto atraves do ejs})
    res.render('index', {tarefasList: tarefas});
})

// rota para deletar
app.get('/deletar/:id', (req, res) => {
    
    tarefas = tarefas.filter((val, index) => {
        if(index != req.params.id) {
            return val;
        }
        
    })
    res.render('index', { tarefasList: tarefas });
    
})






app.listen(port, () => {
    console.log('Server Express Rodando')
})