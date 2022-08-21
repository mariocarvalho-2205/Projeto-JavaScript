const elementos = [
    {tag: 'p', texto: 'texto no paragrafo'},
    {tag: 'div', texto: 'texto na div'},
    {tag: 'footer', texto: 'texto no footer'},
    {tag: 'section', texto: 'texto na section'}
]

//const elements = document.querySelector('h1')

let novop = document.createElement(elementos[0].tag)

var textop = document.createTextNode(elementos[0].texto);
novop.appendChild(textop)
let body = document.querySelector('section')
body.appendChild(novop)
console.log(novop)


//elements.innerHTML = `teste`
//console.log(Object.values(elementos[0]))
//console.log(elementos[0].tag, elementos[2].texto)