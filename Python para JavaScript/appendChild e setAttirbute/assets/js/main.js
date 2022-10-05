// selecionando o body
const body = document.querySelector('body')

// criando os elementos
const createSection = document.createElement('section')
const createH1 = document.createElement('h1')
const createP = document.createElement('p')
const createH2 = document.createElement('h2')

// selecionando elemento filho para adicionar filhos ao filho
const section = document.querySelector('.container')


// adicionando elemento filho no elemento pai
body.appendChild(createSection)
createSection.appendChild(createH1)


// adicionando elementos com insertAdjacentElement(local, elemento)
createSection.insertAdjacentElement('beforeend', createP)
createH1.insertAdjacentElement('afterend', createH2)

// adicionando atributos
createSection.classList = 'container'  // adiciona classes
createSection.setAttribute('id', 'section')  // adiciona os demais atributos
createH1.setAttribute('id', 'titulo-h1')
createH2.setAttribute('id', 'titulo-h2')



// adicionando texto aos elementos
createH1.textContent = 'Titulo da pagina'
createP.textContent = 'meu paragrafo'
createH2.innerText = 'Subtitulo da pagina'







console.log(body)