const Sequelize = require('sequelize')  

// sintaxe - new Sequelize('nome do banco', 'username do banco', 'senha', {
//    host: "localhost",
//    dialect: "tipo de banco usado"
// })
const sequelize = new Sequelize('sys', 'root', '', {
    // 
    host: "localhost",  // host e o endereço onde esta o banco de dados 
    dialect: "mysql"  //  aqui define qual o tipo de banco estaremos usando
})

// ciclo de teste de conexão
sequelize.authenticate()
.then(() => {
    console.log('conectado com sucesso!')
}).catch((error) => {
    console.log(`Falha ao se conectar: ${error}`)
})