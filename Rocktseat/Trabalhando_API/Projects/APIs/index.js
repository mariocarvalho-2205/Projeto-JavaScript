const express = require('express')
const app = express()
const port = 3000
const route = '/'


let author = 'Mário Carvalho'


// rodando o server
app.listen(port, () => {
    console.log('rodando server')
})


// middleware
app.use(express.json())


// criando rota  app.route
// Metodo get
app.route(route).get( (req, res) => res.send(author)) 
app.route('/sobre').get((req, res) => res.send('Sobre alguma coisa'))
app.route('/contato').get((req, res) => res.send('Contatos')) 


// metodo PUT  - Serve para editar informações
app.route(route).put( (req, res) => {
    author = req.body.author
    res.send(author)
})

// delete
app.route(route + ':identificador').delete( (req, res) => {
    res.send(req.params.identificador)
})




// Metodo post
app.route("/").post((req, res) => 
    res.send(req.body)
    /*console.log(req.body)  // retorna o json no terminal*/
)

