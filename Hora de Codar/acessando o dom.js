/*
Acessar o DOM caracteriza-se por identificar um elemento HTML atraves de metodos;
Depois podemos manipula-los da for aque quisermos;
Acessar o DOM é semelhante as regras CSS;
Podemos acessar por: tags, ids, classes;

// Acessando por tag
let titulo = document.getElementsByTagName('nome_da_tag')[indice_acessado]
Obs: segue a mesma logica do array

*/

// Acessando por tag
let titulo = document.getElementsByTagName('h1')[0]
console.log(titulo)
let li = document.getElementsByTagName('li')  // pode acessar o indice no console.log
console.log(li[0])

// Acessando por id

let paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)

// Acessando por class

let itensDaLista = document.getElementsByClassName('item')
console.log(itensDaLista)

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
Outras formas de acessar
Com a evolução da linguagem foram criados dois seletores que acabam com toda a 
complexidade desta ação;
queryselector e queryselectorAll
# acessa os id
. acessa o id
let intemquery = document.querySelectorAdd('#lista2 li')


 */

let intemQuery = document.querySelectorAll('#lista2 li')
console.log(intemQuery)

let itensQuery2 = document.querySelectorAll('#lista .item')
console.log(itensQuery2)

let querySelec = document.querySelector('#lista')