const express = require('express')
const app = express()
const porta = 3000



// rotas
app.get('/', (req, res) => {
    res.send(`<h1>Ola porta principal</h1>`)
})

app.get('/sobre', (req, res) => {
    res.send(`<h1>Sobre</h1>`)
})

// parametro - ele é o responsavel por receber dados em uma aquisição
// sua sintaxe é - app.get('/sobre/:parametro 1/:parametro 2', (req, res) => { res.send(`<h1>Sobre</h1>`) })
// para pegarmos os parametros utilizamos o req, seguido de params ex: req.params
// será exibido um objeto com os parametros(chaves e valores) recebidos na url depos da rota em formato JSON
// ex:

app.get('/contato/:nome/:sobrenome/:cor', (req, res) => {
    res.send(`
        <h1>Meu Contato</h1>
        <h2>Nome: ${req.params.nome}</h2>
        <h2>Sobrenome: ${req.params.sobrenome}</h2>
        <h2>Cor: ${req.params.cor}</h2>
    `)
    /*
    * res.send(req.params
    
     
    ! Importante: os dados passados no params - só são exibidos como objetos
    ! quando sao passados sem imterpolação de string
    ! quando são imterpolados, só são exibidos os valores`
    // <h1>Dados passados com o req.params</h1>
    // <h2>${req.params}</h2>  // saida = [Object]
    
    * req.params  // saida = {"nome": "mario", "sobrenome": "carvalho"}
    * `${req.params.nome} ${req.params.sobrenome}` // saida = mario carvalho
    
    );
    `*/
    
})



// servidor
app.listen(porta, () => console.log(`porta ${porta} e server rodando`))