const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})
console.log('connection rodando')
//     async function connect () {

//     if (global.connection && global.connection.state !== "disconnected") {
//         return global.connection
//     }

//     const mysql = require('mysql2/promise')
//     const connection = await mysql.createConnection("mysql://root:mario@localhost:3306")
//     console.log('conectou no MySQL!')
//     global.connection = connection
//     return connection 
// }

// connect()

module.exports = sequelize