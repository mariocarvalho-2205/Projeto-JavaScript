const Sequelize = require('sequelize')
const db = require('../db/db')

const Job = db.sequelize.define("jobs", {
    // terminar de criar o modelo
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    new_job: {
        type: Sequelize.INTEGER
    }
})

module.exports = Job