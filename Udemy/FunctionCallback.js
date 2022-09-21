/* Callback function
A função de callback e um recurso muisto interessante e tambem amplamente utilizado em js
Permite executar uma função depois de uma determinada ação
E um conceito fundamental para entender a parte assicrona do js

*/
/*
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

function f1 (callback) {
    setTimeout(function () {
        console.log('f1')
        if(callback) callback()
    }, rand())
}
function f2(callback) {
    setTimeout(function () {
        console.log("f2");
        if (callback) callback()
    }, rand())
}
function f3(callback) {
    setTimeout(function () {
        console.log("f3");
        if (callback) callback()
    }, rand())
}

// callback hell simulando um servidor
console.log('cheguei primeiro')
// metodo em cadeia
/*f1(function () {
    f2(function() {
        f3(function () {
            console.log('Olá mundo')
        })
    })
})

// chamando a função de callback sem fazer o aninhamento

f1 (f1Callback)
function f1Callback() {
    f2(f2Callback)
}
function f2Callback() {
    f3(f3Callback)
}
function f3Callback() {
    console.log('Segundo Callback')
}*/


//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// função para criar botao
function myButton (text, callback) {
    const body = document.querySelector('body')
    const button = document.createElement('button')  // criando elemento
    button.textContent = text  // cria o texto no elemento criado

    // callback inserido antes da criação do botão
    // callback(parametro) nesse caso será passado o button
    callback(button)

    body.insertAdjacentElement('beforeend', button)  // inserindo elemento no html
    //button.setAttribute('id', 'btn')  // adicionando atributo na tag

    return button
    
}
// variavel recebe a função que tem um callback
// OBS: para funcionar tem que utilizar parametro na função
const enviar = myButton('enviar', (btn) => {
    btn.style.backgroundColor = 'red'
    btn.addEventListener('click', () => {
        console.log('click')
    })
})
const recolher = myButton('recolher', (btn) => {
    btn.style.backgroundColor = 'green'
})






/*const btn = document.getElementById('btn')
    const handleClick = () => {
        console.log('teste click agora')
    }
    btn.addEventListener('click', handleClick)  // addEvent chamando a função do click*/