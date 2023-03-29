const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

// bloco para criação de arquivo
fs.writeFile('index.html', '<h1>Mario Carvalho - Arquivo Criado com Sucesso</h1>\n', (err) => {
    if (err) throw err;
    console.log('arquivo criado com sucesso')
})

// bloco para criar novo arquivo ou inserir conteudo depois do que ja existe
fs.appendFile('index.html', `<h2>Desenvolvedor - mais um conteudo</h2>`, function (err) {
    if(err) throw err;

    console.log('mais um conteudo')
})


// bloco para criação de servidor
const server = http.createServer(function (req, res) {

    if (req.url == '/') {

        // =-=-=-=-=-=-=-=-=-=-=-=-=-
        // esse bloco vai adicionar conteudo toda vez que a pagina for carregada
        // fs.appendFile('index.html', `<h2>Desenvolvedor</h2>`, function (err) {
        //     if (err) throw err;

        //     console.log('mais um conteudo')
        // })
        // =-=-=-=-=-=-=-=-=-=-=-=-=-=-

        fs.readFile('index.html', function (err, data) {

            res.writeHead(200, { 'Content-Type' : 'text/html'});
            res.write(data);
            return res.end()
        })

    } else {
        return res.end()
    }
})

// bloco para rodar servidor
server.listen(port, hostname, () => {
    console.log('server Ok!')
})