/*

// DOM e JS - Adicionando Elementos - insertBefore
* Podemos mudar quase tudo através da DOM
* Adicionar, remover e clonar elementos
* Para isso utlilizamos metodos como: insertBefore, appendChild e replaceChild

*/
// Inserindo Elementos Após o elemento Pai
const newElementH2 = document.createElement('h2')
const newElementH3 = document.createElement('h3')
const newElementH5 = document.createElement('h5')
const elementDaddy = document.querySelector('#container-principal')
const elementChildH4 = document.querySelector('h4')

elementDaddy.insertBefore(newElementH2, elementChildH4)
elementDaddy.insertBefore(newElementH3, elementChildH4)
elementDaddy.insertBefore(newElementH5, elementChildH4)

let text = document.createTextNode('Titulo H2')  // Aqui é adicionado o texto no elemento criado
newElementH2.appendChild(text)

let textH3 = document.createTextNode('Titulo H3')
newElementH3.appendChild(textH3)

let textH5 = document.createTextNode('Titulo H5')
newElementH5.appendChild(textH5)





