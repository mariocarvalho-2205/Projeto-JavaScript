const { createServer } = require('http')

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
    <h1>Hello Word</h1>
    <p>Primeira pagina via node.js</p>
    `)
    
    response.end()
})

server.listen(8000)

console.log('listening! (Port 8000)')