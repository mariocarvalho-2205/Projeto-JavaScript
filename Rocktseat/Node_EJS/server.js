// EJS - É linguagem de modelagem para a criação de paginas html utilizando o javascript
// isso quer dizer que o ejs vai permitir que a gente crie o front com html dentro do node
// e serpá renderizado pelo javascript


const express = require('express')  // vai criar um servidor para poder mostrar tudo o 
                                    // que estamos fazendo no navegador


const app = express()  // aqui será instanciado o express e armazenado na variavel app

/*
aqui vamos falar para o express que vamos usar o ejs
chamando o set que é uma função que tem la no express 
e receberá 2 argumentos - o primeiro será o view engine
e o segundo sera o ejs
*/
app.set("view engine", "ejs");

/*
criando uma rota
app.get -> está criando uma rota, ele está carregando tudo o que tem dentro do express
get é um metodo que tem dentro do express

a barra que dizer que estamos colocando a rota, 
a barra seria nosso dominio, nosso site sem nada na frente 
EX:
app.get("/sobre", function (req, res) {  ou seja mario.com.br/sobre ou  o que ellas vao chamar
    res.render("index");
})

*/
app.get("/", function (req, res) {

    const items = [
        {
            title: "D",
            message: "esenvolver Aplicações"
        },
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito facil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }

    ];

    res.render("pages/index", {
        qualitys: items,

    });  // res -> significa a resposta (responde) ao renderizar nosso index
});

app.get("/sobre", function (req, res) {
    res.render("pages/about");
});

/*
depois de configurar o servidor, iremos informar que ele agora tem que rodar
*/

app.listen(8080); // isso quer dizer que o app está carregando tudo dentro do express
// e que ele fica ouvindo uma porta
// para a renderização funcionar, e necessario que o arquivo index esteja dentro da pasta views
// como está sendo chamado no app.set("view engine", "ejs");
console.log('rodando novamente')