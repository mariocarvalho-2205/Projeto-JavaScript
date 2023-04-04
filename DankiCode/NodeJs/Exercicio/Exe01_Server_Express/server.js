const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;
var bodyParser = require('body-parser');


app.use(bodyParser.json());  // aqui dara suporte a json-encoded bodies
app.use(bodyParser.urlencoded({  // aqui dara suporte total e integração com formulario a url-encoded bodies
    extended: true
}))

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// o caminho precisa ser o mesmo no html ('/public)
app.use('/public', express.static(path.join(__dirname, 'public'))); 
app.set('views', path.join(__dirname, './views'));


var tarefas = ['mudando a cor', 'pintando o set', 'fazendo mercado']

// lendo e salvando dados
app.post('/', (req, res) => {
    console.log(req.body.tarefa)
    console.log(req.body.acao)
    tarefas.push(req.body.tarefa)

    res.render('index', { listaTarefas: tarefas })

})


// carregando 
app.get('/', (req, res) => {

    // res.send('carregado mario')  // carregando mario

    res.render('index', {listaTarefas: tarefas}) // res.render('nome do arquivo html', {objeto a ser passado})


})

// rota para deletar itens no html
app.get('/deletar/:id', (req, res) => {
    tarefas = tarefas.filter((val, ind) => {
        if(ind != req.params.id) {
            return val;
        }
    })

    res.render('index', {listaTarefas: tarefas})
})


// Servidor
app.listen(port, () => {
    console.log('Server Rodando');
});

