function  escopo () { // criado a função para o escopo principal. criação de variaveis para formulario, resultado e array dos dados vazia
    const form = document.querySelector('.form')  // 
    const resul = document.querySelector('.resul')   
    const array = []
    
    function event (evento) {  // função criada para coletar os dados no fomrulario
        evento.preventDefault()  // comando para evitar que atualiza a pagina apos enviar formulario
        // agora criamos as variaveis para receber os dados digitados no formulario
        const nome = form.querySelector('.nome')  // recebe o dado no formulario 
        const sobrenome = form.querySelector('.sobrenome')
        const idade = form.querySelector('.idade')
        const altura = form.querySelector('.altura')

        array.push({   // adiciona o dado recebido no array
            nome: nome.value,  // nome.value -> recebe valor e adiciona no objeto
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        })
        console.log(array)
        // variavel.innerHTML retorna resultado do objeto imprimindo na tela
        resul.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', event)
}
escopo()