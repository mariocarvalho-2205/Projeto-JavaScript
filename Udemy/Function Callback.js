/* Callback function
A função de callback e um recurso muisto interessante e tambem amplamente utilizado em js
Permite executar uma função depois de uma determinada ação
E um conceito fundamental para entender a parte assicrona do js

*/
function exibir (num) {
    console.log('A operação resultou em: ' + num)
}
function soma (a, b, callback) {
    const s = a + b
    callback(s)
}
function multi(a, b, cb) {
    const s = a * b
    cb(s)
}
//quando chamarmos a função, automaticamente ela acionara o callback para retornar
// 
soma(5, 3, exibir)
multi(3, 9, exibir)
// essa função gerara um numero aleatorio entre 1000 e 3000 //milisegundos
function rand(min = 1000, max = 3000) {
    const temp = Math.random() * (max - min) + min;
    return temp
}

function f1 (num) {
    setTimeout(function () {
        console.log('f1')
    }, 800)   
}
function f2(num) {
    setTimeout(function () {
        console.log("f2");
    }, 1000)  
}
function f3(num) {
    setTimeout(function () {
        console.log("f3");
    }, 300)
}
console.log('cheguei primeiro')
f1()
f2()
f3()