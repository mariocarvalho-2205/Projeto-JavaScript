const ele = document.querySelector('header')
const body = document.querySelector("body")
const element = document.getElementById('title-h1')
const elements = document.getElementsByClassName('class-p')
const tag = document.getElementsByTagName('h1')
const textA = document.getElementById('a')
const textB = document.getElementById('b')
const textC = document.getElementById('c')
const ul = document.querySelector('ul')
const li = document.querySelector('li')

// O querySelectorAll retorna uma nodelist, enquanto o getElementsByClassName retorna um HTML Collection
// Com o querySelector, conseguimos usar um for para percorrer sobre os elementos ja que serão nodelist
const quer = document.querySelector('ul')

const querAll = document.querySelectorAll('li')
console.log(element)
console.log(elements)
console.log(tag)
console.log(quer)
console.log(querAll)
querAll.forEach(el => console.log(el, el.textContent))

// textContent - Manipulando Conteudo

element.textContent += ' Mudei'
console.log(element.textContent)

element.innerText = ' Sinhô'

// Usando o innerHTML - Conseguimos utilizar tags no meio das strings

textA.innerHTML = "Olá mundo <i>italico</i>"
textB.innerHTML = "Assim como o <strong>Texto ficou em negrito</strong>"
textC.innerHTML = "Mudei o texto para um link de acesso ao <a href='https://www.google.com' target='_blank'>Google</a>"

// Valore de um input - value

// com o value, conseguimos pegar o valor digitado ou mudar o conteudo do valor do input
const input = document.querySelector('input')

console.log(input.value)

input.value = 'mudei tambem agora'

// manipulando os atributos

/*
* paraadicionar atributos nas tags - usamos o setAttribute('atributo adicionado)
* podemos usar tambem o getAttibute('atributo') para pegar um atributo de alguma tag
* para remover o atributo, usamos o removeAttibute('atributo a ser removido)
*
* */

input.setAttribute('id', 'input')

console.log(input)
console.log(element.getAttribute('id'))

// adicionando atributo
ul.setAttribute('class', 'list')
console.log(ul)

// consultando atributo
console.log(ul.getAttribute('class'))

// removendo atributo
ul.removeAttribute('class')
console.log(ul)

// manipulando estilos
// adicionando estilo
// podemos pegar o valor do estilo tambem
textA.style.border = '1px solid red'
textC.style.background = 'green'
console.log(textC.style.background)

// classList
// mudando o estilo
ele.classList.add('active', 'red')  // so coloca o nome da class(sem o ponto)
ele.classList.remove('red')

// o toggle adiciona se não estiver, e remove se estiver
ele.classList.toggle('red')
ele.classList.remove('red')
console.log(ele.classList)

// parentElement e parentNode
/*
* O parentNode irá pegar o nó pai, ou seja, a tag pai da tag selecionada
* */

console.log(textC.parentElement)
console.log(textC.parentNode)

// childNodes ou childrem
/*
* Usado para pegar o no filho, ou seja a tag filho da tag selecionada
* OBS: o childrem elimina os espaços vazios, so trazendo
*
* console.log(bod.childNodes)
* console.log(bod.children)
*
* fastchild ou firstElementChild -> pega o primeiro filho ou tag filho
* firstChild -> leva em consideração o espaço vazio
* firstElementChild - Não leva em consideração os espaços vazios
*
* lastChild ou lastElementChild -> pega o ultimo filho ou tag filho
* */

console.log(ul.firstChild)
console.log(ul.firstElementChild)
/* nextSibling e nextElementSibling
 * previusSibling e previusElementSibling
 * OBS: o Element não leva em consideração o espaço vazio
*
* */
console.log(ele.previousElementSibling)

/*
* Criando e adicionando elementos na pagina
*
*
*/

// createElement - irá criar o elemento
const div = document.createElement('div');
div.innerText = 'Minha Div'

// append e prepend
// append adiciona o item depois da ultima tag
// body.append(div)
// prepend adiciona antes da primeira tag
//body.prepend(div)

/* insertBefore
* O insertBefore, vai adicionar o elemento antes da tag de referencia
*
* Para adicionar depois da tag de referencia, usamos da seguinte maneira
* precisamos pegar a tag anterior, depois faremos da seguinte forma
*
* ele.insertBefore(div, ele.nextElementSibling)
* */
body.insertBefore(div, ele.nextElementSibling)
//body.insertBefore(div, ul)

const event = document.getElementById('event');
const myEvent = document.getElementById('my-event');

function entrar () {
    console.log('entrei')
}

event.addEventListener('click', entrar);

myEvent.onkeyup = function () {
    console.log('teclado acionado')
}

myEvent.addEventListener('click', click)


function click () {
    console.log('primeiro evento click h1')
}

myEvent.addEventListener('click', function(e) {
    console.log(e)
})

myEvent.addEventListener('click', function() {
    console.log('segundo evento click h1')
})


