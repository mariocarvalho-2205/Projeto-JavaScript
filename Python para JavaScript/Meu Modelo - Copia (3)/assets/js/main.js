const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefas')

// Função para criar tag li dentro da tag ul
function criaLi () {
    const li = document.createElement('li') // variavel criada para criar a tag li
    return li
}
// função criada para pegar o evento do teclado
inputTarefa.addEventListener('keypress', function (e) {
    // usando o console.log(e) conseguimos ver o keicode da tecla 
    if(e.keyCode === 13) {  // valida qual tecla foi pressionada
        if (!inputTarefa.value) return   // valida se o input tem valo e retorna a função criaTarefa(inputTarefa.value)
        criaTarefa(inputTarefa.value)
        //alert("enter pressionado") 
    }
    
})


// Função para limpar o input
function limpaInput () {
    inputTarefa.value = ''
    inputTarefa.focus()
}

// Função para criar botao apagar na tarefa
function criaBtnApagar (li) { // no parametro da função usamos a tag aonde será adicionado o button
    li.innerText += '    '
    const btnApagar = document.createElement('button')  // cria o botao com o createElement()
    btnApagar.innerText = 'Apagar'
    li.appendChild(btnApagar)
    // botaoApagar.classList.add('Apagar')  // cria uma class(atributo) na tag html
    btnApagar.setAttribute('class', 'apagar')  // cria atributo com o tipo e o nome variavel.setAtribute('tipo atributo', 'nome do atributo)
    btnApagar.setAttribute('title', 'apagar-tarefa')
    
}


// Função para Criar Tarefa
function criaTarefa (textoInput) {
    const li = criaLi() // variavel criada para pegar a tag criada na função criaLi. OBS: pode ser com outro nome
    li.innerText = textoInput  // cria texto no html 
    tarefa.appendChild(li) // utilizamos a variavel que captura a tag ul e adicionamos um filho li com .appendChild()
    limpaInput()
    criaBtnApagar(li);
}

// função para capturar click do botao
btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return // aqui vai validar se o input tem algum valor, se não tiver não ira enviar o formulario
    // função chamada para criar tarefa do inputTarefa.value
    criaTarefa(inputTarefa.value) 
})

// Função para apagar a tarefa
// criamos um addEventListener() no documento
document.addEventListener('click', function (e) {
    const el = e.target // target verifica aonde esta sendo clicado no html
    // verifica aonde está sendo clicado console.log(el)
    if (el.classList.contains('apagar')) {
      el.parentElement.remove() // console.log(el.parentElement) parentElement verifica o pai da tag selecionado será usado para apagar a tag aonde se encontra o botão da tarefa
    }
})