const Sequelize = require('sequelize') // importando o sequelize

// selecionando o tipo de banco de dados que queremos conectar
// sintaxe = const sequelize = new Sequelize('nome do banco de dados', 'usuario', 'senha', {
//    objeto JSON com -    
//      host: "localhost",
//      dialect: "tipo do banco de dados",
//      storage: 'endereço do arquivo banco de dados',
// })
const sequelize = new Sequelize('sistemadecadastro', 'root', '', {
    host: "localhost",
    dialect: "mysql",
})

// para testar a conexao com o banco usamos o authenticate
sequelize.authenticate()
.then(() => {
    console.log('conectou ao mysql')
})
.catch((erro) => {
    console.log(`deu o seguinte erro ${erro}`)
})


