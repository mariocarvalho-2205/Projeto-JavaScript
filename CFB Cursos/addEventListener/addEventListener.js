// onload -> Só é carregado apos o carregamento do DOM
window.onload = function () {
    
    console.log('Carregou o DOM')

    var title2 = document.getElementById("p");

    console.log(title2);
}
const btnAdd = document.getElementById('btn2')

btnAdd.addEventListener('click', (e) => {
    console.log('clicou no botao 2', e)
})

console.log('Carregou o JS')

var title = document.getElementById('p')

console.log(title)

const res = document.getElementById('res')

function msg() {
    res.innerHTML = 'meu texto entrou aqui'
    
}
function msg2 () {
    alert('mudou o roteiro')
}

function eventos () {
    let obj = document.getElementById("input-text")
    let btn = document.getElementById('btn')
    let dadosObj = obj.value
    obj.addEventListener("click", msg)
    btn.addEventListener('click', msg2)
    console.log(dadosObj)
    msg()
}
eventos()

/*window.addEventListener('load', eventos)*/

