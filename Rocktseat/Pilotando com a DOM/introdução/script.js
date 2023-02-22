

const element = document.getElementById('title-h1')

const elements = document.getElementsByClassName('class-p')

const tag = document.getElementsByTagName('h1')

// O querySelectorAll retorna uma nodelist, enquanto o getElementsByClassName retorna um HTML Collection
// Com o querySelector, conseguimos usar um for para percorrer sobre os elementos ja que serão nodelist
const quer = document.querySelector('ul')

const querAll = document.querySelectorAll('li')
console.log(element)
console.log(elements)
console.log(tag)
console.log(quer)
console.log(querAll)
querAll.forEach(el => console.log(el))
