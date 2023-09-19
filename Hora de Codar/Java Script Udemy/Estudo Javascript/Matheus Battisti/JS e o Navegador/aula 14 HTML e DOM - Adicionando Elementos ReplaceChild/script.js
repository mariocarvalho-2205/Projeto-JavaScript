/*

// DOM e JS - Adicionando Elementos - replaceChild()
* Esse metodo repoe um antigo elemento no DOM, com um novo


*/
// Repondo um elemento no DOM como um novo

const newElement = document.createElement('h2') // criação do elemento
let text = document.createTextNode('titulo H2')  // criando texto para inserir no elemento

newElement.appendChild(text) // Inserindo texto no elemento criado


const elementH1 = document.querySelector('#titulo-principal')  // acessando elemento
const elementDaddy = elementH1.parentNode;  // atribuindo panrent ao elemento

elementDaddy.replaceChild(newElement, elementH1)  // substituindo elemento antigo pelo novo








