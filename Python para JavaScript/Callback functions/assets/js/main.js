
//                  (parametro, função recebida como parametro)
function newButton (text, callback) {
    const form = document.querySelector("form");
    const button = document.createElement("button");
    button.textContent = text

    callback(button)  // função passada por parametro enviando o botao para fora antes de ser inserido no body

    form.insertAdjacentElement("beforebegin", button);
    //return button
}
    
/*
const login = newButton('login')
const signup = newButton("signup");

console.log(login, signup)*/

// chamando a função newButton (passando o texto no 1 parametro, passando função no segundo parametro)
//         1º param, 2º param
newButton("login", (button) => {  // callback enviando estilos ao callback recebendo o botao do callback antes de ser criado.
    button.style = `
    background: blue;
    color: white;
    `   
    button.addEventListener('click', () => {
        console.log('clicou')
    })
});

setTimeout(function() {
    newButton("signup", (button) => {
        button.style = `
        background-color: red;
        color: white;
        `;
    });
}, 2000)


function exibi (num) {
    console.log(`vamos exibir ${num}`)
}

function soma (a, b, callback) {
    const som = a + b
    callback(som)
}

function multi (a, b, callback) {
    const produ = a * b
    callback(produ)
}

soma(5, 8, exibi)
multi(5, 5, exibi)

var cont = 0;
const setInt = setInterval(function () {
    console.log(cont);
    cont++
}, 1000)


setTimeout(function () {
    clearInterval(setInt)
    console.log('parei')
}, 5000)