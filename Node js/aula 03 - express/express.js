// para realizar a instalação utilizamos o npm
// antes de instalar e necessario iniciar o npm
// comando para instalação npm instal express --save

const express = require('express')  // carregando o modulo expess no projeto
const app = express()  // recebe a função express() criando instancia ou uma copia do express, tornando a principal do sistema
const PORTA = 3000


// criando servidor com express
// listen(porta) precisa ser a ultima linha do codigo
app.listen(PORTA, () => console.log(`rodando na porta ${PORTA}`))
