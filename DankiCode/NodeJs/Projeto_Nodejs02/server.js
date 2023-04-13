// 1º -
const express = require('express');
const ejs = require('ejs');
const app = express();
var mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const path = require('path');
var bodyParser = require('body-parser');


const Posts = require('./Posts.js')

mongoose.connect('mongodb+srv://root:Msct.2205@cluster0.we4or8k.mongodb.net/noticias?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(function() {
    console.log('conectado com sucesso')
}).catch(function(err) {
    console.log(err.message)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// 4º
app.engine('html', ejs.renderFile);
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'html');  // aqui o html é o formato da pagina, pode ser html, ejs ou hdl
app.set('views', path.join(__dirname, '/pages'));

// 3º
app.get('/', (req, res) => {
    //console.log(req.query)  // query vai mostar a busca na url

    if(req.query.busca == null) {
        Posts.find({}).sort({'_id': -1}).then(function(err, posts) {
            //console.log(posts)
            posts = posts.map(function(val) {
                return {
                    titulo: val.titulo,
                    conteudo: val.conteudo,
                    imagem: val.imagem,
                    slug: val.slug,
                    categoria: val.categoria
                }
            });
            res.render('home', {posts:posts});
        })
    } else {
        res.render('busca', {})
        // res.send(`Voce buscou por ${req.query.busca}`)
    }

    // res.send('home')
})

app.get('/:slug', (req, res) => {
    res.render('single', {})
    // res.send(req.params.slug)
})




// 2º 
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}.`)
})