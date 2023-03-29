const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;


fs.appendFile('index.html', '<h1>Lendo Arquivos</h1>', function (err) {
    if(err) throw err 
    console.log('Arquivo criado')
} )

const server = http.createServer((req, res) => {

    if(req.url == '/') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end()
        })

    } else {
        res.end()
    }
})

server.listen(port, hostname, () => {
    console.log('Server Lendo')
})