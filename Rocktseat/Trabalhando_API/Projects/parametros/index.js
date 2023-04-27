const express = require('express');
const app = express();
const port = 3000;
const route = '/'
//let person = 'Mário Carvalho Developer'

app.listen(port, (req, res) => {
    console.log('server parametros rodando!')
});

app.use(express.json());

// pegando parametros pelo body
// O body(corpo de requisiçao) so é enviado no put, post ou patch
//app.route(route).get((req, res) => res.send('Vamos pra cima'))  pelo get não funciona
app.route(route).post((req, res) => {
    const {nome, cidade, livros} = req.body
    res.send(`Meu nome é ${nome}, e minha cidade é ${cidade}, e meus livros são ${livros}`)
    //console.log(req.body)
})

// app.route(route).get((req, res) => res.send(req.query.nome))

// app.route(route).post((req, res) => res.send(req.body.livros[2]))

// app.route(route + ":parametro").get((req, res) => res.send(req.params.parametro))

/*
*
// pegando parametros pela rota

app.route('/:variavel').get((req, res) => {
    res.send(req.params.variavel)
})


 */
/*
app.route('/').get((req, res) => res.send('ola pela rota'))
app.route('/:nome').get((req, res) => {
    res.send(req.params.nome)
})
app.route('/livro/titulo').get((req, res) => res.send("req.params.titulo"))

// exibe o que escrever depois da rota
app.route('/livro/author/:author').get((req, res) => res.send(req.params.author))  
*/
// app.route(route).post((req, res) => {
//     person = req.body.person
//     res.send(person)
// })

/*


*
// query params

sao identificados na url com a ?(interrogação)
EX: localhost:3000?nome=mario&idade=48
podemos usar o nome da chave depois do query para pegar apenas um valor

app.route("/").get((req, res) => {
    res.send(req.query)
})

app.route("/about/user").get((req, res) => {
    res.send(req.query.variavel)
    
})
*/

app.route("/").get((req, res) => {
    res.send(req.query)
})

app.route("/about/user").get((req, res) => {
    res.send(req.query.nome)
    
})