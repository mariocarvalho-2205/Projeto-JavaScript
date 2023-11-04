const Sequelize = require('sequelize')  
const sequelize = new Sequelize('test', 'root', '', {
    // 
    host: "localhost",  // url locak
    dialect: "mysql"
})

// ciclo de teste de conexão
sequelize.authenticate()
.then(() => {
    console.log('conectado com sucesso!')
}).catch((error) => {
    console.log(`Falha ao se conectar: ${error}`)
})