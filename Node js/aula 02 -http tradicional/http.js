let http = require('http')  // modulo tradicional de http no node para criar servidor



// e necessario abrir um servidor html criando e lendo uma porta
// createServer - cria um servidor local e recebe uma função de callback com 2 parametros,
// request e response(requisição e resposta), como resposta, enviamos uma messagem ao html
// usando o res.end('menssagem')
// apos a função enviamos o ouvidor com a porta que desejamos utilizar
http.createServer(function (req, res) {
    res.end('server rodando')
}).listen(8081)
/*
// toda vez que fizer uma alteração, é necessario encerrar o serviddor com ctrl+c e reiniciar novamente
 */
console.log('Servidor rodando')  // aqui enviamos uma mensagem ao terminal informando que esta rodando