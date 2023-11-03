const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send(`
    <h1>Primeira Rota</h1>
    <p>Começando no backend</p>`)
})
app.get('/rota2', (request, response) => {
    response.send('segunda rota' );

})

app.listen(3000, () => {
    console.log('Funcionando na porta 3000')
})