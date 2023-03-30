function person () {
    console.log('Hello  Modulo')
}


let n = 15
exports.person = person // exportando a função para quando for invocada no server
exports.num = n

const obj = {nome: 'mario', idade: 47}

exports.obj = obj