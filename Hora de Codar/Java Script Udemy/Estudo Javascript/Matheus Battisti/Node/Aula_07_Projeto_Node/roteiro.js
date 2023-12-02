/*
! boa pratica é alinhar as variaveis pelo sinal de ugual

!! Sequencia do arquivo principal
        * 1 criação do server
        * 2 config do body-parser
        * 3 teste de conexao com o banco de dados
        * 
1 iniciar o npm
    // npm init
2 instalar os pacotes necessarios {express, express-handlebars, sequelize, mysql2, body-parser}
    // npm install express express-handlebars sequelize mysql2 body-parser
3 instalar o nodemon como dependencia de desenvolvedor
    // npm install -D nodemon
4 criar o gitignore
    // .gitignore - excrever os arquivos ou pastas que não subirao para o github
5 criar arquivo principal index.js
    // index.js ou app.js
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
! testando as rotas 
    * ROTA PRINCIPAL SEM RENDERIZAR HTML
    // app.get('/', (req, res) => {
    //     res.send(`Rota Principal da Aula 16 OK`)
    // })
    * ROTA RENDERIZANDO HTML COM FORMULARIO 
    // app.get("/cadastro", (req, res) => {
    // res.render('home')  // DIRECIONA PARA A PAGINA PRINCIPAL
    //     res.render('formulario')
    // })
! Criar conexao com Banco de Dados - somente bancos relacionais
9 Criar pasta DB e o arquivo db, importar e configurar o sequelize, 
    * import
    // const Sequelize = require('sequelize')
    * config
    // const sequelize = new Sequelize("nome do banco", "usuario do banco", "senha", {
    // dialect: "mysql", // tipo de banco
    // host: "localhost"  // url do banco
    // storange: "endereço do arquivo com extensão do banco de dados"
    // })

10 testar conexao com banco de dados no arquivo db
(pode ser testado no arquivo principal) e exportar o modulo
! no arquivo principal utilizamos a contante da importação no lugar de sequelize
    // sequelize.authenticate()  // constante.authenticate()
    // .then(() => {
    // console.log("Conectou ao Banco de Dados MySQL")
    // }).catch((err) => {
    // console.log(`O seguinte erro foi apresentado ${err}`)
    // })

11 exportar p modulo no arquivo db
    // module.exports = {
    // Sequelize: Sequelize,
    // sequelize: sequelize,
    // }
12 importar o modulo db no arquivo principal com o modelo na pasta (models)
    // const db = require('./db') 
    ! O endereço do arquivo tem que direcionar para a pasta com o arquivo do BD
    ! O teste com o banco pode ser feito no arquivo principal

13 criar pastas models com o arquivo com o nome da tabela no singular com camel case extensao.js
    * importar o sequelize e o arquivo de conexão com o banco de dados
    // const Sequelize = require('sequelize')
    // const db = require('./db')  // endereço do arquivo de conezao com o banco

14 criar o modelo da tabela feita no sequelize
! const modelo
    // const Nome_da_tabela_no_singular(nome do arquivo) = db.sequelize.define("nome da tabela - minusculo", {
    // nome: {
    //     type: db.Sequelize.STRING  // as vezes e preciso adicionar o db antes
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

15 Sincronizar e força a criação da tabela e depois comentar o comando para nao zerar a tabela
    // Cliente.sync({force: true}) sem usar o forçe true ele apenas sincroniza sem apagar
    ! NÃO ESQUECER DE COMENTAR O COMANDO DEPOIS QUE SINCRONIZAR AO BANCO DE DADOS
    // preenchendo os campos no proprio modelo para teste
    // Cargos.create({
    //     cargo: "Programador",
    //     tempo: "3 anos",
    //     descricao: "A profissão que irá crescer muito!"
    // })

16 Exportar o modelo do sequelize no arquivo do modelo 
    // module.exports = nome da constante modelo

! 17 Criação de Rotas 
    * Criar uma pasta routers para as rotas ficarem organizadas
    * O nome do arquivo colocamos o mesmo nome da tabela no plural com Camel Case  
    * importar o pacote do express Router() para auxiliar com as rotas 
    * e determinando  uma rota padrão, nomear o arquivo de acordo com o tipo de rota
    ! podemos deixar uma rota inicial no arquivo principal do projeto
    ! no arquivo das rotas precisamos importar o express, e o modelo 
    // const express = require('express)
    // padrao para Router - const router = express.Router()
    // const Nome_Tabela_Modelo = require('endereço do arquivo modelo)
    ? Ex: const Cliente = require('./models/Cliente)

    
    ! importar o body-parser no arquivo principal
    // const bodyParser = require('body-parser)
    // const Sequelize = require('sequelize')
    // const Op         = Sequelize.Op
    * depois configuramos o body paser no arquivo principal
    * // config body-parser no arquivo principal 
        // app.use(bodyParser.urlencoded({extended: false}))
        // app.use(bodyParser.json())

* 18 criar rota post para enviar(adicionar) os dados no mysql

    // router.post('/rota do form de cadastro', (req,res) => {
    *       criando uma variavel para cada item utilizando desctructuring
    //      let {title, salary, company, description, email, new_job} = req.body;
    
    *   inserindo dados
    //     Nome do Modelo.create({
        * nome das variaveis criada no destructuring
        * utilizamos sem a necessidade de usar o req.body.campo
    //         nome: req.body.nome, 
    //         cpf: req.body.cpf, 
    //         email: req.body.email, 
    //         idade: req.body.idade 
    //     }).then(() => {
    //         res.redirect('/')
    //     }).catch((err) => {
    //         console.log(err)    // mostra o erro no console        
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

    ! No arquivo principal, é preciso criar a rota que ira direcinar todas as 
    ! rotas para a rotas diferenciadas. 
    ? Ex: rotas de users e rotas de jobs, direcionando para tabelas diferentes
    ? Ex jobs ou users ou products
    // app.use('/nome da rota do form para cadastro', require('endereço da pasta rota e do arquivo de rota)) 
    //  app.use('/jobs', require('./routers/jobs'))
        // testando a rota no arquivo dentro de routes

         
        // router.get('/test', (req, res) => {
        //      res.send('funcionou')
        // })

    ! Não esquecer de exportar o router no arquivo das rotas
    // module.exports = router

    * testando via postman via json
    * na aba headers configuramos a key para content type
    * e o value para aplication json
    * e na aba body enviamos as chaves e os valores
    ! Detalhe importante : as chaves precisam ser as mesmas do model

* 19 importar o modelo no arquivo principal
    // const Modelo = require('endereço do modelo')

    * na rota de visualização chamaremos o modelo - mostra a lista
    // app.get('rota de visualização', (req, res) => {
    //    Modelo.findAllJob.findAll({
    //        order: [
    //        ['createdAt', 'DESC']
    //    ]})
    //    .then(jobs => {
    //        res.render('index', {jobs})
    //    }) 
    //    .catch((err) => console.log(err))

    ! logica da busca
    * let search = req.query.job  // recebe os dados da busca
    * let query = "%"+search+"%"
// 
//     if (!search) {  // 
//         
//         Job.findAll({
//             order: [
//             ['createdAt', 'DESC']
//         ]})
//         .then(jobs => {
//             res.render('index', {jobs})
//         }) 
//         .catch((err) => console.log(err))
//     } else {
//         Job.findAll({
//             where: {title: {[Op.like]: query}},
//             order: [
//             ['createdAt', 'DESC']
//         ]})
//         .then(jobs => {
//             res.render('index', {jobs, search})
//         })
//         .catch((err) => console.log(err))
//     }
// })
// 





    ! NO FORMULARIO E PRECISO INFORMAR A ROTA NO ACTIONS, 
    ! PARA ONDE OS DADOS SERAO ENVIADOS!!
    ! E O METHOD PRECISA SER POST!!!
    * O FORMULARIO É CRIADO DENTRO DA PASTA views
    // <form action="/cadastrado" method="post">


// 27 Deletar o item do banco adiciona rota e o button no item exibido
//     app.get('/deletar/:id', (req, res) => {
//         Cliente.destroy({
//             where: {'id': req.params.id}
//         }).then(() => {
//             res.send('Deletado com Sucesso')
//         }).catch((err) => {
//             res.send(`Não foi possivel deletar. Erro -> ${err}`)
//         })
//     })
// no button adicionar a rota no link
// <a href="/deletar/{{dataValues.id}}"><button>Excluir</button></a>


 e views
 ? na pasta views criar a pasta layouts e criar o arquivo main.handlebars






? configurar o handlebars e o body-parser
    * // config handlebars
        // adicionar o path do node para ele reconhecer o diretorio base da aplicação
        // dessa forma ele entende que os arquivos principais estao dentro da pasta views
        // const path = require('path)
        // app.set('views', path.join(__dirname, 'views'))
        // app.engine('handlebars', handlebars.engine({default: "main"}))
        // app.set('view engine', 'handlebars')
    




    
   

21 importar o bd no arquivo principal
    // const db = require('./models/db')


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
24 


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

27 cofiguração da pasta onde contem os arquivos css e imagens
// static folder - configura a pasta central do css e imagens do projeto
// dessa forma no handlebars, não precisa mais passar a pasta public
app.use(express.static(path.join(__dirname, 'public')))

28 

*/
