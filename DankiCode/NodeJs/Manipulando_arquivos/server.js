const http = require('http');  
const fs = require('fs') // fs - vai permitir que consiga manipular arquivos utilizando o node 

// Objetivo da aula - Ler arquivos com base na URL
// vamos manipular arquivo html


const hostname = "127.0.0.1";  // endereço localhost
const port = 3000;  // porta localhost


// Criando arquivo com node
fs.writeFile('mario.txt', 'testando e exercitando', (err) => {
    if(err) throw err
    console.log('arquivo criado')
})



// criando o server
const server = http.createServer((req, res) => {

    // depois que iniciar o servidor e necessario atualizar a pagina html
    if( req.url == '/mario') {

        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })

    } else {
        return res.end()
    }



    // res.statusCode = 200;    // res e a resposta para quem está acessando o servidor
    // res.setHeader('Content-Type', 'text/plain');

    // res.end('Heloooooo Mario Brosss');

})



// criando o escutador do servidor
server.listen(port, hostname, ()  => {
    console.log('servidor rodando');    
})
