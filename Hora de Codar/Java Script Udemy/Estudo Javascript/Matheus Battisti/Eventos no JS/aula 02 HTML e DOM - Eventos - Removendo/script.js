/*

// DOM e JS - Eventos em JS
* O que São eventos em JS?
* São açoes condicionadas a algum tipo de resposta feita pelo usuario
EX: Quando clicamos em algum botão, apertamos alguma tecla ou giramos o 
scroll do mouse.
atraves dessas ações, conseguimos alterar a logica e o comportamento da pagina realizada 
pelo usuario por meio de Handlers = lidar ou tratar algum evento.

Para adicionar um evento, utilizamos o metodo addEventListener(listener - Ouvidor),
esse metodo e adicionado ao elemento, para que ele possa captar a ação efetuada pelo
usuario. 
Após adicionar o listener e o tipo de argumento(evento), o elemento responderá
ao evento.
* Podemos tambem remover o evento, para que o mesmo não seja acionado indevidamente
* após o primeiro acionamento.
* Para isso utilizamos o metodo removeEventListener, onde passamos o evento e a função que 
* o evento está escutando.



*/
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')

// funçaõ para sinalizar o click
function msg () {
    console.log('foi acionado')
}

// Adicionando Evento
btn.addEventListener('click', msg)

// aqui o evento e removido depois de um tempo
// setTimeout(()=> {
//     btn.removeEventListener('click', msg)
// }, 3000)

// removendo o evento atraves de outro elemento
btn2.addEventListener('click', () => {
    btn.removeEventListener('click', msg)
    console.log('removeu evento btn2')
})

// Acessando Elementos


