function meuEscopo () {
    const form = document.querySelector('.formulario') // acessando class usa o .nome_class
    const resultado = document.querySelector('.resultado')
    const pessoas = []
    /*form.onsubmit = function (evento) {
        evento.preventDefault()  // evita que o formulario atualiza a pagina e perca os dados armazenados
        
        alert(1)
        console.log('foi enviado')
    };*/
    //let contador = 1
    function recebeEventoForm (evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const idade = form.querySelector('.idade')
        const altura = form.querySelector('.altura')
        /*console.log(`form nao foi enviado ${contador}`)
        contador++*/
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        })
        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}</p>`
    }   
    form.addEventListener('submit', recebeEventoForm) 
}
meuEscopo()