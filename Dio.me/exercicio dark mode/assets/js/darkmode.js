// boas praticas do js => cada função fica responsavel por 
// apenas uma funcionalidade
function mudaCor() {
  changeClasses()
  changeText()
  //console.log('cliquei')
}

function changeClasses () {
  // toggle ira verificar se o elemento ja tem ou nao
  // classList ira adicionar a classe nos elementos selecionados
  button.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
}

function changeText () {
  const darkMode = 'Dark Mode'
  const lightMode = 'Light Mode'
  // iremos verificar se dentro da classe do botao existe a class dark-mode
  // contains verifica se contem no nome da classe na classList  
  if(body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode
    h1.innerHTML = darkMode + ' ON'
    return
  }
  button.innerHTML = darkMode
  h1.innerHTML = lightMode + ' ON'
}

const darkModeClass = 'dark-mode'  // adicionamos o nome da classe a uma constante
const button = document.getElementById('mode-selector')
const footer = document.getElementsByTagName('footer')[0]
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
console.log(body)

button.addEventListener('click', mudaCor)
