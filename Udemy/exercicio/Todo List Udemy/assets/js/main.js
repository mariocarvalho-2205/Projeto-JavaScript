const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");


// função para criar uma tag li
function criaLi() {
  const li = document.createElement("li"); // document.createElement('tag, class ou id')
  return li;
}
inputTarefa.addEventListener("keypress", function (e) {
  // keypress reconhece a tecla pressionada no teclado
  if (e.keyCode === 13) {
    // keyCode verifica a tecla pressionada
    if (!inputTarefa.value) return; // verifica se o input esta vazio
    criaTarefa(inputTarefa.value); // função criaTarefa sendo chamada com o valor do texto capturado no click
  }
});

// Função para limpar o input
function limpaInput() {
  inputTarefa.value = ""; // aqui vai limpar o input
  inputTarefa.focus(); // focus serve para cdeisar o cursor dentro do input
}

// Função para criar botão apagar
function criaBtnApagar (li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')  // cria a tag button
    botaoApagar.innerText = 'Apagar'  // adiciona o texto na botao apagar
    botaoApagar.setAttribute('class', 'apagar')  // setAtribute  adiciona um atributo no elemento ou tag 
    li.appendChild(botaoApagar)
}


// função para criar tarefa
function criaTarefa(textoInput) {
  const li = criaLi(); // variavel para chamar a função criali
  li.innerText = textoInput; // mostra o texto no html
  tarefas.appendChild(li); // adiciona a tag no html
  limpaInput(); // chamando a funçao limpaInput
  criaBtnApagar(li)
  salvarTarefas ()
}

// essa função vai capturar o evento de clique
btnTarefa.addEventListener("click", function (e) {
  if (!inputTarefa.value) return; // verifica se o input esta vazio
  criaTarefa(inputTarefa.value); // função criaTarefa sendo chamada com o valor do texto capturado no click
});

// função para verificar o botao que foi clicado
document.addEventListener('click', function (e) {
    const el = e.target  // localiza o local do click
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()  // parentElement localiza o elemento pai .remove ira remover
        salvarTarefas()
    }
})

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()  //  remove a palavra apaga .trim() remove o espaço do final
        listaDeTarefas.push(tarefaTexto) // lista.push(variavel) adiciona o valor da variavel a lista
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas)  // JSON.stringfy converte uma string no formato JSON para salvar a lista no navegador
    localStorage.setItem('tarefas', tarefasJSON )  // salva os dados no arquivo JSON
    
}

// função para adicionar as tarefas salvas 
function adicionaTarefaSalva ( ) {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)  // JSON.parse converte um arquivo no formato JSON para um objeto(array) 

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
    console.log(tarefas)
}
adicionaTarefaSalva()
