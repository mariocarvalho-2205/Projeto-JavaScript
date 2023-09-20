/*

// DOM e JS - Criando Elementos - Modificando e Lendo Atributos 
* Podemos criar um nó de elemento com o createElement, e depois inserir no HTML


*/
// Criando elementos utilizando laço de repetição

let lista = document.createElement('ul') // primeiro criamos o elemento pai

// o laço é criado para criar os elementos filhos
for ( i = 0; i < 4; i++ ) {
    
    let item = document.createElement('li')  // Criando elemento
    
    let texto = document.createTextNode(`texto lista ${i + 1}`)  // criando texto do elemento
    
    item.appendChild(texto)  // Adicionando texto ao elemento
    
    item.getAttribute('class') // criando atributo
    item.setAttribute('class', 'list-items')  // Adicionando valor ao atributo

    lista.appendChild(item)  // Adicionando o item ao elemento pai
}

let container = document.querySelector('#container-principal')
container.appendChild(lista)

// modificando atributo
lista.getAttribute('class')  // Criando Atributo

lista.setAttribute('class', 'list') // Adicionando valor ao atributo



