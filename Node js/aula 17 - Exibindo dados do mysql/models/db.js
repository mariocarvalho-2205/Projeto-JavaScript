const Sequelize = require('sequelize')
const sequelize = new Sequelize("cadastro_clientes", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Aula 17 conectada ao MySQL")
})
.catch((err) => {
    console.log(`Aula 17 apresentou o erro ${err}`)
})

module.exports = {Sequelize: Sequelize, sequelize: sequelize}