let http = require('http')  // modulo tradicional de http no node para criar servidor



// e necessario abrir um servidor html criando e lendo uma porta
http.createServer(function (req, res) {
    res.end('server rodando')
}).listen(8081)

console.log('Servidor rodando')