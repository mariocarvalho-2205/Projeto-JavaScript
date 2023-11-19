// para modulos interno e passado o endereço do modulo
const modulo = require('./my_module')  

const soma = modulo.soma(9, 7) // encapsulando o modulo na variavel

// soma(5, 9)  // chamando o modulo atraves da variavel

// modulo.soma(6, 14) // dessa forma utilizamos mais recursos do sistema

console.log(soma)  // ! dessa forma ja retorna um undefinid por imprimir duas vezes a mesma coisa
