/*

// DOM e JS - Adicionando Elementos - appendChild
* Esse metodo adiciona um nó depois de todos os elementos do elemento pai especificado


*/
// Inserindo Elementos Após todos os elementos do elemento Pai
const newElement = document.createElement('h2')
const elementH1 = document.querySelector('#titulo-principal')
const elementDaddy = elementH1.parentNode;
let text = document.createTextNode('titulo H2')

elementDaddy.appendChild(newElement)
newElement.appendChild(text)







