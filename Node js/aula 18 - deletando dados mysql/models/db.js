const Sequelize = require('sequelize')
const sequelize = new Sequelize("cadastro_clientes", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate()
.then(() => {
    console.log('Aula 18 Conectada ao Mysql')
})
.catch((err) => {
    console.log(`Aula 18 com erro no mysql ${err}`)
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}