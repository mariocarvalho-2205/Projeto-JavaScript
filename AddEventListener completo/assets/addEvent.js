/* 
addEventListener : ele escuta um evento, click representa o evento do botao
submit representa o evento de form
capturando evento de botao usando click e id

const btn = document.getElementById('btn-enviar')

btn.addEventListener = (e) => {
    console.log(e)
}
*/

// para testar retirar o comentario do evento com click e comentar o que tem submit
/*
const btn = document.getElementById("btn-enviar");  // seleciona o botao atraves do id

btn.addEventListener('click',  (e) => {
  // pode ser utilizado uma function anonima ou uma arrow function
  e.preventDefault(); // preventDefaut() é usado para nao enviar o formulario ao digitar nos campos

  console.log(e.target.getAttribute("id")); // passando apenas o parametro(e) retorna o PointerEvent (mostra as propriedades do elemento) atraves dela podemos acessar todos os elementos do documento e fazer as alterações

  console.log(e.target.previousElementSibling.innerText); // previousElementSibling.innerText aqui vai mostrar o elemento previo
  // sem o innerText vai mostrar a tag atraves desse comando podemos mudar o valor do elemento

  console.log(e);  // passando so a variavel 
})*/

/*
addEventListener -> utilizando no formulario


sintaxe:
        variavel do botao  /  documento. seleciona o formulario pelo nome do item
const btnTeste = document.forms.namedItem('formulario')

submit faz o envio 
btnTeste.addEventeListener('submit', (e) => {  // pode ser usado função anonima ou arrow function
    e.preventDefault()
    console.log(e)
})
*/
//const btnTeste = document.forms.namedItem('formulario')

/*btnTeste.addEventListener('submit', (event) => {  // pode ser usado função anonima ou arrow function
    event.preventDefault()
    console.log(event.target.input.value)  // usando somente o paramento ira mostrar o submitEvent onde mostra todos os parametros 
    // utilizando o name no html conseguimos o valor do input
    
})*/
/*document.addEventListener('click', (e) => {
    console.log(e.target)
})*/

/* Evento onload - É ativado ao carregar apagina
então ele so sera ativado depois que o dom for carregado 
window.onload = function () {
    console.log('carregou o DOM')  // Só será carregado depois que o DOM for carregado.
                                   // OBS: Para resolver esse problema, é necessário encapsular todo o codigo no onload
}
console.log('Carregou o js')  // será carregado primeiro por não está dentro do evento onload, ou seja, não precisa do carregamento do DOM

var title = document.querySelector('title')

console.log(title)


*/

/*window.onload = function () {
  console.log("carregou o DOM");
};
console.log("Carregou o js");

var title = document.querySelector("title");

console.log(title);*/

/* Evento - click
O evento é ativado quando o usuario clica em algum elemento, não está limitado a botões ou inputs
    em que atrelamos o evento

Permitindo fazer modificações e alterações HTML/CSS que quisermos.



*/
/*
var btn2 = document.getElementById('btn2')
console.log(btn2)
btn2.addEventListener("click", function (e) {
    e.preventDefault()
    console.log('apertou');
    this.style.color = 'red'
    //body.style.backgroundColor = "black";
})
const body = document.querySelector('body')
document.addEventListener('click', function (e) {
    console.log(e.target)
    //body.style.backgroundColor = 'black'
})*/

//double click
/*
const dbclic = document.getElementsByTagName('footer')

dbclic.addEventListener("dblclick",  (e) => {
    e.preventDefault()
    console.log('click');
})*/