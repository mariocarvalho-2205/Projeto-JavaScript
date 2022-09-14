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

let btnEnviar = document.getElementById('btn-enviar')
let btnCancel = document.getElementById('btn-cancel')

var formNovoEvento = document.getElementById("form-novo-evento")

function salvar (event) {
    let novoEvento = document.getElementById("input-teste-1").value
    event.preventDefault()
    console.log(novoEvento)
}

formNovoEvento.addEventListener('submit', salvar)


