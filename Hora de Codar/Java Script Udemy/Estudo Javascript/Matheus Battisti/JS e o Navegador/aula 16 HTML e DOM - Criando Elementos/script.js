/*

// DOM e JS - Criando Elementos - Criando Elementos 
* Podemos criar um nó de elemento com o createElement, e depois inserir no HTML


*/
// Criando elementos utilizando laço de repetição

let lista = document.createElement('ul') // primeiro criamos o elemento pai

// o laço é criado para criar os elementos filhos
for ( i = 0; i < 4; i++ ) {
    
    let item = document.createElement('li')
    
    let texto = document.createTextNode(`texto lista ${i + 1}`)
    
    item.appendChild(texto)

    lista.appendChild(item)
}

let container = document.querySelector('#container-principal')

container.appendChild(lista)


