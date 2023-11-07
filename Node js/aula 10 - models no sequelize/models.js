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

const Usuarios = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})
// SINCRONIZANDO A TABELA AO MYSQL
// Cargos.sync({force: true})
// Usuarios.sync({force: true})

// preenchendo os campos
// Cargos.create({
//     cargo: "Programador",
//     tempo: "3 anos",
//     descricao: "A profissão que irá crescer muito!"
// })

Usuarios.create({
     nome: "Adilma",
     email: "adienfa@hotmail.com",
     idade: 49
})


sequelize.authenticate()
.then(() => {
    console.log('conectou ao banco certinho')
}).catch((err) => {
    console.log(`Deu erro no BD ${err}`)
})
