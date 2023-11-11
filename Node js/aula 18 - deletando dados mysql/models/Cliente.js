const db = require('./db')

// criação de modelo
const Cliente = db.sequelize.define('Clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    }
})

// Cliente.sync({force: true})

module.exports = Cliente