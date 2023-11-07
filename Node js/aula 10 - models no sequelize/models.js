const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', '', {
    rost: "localhost",
    dialect: "mysql",
})

// criando models
const Cargos = sequelize.define('cargo', {
    cargo: {
        type: Sequelize.STRING
    },
    tempo: {
        type: Sequelize.INTEGER
    },
    descricao: {
        type: Sequelize.TEXT
    }
})

// SINCRONIZANDO A TABELA AO MYSQL
//Cargos.sync({force: true})

// preenchendo os campos
// Cargos.create({
//     cargo: "Programador",
//     tempo: "3 anos",
//     descricao: "A profissão que irá crescer muito!"
// })

sequelize.authenticate()
.then(() => {
    console.log('conectou ao banco certinho')
}).catch((err) => {
    console.log(`Deu erro no BD ${err}`)
})
