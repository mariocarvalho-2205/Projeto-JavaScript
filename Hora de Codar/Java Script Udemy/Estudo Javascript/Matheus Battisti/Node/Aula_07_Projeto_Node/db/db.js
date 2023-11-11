const Sequelize = require('sequelize')
const sequelize = new Sequelize("hora_de_codar", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

// terminar de criar o modelo antes de tudo

sequelize.authenticate().then(() => {
    console.log('Hora de Codar no Mysql')
})
.catch((err) => {
    console.log(`Hora de Codar com erro ${err}`)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}