const Sequelize = require('sequelize')
const sequelize = new Sequelize("cadastro_clientes", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

// Será criado um arquivo para cada modelo de tabela no banco de dados dentro 
// da pasta models

sequelize.authenticate()
.then(() => {
    console.log("Conectado ao MySQL no Banco Cadastro de Clientes")
})
.catch((err) => {
    console.log(`Ao conectar apresentou o seguinte err ${err}`)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}