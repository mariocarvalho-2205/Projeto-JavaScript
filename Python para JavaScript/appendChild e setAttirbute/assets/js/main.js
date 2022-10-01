const container = document.querySelector('.container')
const input = document.createElement('input')
const p = document.createElement("p")
const div = document.createElement("div")
const label = document.createElement('label')

container.appendChild(div)

div.appendChild(p)
div.appendChild(input)
div.appendChild(label)
input.setAttribute('id', 'textInput')
input.setAttribute('type', 'text')
p.innerText = 'paragrafo'
p.setAttribute('id', 'paragrafo')