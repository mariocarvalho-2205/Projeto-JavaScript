const Sequelize = require('sequelize')
const sequelize = new Sequelize("cadastro_clientes", "root", "", {
    dialect: "mysql",
    host: "localhost"
})



sequelize.authenticate()
.then(() => {
    console.log("Conectou ao Banco de Dados MySQL")
}).catch((err) => {
    console.log(`O seguinte erro foi apresentado ${err}`)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}