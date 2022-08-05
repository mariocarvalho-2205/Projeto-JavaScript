function meuEscopo () {
    const form = document.querySelector('.formulario'); // acessando class usa o .nome_class

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
        const altura = form.querySelector('altura')
        console.log(nome, sobrenome, idade, altura)
        /*console.log(`form nao foi enviado ${contador}`)
        contador++*/
    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()