const express = require('express')  // imnportação do express
const app = express()  // instanciando a função express
const porta = 3000  // endereço da porta


// criação da rota utilizamos get para pegar 
// get - recebe 2 parametros para instanciar a rota, 
// o primeiro e o endereço da rota e o segundo uma callback que ira conter 2 parametros(request e response) que ira exibir na tela o html
app.get('/', (req, res) => {
    res.end('mensagem vinda do servidor e da rota get /')
})






// servidor criado
app.listen(porta, () => console.log('server rodando, com rotas'))