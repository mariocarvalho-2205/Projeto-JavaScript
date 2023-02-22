const bod = document.querySelector('body')
const element = document.getElementById('title-h1')
const elements = document.getElementsByClassName('class-p')
const tag = document.getElementsByTagName('h1')
const textA = document.getElementById('a')
const textB = document.getElementById('b')
const textC = document.getElementById('c')
const ul = document.querySelector('ul')

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
bod.classList.add('active', 'red')  // so coloca o nome da class(sem o ponto)
bod.classList.remove('red')

// o toggle adiciona se não estiver, e remove se estiver
bod.classList.toggle('red')
console.log(bod.classList)

