// onload -> Só é carregado apos o carregamento do DOM
window.onload = function () {
    
    console.log('Carregou o DOM')

    var title2 = document.getElementById("p");

    console.log(title2);
}

console.log('Carregou o JS')

var title = document.getElementById('p')

console.log(title)



function msg() {

    
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

}
eventos()

/*window.addEventListener('load', eventos)*/

