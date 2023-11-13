/*
1 iniciar o npm
    // npm init
2 instalar os pacotes necessarios {express, express-handlebars, sequelize, mysql2, body-parser}
    // npm install express express-handlebars sequelize mysql2 body-parser
3 instalar o nodemon como dependencia de desenvolvedor
    // npm install -D nodemon
4 criar o gitignore
    // .gitignore - excrever os arquivos ou pastas que não subirao para o github
5 criar arquivo principal index.js
    // index.js
6 importar os pacotes express, express-handlebars, body-parser no index 
    // const express = require('express')
    // const handlebars = require('express-handlebars')
    // const bodyParser = require('body-parser')
7 criar o app com o express e criar a porta do servidor
    // const app = express()
    * // servidor
    // const port = 3300
   
8 criar o servidor
    // app.listen(port, () => {
    // console.log(`Servidor rodando na porta ${port}`)
    // })
9 criar pastas models e views
10 na pasta views criar a pasta layouts e criar o arquivo main.handlebars
11 na pasta models criar o arquivo db.js e o arquivo com o modelo para o sequelize
12 configurar o handlebars e o body-parser
    * // config handlebars
        // adicionar o path do node para ele reconhecer o diretorio base da aplicação
        // dessa forma ele entende que os arquivos principais estao dentro da pasta views
        // const path = require('path)
        // app.set('views', path.join(__dirname, 'views'))
        // app.engine('handlebars', handlebars.engine({default: "main"}))
        // app.set('view engine', 'handlebars')
    * // config body-parser
        // app.use(bodyParser.urlencoded({extended: false}))
        // app.use(bodyParser.json())
14 no arquivo db, importar e configurar o sequelize, 
    * import
    // const Sequelize = require('sequelize')
    * config
    // const sequelize = new Sequelize("cadastro_clientes", "root", "", {
    // dialect: "mysql",
    // host: "localhost"
    // })
15 testar conexao com banco de dados no arquivo db e exportar o modulo
    // sequelize.authenticate()
    // .then(() => {
    // console.log("Conectou ao Banco de Dados MySQL")
    // }).catch((err) => {
    // console.log(`O seguinte erro foi apresentado ${err}`)
    // })
16 exportar p modulo no arquivo db
    // module.exports = {
    // Sequelize: Sequelize,
    // sequelize: sequelize,
    // }
17 importar o modulo db no arquivo com o modelo na pasta (models)
    // const db = require('./db') 
    ! O endereço do arquivo tem que direcionar para a pasta com o nome do arquivo
18 criar o modelo da tabela feita no sequelize
    // const Cliente = db.sequelize.define("clientes", {
    // nome: {
    //     type: db.Sequelize.STRING
    // },
    // cpf: {
    //     type: db.Sequelize.INTEGER
    // },
    // email: {
    //     type: db.Sequelize.TEXT
    // },
    // idade: {
    //     type: db.Sequelize.INTEGER
    // }
    // 
    // })

    19 Sincronizar a tabela e depois comentar o comando para nao zerar a tabela
    // Cliente.sync({force: true})
    ! NÃO ESQUECER DE COMENTAR O COMANDO DEPOIS QUE SINCRONIZAR AO BANCO DE DADOS

    20 Exportar o modelo do sequelize no arquivo do modelo 
    // module.exports = Cliente

21 importar o bd no arquivo principal
    // const db = require('./models/db')

22 criar as rotas get para pegat os dados 
    * Criar uam pasta routers para as rotas ficarem organizadas
    instalar o pacote do express Router() para auxiliar com as rotas 
    e determinando  uma rota padrão, nomear o arquivo de acordo com o tipo de rota
    // padrao para Router - const router = express.Router()
    ! podemos deixar uma rota inicial no arquivo principal do projeto
    no arquivo das rotas precisamos importar o express, e o modelo 
    const express = require('express)
    const Job = require('endereço do arquivo modelo)

    *   configuração das rotas no arquivo principal
    // Jobs routes config
    //  app.use('/jobs', require('./routers/jobs'))

    ! não esquecer de exportar as rotas

    * ROTA PRINCIPAL SEM RENDERIZAR HTML
    // app.get('/', (req, res) => {
    //     res.render('home')  // DIRECIONA PARA A PAGINA PRINCIPAL
    //     // res.send(`Rota Principal da Aula 16 OK`)
    // })
    * ROTA RENDERIZANDO HTML COM FORMULARIO 
    // app.get("/cadastro", (req, res) => {
    //     res.render('formulario')
    // })

23 importar o modelo no arquivo principal
    // const Cliente = require('./models/Cliente')
24 criar rota post para enviar(adicionar) os dados no mysql



    // app.post('/cadastrado', (req,res) => {
    //     Cliente.create({
    *       criando uma variavel para cada item 
    //      let {title, salary, company, description, email, new_job} = req.body;
    //         nome: req.body.nome, 
    //         cpf: req.body.cpf, 
    //         email: req.body.email, 
    //         idade: req.body.idade 
    //     }).then(() => {
    //         res.redirect('/')
    //     }).catch((err) => {
    //         res.send(`Erro no cadastro ${err}`)
    //     })
    *       esse formato visualiza os dados enviado no formulario sem renderizar 
    //     // res.send(`
    //     // Nome: ${req.body.nome}<br> 
    //     // CPF: ${req.body.cpf}<br> 
    //     // Email: ${req.body.email}<br> 
    //     // Idade: ${req.body.idade}
    //     // `)
    // })
    ! NO FORMULARIO E PRECISO INFORMAR A ROTA NO ACTIONS, 
    ! PARA ONDE OS DADOS SERAO ENVIADOS!!
    ! E O METHOD PRECISA SER POST!!!
    * O FORMULARIO É CRIADO DENTRO DA PASTA views
    // <form action="/cadastrado" method="post">
25 Rotas para listagem
    // dentro do colchete vai a coluna que queremos pesquisar
    // Cliente.findAll({order: [
    //    ['createdAt', 'DESC']
    //
    // ]})
    //    .then((clientes) => {
    //    res.render("home", {clientes});
    //  });
26 no arquivo handlebars utilizamos o dataValues.campo do valor
dentro de {{dataValues.campo}}
27 Deletar o item do banco adiciona rota e o button no item exibido
    app.get('/deletar/:id', (req, res) => {
        Cliente.destroy({
            where: {'id': req.params.id}
        }).then(() => {
            res.send('Deletado com Sucesso')
        }).catch((err) => {
            res.send(`Não foi possivel deletar. Erro -> ${err}`)
        })
    })
// no button adicionar a rota no link
// <a href="/deletar/{{dataValues.id}}"><button>Excluir</button></a>

27 cofiguração da pasta onde contem os arquivos css e imagens
// static folder - configura a pasta central do css e imagens do projeto
// dessa forma no handlebars, não precisa mais passar a pasta public
app.use(express.static(path.join(__dirname, 'public')))

28 

*/
