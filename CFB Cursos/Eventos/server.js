const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer(function (req, res) {

    if (req.url == '/') {
        fs.readFile('eventos.html', function (err, data) {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        res.end()
    }
})

server.listen(port, hostname, () => {
    console.log('rodando sempre')
})