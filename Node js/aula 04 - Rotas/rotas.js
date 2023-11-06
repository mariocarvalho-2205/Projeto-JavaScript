const express = require('express')  // imnportação do express
const app = express()  // instanciando a função express
const porta = 3000  // endereço da porta


// criação da rota utilizamos get para pegar 
// get - recebe 2 parametros para instanciar a rota, 
// o primeiro e o endereço da rota e o segundo uma callback que ira conter 2 parametros(request e response) que ira exibir na tela o html
app.get('/', (req, res) => {
    res.send(`<h1>Hello World com Rotas</h1>`)  // envia uma msg e reconhece html
    // res.end('teste');  // envia uma msg em forma de tela preta, nao reconhece html    
})


app.get('/sobre', (req, res) => {
    res.send(`<h1>Minha pagina Sobre</h1>`)
})

app.get('/contato', (req, res) => {
    res.send(`<h1>Minha Rota Contato</h1>`)
})








// servidor criado
app.listen(porta, () => console.log('server rodando, com rotas'))