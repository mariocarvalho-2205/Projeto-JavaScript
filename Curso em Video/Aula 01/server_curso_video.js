const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    
    if(req.url == '/mario') {
        fs.readFile('exe06.html', function (err, data) {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();

        }) 

    } else {
        return res.end()
    }
    
})

server.listen(port, hostname, function () {
    console.log('servidor curso em video funcionando')
})