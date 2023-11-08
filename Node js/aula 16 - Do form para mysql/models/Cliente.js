const db = require('./db')

const Cliente = db.sequelize.define("clientes", {
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.TEXT
    },
    idade: {
        type: db.Sequelize.INTEGER
    }

})

//Cliente.sync({force: true})

module.exports = Cliente