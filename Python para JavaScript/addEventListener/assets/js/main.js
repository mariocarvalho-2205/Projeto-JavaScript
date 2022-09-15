/*function novoEvento () {
    var novoEvento = document.getElementById.remove('novoEvento')
    //novoEvento.classList.remove('input-teste-1')
    return novoEvento
}

function ocultarEvento () {
    var novoEvento = document.getElementById.add('novoEvento')
    //novoEvento.classList.add('input-teste-1')
    return novoEvento
}*/

//let btnEnviar = document.getElementById('btn-enviar')
let btnCancel = document.getElementById('btn-cancel')

var formNovoEvento = document.forms.namedItem("form-novo-evento")

/*btnEnviar.addEventListener('click', (e) => {
    //console.log(e)
    e.target.parentElement.innerText = 'texto btn'
    //e.target.previousElementSibling.innerText = 'troquei'   
})*/

function salvar (event) {
    let novoEvento = document.getElementById("input-teste-1").value
    event.preventDefault()
    console.log(novoEvento)
}

formNovoEvento.addEventListener('submit', event => {
    event.preventDefault()
    formNovoEvento.
    console.log(event.target.cancel.name)
})


