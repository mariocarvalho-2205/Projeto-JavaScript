const elementos = [
  { tag: "p", texto: "um paragrafo" },
  { tag: "div", texto: "uma div adicionada" },
  { tag: "section", texto: "uma section" },
  { tag: "footer", texto: "footer de rodape" },
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    
    // associação via desestruturação
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag)
    div.appendChild(tagCriada);

    // outra maneira de criar texto na tag
    let textoCriado = document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)
    //tagCriada.innerHTML = texto

    // setAttribute adiciona atributos na tag
    tagCriada.setAttribute('class', 'text')
    tagCriada.setAttribute("name", "text-2")
    
}
container.appendChild(div)