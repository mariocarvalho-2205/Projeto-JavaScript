const { stdout } = require('process');
const readline = require('readline');

// aqiuo vai ser criado o processo de leitura de dados no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// aqui ira fazer a leitura e impressao dos dados
rl.question('Qual o seu nome? ', (nome) => {
    console.log(`Seu nome é ${nome}, NÃO ACREDITOOOO`);
    rl.question('Qual a sua idade? ', (idade) => {
        console.log(`Uhauuu ${nome}, você só tem ${idade}`)
    })
    
});

// aqui irá responder quando encerrarmos o programa
rl.on('close', function () {
    console.log(`Parabens!!! Estamos finalizando . Adeusssss!!!`);
    process.exit(0);
});