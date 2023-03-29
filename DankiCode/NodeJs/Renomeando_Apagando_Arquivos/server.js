const fs = require('fs')
const read = require('readline')


// criando arquivo
/*
fs.appendFile('nome_arquivo', 'conteudo arquivo', function(err, data) {
    bloco de codigo
})
 */

fs.appendFile('index.html', 'mario', function(err, data) {
    if(err) throw err
    console.log('criado index.html')
})

//  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-

// unlink vai deletar o arquivo
/*
fs.unlink('nome_arquivo', function(err) {
    bloco de codigo
})
 */

fs.unlink('mario.txt', function (err) {
    console.log('apagado, mario.txt')
})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// rename vai renomear o arquivo

/*
fs.rename('nome_antigo', 'nome_novo', function(err) {
    bloco de codigo
})

*/
fs.rename('sergio.txt', 'carvalho.txt', function (err) {
    console.log('renomeado para mario.txt')
})
